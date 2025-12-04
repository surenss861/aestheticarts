'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Sparkles, Award } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const highlights = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Each treatment is tailored to your unique needs and goals',
  },
  {
    icon: Sparkles,
    title: 'Natural Results',
    description: 'Enhance your beauty while maintaining your authentic look',
  },
  {
    icon: Award,
    title: 'Expert Knowledge',
    description: 'Years of experience in aesthetic treatments and skincare',
  },
]

export default function AboutPreview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-champagne-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-widest mb-6">
                About Us
              </span>
              <div className="relative inline-block mb-8">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-neutral-900 leading-tight">
                  Meet Your Aesthetic Expert
                </h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left"
                  style={{ width: '100%' }}
                />
              </div>
            </div>
            
            <div className="space-y-6 text-lg lg:text-xl text-neutral-700 leading-relaxed">
              <p>
                Welcome to <span className="font-bold text-primary-600">Aesthetic Arts</span>!
                I&apos;m <span className="font-semibold font-display">Amy Jagarinec RPN</span>, a trusted aesthetic nurse injector on a mission to help you
                discover the transformative magic of aesthetic services.
              </p>
              <p>
                My passion for aesthetics stems from seeing its incredible impact on confidence and
                self-expression. I believe each of you is a unique canvas, waiting to be adorned with
                subtle enhancements that reflect your inner beauty.
              </p>
              <p className="text-xl lg:text-2xl font-semibold text-primary-600 italic font-display pt-4">
                My ultimate goal? To make you feel like the masterpiece you truly are.
              </p>
            </div>
            
            <Link
              href="/about"
              className="btn-luxury inline-flex items-center space-x-2 text-white px-8 py-4 rounded-full font-semibold shadow-luxury-lg"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6">
            {/* Photo placeholder - left blank */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-champagne-50 to-primary-50 p-2 rounded-3xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-champagne-50 to-primary-50" />
              </div>
              {/* Decorative badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <p className="text-sm font-semibold text-primary-600">Amy Jagarinec RPN</p>
              </div>
            </motion.div>
            
            {/* Highlights */}
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="card-luxury rounded-xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-neutral-900 mb-1">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

