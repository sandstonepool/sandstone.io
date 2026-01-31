'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { defaultLocale, locales, type Locale } from './config'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

function detectBrowserLocale(): Locale {
  // Check localStorage first
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('locale') as Locale
    if (stored && locales.includes(stored)) {
      return stored
    }

    // Detect from browser
    const browserLang = navigator.language.toLowerCase()

    // Direct match (e.g., 'en', 'es', 'fr')
    const directMatch = locales.find(locale => browserLang === locale)
    if (directMatch) return directMatch

    // Language prefix match (e.g., 'en-US' -> 'en', 'es-MX' -> 'es')
    const prefix = browserLang.split('-')[0]
    const prefixMatch = locales.find(locale => locale === prefix)
    if (prefixMatch) return prefixMatch
  }

  return defaultLocale
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detect locale on mount
    const detected = detectBrowserLocale()
    setLocaleState(detected)
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
      // Update HTML lang attribute
      document.documentElement.lang = newLocale
    }
  }

  // Update HTML lang attribute when locale changes
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
