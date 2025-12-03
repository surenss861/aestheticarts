import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import ServicesGrid from '@/components/ServicesGrid'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ResultsGallery from '@/components/ResultsGallery'
import AboutPreview from '@/components/AboutPreview'
import NewsletterSignup from '@/components/NewsletterSignup'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <AboutPreview />
      <TestimonialsCarousel />
      <ResultsGallery />
      <NewsletterSignup />
    </>
  )
}

