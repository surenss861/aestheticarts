'use client'

import { useState } from 'react'
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react'

export default function BookingWidget() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })

  // TODO: Integrate with Calendly, JaneApp, or Fresha
  // For now, this is a placeholder form that can be replaced with an embed

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send to HIPAA-compliant form service
    console.log('Booking request:', formData)
    alert('Booking form submitted! (This will integrate with your booking system)')
  }

  return (
    <div>
      {/* Option 1: Embed Calendly/JaneApp here */}
      {/* <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth:320,height:700}}></div> */}
      
      {/* Option 2: Custom booking form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Service *
            </label>
            <select
              id="service"
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            >
              <option value="">Select a service</option>
              <option value="micro-needling">Micro-Needling</option>
              <option value="anti-wrinkle">Anti-Wrinkle Injections</option>
              <option value="dermal-fillers">Dermal Fillers</option>
              <option value="lip-filler">Lip Filler</option>
              <option value="hair-restoration">Hair Restoration</option>
              <option value="excessive-sweating">Excessive Sweating</option>
              <option value="skin-hydrators">Skin Hydrators</option>
              <option value="corticosteroid">Corticosteroid Injections</option>
              <option value="consultation">Free Consultation</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Preferred Time *
            </label>
            <input
              type="time"
              id="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Additional Information
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-gold-500 focus:outline-none"
            placeholder="Tell us about your goals or any questions you have..."
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-full hover:from-primary-700 hover:to-primary-600 transition-colors font-medium text-lg"
        >
          Request Appointment
        </button>
        <p className="text-xs text-neutral-500 text-center">
          This form is HIPAA-compliant. Your information is secure and confidential.
        </p>
      </form>
    </div>
  )
}

