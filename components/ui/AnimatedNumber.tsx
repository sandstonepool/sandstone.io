'use client'

import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring } from 'motion/react'

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: (value: number) => string;
  className?: string;
}

export function AnimatedNumber({
  value,
  duration = 3,
  format = (v) => Math.round(v).toString(),
  className = ''
}: AnimatedNumberProps) {
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    duration: duration * 1000
  })
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = format(latest)
      }
    })

    return () => unsubscribe()
  }, [springValue, format])

  return <span ref={ref} className={className}>0</span>
}
