'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  {
    id: 'micro-needling',
    name: 'Micro-Needling',
    description: 'Roll back the years with Collagen Induction Therapy',
    icon: '✨',
    href: '/services/micro-needling',
    image: '/images/services/micro-needling.jpeg',
  },
  {
    id: 'anti-wrinkle',
    name: 'Anti-Wrinkle Injections',
    description: 'More laughter, less laugh lines',
    icon: '😊',
    href: '/services/anti-wrinkle',
    image: '/images/services/anti-wrinkle.jpeg',
  },
  {
    id: 'dermal-fillers',
    name: 'Dermal Fillers',
    description: 'Enhance your natural beauty with artistry',
    icon: '💎',
    href: '/services/dermal-fillers',
    image: '/images/services/dermal-fillers.jpeg',
  },
  {
    id: 'lip-filler',
    name: 'Lip Filler',
    description: 'Plumper, sexier, more hydrated pout',
    icon: '💋',
    href: '/services/lip-filler',
    image: '/images/services/lip-filler.webp',
  },
  {
    id: 'hair-restoration',
    name: 'Hair Restoration',
    description: 'Bring thinning hair back to life with PRF',
    icon: '🌿',
    href: '/services/hair-restoration',
    image: '/images/services/hair-restoration.jpeg',
  },
  {
    id: 'excessive-sweating',
    name: 'Excessive Sweating',
    description: 'Successfully treat Hyperhidrosis symptoms',
    icon: '💧',
    href: '/services/excessive-sweating',
    image: '/images/services/excessive-sweating.jpeg',
  },
  {
    id: 'skin-hydrators',
    name: 'Skin Hydrators',
    description: 'Radiate a natural glow with Skin Boosters',
    icon: '🌟',
    href: '/services/skin-hydrators',
    image: '/images/services/skin-hydrators.jpeg',
  },
  {
    id: 'corticosteroid',
    name: 'Corticosteroid Injections',
    description: 'Acne treatment and hypertrophic scar treatment',
    icon: '💉',
    href: '/services/corticosteroid-injections',
    image: '/images/services/corticosteroid-injections.webp',
  },
]

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !cardsRef.current) return

    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Stagger animation for service cards
    const cards = Array.from(cardsRef.current.children)
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotationY: -15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Enhanced hover effects with GSAP
    cards.forEach((card) => {
      const cardElement = card as HTMLElement
      const image = cardElement.querySelector('img')
      const arrow = cardElement.querySelector('svg')

      cardElement.addEventListener('mouseenter', () => {
        gsap.to(cardElement, {
          y: -10,
          scale: 1.02,
          boxShadow: '0 25px 50px rgba(219, 39, 119, 0.2)',
          duration: 0.4,
          ease: 'power2.out',
        })
        if (image) {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
        if (arrow) {
          gsap.to(arrow, {
            x: 5,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      })

      cardElement.addEventListener('mouseleave', () => {
        gsap.to(cardElement, {
          y: 0,
          scale: 1,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power2.out',
        })
        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
          })
        }
        if (arrow) {
          gsap.to(arrow, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gradient-to-b from-champagne-50 via-champagne-100 to-champagne-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-champagne-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <div className="mb-4">
            <span className="inline-block text-sm font-bold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Professional Treatments
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-neutral-800 mb-6 leading-tight">
            Our Services
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury aesthetic treatments delivered by certified medical professionals
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <Link href={service.href}>
                <div className="card-premium rounded-3xl h-full flex flex-col">
                  {/* Image Container - Elegant */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-champagne-50 to-primary-50 flex items-center justify-center p-8 group-hover:from-primary-50 group-hover:to-champagne-50 transition-all duration-500">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden elevated-shadow ring-2 ring-primary-100/30 group-hover:ring-primary-300/50 transition-all duration-500 group-hover:scale-110">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-champagne-50/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 mb-6 flex-1 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Elegant CTA */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm pt-4 border-t border-primary-100/50 group-hover:border-primary-300 transition-colors duration-300">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
