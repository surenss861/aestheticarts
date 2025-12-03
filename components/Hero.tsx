'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Star, Sparkles } from 'lucide-react'
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
    if (badgeRef.current) gsap.set(badgeRef.current, { opacity: 0, y: 20 })
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('span')
      gsap.set(words, { opacity: 0, y: 30 })
    }
    if (contentRef.current) {
      Array.from(contentRef.current.children).forEach((child) => {
        gsap.set(child, { opacity: 0, y: 20 })
      })
    }
    if (imageRef.current) gsap.set(imageRef.current, { opacity: 0, scale: 0.95 })

    const timer = setTimeout(() => {
      setIsLoaded(true)
      
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (badgeRef.current) {
        tl.to(badgeRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, 0.2)
      }

      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('span')
        tl.to(words, {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 1,
        }, 0.3)
      }

      if (contentRef.current) {
        tl.to(contentRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
        }, 0.5)
      }

      if (imageRef.current) {
        tl.to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
        }, 0.4)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne-50 via-white to-primary-50/20">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-champagne-50/95 via-transparent to-primary-50/30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-50/15 to-champagne-100/20" />
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(219, 39, 119, 0.3) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-200/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-champagne-200/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Column */}
          <div ref={contentRef} className="space-y-10">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="glass-luxury inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-700 shadow-luxury uppercase tracking-wider"
            >
              <Award className="w-3.5 h-3.5 text-primary-600" />
              <span>Certified Medical Aesthetic Practice</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-neutral-900 leading-[1.05]">
              <span className="block mb-4 text-neutral-800">
                Reveal Your
              </span>
              <span className="block gradient-text">
                Natural Radiance
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-widest mb-4">
              Toronto&apos;s Premier Medical Aesthetics Spa
            </p>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-neutral-700 max-w-xl leading-relaxed font-light">
              Experience the art of aesthetic excellence. Our luxury spa offers personalized treatments 
              delivered by certified professionals in an atmosphere of refined tranquility.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <div className="flex items-center space-x-1.5 text-sm text-neutral-700 glass-luxury px-5 py-2.5 rounded-full shadow-luxury">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold ml-1.5">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-1.5 text-sm text-neutral-700 glass-luxury px-5 py-2.5 rounded-full shadow-luxury">
                <Award className="w-4 h-4 text-primary-600" />
                <span className="font-semibold">RPN Licensed</span>
              </div>
              <div className="flex items-center space-x-1.5 text-sm text-neutral-700 glass-luxury px-5 py-2.5 rounded-full shadow-luxury">
                <Sparkles className="w-4 h-4 fill-primary-500 text-primary-500" />
                <span className="font-semibold">Toronto, ON</span>
              </div>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-5 pt-6">
              <Link
                href="/book"
                className="btn-luxury text-white px-12 py-6 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-luxury-lg group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="glass-luxury border border-neutral-300/50 text-neutral-700 px-12 py-6 rounded-full hover:border-primary-300 hover:bg-white/95 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-luxury group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg border border-white/60">
                <div className="relative h-[700px]">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                    alt="Luxury aesthetic treatment"
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-8 right-8 glass-luxury px-5 py-2.5 rounded-full shadow-luxury">
                    <div className="flex items-center space-x-2 text-sm font-semibold text-neutral-700">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>Premium Care</span>
                    </div>
                  </div>
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
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300/50 rounded-full flex justify-center glass-luxury shadow-luxury cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
