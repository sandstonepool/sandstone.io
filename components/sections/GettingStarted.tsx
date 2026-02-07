'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Container } from '@/components/ui/Container'
import { POOL_ID_BECH } from '@/lib/utils/constants'
import { useTranslation } from '@/lib/i18n'

function PoolIdCopy() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(POOL_ID_BECH)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root open={copied}>
        <Tooltip.Trigger asChild>
          <strong
            onClick={handleCopy}
            className="inline-flex items-center gap-1 backdrop-blur-md bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-blue-300/50 rounded-lg px-2 py-0.5 cursor-pointer hover:from-blue-500/30 hover:to-purple-500/30 hover:scale-105 transition-all max-w-full overflow-hidden"
          >
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-[10px] whitespace-nowrap overflow-hidden text-ellipsis">{POOL_ID_BECH}</span>
            <ClipboardDocumentIcon className="w-3.5 h-3.5 shrink-0 text-blue-600" />
          </strong>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="backdrop-blur-md bg-white/90 px-3 py-2 rounded-lg shadow-xl text-sm border border-white/60"
            sideOffset={5}
          >
            {t.gettingStarted.copied}
            <Tooltip.Arrow className="fill-white/90" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export function GettingStarted() {
  const { t } = useTranslation()

  const steps = [
    {
      number: 1,
      content: (
        <>
          {t.gettingStarted.steps.step1.split('{lace}')[0]}
          <a className="font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all" href="https://www.lace.io/" target="_blank" rel="noopener">
            Lace
          </a>
          {t.gettingStarted.steps.step1.split('{lace}')[1]}
        </>
      )
    },
    {
      number: 2,
      content: (
        <>
          {t.gettingStarted.steps.step2.split('{ticker}')[0]}
          <strong className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SAND</strong>
          {t.gettingStarted.steps.step2.split('{ticker}')[1].split('{poolId}')[0]}
          <span className="flex justify-center mt-2">
            <PoolIdCopy />
          </span>
        </>
      )
    },
    {
      number: 3,
      content: t.gettingStarted.steps.step3
    },
    {
      number: 4,
      content: t.gettingStarted.steps.step4
    }
  ]

  return (
    <section id="getting-started" className="relative mx-auto max-w-7xl mt-12 sm:mt-20 mb-12 sm:mb-20 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-green-50/50 via-teal-50/50 to-cyan-50/50 rounded-3xl -z-10" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-8">
            <span className="bg-linear-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {t.gettingStarted.title}
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 mt-6 sm:mt-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-md bg-white/40 border border-white/60 rounded-xl p-4 sm:p-6 hover:bg-white/50 hover:shadow-xl transition-all flex items-start gap-3 sm:gap-6 sm:hover:scale-105"
              >
                <div className="w-10 h-10 sm:w-16 sm:h-16 shrink-0 rounded-full bg-linear-to-br from-green-500 to-teal-500 flex items-center justify-center shadow-lg">
                  <span className="text-xl sm:text-3xl font-bold text-white">{step.number}</span>
                </div>
                <div className="pt-0 sm:pt-2 min-w-0">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {step.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
