"use client";

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { CubeIcon, BanknotesIcon, ShieldCheckIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { usePoolStats } from "@/lib/hooks/usePoolStats";
import { POOL_ID_HEX, POOL_ID_BECH } from "@/lib/utils/constants";
import { useTranslation } from "@/lib/i18n";

const CARDANOSCAN_POOL_URL = `https://cardanoscan.io/pool/${POOL_ID_BECH}`;

// Lazy load heavy visual effects to prevent FCP blocking
const ParticleBackground = lazy(() => import("@/components/effects/ParticleBackground").then(m => ({ default: m.ParticleBackground })));
const BlockchainVisualization = lazy(() => import("@/components/effects/BlockchainVisualization").then(m => ({ default: m.BlockchainVisualization })));

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: poolStats, loading } = usePoolStats(POOL_ID_HEX);
  const { t } = useTranslation();

  // Defer heavy effects until after first paint
  const [showEffects, setShowEffects] = useState(false);

  // Cycle between rotating hero phrases
  const phrases = t.hero.rotatingPhrases;
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [phrases.length]);

  useEffect(() => {
    // Use double requestAnimationFrame to ensure we're past first paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setShowEffects(true);
      });
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-shift" />

      {/* Particle Background - deferred loading */}
      {showEffects && (
        <Suspense fallback={null}>
          <ParticleBackground />
        </Suspense>
      )}

      {/* Blockchain Visualization - full bleed background */}
      {showEffects && (
        <div className="hidden lg:block absolute inset-0 translate-x-[10%] z-10 opacity-70 pointer-events-none">
          <Suspense fallback={null}>
            <BlockchainVisualization />
          </Suspense>
        </div>
      )}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mx-auto px-4 sm:px-6 lg:px-10 max-w-7xl w-full"
      >
        <div className="relative pb-12">
          {/* Main Content - NO animation delays for critical above-the-fold content */}
          <div className="flex flex-col items-start justify-start">
              {/* Delegate CTA */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <a
                  href="https://cexplorer.io/pool/pool1gqvrgg7zycvf65ydkjeph72t0yx0f5ykzd9f477zh4f3smwk997?action=delegate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm sm:text-base !rounded-full !px-5 !py-2.5 !shadow-lg hover:!shadow-xl hover:scale-105 transition-all"
                >
                  Delegate to [SAND]
                </a>
                <motion.svg
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-600 shrink-0 -rotate-90 -scale-x-100"
                  aria-hidden="true"
                >
                  <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                </motion.svg>
              </div>

              {/* Main Heading - rotating top line, static bottom line */}
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] tracking-tighter font-bold text-gray-900 leading-[1.3]">
                  <span className="block relative z-10 h-[1.3em] w-[calc(100%+0.5em)] overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={phraseIndex}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                        className="block bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent"
                      >
                        {phrases[phraseIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="block -mt-[0.2em]">{t.hero.staticLine}</span>
                </h1>
              </div>

              {/* Description */}
              <div className="max-w-2xl mt-4 sm:mt-8">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-500 leading-relaxed">
                  {t.hero.description}
                </p>
              </div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0.8, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-2.5 relative z-10 mt-8 sm:mt-16 w-full max-w-3xl lg:max-w-none"
                role="region"
                aria-label="Pool statistics"
              >
                {/* Margin Fee */}
                <div
                  className="bg-white/30 border border-gray-300/70 rounded-xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center"
                  role="article"
                  aria-label="Margin fee statistic"
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2" aria-hidden="true">
                    <ChartBarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 h-6 sm:h-8 flex items-center justify-center" aria-live="polite">
                    {loading ? (
                      <div className="h-6 sm:h-7 w-14 sm:w-20 bg-gray-200/70 rounded-md animate-pulse mx-auto" aria-label="Loading margin fee" />
                    ) : poolStats ? (
                      <AnimatedNumber
                        // value={poolStats.interest * 100}
                        value={1}
                        format={(v) => `${v.toFixed(2)}%`}
                        duration={2}
                      />
                    ) : (
                      <a href={CARDANOSCAN_POOL_URL} target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-600 transition-colors">—</a>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{t.hero.stats.marginFee}</div>
                </div>

                {/* Total Stake */}
                <div
                  className="bg-white/30 border border-gray-300/70 rounded-xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center"
                  role="article"
                  aria-label="Total stake statistic"
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2" aria-hidden="true">
                    <BanknotesIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 h-6 sm:h-8 flex items-center justify-center" aria-live="polite">
                    {loading ? (
                      <div className="h-6 sm:h-7 w-14 sm:w-20 bg-gray-200/70 rounded-md animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.liveStake) / 1_000_000_000}
                        format={(v) => `₳${(v / 1000).toFixed(2)}M`}
                        duration={2}
                      />
                    ) : (
                      <a href={CARDANOSCAN_POOL_URL} target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-600 transition-colors">—</a>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{t.hero.stats.stake}</div>
                </div>

                {/* Pledge */}
                <div
                  className="bg-white/30 border border-gray-300/70 rounded-xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center"
                  role="article"
                  aria-label="Pool pledge statistic"
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2" aria-hidden="true">
                    <ShieldCheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 h-6 sm:h-8 flex items-center justify-center" aria-live="polite">
                    {loading ? (
                      <div className="h-6 sm:h-7 w-14 sm:w-20 bg-gray-200/70 rounded-md animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.activePledge) / 1_000_000}
                        format={(v) => `₳${(Math.round(v).toLocaleString())}`}
                        duration={2}
                      />
                    ) : (
                      <a href={CARDANOSCAN_POOL_URL} target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-600 transition-colors">—</a>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{t.hero.stats.pledge}</div>
                </div>

                {/* Lifetime Blocks */}
                <div
                  className="bg-white/30 border border-gray-300/70 rounded-xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center"
                  role="article"
                  aria-label="Lifetime blocks produced statistic"
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2" aria-hidden="true">
                    <CubeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-rose-600" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 h-6 sm:h-8 flex items-center justify-center" aria-live="polite">
                    {loading ? (
                      <div className="h-6 sm:h-7 w-14 sm:w-20 bg-gray-200/70 rounded-md animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={poolStats.lifetimeBlocks}
                        format={(v) => Math.round(v).toLocaleString()}
                        duration={2}
                      />
                    ) : (
                      <a href={CARDANOSCAN_POOL_URL} target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-600 transition-colors">—</a>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{t.hero.stats.lifetimeBlocks}</div>
                </div>

                {/* Lifetime Rewards */}
                <div
                  className="bg-white/30 border border-gray-300/70 rounded-xl p-2.5 sm:p-3 text-center flex flex-col items-center justify-center col-span-2 sm:col-span-1"
                  role="article"
                  aria-label="Lifetime rewards distributed statistic"
                >
                  <div className="flex justify-center mb-1.5 sm:mb-2" aria-hidden="true">
                    <CurrencyDollarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 h-6 sm:h-8 flex items-center justify-center" aria-live="polite">
                    {loading ? (
                      <div className="h-6 sm:h-7 w-14 sm:w-20 bg-gray-200/70 rounded-md animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.lifetimeRewards) / 1_000_000}
                        format={(v) => `₳${(Math.round(v).toLocaleString())}`}
                        duration={2}
                      />
                    ) : (
                      <a href={CARDANOSCAN_POOL_URL} target="_blank" rel="noopener" className="text-gray-400 hover:text-blue-600 transition-colors">—</a>
                    )}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 mt-1 sm:mt-1.5">{t.hero.stats.lifetimeRewards}</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-4">
              </div>
            </div>
        </div>
      </motion.div>

      {/* Scroll Indicator - auto-hides on scroll */}
      {showEffects && (
        <motion.div
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
        >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-600">{t.hero.scroll}</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </motion.div>
      )}
    </section>
  );
}
