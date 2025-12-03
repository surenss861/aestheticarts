'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <section ref={sectionRef} className="py-24 bg-champagne-50 relative">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" className="space-y-8">
            <div>
              <span className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-8 leading-tight">
                Meet Your Aesthetic Expert
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
              <p>
                Welcome to <span className="font-bold text-primary-600">Aesthetic Arts</span>!
                I&apos;m <span className="font-semibold">Amy Jagarinec RPN</span>, a trusted aesthetic nurse injector on a mission to help you
                discover the transformative magic of aesthetic services.
              </p>
              <p>
                My passion for aesthetics stems from seeing its incredible impact on confidence and
                self-expression. I believe each of you is a unique canvas, waiting to be adorned with
                subtle enhancements that reflect your inner beauty.
              </p>
              <p className="text-xl font-semibold text-primary-600 pt-4">
                My ultimate goal? To make you feel like the masterpiece you truly are.
              </p>
            </div>
            
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-full hover:from-primary-700 hover:to-primary-600 transition-colors duration-200 font-semibold shadow-md"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="right" className="space-y-6">
            {/* Amy's Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl mb-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-champagne-50 to-primary-50 p-2 rounded-3xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about/amy.webp"
                    alt="Amy Jagarinec RPN - Aesthetic Arts Skin Boutique"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
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
                  className="bg-white rounded-lg p-5 hover:shadow-md transition-shadow duration-200 border border-neutral-100"
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

