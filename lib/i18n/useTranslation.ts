'use client'

import { getTranslation } from './config'
import { useLocale } from './LocaleProvider'

export function useTranslation() {
  const { locale, setLocale } = useLocale()
  const t = getTranslation(locale)

  return { t, locale, setLocale }
}
