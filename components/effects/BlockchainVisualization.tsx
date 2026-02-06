"use client";

import { useRef, useEffect, useState } from 'react';

// ─── Globe geometry ─────────────────────────────────────────────
const R = 190;
const CX = 460;
const CY = 270;
const TILT = 0.38; // ~22° forward tilt
const SPEED = 0.005; // rotation speed (rad/frame)

const LATITUDES = [-60, -30, 0, 30, 60];
const LONGITUDES = [0, 30, 60, 90, 120, 150];

// ─── Surface nodes (lat/lon in degrees) ─────────────────────────
const NODES = [
  { lat: 20, lon: 50, r: 7, hub: true },
  { lat: -25, lon: 140, r: 3.5, hub: false },
  { lat: 45, lon: 225, r: 3, hub: false },
  { lat: -40, lon: 315, r: 2.5, hub: false },
  { lat: 10, lon: 180, r: 3, hub: false },
  { lat: 55, lon: 340, r: 2.5, hub: false },
  { lat: -55, lon: 75, r: 2, hub: false },
  { lat: 30, lon: 270, r: 2.5, hub: false },
];

// Sparkle dots scattered across the globe surface
const SPARKLES = [
  { lat: 50, lon: 20, seed: 0 },
  { lat: -15, lon: 80, seed: 1.3 },
  { lat: 35, lon: 160, seed: 0.7 },
  { lat: -45, lon: 240, seed: 2.1 },
  { lat: 60, lon: 290, seed: 0.4 },
  { lat: -10, lon: 350, seed: 1.8 },
  { lat: 25, lon: 110, seed: 2.5 },
  { lat: -60, lon: 200, seed: 0.9 },
  { lat: 5, lon: 260, seed: 1.5 },
  { lat: 70, lon: 150, seed: 2.0 },
  { lat: -35, lon: 30, seed: 0.2 },
  { lat: 15, lon: 320, seed: 1.1 },
  { lat: -50, lon: 120, seed: 2.3 },
  { lat: 40, lon: 350, seed: 0.6 },
  { lat: -25, lon: 180, seed: 1.7 },
  { lat: 55, lon: 250, seed: 2.8 },
];

const ARCS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4],
  [1, 4], [2, 5], [3, 6], [4, 7], [1, 6], [2, 7],
];

// ─── 3D → 2D orthographic projection with tilt ─────────────────
function proj(lat: number, lon: number, rot: number) {
  const φ = (lat * Math.PI) / 180;
  const λ = (lon * Math.PI) / 180 + rot;
  const cosφ = Math.cos(φ);
  const x = cosφ * Math.sin(λ);
  const y = Math.sin(φ);
  const z = cosφ * Math.cos(λ);
  return {
    x: CX + R * x,
    y: CY - R * (y * Math.cos(TILT) - z * Math.sin(TILT)),
    z: y * Math.sin(TILT) + z * Math.cos(TILT),
  };
}

// ─── SVG path builders ──────────────────────────────────────────
function buildPath(pts: { x: number; y: number; z: number }[], front: boolean) {
  let d = '';
  let on = false;
  for (const p of pts) {
    const vis = front ? p.z > -0.05 : p.z < 0.05;
    if (vis) {
      d += `${on ? 'L' : 'M'}${p.x.toFixed(1)},${p.y.toFixed(1)}`;
      on = true;
    } else {
      on = false;
    }
  }
  return d;
}

function latPts(lat: number, rot: number) {
  return Array.from({ length: 73 }, (_, i) => proj(lat, i * 5, rot));
}

function lonPts(lon: number, rot: number) {
  return Array.from({ length: 37 }, (_, i) => proj(-90 + i * 5, lon, rot));
}

function arcPts(a: (typeof NODES)[0], b: (typeof NODES)[0], rot: number) {
  return Array.from({ length: 25 }, (_, i) => {
    const t = i / 24;
    return proj(a.lat + (b.lat - a.lat) * t, a.lon + (b.lon - a.lon) * t, rot);
  });
}

