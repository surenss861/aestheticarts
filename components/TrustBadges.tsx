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
      <section className="py-16 bg-gradient-to-b from-champagne-50 to-champagne-100 border-b border-champagne-200/50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {badges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: 'spring' }}
                  className="group relative"
                >
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 h-full border border-primary-100/50 group-hover:border-primary-200 group-hover:-translate-y-1">
                    {/* Professional Icon */}
                    <div className="inline-flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-50 to-champagne-100 flex items-center justify-center group-hover:from-primary-100 group-hover:to-champagne-200 transition-all duration-300">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {badge.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{badge.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Brands We Work With Section */}
      <section className="py-20 bg-champagne-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-4">
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
                <div className="bg-neutral-50 rounded-xl p-6 text-center h-full flex items-center justify-center border border-neutral-200 hover:border-primary-300 hover:bg-white transition-all duration-300 hover:shadow-md">
                  <p className={`font-bold text-lg ${brand.color} group-hover:scale-105 transition-transform`}>
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

