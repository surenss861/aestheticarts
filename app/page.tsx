import { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import ServicesGrid from '@/components/ServicesGrid'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ResultsGallery from '@/components/ResultsGallery'
import AboutPreview from '@/components/AboutPreview'
import NewsletterSignup from '@/components/NewsletterSignup'
import SectionDivider from '@/components/SectionDivider'

export const metadata: Metadata = {
  title: 'Aesthetic Arts Skin Boutique | Premium Cosmetic Treatments in Toronto',
  description: 'Professional aesthetic treatments including micro-needling, anti-wrinkle injections, dermal fillers, and hair restoration. Certified cosmetic nurse in Toronto. Book your consultation today.',
  keywords: 'aesthetic treatments, micro-needling, botox, dermal fillers, hair restoration, Toronto, cosmetic nurse, anti-wrinkle injections, lip filler',
  openGraph: {
    title: 'Aesthetic Arts Skin Boutique | Premium Cosmetic Treatments',
    description: 'Professional aesthetic treatments delivered by certified medical professionals in Toronto',
    url: 'https://www.aestheticarts.ca',
    siteName: 'Aesthetic Arts Skin Boutique',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: 'https://www.aestheticarts.ca/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Aesthetic Arts Skin Boutique',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Arts Skin Boutique',
    description: 'Professional aesthetic treatments in Toronto',
    images: ['https://www.aestheticarts.ca/logo.webp'],
  },
  alternates: {
    canonical: 'https://www.aestheticarts.ca',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider variant="light" className="my-0" />
      <TrustBadges />
      <SectionDivider variant="gradient" />
      <ServicesGrid />
      <SectionDivider variant="light" />
      <AboutPreview />
      <SectionDivider variant="dark" />
      <TestimonialsCarousel />
      <SectionDivider variant="dark" />
      <ResultsGallery />
      <SectionDivider variant="light" />
      <NewsletterSignup />
    </>
  )
}
