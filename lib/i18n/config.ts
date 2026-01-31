import { en } from './locales/en'
import { es } from './locales/es'
import { fr } from './locales/fr'
import { de } from './locales/de'
import { it } from './locales/it'
import { ja } from './locales/ja'
import { ar } from './locales/ar'

export const defaultLocale = 'en' as const
export const locales = ['en', 'es', 'fr', 'de', 'it', 'ja', 'ar'] as const

export type Locale = (typeof locales)[number]

// RTL (Right-to-Left) languages
export const rtlLocales: Locale[] = ['ar']

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

export const translations = {
  en,
  es,
  fr,
  de,
  it,
  ja,
  ar,
} as const

// Locale display names
export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  ja: '日本語',
  ar: 'العربية',
}

export function getTranslation(locale: Locale = defaultLocale) {
  return translations[locale] || translations[defaultLocale]
}
