'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  variant?: 'light' | 'dark' | 'gradient'
  className?: string
}

export default function SectionDivider({ variant = 'light', className = '' }: SectionDividerProps) {
  const variants = {
    light: 'bg-gradient-to-r from-transparent via-champagne-200/30 to-transparent',
    dark: 'bg-gradient-to-r from-transparent via-white/10 to-transparent',
    gradient: 'bg-gradient-to-r from-transparent via-primary-200/40 to-transparent',
  }

  return (
    <div className={`relative w-full h-px overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`absolute inset-0 ${variants[variant]}`}
      />
      <div className="absolute inset-0 section-divider" />
    </div>
  )
}
