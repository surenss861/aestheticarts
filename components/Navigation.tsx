'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const treatments = [
  { name: 'Micro-Needling', href: '/services/micro-needling' },
  { name: 'Anti-Wrinkle Injections', href: '/services/anti-wrinkle' },
  { name: 'Dermal Fillers', href: '/services/dermal-fillers' },
  { name: 'Lip Filler', href: '/services/lip-filler' },
  { name: 'Hair Restoration', href: '/services/hair-restoration' },
  { name: 'Excessive Sweating', href: '/services/excessive-sweating' },
  { name: 'Skin Hydrators', href: '/services/skin-hydrators' },
  { name: 'Corticosteroid Injections', href: '/services/corticosteroid-injections' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-champagne-50/98 backdrop-blur-xl shadow-lg border-b border-primary-100/50'
          : 'bg-champagne-50/90 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.webp"
              alt="Aesthetic Arts Skin Boutique"
              width={180}
              height={60}
              className="h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-semibold relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* Treatments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsTreatmentsOpen(true)}
              onMouseLeave={() => setIsTreatmentsOpen(false)}
            >
              <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors font-semibold relative group">
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
              </button>
              <AnimatePresence>
                {isTreatmentsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-champagne-50 rounded-lg shadow-xl border border-primary-100/50 py-2"
                  >
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.name}
                        href={treatment.href}
                        className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {treatment.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/book"
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3 rounded-full hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-champagne-50 border-t border-primary-100/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-neutral-700 hover:text-primary-600 transition-colors font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <div className="text-sm font-semibold text-neutral-900 mb-2">
                  Treatments
                </div>
                {treatments.map((treatment) => (
                  <Link
                    key={treatment.name}
                    href={treatment.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-neutral-600 hover:text-primary-600 transition-colors py-2 pl-4"
                  >
                    {treatment.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="block bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-full hover:from-primary-700 hover:to-primary-600 transition-colors font-semibold text-center mt-4"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

