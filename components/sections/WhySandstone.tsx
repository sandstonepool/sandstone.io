'use client'

import { motion } from 'motion/react'
import { Container } from '@/components/ui/Container'
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver'
import { ShieldCheckIcon, UserGroupIcon, TrophyIcon, ReceiptPercentIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/lib/i18n'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export function WhySandstone() {
  const { t } = useTranslation()
  const { targetRef, hasIntersected } = useIntersectionObserver({ threshold: 0.1 })

  const benefits = [
    {
      key: 'security',
      icon: ShieldCheckIcon,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'community',
      icon: UserGroupIcon,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      key: 'strongPledge',
      icon: TrophyIcon,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      key: 'lowFees',
      icon: ReceiptPercentIcon,
      gradient: 'from-cyan-500 to-teal-500',
    }
  ]

  return (
    <section id="why-sandstone" className="relative mx-auto max-w-7xl mt-12 sm:mt-20 mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 rounded-3xl -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {t.whySandstone.title}
            </span>
          </h2>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t.whySandstone.intro1}
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {t.whySandstone.intro2.split('{amount}')[0]}
              <strong className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">1 Million ₳</strong>
              {t.whySandstone.intro2.split('{amount}')[1]}
            </p>
          </div>

          <motion.div
            ref={targetRef}
            variants={containerVariants}
            initial="hidden"
            animate={hasIntersected ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              const benefitContent = t.whySandstone.benefits[benefit.key as keyof typeof t.whySandstone.benefits]
              return (
                <motion.div
                  key={benefit.key}
                  variants={itemVariants}
                  className="flex items-start gap-3 sm:gap-6 backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 sm:p-6 hover:bg-white/50 hover:shadow-xl transition-all sm:hover:scale-105"
                >
                  <div className={`shrink-0 w-12 h-12 sm:w-20 sm:h-20 rounded-xl bg-linear-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 sm:w-12 sm:h-12 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{benefitContent.title}</h3>
                    <div className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefitContent.description}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
