'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import { useSmoothScroll } from '@/lib/hooks/useSmoothScroll'
import { useScrollSpy } from '@/lib/hooks/useScrollSpy'
import { SECTION_IDS } from '@/lib/utils/constants'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useTranslation } from '@/lib/i18n'

export function Navbar() {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const { scrollToSection } = useSmoothScroll()
  const activeSection = useScrollSpy(SECTION_IDS)

  const navItems = [
    { name: t.nav.whySandstone, anchor: '#why-sandstone' },
    { name: t.nav.gettingStarted, anchor: '#getting-started' },
    { name: t.nav.security, anchor: '#security' },
    { name: t.nav.faq, anchor: '#faq' }
  ]

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    e.preventDefault()
    scrollToSection(anchor)
    setIsOpen(false) // Close mobile menu
  }

  return (
    <nav className="sticky w-full z-50 px-4 backdrop-blur-md bg-white/80 border-b border-white/60 shadow-lg left-0 right-0 top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button - only show on home page */}
          {isHomePage && (
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg backdrop-blur-md bg-white/40 border border-white/60 hover:bg-white/60 hover:scale-105 transition-all shadow-sm"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6 text-gray-700" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6 text-gray-700" aria-hidden="true" />
                )}
              </button>
            </div>
          )}

          {/* Logo and navigation */}
          <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              {isHomePage ? (
                <Link href="/" onClick={(e) => handleClick(e, '#intro')} className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/sandstone-logo.svg"
                    alt="Sandstone Home Page"
                    width={205}
                    height={25}
                    className="h-6 w-auto sm:h-6"
                  />
                </Link>
              ) : (
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/sandstone-logo.svg"
                    alt="Sandstone Home Page"
                    width={205}
                    height={25}
                    className="h-6 w-auto sm:h-6"
                  />
                </Link>
              )}
            </div>

            {/* Desktop navigation - only show on home page */}
            {isHomePage && (
              <div className="hidden md:flex sm:ml-6 items-center gap-4">
                <div className="flex space-x-2">
                  {navItems.map((item) => (
                    <a
                      key={item.anchor}
                      href={item.anchor}
                      onClick={(e) => handleClick(e, item.anchor)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        activeSection === item.anchor
                          ? 'backdrop-blur-md bg-white/60 border border-white/80 shadow-md bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                          : 'text-gray-700 border border-transparent hover:backdrop-blur-md hover:bg-white/40 hover:border-white/60 hover:shadow-sm'
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <LanguageSwitcher />
              </div>
            )}
            {!isHomePage && (
              <div className="hidden md:flex">
                <LanguageSwitcher />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu panel - only show on home page */}
      {isHomePage && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden backdrop-blur-md bg-white/40 border-t border-white/60"
            >
              <div className="px-2 pt-2 pb-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.anchor}
                    href={item.anchor}
                    onClick={(e) => handleClick(e, item.anchor)}
                    className={`block px-4 py-2 rounded-lg text-base font-semibold cursor-pointer transition-all ${
                      activeSection === item.anchor
                        ? 'backdrop-blur-md bg-white/60 border border-white/80 shadow-md bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
                        : 'text-gray-700 border border-transparent hover:backdrop-blur-md hover:bg-white/50 hover:border-white/60'
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </nav>
  )
}
