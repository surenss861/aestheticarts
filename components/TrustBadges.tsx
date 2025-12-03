'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Heart, Star } from 'lucide-react'

const badges = [
  {
    icon: Award,
    title: 'Certified Cosmetic Nurse',
    description: 'RPN Licensed',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Your Privacy Protected',
  },
  {
    icon: Heart,
    title: '5-Star Rated',
    description: 'Trusted by Clients',
  },
  {
    icon: Star,
    title: 'Expert Care',
    description: 'Years of Experience',
  },
]

const brands = [
  { name: 'Dermapen 4', color: 'text-blue-600' },
  { name: 'REVANESSE', color: 'text-neutral-900' },
  { name: 'Restylane', color: 'text-blue-700' },
  { name: 'Dysport', color: 'text-green-600' },
  { name: 'XEOMIN', color: 'text-pink-600' },
  { name: 'BELOTERO', color: 'text-orange-600' },
  { name: 'BOTOX', color: 'text-purple-600' },
  { name: 'DUO PROCESS FOR PRF', color: 'text-red-600' },
]

export default function TrustBadges() {
  return (
    <>
      {/* Trust Badges Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group"
                >
                  <div className="card-modern rounded-lg p-5 text-center h-full">
                    <div className="inline-flex items-center justify-center mb-3">
                      <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-neutral-900 mb-1">
                      {badge.title}
                    </h3>
                    <p className="text-xs text-neutral-600">{badge.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands We Work With Section */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-3 leading-tight">
              Brands We Work With
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We use only the finest, FDA-approved products from trusted manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="card-modern rounded-lg p-5 text-center h-full flex items-center justify-center">
                  <p className={`font-semibold text-base ${brand.color} group-hover:scale-105 transition-transform`}>
                    {brand.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

