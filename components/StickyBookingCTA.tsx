'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Calendar, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 lg:hidden"
        >
          <Link
            href="/book"
            className="flex items-center space-x-3 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-4 rounded-full shadow-2xl hover:from-gold-700 hover:to-gold-600 transition-colors font-medium"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

