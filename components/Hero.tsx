'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Award } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

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

      {/* Elegant floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-200/20 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-champagne-300/15 rounded-full mix-blend-soft-light filter blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 px-6 py-3 rounded-full text-sm font-semibold text-neutral-700 shadow-lg"
            >
              <Award className="w-4 h-4 text-primary-600" />
              <span>Certified Medical Aesthetic Practice</span>
            </motion.div>

            {/* Main Headline - Elegant & Luxurious */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="block text-neutral-800"
              >
                Reveal Your
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent"
              >
                Natural Radiance
              </motion.span>
            </h1>

            {/* Subheadline - Serene & Professional */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed font-light"
            >
              Experience the art of aesthetic excellence. Our luxury spa offers personalized treatments 
              delivered by certified professionals in an atmosphere of refined tranquility.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
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
            </motion.div>

            {/* Elegant CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-6"
            >
              <Link
                href="/book"
                className="group bg-gradient-to-r from-primary-600 to-primary-500 text-white px-10 py-5 rounded-full hover:from-primary-700 hover:to-primary-600 transition-all duration-300 font-semibold text-base shadow-xl hover:shadow-2xl flex items-center space-x-2 hover:scale-105"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white/90 backdrop-blur-sm border-2 border-primary-200 text-neutral-700 px-10 py-5 rounded-full hover:bg-white hover:border-primary-300 transition-all duration-300 font-semibold text-base flex items-center space-x-2 hover:scale-105 shadow-lg"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Elegant Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
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
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-2 shadow-2xl border border-primary-100/50 overflow-hidden">
                <div className="relative h-[550px] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80"
                    alt="Luxury aesthetic treatment"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-champagne-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </motion.div>
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
