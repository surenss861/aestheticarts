import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata: Metadata = {
  title: 'Our Services | Aesthetic Arts Skin Boutique',
  description: 'Professional aesthetic treatments including micro-needling, anti-wrinkle injections, dermal fillers, hair restoration, and more in Toronto.',
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
            Discover our comprehensive range of professional aesthetic treatments designed to
            enhance your natural beauty and boost your confidence.
          </p>
        </div>
      </section>
      <ServicesGrid />
    </div>
  )
}

