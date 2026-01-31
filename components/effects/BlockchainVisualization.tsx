"use client";

import { motion } from "framer-motion";

export function BlockchainVisualization() {
  // Create segments for the Ouroboros ring
  const segmentCount = 24; // Representing epochs/slots
  const segments = Array.from({ length: segmentCount }, (_, i) => i);

  // Create particle dots around the ring
  const particleCount = 12;
  const particles = Array.from({ length: particleCount }, (_, i) => i);

  return (
    <div className="relative w-full h-125 flex items-center justify-center">
      <div className="relative w-100 h-100">
        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              "0 0 40px rgba(59, 130, 246, 0.2)",
              "0 0 80px rgba(59, 130, 246, 0.4)",
              "0 0 40px rgba(59, 130, 246, 0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Ouroboros Ring */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 400"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Outer ring segments */}
          {segments.map((i) => {
            const angle = (360 / segmentCount) * i;
            const radius = 180;
            const centerX = 200;
            const centerY = 200;
            const startAngle = (angle * Math.PI) / 180;
            const endAngle = ((angle + 360 / segmentCount - 1) * Math.PI) / 180;

            const round = (n: number) => Number(n.toFixed(4))

            const x1 = round(centerX + radius * Math.cos(startAngle));
            const y1 = round(centerY + radius * Math.sin(startAngle));
            const x2 = round(centerX + radius * Math.cos(endAngle));
            const y2 = round(centerY + radius * Math.sin(endAngle));

            const innerRadius = 140;
            const x3 = round(centerX + innerRadius * Math.cos(endAngle));
            const y3 = round(centerY + innerRadius * Math.sin(endAngle));
            const x4 = round(centerX + innerRadius * Math.cos(startAngle));
            const y4 = round(centerY + innerRadius * Math.sin(startAngle));

            return (
              <motion.path
                key={`segment-${i}`}
                d={`M ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 0 0 ${x4} ${y4} Z`}
                fill="url(#segmentGradient)"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  fill: [
                    "rgba(59, 130, 246, 0.1)",
                    "rgba(59, 130, 246, 0.4)",
                    "rgba(59, 130, 246, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="segmentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.2)" />
            </linearGradient>
            <radialGradient id="centerGradient">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
            </radialGradient>
          </defs>

          {/* Center circle */}
          <motion.circle
            cx="200"
            cy="200"
            r="120"
            fill="url(#centerGradient)"
            stroke="rgba(59, 130, 246, 0.4)"
            strokeWidth="2"
            initial={{ scale: 0.95 }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Inner decorative ring */}
          <motion.circle
            cx="200"
            cy="200"
            r="100"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="1"
            strokeDasharray="5,5"
            animate={{
              strokeDashoffset: [0, -20],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </svg>

        {/* Orbiting particles */}
        {particles.map((i) => {
          const angle = (360 / particleCount) * i;
          return (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-3 h-3 rounded-full bg-blue-400"
              style={{
                left: "50%",
                top: "50%",
                marginLeft: "-6px",
                marginTop: "-6px",
                boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
              }}
              animate={{
                rotate: [angle, angle + 360],
                x: [
                  Math.cos((angle * Math.PI) / 180) * 190,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 190,
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 190,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 190,
                ],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 8,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          );
        })}

        {/* Center symbol/logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="text-blue-400 opacity-30 text-6xl font-bold">₳</div>
        </motion.div>
      </div>
    </div>
  );
}
