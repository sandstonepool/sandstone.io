'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export function Button({ children, onClick, href, className = '', icon }: ButtonProps) {
  const buttonContent = (
    <>
      {children}
      {icon && <span className="inline-flex">{icon}</span>}
    </>
  )

  const buttonClasses = `btn ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {buttonContent}
    </motion.button>
  )
}
