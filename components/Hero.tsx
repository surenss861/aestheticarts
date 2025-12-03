'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Award } from 'lucide-react'
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
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // GSAP animations on mount
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Badge animation
    if (badgeRef.current) {
      tl.from(badgeRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.8,
        duration: 0.8,
      })
    }

    // Headline split animation
    if (headlineRef.current) {
      const words = headlineRef.current.querySelectorAll('span')
      tl.from(words, {
        opacity: 0,
        y: 50,
        rotationX: -90,
        stagger: 0.1,
        duration: 1,
      }, '-=0.5')
    }

    // Content fade in
    if (contentRef.current) {
      tl.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
      }, '-=0.8')
    }

    // Image animation
    if (imageRef.current) {
      tl.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        x: 50,
        rotation: 5,
        duration: 1.2,
      }, '-=1')
    }

    // CTA buttons with magnetic effect
    if (ctaRef.current) {
      const buttons = ctaRef.current.querySelectorAll('a')
      buttons.forEach((button) => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: '0 20px 40px rgba(219, 39, 119, 0.3)',
            duration: 0.3,
          })
        })
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: '0 10px 20px rgba(219, 39, 119, 0.2)',
            duration: 0.3,
          })
        })
      })
    }

    // Parallax for floating elements
    const floatingElements = ref.current?.querySelectorAll('.floating-element')
    floatingElements?.forEach((el, index) => {
      gsap.to(el, {
        y: (index % 2 === 0 ? -30 : 30),
        x: (index % 2 === 0 ? 20 : -20),
        rotation: (index % 2 === 0 ? 5 : -5),
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-champagne-50 via-champagne-100 to-champagne-200">
      {/* Elegant Champagne Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184, 134, 11, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-champagne-50/80 via-transparent to-champagne-100/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/20 to-transparent" />

      {/* Elegant floating elements with GSAP animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="floating-element absolute top-20 right-20 w-72 h-72 bg-primary-200/20 rounded-full mix-blend-soft-light filter blur-3xl"
        />
        <motion.div
          className="floating-element absolute bottom-20 left-20 w-96 h-96 bg-champagne-300/15 rounded-full mix-blend-soft-light filter blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div ref={contentRef} className="space-y-8">
            {/* Elegant Badge */}
            <div
              ref={badgeRef}
              className="glass-strong inline-flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-semibold text-neutral-700 soft-shadow"
            >
              <Award className="w-4 h-4 text-primary-600" />
              <span>Certified Medical Aesthetic Practice</span>
            </div>

            {/* Main Headline - Enhanced with GSAP */}
            <h1 ref={headlineRef} className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] tracking-tight">
              <span className="block text-neutral-800 mb-2">
                Reveal Your
              </span>
              <span className="block gradient-text">
                Natural Radiance
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light">
              Experience the art of aesthetic excellence. Our luxury spa offers personalized treatments 
              delivered by certified professionals in an atmosphere of refined tranquility.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-700">
                <Sparkles className="w-4 h-4 fill-primary-500 text-primary-500" />
                <span className="font-medium">5-Star Rated</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" />
              <div className="flex items-center space-x-2 text-sm text-neutral-700">
                <Award className="w-4 h-4 text-primary-600" />
                <span className="font-medium">RPN Licensed</span>
              </div>
              <div className="w-px h-4 bg-neutral-300" />
              <span className="text-sm text-neutral-600 font-medium">Toronto, ON</span>
            </div>

            {/* Elegant CTAs with magnetic effect */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start gap-4 pt-6">
              <Link
                href="/book"
                className="btn-premium group text-white px-10 py-5 rounded-full font-semibold text-base flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="glass-strong border-2 border-primary-200/50 text-neutral-700 px-10 py-5 rounded-full hover:border-primary-300 hover:bg-white/95 transition-all duration-300 font-semibold text-base flex items-center space-x-2 soft-shadow hover:elevated-shadow"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column - Elegant Visual Element */}
          <div
            ref={imageRef}
            className="relative hidden lg:block"
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-8 -right-8 w-32 h-32 bg-primary-200/30 rounded-full blur-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div 
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-champagne-300/20 rounded-full blur-2xl"
                animate={{ 
                  y: [0, 15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              
              {/* Elegant image showcase */}
              <div className="relative glass-strong rounded-3xl p-3 premium-shadow-lg overflow-hidden group/image">
                <div className="relative h-[550px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                    alt="Luxury aesthetic treatment"
                    fill
                    className="object-cover transition-transform duration-700 group-hover/image:scale-110"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne-900/50 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-300/50 rounded-full flex justify-center backdrop-blur-sm bg-white/30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
