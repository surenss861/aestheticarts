import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft, Check } from 'lucide-react'
import BookingWidget from '@/components/BookingWidget'

const services: Record<string, {
  title: string
  description: string
  longDescription: string
  benefits: string[]
  process: string[]
  image: string
}> = {
  'micro-needling': {
    title: 'Micro-Needling',
    description: 'Roll back the years with Collagen Induction Therapy (CIT)',
    longDescription: 'Micro-needling is a minimally invasive treatment that stimulates your skin\'s natural collagen production. Using fine needles, we create controlled micro-injuries that trigger your body\'s healing response, resulting in smoother, firmer, and more radiant skin.',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture and tone',
      'Minimizes pore size',
      'Fades acne scars and hyperpigmentation',
      'Enhances product absorption',
      'Safe for all skin types',
    ],
    process: [
      'Consultation to assess your skin concerns',
      'Cleansing and numbing (if needed)',
      'Micro-needling treatment with Dermapen 4',
      'Application of serums and soothing products',
      'Post-treatment care instructions',
    ],
    image: '/images/services/micro-needling.jpeg',
  },
  'anti-wrinkle': {
    title: 'Anti-Wrinkle Injections',
    description: 'You deserve more laughter and less laugh lines!',
    longDescription: 'Anti-wrinkle injections (Botox, Dysport, Xeomin) temporarily relax targeted facial muscles to smooth out dynamic wrinkles. This FDA-approved treatment is perfect for reducing crow\'s feet, forehead lines, and frown lines.',
    benefits: [
      'Smooths dynamic wrinkles',
      'Prevents new wrinkles from forming',
      'Quick treatment (15-30 minutes)',
      'No downtime required',
      'Natural-looking results',
      'Results last 3-4 months',
    ],
    process: [
      'Consultation to discuss your goals',
      'Mapping injection points',
      'Quick, virtually painless injections',
      'Immediate return to daily activities',
      'Follow-up appointment in 2 weeks',
    ],
    image: '/images/services/anti-wrinkle.jpeg',
  },
  'dermal-fillers': {
    title: 'Dermal Fillers',
    description: 'It\'s about enhancing your natural beauty – with artistry!',
    longDescription: 'Dermal fillers restore volume, smooth lines, and enhance facial contours. Using premium hyaluronic acid fillers like Restylane and Belotero, we can plump lips, enhance cheekbones, smooth nasolabial folds, and restore youthful volume.',
    benefits: [
      'Restores lost volume',
      'Smooths deep wrinkles and folds',
      'Enhances facial contours',
      'Immediate, visible results',
      'Minimal downtime',
      'Results last 6-18 months',
    ],
    process: [
      'Detailed consultation and facial analysis',
      'Treatment planning and marking',
      'Numbing cream application',
      'Precise filler injection',
      'Massage and shaping',
      'Post-treatment care instructions',
    ],
    image: '/images/services/dermal-fillers.jpeg',
  },
  'lip-filler': {
    title: 'Lip Filler',
    description: 'Give your lips a plumper, sexier, and more hydrated pout',
    longDescription: 'Lip fillers enhance your natural lip shape, add volume, and create definition. We use premium hyaluronic acid fillers to achieve natural-looking, kissable lips that complement your facial features.',
    benefits: [
      'Adds volume and fullness',
      'Defines lip borders',
      'Smooths vertical lip lines',
      'Improves lip symmetry',
      'Hydrates and plumps',
      'Natural-looking results',
    ],
    process: [
      'Consultation to discuss desired look',
      'Numbing cream application',
      'Precise filler injection',
      'Massage and shaping',
      'Before/after photos',
      'Post-care instructions',
    ],
    image: '/images/services/lip-filler.webp',
  },
  'hair-restoration': {
    title: 'Hair Restoration',
    description: 'Balding, thinning hair can be brought back to life with Platelet Rich Fibrin scalp injections',
    longDescription: 'PRF (Platelet Rich Fibrin) hair restoration uses your body\'s own growth factors to stimulate hair follicles, promote new hair growth, and improve hair density. This natural, non-surgical treatment is ideal for both men and women experiencing hair thinning.',
    benefits: [
      'Stimulates hair growth',
      'Increases hair density',
      'Thickens existing hair',
      'Natural, non-surgical approach',
      'Uses your own blood platelets',
      'Safe and effective',
    ],
    process: [
      'Consultation and scalp assessment',
      'Blood draw (small sample)',
      'PRF preparation using centrifuge',
      'Scalp injections with PRF',
      'Multiple sessions for best results',
      'Follow-up care instructions',
    ],
    image: '/images/services/hair-restoration.jpeg',
  },
  'excessive-sweating': {
    title: 'Excessive Sweating Treatment',
    description: 'Successfully treat the symptoms of Hyperhidrosis - stay dry, stay clean',
    longDescription: 'Hyperhidrosis (excessive sweating) can be effectively treated with targeted injections that block the nerve signals responsible for excessive sweat production. This treatment is particularly effective for underarms, hands, and feet.',
    benefits: [
      'Reduces excessive sweating',
      'Long-lasting results (6-12 months)',
      'Boosts confidence',
      'Improves quality of life',
      'Quick treatment',
      'Minimal side effects',
    ],
    process: [
      'Consultation to assess severity',
      'Mapping of treatment areas',
      'Targeted injections',
      'Immediate return to activities',
      'Results visible within 1-2 weeks',
      'Follow-up as needed',
    ],
    image: '/images/services/excessive-sweating.jpeg',
  },
  'skin-hydrators': {
    title: 'Skin Hydrators',
    description: 'Radiate a natural glow with Skin Boosters',
    longDescription: 'Skin boosters are injectable hyaluronic acid treatments that deeply hydrate your skin from within. Unlike fillers that add volume, skin boosters improve skin quality, texture, and radiance by delivering intense hydration to the deeper layers of your skin.',
    benefits: [
      'Deep skin hydration',
      'Improves skin texture',
      'Enhances natural glow',
      'Reduces fine lines',
      'Minimizes pores',
      'Long-lasting results',
    ],
    process: [
      'Skin assessment and consultation',
      'Treatment area preparation',
      'Multiple micro-injections',
      'Immediate hydration boost',
      'Series of treatments recommended',
      'Maintenance sessions',
    ],
    image: '/images/services/skin-hydrators.jpeg',
  },
  'corticosteroid-injections': {
    title: 'Corticosteroid Injections',
    description: 'Acne Treatment + Hypertrophic Scar Treatment with Kenalog',
    longDescription: 'Corticosteroid injections (Kenalog) are highly effective for treating inflammatory acne lesions and reducing the appearance of hypertrophic and keloid scars. This targeted treatment reduces inflammation and flattens raised scars.',
    benefits: [
      'Reduces inflammatory acne',
      'Flattens raised scars',
      'Minimizes keloid formation',
      'Quick treatment',
      'Targeted approach',
      'Visible improvement',
    ],
    process: [
      'Consultation and skin assessment',
      'Identification of treatment areas',
      'Precise injection into lesions/scars',
      'Multiple sessions may be needed',
      'Post-treatment care',
      'Follow-up appointments',
    ],
    image: '/images/services/corticosteroid-injections.webp',
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug]
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }
  return {
    title: `${service.title} | Aesthetic Arts Skin Boutique`,
    description: service.description,
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug]

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-neutral-700 mb-6">
                {service.description}
              </p>
              <Link
                href="/book"
                className="inline-flex items-center space-x-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-colors font-medium"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
            About This Treatment
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            {service.longDescription}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">
            What to Expect
          </h2>
          <div className="space-y-4">
            {service.process.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
                  {index + 1}
                </div>
                <p className="text-neutral-700 text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              Ready to Get Started?
            </h2>
            <p className="text-center text-neutral-600 mb-8">
              Book your free consultation to discuss your goals and learn more about this treatment.
            </p>
            <BookingWidget />
          </div>
        </div>
      </section>
    </div>
  )
}

