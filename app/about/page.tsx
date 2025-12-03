import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Award, Sparkles, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Aesthetic Arts Skin Boutique',
  description: 'Meet Amy Jagarinec RPN, your trusted aesthetic nurse injector in Toronto. Learn about our mission to enhance your natural beauty.',
}

const values = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every treatment is customized to your unique needs, goals, and skin type. We take the time to understand what matters most to you.',
  },
  {
    icon: Sparkles,
    title: 'Natural Enhancement',
    description: 'We believe in enhancing your natural beauty, not masking it. Our approach focuses on subtle, elegant results that make you feel like yourself—just better.',
  },
  {
    icon: Award,
    title: 'Expert Knowledge',
    description: 'With years of experience and continuous education, we stay at the forefront of aesthetic treatments and techniques.',
  },
  {
    icon: Users,
    title: 'Trusted Partnership',
    description: 'We build lasting relationships with our clients, supporting you throughout your aesthetic journey with care and professionalism.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-champagne-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-6">
                Hey There, Beauty Enthusiasts!
              </h1>
              <p className="text-xl text-neutral-700 mb-4 leading-relaxed">
                Welcome to <span className="font-semibold text-primary-600">Aesthetic Arts</span>!
                I&apos;m Amy Jagarinec RPN, a trusted aesthetic nurse injector on a mission to help you
                discover the transformative magic of aesthetic services.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about/amy.webp"
                alt="Amy Jagarinec RPN - Aesthetic Arts Skin Boutique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-8 text-center">
            My Mission
          </h2>
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <p>
              My passion for aesthetics stems from seeing its incredible impact on confidence and
              self-expression. I believe each of you is a unique canvas, waiting to be adorned with
              subtle enhancements that reflect your inner beauty.
            </p>
            <p>
              At Aesthetic Arts, we don&apos;t just perform treatments—we create experiences. Every
              consultation, every injection, every follow-up is designed to make you feel heard,
              valued, and beautiful.
            </p>
            <p className="text-xl font-semibold text-primary-600 text-center pt-4">
              My ultimate goal? To make you feel like the masterpiece you truly are.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our services, read testimonials from clients, and let&apos;s chat about how we can
            enhance your natural beauty!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="bg-white text-primary-600 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors font-medium"
            >
              Book a Free Consultation
            </a>
            <a
              href="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-medium"
            >
              Explore Treatments
            </a>
          </div>
          <p className="mt-8 text-lg">
            Thank you for choosing Aesthetic Arts!
          </p>
          <p className="text-xl font-semibold mt-2">
            Get ready to shine brighter than ever! ✨✨✨
          </p>
          <p className="mt-6 text-lg">
            Much Love,<br />
            <span className="font-semibold">Nurse Amy</span>
          </p>
        </div>
      </section>
    </div>
  )
}

