'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
  return (
    <section className="py-24 bg-white">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-bold text-gold-600 uppercase tracking-wider mb-4 block">
            Results
          </span>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-6">
            Results Gallery
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            View results from our professional aesthetic treatments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <p className="text-xs font-medium text-white/80 mb-1 uppercase tracking-wide">
                  {item.category}
                </p>
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-6 py-3 rounded-md hover:from-gold-700 hover:to-gold-600 transition-colors font-semibold shadow-md"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

