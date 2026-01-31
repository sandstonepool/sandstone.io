'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { freezeOnceVisible = true, ...observerOptions } = options
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    // If we've already intersected and should freeze, don't observe
    if (freezeOnceVisible && hasIntersected) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)

      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true)

        // Disconnect if freezeOnceVisible
        if (freezeOnceVisible) {
          observer.disconnect()
        }
      }
    }, observerOptions)

    observer.observe(target)

    return () => observer.disconnect()
  }, [freezeOnceVisible, hasIntersected, observerOptions])

  return { targetRef, isIntersecting, hasIntersected }
}
