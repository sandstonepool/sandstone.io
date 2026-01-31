"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CubeIcon, BanknotesIcon, ShieldCheckIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";
import { BlockchainVisualization } from "@/components/effects/BlockchainVisualization";
import { useRef } from "react";
import { usePoolStats } from "@/lib/hooks/usePoolStats";
import { POOL_ID_HEX } from "@/lib/utils/constants";
import { useTranslation } from "@/lib/i18n";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: poolStats, loading } = usePoolStats(POOL_ID_HEX);
  const { t } = useTranslation();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient-shift" />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mx-auto px-6 sm:px-10 max-w-7xl w-full"
      >
        {/* Background Blockchain Visualization */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 scale-150 opacity-60 z-0">
          <BlockchainVisualization />
        </div>

        <div className="relative pt-12 sm:pt-24 pb-12">
          {/* Main Content */}
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-start justify-start space-y-6 max-w-4xl"
            >
              {/* Glassmorphic Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="px-4 py-2 rounded-full backdrop-blur-md bg-white/40 border border-white/60 shadow-lg"
              >
                <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.badge}
                </span>
              </motion.div>

              {/* Main Heading with Gradient Text */}
              <div className="text-left">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-extrabold text-gray-900"
                >
                  <span className="block">{t.hero.title}</span>
                  <span className="block mt-2 pb-2 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-text">
                    {t.hero.subtitle}
                  </span>
                </motion.h1>
              </div>

              {/* Description with Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="max-w-xl"
              >
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  {t.hero.description}
                </p>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 w-full relative z-10"
                role="region"
                aria-label="Pool statistics"
              >
                {/* Margin Fee */}
                <div
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 lg:p-5 text-center hover:bg-white/50 transition-all hover:scale-105 hover:shadow-xl"
                  role="article"
                  aria-label="Margin fee statistic"
                >
                  <div className="flex justify-center mb-2" aria-hidden="true">
                    <ChartBarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-2xl lg:text-2xl font-bold text-gray-900" aria-live="polite">
                    {loading ? (
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto" aria-label="Loading margin fee" />
                    ) : poolStats ? (
                      <AnimatedNumber
                        // value={poolStats.interest * 100}
                        value={1}
                        format={(v) => `${v.toFixed(2)}%`}
                        duration={2}
                      />
                    ) : (
                      '—'
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.marginFee}</div>
                </div>

                {/* Total Stake */}
                <div
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 lg:p-5 text-center hover:bg-white/50 transition-all hover:scale-105 hover:shadow-xl"
                  role="article"
                  aria-label="Total stake statistic"
                >
                  <div className="flex justify-center mb-2" aria-hidden="true">
                    <BanknotesIcon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl lg:text-2xl font-bold text-gray-900" aria-live="polite">
                    {loading ? (
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.liveStake) / 1_000_000_000}
                        format={(v) => `₳${(v / 1000).toFixed(2)}M`}
                        duration={2}
                      />
                    ) : (
                      '—'
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.stake}</div>
                </div>

                {/* Pledge */}
                <div
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 lg:p-5 text-center hover:bg-white/50 transition-all hover:scale-105 hover:shadow-xl"
                  role="article"
                  aria-label="Pool pledge statistic"
                >
                  <div className="flex justify-center mb-2" aria-hidden="true">
                    <ShieldCheckIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-2xl lg:text-2xl font-bold text-gray-900" aria-live="polite">
                    {loading ? (
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.activePledge) / 1_000_000}
                        format={(v) => `₳${(Math.round(v).toLocaleString())}`}
                        duration={2}
                      />
                    ) : (
                      '—'
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.pledge}</div>
                </div>

                {/* Lifetime Blocks */}
                <div
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 lg:p-5 text-center hover:bg-white/50 transition-all hover:scale-105 hover:shadow-xl"
                  role="article"
                  aria-label="Lifetime blocks produced statistic"
                >
                  <div className="flex justify-center mb-2" aria-hidden="true">
                    <CubeIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-2xl lg:text-2xl font-bold text-gray-900" aria-live="polite">
                    {loading ? (
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={poolStats.lifetimeBlocks}
                        format={(v) => Math.round(v).toLocaleString()}
                        duration={2}
                      />
                    ) : (
                      '—'
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.lifetimeBlocks}</div>
                </div>

                {/* Lifetime Rewards */}
                <div
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 lg:p-5 text-center hover:bg-white/50 transition-all hover:scale-105 hover:shadow-xl"
                  role="article"
                  aria-label="Lifetime rewards distributed statistic"
                >
                  <div className="flex justify-center mb-2" aria-hidden="true">
                    <CurrencyDollarIcon className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="text-2xl lg:text-2xl font-bold text-gray-900" aria-live="polite">
                    {loading ? (
                      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse mx-auto" aria-label={t.hero.stats.loading} />
                    ) : poolStats ? (
                      <AnimatedNumber
                        value={parseFloat(poolStats.lifetimeRewards) / 1_000_000}
                        format={(v) => `₳${(Math.round(v).toLocaleString())}`}
                        duration={2}
                      />
                    ) : (
                      '—'
                    )}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{t.hero.stats.lifetimeRewards}</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-4 mt-4"
              >
              </motion.div>
            </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
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
    </section>
  );
}
