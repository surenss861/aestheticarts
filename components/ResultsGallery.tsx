'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const galleryItems = [
  {
    id: 1,
    title: 'Micro-Needling Results',
    category: 'Skin Rejuvenation',
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=800&q=80',
  },
  {
    id: 2,
    title: 'Dermal Filler Transformation',
    category: 'Facial Enhancement',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80',
  },
  {
    id: 3,
    title: 'Anti-Wrinkle Treatment',
    category: 'Wrinkle Reduction',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
  },
  {
    id: 4,
    title: 'Treatment Results',
    category: 'Aesthetic Enhancement',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
  },
  {
    id: 5,
    title: 'Lip Enhancement',
    category: 'Lip Filler',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80',
  },
  {
    id: 6,
    title: 'Skin Rejuvenation',
    category: 'Treatment Results',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  },
]

export default function ResultsGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current || !galleryRef.current) return

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

    // Stagger animation for gallery items
    const items = Array.from(galleryRef.current.children)
    gsap.fromTo(
      items,
      {
        opacity: 0,
        scale: 0.8,
        y: 60,
        rotationY: -20,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Enhanced hover effects
    items.forEach((item) => {
      const itemElement = item as HTMLElement
      const image = itemElement.querySelector('img')
      const overlay = itemElement.querySelector('.gallery-overlay')

      itemElement.addEventListener('mouseenter', () => {
        gsap.to(itemElement, {
          scale: 1.05,
          y: -10,
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          duration: 0.4,
          ease: 'power2.out',
        })
        if (image) {
          gsap.to(image, {
            scale: 1.15,
            duration: 0.5,
            ease: 'power2.out',
          })
        }
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.9,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      })

      itemElement.addEventListener('mouseleave', () => {
        gsap.to(itemElement, {
          scale: 1,
          y: 0,
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
          duration: 0.4,
          ease: 'power2.out',
        })
        if (image) {
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
          })
        }
        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.7,
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
    <section ref={sectionRef} className="py-24 bg-champagne-50">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-4 block">
            Results
          </span>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-6">
            Results Gallery
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            View results from our professional aesthetic treatments
          </p>
        </div>

        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Content Overlay */}
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <p className="text-xs font-medium text-white/80 mb-1 uppercase tracking-wide">
                  {item.category}
                </p>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-full hover:from-primary-700 hover:to-primary-600 transition-colors font-semibold shadow-md"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
