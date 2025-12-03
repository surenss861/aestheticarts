import { Metadata } from 'next'
import BookingWidget from '@/components/BookingWidget'
import { Calendar, Clock, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book Appointment | Aesthetic Arts Skin Boutique',
  description: 'Book your free consultation or treatment appointment at Aesthetic Arts in Toronto.',
}

export default function BookPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-neutral-700 max-w-2xl mx-auto">
              Schedule your free consultation or treatment appointment. We&apos;re here to help you achieve your aesthetic goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Location</h3>
              <p className="text-neutral-600">
                2444 Danforth Avenue<br />
                Toronto, ON M4C 1K9
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Hours</h3>
              <p className="text-neutral-600">
                Mon-Thu: 10am - 5pm<br />
                Fri: @radfordstudio - 55 Avenue Rd.<br />
                Sat: By Appointment<br />
                Sun: Closed
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="w-8 h-8 text-primary-600 mb-4" />
              <h3 className="font-semibold text-neutral-900 mb-2">Contact</h3>
              <p className="text-neutral-600">
                416-991-SKIN (7546)<br />
                info@aestheticarts.ca
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

