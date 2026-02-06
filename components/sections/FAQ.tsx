'use client'

import { motion } from 'motion/react'
import { Reveal } from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { CONTACT_EMAIL, COMPANY_ACN } from '@/lib/utils/constants'
import { ChevronRightIcon, ChatBubbleLeftRightIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useTranslation } from '@/lib/i18n'

export function FAQ() {
  const { t } = useTranslation()

  return (
    <section id="faq" className="relative mx-auto max-w-7xl mt-20 mb-20 px-8 py-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-50/50 via-pink-50/50 to-rose-50/50 rounded-3xl -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8">
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              {t.faq.title}
            </span>
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* FAQ Items */}
            <div className="grid gap-4 md:col-span-2">
              {t.faq.items.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl hover:bg-white/50 hover:shadow-xl transition-all"
                >
                  <Reveal summary={faq.question}>
                    {faq.answer.replace('{companyAcn}', COMPANY_ACN)}
                  </Reveal>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="sticky w-full top-14 h-fit">
              <div className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-6 hover:bg-white/50 hover:shadow-xl transition-all">
                {/* Decorative Icon Stack */}
                <div className="relative w-32 h-32 mx-auto mb-6 hidden md:block">
                  {/* Background circle */}
                  <div className="absolute inset-0 bg-linear-to-br from-purple-100 to-pink-100 rounded-full opacity-50 blur-xl"></div>

                  {/* Main circle with icons */}
                  <div className="relative w-full h-full">
                    {/* Chat bubble icon */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Envelope icon */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-14 h-14 bg-linear-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        y: [0, 8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <EnvelopeIcon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>
                </div>

                <p className="mb-6 text-gray-700 leading-relaxed">
                  {t.faq.sidebarText}
                </p>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                  href={`mailto:${CONTACT_EMAIL}?subject=General Enquiry`}
                >
                  {t.faq.contactUs}
                  <ChevronRightIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
