import { Metadata } from 'next'
import ResultsGallery from '@/components/ResultsGallery'

export const metadata: Metadata = {
  title: 'Results Gallery | Aesthetic Arts Skin Boutique',
  description: 'View before and after photos from our aesthetic treatments including micro-needling, dermal fillers, and more.',
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-4">
            Results Gallery
          </h1>
          <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
            See the transformative results from our professional aesthetic treatments
          </p>
        </div>
      </section>
      <ResultsGallery />
    </div>
  )
}

