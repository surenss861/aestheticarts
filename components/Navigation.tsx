'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin)
}

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
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const bookButtonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // GSAP animation for nav background
      if (navRef.current) {
        gsap.to(navRef.current, {
          backgroundColor: window.scrollY > 20 
            ? 'rgba(255, 251, 245, 0.98)' 
            : 'rgba(255, 251, 245, 0.9)',
          backdropFilter: window.scrollY > 20 ? 'blur(24px)' : 'blur(16px)',
          boxShadow: window.scrollY > 20 
            ? '0 10px 30px rgba(0, 0, 0, 0.1)' 
            : 'none',
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Magnetic effect on logo
    if (logoRef.current) {
      const logo = logoRef.current
      const handleMouseMove = (e: MouseEvent) => {
        const rect = logo.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(logo, {
          x: x * 0.1,
          y: y * 0.1,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(logo, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        })
      }

      logo.addEventListener('mousemove', handleMouseMove)
      logo.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        logo.removeEventListener('mousemove', handleMouseMove)
        logo.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  useEffect(() => {
    // Magnetic effect on Book Now button
    if (bookButtonRef.current) {
      const button = bookButtonRef.current
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * 0.2,
          y: y * 0.2,
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        })
      }

      button.addEventListener('mousemove', handleMouseMove)
      button.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        button.removeEventListener('mousemove', handleMouseMove)
        button.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  // Smooth scroll for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: 'power2.inOut',
        })
      }
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-champagne-50/98 backdrop-blur-xl shadow-lg border-b border-primary-100/50'
          : 'bg-champagne-50/90 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex items-center group">
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
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-neutral-700 hover:text-primary-600 transition-colors font-semibold relative group nav-link"
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
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
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
              ref={bookButtonRef}
              href="/book"
              className="btn-premium text-white px-8 py-3 rounded-full font-semibold"
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
