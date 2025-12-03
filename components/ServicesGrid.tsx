'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
  return (
    <section className="py-32 bg-gradient-to-b from-champagne-50 via-white to-champagne-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gold-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-champagne-200/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-sm font-bold text-gold-600 uppercase tracking-wider">
            Professional Treatments
          </span>
        </motion.div>
          <h2 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience luxury aesthetic treatments delivered by certified medical professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gold-100/50 group-hover:border-gold-200 group-hover:scale-[1.02]">
                  {/* Image Container - Elegant */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-champagne-50 to-gold-50 flex items-center justify-center p-8">
                    <div className="relative w-48 h-48 rounded-2xl overflow-hidden shadow-xl ring-2 ring-gold-100/50 group-hover:ring-gold-200 transition-all duration-300 group-hover:scale-105">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-champagne-50/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-gold-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-neutral-600 mb-6 flex-1 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Elegant CTA */}
                    <div className="flex items-center text-gold-600 font-semibold text-sm pt-4 border-t border-gold-100/50 group-hover:border-gold-200 transition-colors">
                      <span className="group-hover:translate-x-1 transition-transform inline-block">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
