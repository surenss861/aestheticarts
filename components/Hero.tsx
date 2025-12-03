'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Set initial hidden states
    if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 0, y: 20 })
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('span')
      gsap.set(words, { opacity: 0, y: 20 })
    }
    if (contentRef.current) {
      Array.from(contentRef.current.children).forEach((child) => {
        gsap.set(child, { opacity: 0, y: 15 })
      })
    }
    if (imageRef.current) gsap.set(imageRef.current, { opacity: 0, scale: 0.96 })

    const timer = setTimeout(() => {
      setIsLoaded(true)
      
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      if (badgeRef.current) {
        tl.to(badgeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, 0.2)
      }

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('span')
        tl.to(words, {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          duration: 0.7,
        }, 0.3)
      }

      if (contentRef.current) {
        tl.to(contentRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
        }, 0.5)
      }

      if (imageRef.current) {
        tl.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
        }, 0.4)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50/20 to-transparent" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-champagne-100/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div ref={contentRef} className="space-y-8">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium text-neutral-600 bg-neutral-50 border border-neutral-200/50"
            >
              <Award className="w-3.5 h-3.5 text-primary-600" />
              <span>Certified Medical Aesthetic Practice</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-neutral-900 leading-[1.05]">
              <span className="block mb-2">
                Reveal Your
              </span>
              <span className="block gradient-text">
                Natural Radiance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-xl leading-relaxed">
              Experience the art of aesthetic excellence. Our luxury spa offers personalized treatments 
              delivered by certified professionals in an atmosphere of refined tranquility.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center space-x-1.5 text-sm text-neutral-700">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium ml-1">5-Star Rated</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" />
              <div className="flex items-center space-x-1.5 text-sm text-neutral-700">
                <Award className="w-3.5 h-3.5 text-primary-600" />
                <span className="font-medium">RPN Licensed</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" />
              <span className="text-sm text-neutral-600 font-medium">Toronto, ON</span>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                href="/book"
                className="btn-modern text-white px-8 py-4 rounded-lg font-semibold text-base flex items-center space-x-2 shadow-modern-lg"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-lg border border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200 font-semibold text-base flex items-center space-x-2 shadow-modern"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div
            ref={imageRef}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-modern-xl border border-neutral-200/50">
                <div className="relative h-[600px]">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                    alt="Luxury aesthetic treatment"
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 border border-neutral-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
