'use client'

import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      // Find the current section
      for (const id of sectionIds) {
        const element = document.querySelector(id)
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id)
            return
          }
        }
      }

      // If we're at the very top, set to first section
      if (window.scrollY < offset) {
        setActiveSection(sectionIds[0] || '')
      }
    }

    // Call once on mount
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeSection
}
