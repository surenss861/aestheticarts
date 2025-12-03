import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Aesthetic Arts Skin Boutique',
  description: 'Get in touch with Aesthetic Arts in Toronto. Book your consultation or ask us any questions.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                  Visit Us
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">Address</p>
                      <p className="text-neutral-600">
                        2444 Danforth Avenue<br />
                        Toronto, ON M4C 1K9
                      </p>
                      <a
                        href="https://maps.google.com/?q=2444+Danforth+Avenue+Toronto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">Phone</p>
                      <a
                        href="tel:4169917546"
                        className="text-neutral-600 hover:text-primary-600"
                      >
                        416-991-SKIN (7546)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">Email</p>
                      <a
                        href="mailto:info@aestheticarts.ca"
                        className="text-neutral-600 hover:text-primary-600"
                      >
                        info@aestheticarts.ca
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-neutral-900">Hours</p>
                      <div className="text-neutral-600 space-y-1">
                        <p>Monday - Thursday: 10am - 5pm</p>
                        <p>Friday: @radfordstudio - 55 Avenue Rd.</p>
                        <p>Saturday: By Appointment Only</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder with Unsplash image */}
              <div className="relative rounded-xl h-64 overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                  alt="Toronto location"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center p-4">
                  <p className="text-white font-medium">2444 Danforth Avenue, Toronto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

