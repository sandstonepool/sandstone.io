'use client'

import Image from 'next/image'
import Link from 'next/link'
import { COMPANY_NAME, COMPANY_ACN, CONTACT_EMAIL, POOL_ID_HEX, SOCIAL_LINKS } from '@/lib/utils/constants'
import { useTranslation } from '@/lib/i18n'

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative left-0 right-0 pt-16 pb-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl px-8 mx-auto text-white">
        {/* Logo and Company Info */}
        <div className="flex flex-col text-sm">
          <div className="mb-4">
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <Image
                src="/images/sandstone-logo.svg"
                alt="Sandstone Logo"
                width={220}
                height={26}
                className="brightness-0 invert"
              />
            </Link>
          </div>
          <p className="text-white/90 leading-relaxed">
            {COMPANY_NAME}<br />
            A.C.N {COMPANY_ACN}
          </p>
        </div>

        {/* Resources */}
        <div id="resources" className="flex flex-col text-sm">
          <h3 className="uppercase font-bold text-white text-sm mb-4 tracking-wide">{t.footer.resources}</h3>
          <div className="space-y-2">
            <a
              href={`https://cardanoscan.io/pool/${POOL_ID_HEX}`}
              rel="noopener"
              target="_blank"
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              Cardanoscan
            </a>
            <a
              href="https://yoroi-wallet.com/#/"
              rel="noopener"
              target="_blank"
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              Yoroi Wallet
            </a>
            <a
              href={`https://cexplorer.io/pool/${POOL_ID_HEX}`}
              rel="noopener"
              target="_blank"
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              Cexplorer.io
            </a>
            <a
              href={`https://pooltool.io/pool/${POOL_ID_HEX}/awards`}
              rel="noopener"
              target="_blank"
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              PoolTool
            </a>
          </div>
        </div>

        {/* Information */}
        <div id="information" className="flex flex-col text-sm">
          <h3 className="uppercase font-bold text-white text-sm mb-4 tracking-wide">{t.footer.information}</h3>
          <div className="space-y-2">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=General Enquiry`}
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              {t.footer.contactUs}
            </a>
            <Link
              href="/privacy"
              className="block text-white/80 hover:text-white hover:translate-x-1 transition-all"
            >
              {t.footer.privacyPolicy}
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div id="socials" className="flex flex-col text-sm">
          <h3 className="uppercase font-bold text-white text-sm mb-4 tracking-wide">{t.footer.socialLinks}</h3>
          <div className="space-y-2">
            <a
              href={SOCIAL_LINKS.twitter}
              role="button"
              rel="noopener"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white hover:translate-x-1 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
              X
            </a>
            <a
              href={SOCIAL_LINKS.github}
              role="button"
              rel="noopener"
              target="_blank"
              className="flex items-center gap-3 text-white/80 hover:text-white hover:translate-x-1 transition-all group"
            >
              <div className="w-8 h-8 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
        <p className="text-center text-sm text-white/70">
          {t.footer.copyright.replace('{year}', currentYear.toString()).replace('{company}', COMPANY_NAME)}
        </p>
      </div>
    </footer>
  )
}
