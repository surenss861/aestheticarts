'use client'

import { motion } from 'framer-motion'

export default function SectionDivider() {
  return (
    <div className="relative w-full h-px overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-200/50 to-transparent"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-champagne-200/30 to-transparent" />
    </div>
  )
}

