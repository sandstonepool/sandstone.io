# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Sandstone (`SAND`), a Cardano stake pool based in Perth, Western Australia. Deployed on Netlify.

## Commands

- `npm run dev` — Start dev server with Turbopack (port 3000)
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm start` — Serve production build

## Environment Variables

Copy `.env.example` to `.env.local`:
```
CARDANOSCAN_API_KEY=your_api_key_here
```

## Architecture

### Framework & Routing

Next.js 16 with App Router. All routes live in `app/`:
- `app/page.tsx` — Homepage (single-page with section components)
- `app/blog/[slug]/page.tsx` — Blog posts (MDX, statically generated)
- `app/blog/tag/[tag]/page.tsx` — Tag-filtered blog lists
- `app/api/pool-stats/route.ts` — Cardanoscan API proxy (5-min server-side cache)
- `app/feed.xml/route.ts` — RSS feed

### Styling

**Tailwind CSS v4** with CSS-first configuration — all theme customization lives in `app/globals.css` using `@theme inline`, not a JS config file. Custom utilities (`.btn`, `.prose-blog`, `.animate-gradient-shift`, etc.) are also defined there.

Font: Poppins (400, 500, 600, 700, 800) via Google Fonts.

### Components

- `components/sections/` — Page sections (Hero, FAQ, WhySandstone, etc.), composed in `app/page.tsx`
- `components/effects/` — Visual effects (ParticleBackground, BlockchainVisualization, AnimatedCounter) — lazy loaded, hidden on mobile where appropriate
- `components/ui/` — Reusable primitives (Button, Container, Box, Reveal, etc.)
- `components/layout/` — Navbar and Footer

### Blog System

MDX files in `content/blog/`. Processed by `lib/blog.ts` with `gray-matter` for frontmatter and `next-mdx-remote` for rendering. Frontmatter fields: title, date, description, tags, author, featuredImage. Reading time is auto-calculated.

### Internationalization

Client-side i18n in `lib/i18n/`. 7 locales (en, es, fr, de, it, ja, ar with RTL). Infrastructure is ready but not yet wired into most components. Use `useTranslation()` hook in client components, `getTranslation(locale)` in server components. Translation strings are in `lib/i18n/locales/*.ts`.

### Data Fetching

Pool stats come from Cardanoscan API via `lib/api/cardano.ts`. The `app/api/pool-stats/route.ts` endpoint proxies this with 5-min revalidation. Client-side hook `usePoolStats()` adds its own 5-min cache. Pool constants (IDs, ticker, fees) live in `lib/utils/constants.ts`.

### Animations

Uses `motion/react` (Framer Motion fork). Key pattern: the Hero rotating text uses `AnimatePresence` with y-slide transitions. The overflow container requires `leading-[1.3]` + `h-[1.3em]` + `overflow-hidden` to avoid clipping descenders (never use `leading-none` for animated text). Three.js powers the 3D globe in `BlockchainVisualization.tsx`.

### Path Alias

`@/*` maps to the project root (e.g., `import { Button } from '@/components/ui/Button'`).
