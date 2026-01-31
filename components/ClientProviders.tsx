'use client'

import { ReactNode } from 'react'
import { LocaleProvider } from '@/lib/i18n'

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  )
}
