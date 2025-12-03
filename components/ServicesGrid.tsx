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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 lg:mb-20">
          <div className="mb-4">
            <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider">
              Professional Treatments
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-4 leading-tight">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Experience luxury aesthetic treatments delivered by certified medical professionals
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group">
              <Link href={service.href}>
                <div className="card-modern rounded-xl h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 mb-4 flex-1 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center text-primary-600 font-medium text-sm pt-4 border-t border-neutral-100 group-hover:border-primary-200 transition-colors">
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
