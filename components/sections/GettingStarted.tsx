'use client'

import { useState, useCallback } from 'react'
import { motion } from 'motion/react'
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline'
import * as Tooltip from '@radix-ui/react-tooltip'
import { Container } from '@/components/ui/Container'
import { POOL_ID_BECH, POOL_TICKER } from '@/lib/utils/constants'
import { useTranslation } from '@/lib/i18n'
import { DelegateModal } from '@/components/ui/DelegateModal'

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
  const [delegateOpen, setDelegateOpen] = useState(false)
  const closeDelegateModal = useCallback(() => setDelegateOpen(false), [])

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
          <span className="flex flex-col items-center gap-2 mt-2">
            <PoolIdCopy />
            <span className="inline-flex items-center gap-2">
              <button
                onClick={() => setDelegateOpen(true)}
                className="btn text-xs !rounded-full !px-4 !py-1.5 !shadow-md hover:!shadow-lg hover:scale-105 transition-all"
              >
                Delegate to [{POOL_TICKER}]
              </button>
              <motion.svg
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-5 h-5 text-teal-600 shrink-0 -rotate-90 -scale-x-100"
                aria-hidden="true"
              >
                <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 0 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 1 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.118a.5.5 0 0 1-.447-.276l-1.232-2.465-2.512-4.185a.517.517 0 0 1 .809-.631l2.41 2.41A.5.5 0 0 0 6 9.5V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v6.543L3.443 6.736A1.517 1.517 0 0 0 1.07 8.588l2.491 4.153 1.215 2.43A1.5 1.5 0 0 0 6.118 16h6.302a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
              </motion.svg>
            </span>
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

      <DelegateModal open={delegateOpen} onClose={closeDelegateModal} />
    </section>
  )
}