// ─── Component ──────────────────────────────────────────────────
export function BlockchainVisualization() {
  const [rot, setRot] = useState(0);
  const raf = useRef(0);

  useEffect(() => {
    let a = 0;
    const tick = () => {
      a += SPEED;
      setRot(a);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  // Pre-compute all geometry for this frame
  const dots = NODES.map((n) => ({ ...proj(n.lat, n.lon, rot), r: n.r, hub: n.hub }));
  const hub = dots[0];

  return (
    <div className="relative w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 820 540"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="globeFill" cx="38%" cy="32%" r="68%">
            <stop offset="0%" stopColor="rgba(224,231,255,0.1)" />
            <stop offset="100%" stopColor="rgba(165,180,252,0.01)" />
          </radialGradient>
          <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.5)" />
            <stop offset="40%" stopColor="rgba(99,102,241,0.15)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </radialGradient>
          <filter id="glow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="hubGlow" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sparkle" x="-300%" y="-300%" width="700%" height="700%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbital rings */}
        <ellipse
          cx={CX} cy={CY} rx={R + 30} ry={(R + 30) * 0.22}
          stroke="rgba(139,92,246,0.06)" strokeWidth={0.5}
          fill="none"
          transform={`rotate(-18 ${CX} ${CY})`}
        />
        <ellipse
          cx={CX} cy={CY} rx={R + 55} ry={(R + 55) * 0.12}
          stroke="rgba(99,102,241,0.04)" strokeWidth={0.5}
          fill="none"
          transform={`rotate(12 ${CX} ${CY})`}
        />

        {/* Globe fill */}
        <circle cx={CX} cy={CY} r={R} fill="url(#globeFill)" />

        {/* Back-face grid (dashed, dim) */}
        {LATITUDES.map((lat, i) => (
          <path
            key={`lb${i}`}
            d={buildPath(latPts(lat, rot), false)}
            stroke={lat === 0 ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.04)"}
            strokeWidth={0.5}
            strokeDasharray="3,4"
            fill="none"
          />
        ))}
        {LONGITUDES.map((lon, i) => (
          <path
            key={`lob${i}`}
            d={buildPath(lonPts(lon, rot), false)}
            stroke="rgba(139,92,246,0.04)"
            strokeWidth={0.5}
            strokeDasharray="3,4"
            fill="none"
          />
        ))}

        {/* Front-face grid */}
        {LATITUDES.map((lat, i) => (
          <path
            key={`lf${i}`}
            d={buildPath(latPts(lat, rot), true)}
            stroke={lat === 0 ? "rgba(139,92,246,0.2)" : "rgba(139,92,246,0.12)"}
            strokeWidth={lat === 0 ? 1 : 0.7}
            fill="none"
          />
        ))}
        {LONGITUDES.map((lon, i) => (
          <path
            key={`lof${i}`}
            d={buildPath(lonPts(lon, rot), true)}
            stroke="rgba(139,92,246,0.12)"
            strokeWidth={0.7}
            fill="none"
          />
        ))}

        {/* Connection arcs (front-face only) */}
        {ARCS.map(([a, b], i) => (
          <path
            key={`a${i}`}
            d={buildPath(arcPts(NODES[a], NODES[b], rot), true)}
            stroke={a === 0 ? "rgba(99,102,241,0.28)" : "rgba(139,92,246,0.14)"}
            strokeWidth={a === 0 ? 1.5 : 1}
            fill="none"
          />
        ))}

        {/* Hub aura (when visible) */}
        {hub.z > 0 && (
          <circle
            cx={hub.x} cy={hub.y} r={50}
            fill="url(#auraGrad)"
            opacity={Math.min(hub.z * 1.8, 0.85)}
          />
        )}

        {/* Surface dots — back face first (behind globe) */}
        {dots.map((d, i) =>
          d.z <= 0 ? (
            <circle
              key={`db${i}`}
              cx={d.x} cy={d.y}
              r={d.r * 0.4}
              fill="rgba(165,180,252,0.15)"
            />
          ) : null
        )}

        {/* Sparkle dots on globe surface */}
        {SPARKLES.map((s, i) => {
          const p = proj(s.lat, s.lon, rot);
          if (p.z <= 0) return null;
          // Twinkle: use rotation angle + seed for deterministic phase
          const twinkle = Math.sin(rot * 3 + s.seed * 7) * 0.5 + 0.5;
          return (
            <circle
              key={`sp${i}`}
              cx={p.x} cy={p.y}
              r={0.8 + twinkle * 1.2}
              fill={`rgba(200,210,255,${(twinkle * 0.6 * p.z).toFixed(2)})`}
              filter="url(#sparkle)"
            />
          );
        })}

        {/* Globe edge */}
        <circle
          cx={CX} cy={CY} r={R}
          fill="none"
          stroke="rgba(139,92,246,0.1)"
          strokeWidth={1}
        />

        {/* Surface dots — front face (in front of globe edge) */}
        {dots.map((d, i) =>
          d.z > 0 ? (
            <g key={`df${i}`}>
              <circle
                cx={d.x} cy={d.y}
                r={d.r}
                fill={d.hub ? "rgba(79,70,229,1)" : "rgba(129,140,248,0.8)"}
                opacity={Math.min(d.z * 2 + 0.3, 1)}
                filter={d.hub ? "url(#hubGlow)" : "url(#glow)"}
              />
              {/* Hub white-hot center */}
              {d.hub && (
                <circle
                  cx={d.x} cy={d.y}
                  r={d.r * 0.45}
                  fill="rgba(220,225,255,0.9)"
                  opacity={Math.min(d.z * 2, 1)}
                />
              )}
            </g>
          ) : null
        )}

        {/* Hub label (when visible) */}
        {hub.z > 0.2 && (
          <text
            x={hub.x} y={hub.y + 22}
            textAnchor="middle"
            className="text-[9px] font-mono font-bold"
            fill={`rgba(99,102,241,${Math.min(hub.z * 0.6, 0.5).toFixed(2)})`}
          >
            SAND
          </text>
        )}
      </svg>
    </div>
  );
}
