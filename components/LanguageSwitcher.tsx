'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { locales, localeNames, useLocale } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale: currentLocale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLocaleSelect = (locale: typeof locales[number]) => {
    setIsOpen(false)
    setLocale(locale)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md bg-white/40 border border-white/60 hover:bg-white/60 transition-all shadow-sm"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <GlobeAltIcon className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-semibold text-gray-700 hidden sm:inline">
          {localeNames[currentLocale]}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-lg backdrop-blur-md bg-white/95 border border-white/60 shadow-xl overflow-hidden z-50"
            role="menu"
            aria-orientation="vertical"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleSelect(locale)}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  locale === currentLocale
                    ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold'
                    : 'text-gray-700 hover:bg-white/60'
                }`}
                role="menuitem"
              >
                {localeNames[locale]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
