'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Star, Sparkles, Quote } from 'lucide-react'
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
  const quoteRef = useRef<HTMLDivElement>(null)
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
    if (quoteRef.current) gsap.set(quoteRef.current, { opacity: 0, x: 50, scale: 0.95 })

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
          stagger: 0.1,
          duration: 1,
        }, 0.4)
      }

      if (contentRef.current) {
        tl.to(contentRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
        }, 0.6)
      }

      if (quoteRef.current) {
        tl.to(quoteRef.current, {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
        }, 0.8)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-primary-900/30 to-dark-800">
      {/* Dark Background with Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/95 via-primary-900/20 to-dark-800/95" />
        {/* Background image with overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80"
            alt=""
            fill
            className="object-cover"
            quality={90}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-800/80" />
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[700px] h-[700px] bg-rosegold-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <div ref={contentRef} className="space-y-10">
            {/* Location Badge */}
            <div
              ref={badgeRef}
              className="inline-block text-xs font-semibold text-white/70 uppercase tracking-widest"
            >
              Toronto • East York
            </div>

            {/* Headline with underlines */}
            <h1 ref={headlineRef} className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-[1.05]">
              <span className="block mb-4 relative">
                <span>Reveal Your</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left"
                  style={{ width: '100%' }}
                />
              </span>
              <span className="block relative">
                <span className="gradient-text bg-gradient-to-r from-rosegold-300 via-rosegold-200 to-gold-300 bg-clip-text text-transparent">
                  Natural Radiance
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-rosegold-400 to-gold-400 origin-left"
                  style={{ width: '100%' }}
                />
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-xl leading-relaxed font-light">
              You, just enhanced. Expert hands. Confident skin.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-white/80">
                <span className="text-2xl font-bold text-white">10+</span>
                <span className="text-sm ml-1">Years</span>
              </div>
              <div className="w-px h-6 bg-white/20" />
              <div className="text-white/80">
                <span className="text-2xl font-bold text-white">5,000+</span>
                <span className="text-sm ml-1">Treatments</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center space-x-1.5 text-sm text-white/90 glass-dark px-5 py-2.5 rounded-full shadow-dark">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="font-semibold ml-1.5">5-Star Rated</span>
              </div>
              <div className="flex items-center space-x-1.5 text-sm text-white/90 glass-dark px-5 py-2.5 rounded-full shadow-dark">
                <Award className="w-4 h-4 text-rosegold-400" />
                <span className="font-semibold">RPN Licensed</span>
              </div>
            </div>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-5 pt-6">
              <Link
                href="/book"
                className="btn-luxury text-white px-12 py-6 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-luxury-lg group"
              >
                <span>Book Your Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="glass-dark border border-white/20 text-white px-12 py-6 rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 shadow-dark group"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Quote Card */}
          <div
            ref={quoteRef}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-dark rounded-3xl p-10 border border-primary-500/20 shadow-dark-lg relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-6 left-6 opacity-20">
                  <Quote className="w-32 h-32 text-primary-400" />
                </div>
                
                <div className="relative z-10">
                  <blockquote className="text-2xl lg:text-3xl text-white/95 leading-relaxed font-light italic mb-8">
                    &ldquo;Each of you is a unique canvas, waiting to be adorned with subtle enhancements.&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center space-x-3 pt-6 border-t border-white/10">
                    <div className="text-white/90">
                      <div className="font-display font-bold text-xl text-white mb-1">Aesthetic Arts</div>
                      <div className="flex items-center space-x-2 text-sm text-white/70">
                        <span>Your Artisans</span>
                        <div className="w-2 h-2 rounded-full bg-rosegold-400" />
                      </div>
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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center glass-dark shadow-dark cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
