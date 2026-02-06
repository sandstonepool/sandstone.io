'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'
import { Box } from './Box'

interface RevealProps {
  summary: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function Reveal({ summary, children, defaultOpen = false }: RevealProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Box className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center text-left group hover:bg-white/50 transition-all rounded-xl"
      >
        <span className="font-semibold text-gray-900 text-base sm:text-lg pr-4">{summary}</span>
        <motion.div
          className="shrink-0 w-8 h-8 rounded-full backdrop-blur-md bg-linear-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 flex items-center justify-center shadow-md transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <MinusIcon className="h-5 w-5 text-white stroke-2" />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <PlusIcon className="h-5 w-5 text-white stroke-2" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  )
}
