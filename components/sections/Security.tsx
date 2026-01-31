'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useTranslation } from '@/lib/i18n'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
}

export function Security() {
  const { t } = useTranslation()

  const securityRules = [
    {
      number: 1,
      text: t.security.rules.rule1
    },
    {
      number: 2,
      text: t.security.rules.rule2
    },
    {
      number: 3,
      text: t.security.rules.rule3
    },
    {
      number: 4,
      text: t.security.rules.rule4,
      links: [
        { name: 'Lace', url: 'https://www.lace.io/' },
        { name: 'Eternl', url: 'https://eternl.io/' },
        { name: 'AdaLite', url: 'https://adalite.io/' },
      ]
    }
  ]

  return (
    <div id="security" className="relative w-full mx-auto mt-20 mb-20 py-16 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-red-50 via-orange-50 to-yellow-50" />

      <section className="relative z-10 mx-auto max-w-7xl px-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
              <span className="bg-linear-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                {t.security.title}
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t.security.description}
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
            >
              {securityRules.map((rule) => (
                <motion.div key={rule.number} variants={itemVariants}>
                  <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-6 text-center hover:bg-white/50 hover:scale-105 hover:shadow-xl transition-all h-full">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-linear-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{rule.number}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-700">
                      {rule.text}
                    </p>
                    {rule.links && (
                      <p className="mt-4 space-x-2 text-sm">
                        {rule.links.map((link, index) => (
                          <span key={link.name}>
                            <a
                              className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all"
                              href={link.url}
                              rel="noopener"
                              target="_blank"
                            >
                              {link.name}
                            </a>
                            {index < rule.links!.length - 1 && ' | '}
                          </span>
                        ))}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
