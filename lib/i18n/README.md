# Internationalization (i18n)

This directory contains the internationalization infrastructure for the Sandstone website.

## Current Status

- **Default Language**: English (en)
- **Status**: Infrastructure ready with 7 languages, not yet implemented in components
- **Available Languages**:
  - 🇬🇧 English (en)
  - 🇪🇸 Spanish (es)
  - 🇫🇷 French (fr)
  - 🇩🇪 German (de)
  - 🇮🇹 Italian (it)
  - 🇯🇵 Japanese (ja)
  - 🇸🇦 Arabic (ar) - RTL support included

## How to Use

### In Client Components

```tsx
'use client'

import { useTranslation } from '@/lib/i18n'

export function MyComponent() {
  const { t, locale } = useTranslation()

  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.description}</p>
    </div>
  )
}
```

### In Server Components

```tsx
import { getTranslation } from '@/lib/i18n'

export function MyServerComponent() {
  const t = getTranslation('en') // or get from params

  return (
    <div>
      <h1>{t.hero.title}</h1>
    </div>
  )
}
```

## RTL (Right-to-Left) Support

Arabic is a right-to-left language. The system includes RTL detection:

```tsx
import { isRTL } from '@/lib/i18n'

export function MyComponent({ locale }: { locale: Locale }) {
  const direction = isRTL(locale) ? 'rtl' : 'ltr'

  return <div dir={direction}>...</div>
}
```

Update the `<html>` tag to support RTL:

```tsx
// app/layout.tsx
import { isRTL } from '@/lib/i18n'

export default function RootLayout({ children, params }: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const direction = isRTL(params.locale) ? 'rtl' : 'ltr'

  return (
    <html lang={params.locale} dir={direction}>
      {/* ... */}
    </html>
  )
}
```

## Language Switcher Component

Create a language selector using the `localeNames` export:

```tsx
'use client'

import { locales, localeNames, type Locale } from '@/lib/i18n'

export function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  return (
    <select value={currentLocale} onChange={(e) => switchLocale(e.target.value)}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {localeNames[locale]}
        </option>
      ))}
    </select>
  )
}
```

## Adding a New Language

1. Create a new translation file in `locales/` (e.g., `zh.ts` for Chinese)
2. Copy the structure from `en.ts` and translate all strings
3. Add the locale to the `locales` array in `config.ts`
4. Import and add to the `translations` object in `config.ts`
5. If RTL, add to `rtlLocales` array
6. Add display name to `localeNames` object

## Next Steps to Fully Implement

To use this i18n system throughout the site:

1. **Update components** to use `useTranslation()` hook instead of hardcoded strings
2. **Set up language switcher** component in the navbar
3. **Configure Next.js** for locale routing (optional - can use subdomains or query params instead)
4. **Add language selection** to metadata for SEO
5. **Update structured data** to include multiple language versions

## Integration with Navbar

A pre-built `LanguageSwitcher` component is available at `@/components/LanguageSwitcher`:

```tsx
// components/layout/Navbar.tsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useTranslation } from '@/lib/i18n'

export function Navbar() {
  const { locale } = useTranslation()

  return (
    <nav>
      {/* ... other nav items ... */}
      <LanguageSwitcher currentLocale={locale} />
    </nav>
  )
}
```

## Benefits

- ✅ **7 Languages Ready**: English, Spanish, French, German, Italian, Japanese, Arabic
- ✅ **Type-safe Translations**: Full TypeScript support with autocomplete
- ✅ **RTL Support**: Automatic right-to-left layout for Arabic
- ✅ **Easy to Extend**: Add new languages in minutes
- ✅ **Centralized Content**: All translations in one place
- ✅ **Better SEO**: Proper language tags and structured data support
- ✅ **Improved Accessibility**: Global reach for all users
- ✅ **Language Switcher**: Pre-built component ready to use

## Supported Languages

| Language | Code | Native Name | Direction |
|----------|------|-------------|-----------|
| English  | en   | English     | LTR       |
| Spanish  | es   | Español     | LTR       |
| French   | fr   | Français    | LTR       |
| German   | de   | Deutsch     | LTR       |
| Italian  | it   | Italiano    | LTR       |
| Japanese | ja   | 日本語      | LTR       |
| Arabic   | ar   | العربية     | RTL       |
