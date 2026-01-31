'use client'

import { useCallback } from 'react'

export function useSmoothScroll(navbarHeight = 64) {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })

      // Update URL hash without scrolling
      window.history.pushState(null, '', sectionId)
    }
  }, [navbarHeight])

  return { scrollToSection }
}
