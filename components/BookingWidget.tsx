'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { toast } from 'sonner'

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

const services = [
  { value: 'micro-needling', label: 'Micro-Needling' },
  { value: 'anti-wrinkle', label: 'Anti-Wrinkle Injections' },
  { value: 'dermal-fillers', label: 'Dermal Fillers' },
  { value: 'lip-filler', label: 'Lip Filler' },
  { value: 'hair-restoration', label: 'Hair Restoration' },
  { value: 'excessive-sweating', label: 'Excessive Sweating' },
  { value: 'skin-hydrators', label: 'Skin Hydrators' },
  { value: 'corticosteroid', label: 'Corticosteroid Injections' },
  { value: 'consultation', label: 'Free Consultation' },
]

export default function BookingWidget() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  })

  const onSubmit = async (data: BookingFormData) => {
    try {
      // TODO: Integrate with Calendly, JaneApp, or Fresha
      console.log('Booking request:', data)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      
      toast.success('Appointment request submitted!', {
        description: 'We\'ll confirm your appointment within 24 hours.',
        duration: 5000,
      })
      
      reset()
    } catch (error) {
      toast.error('Failed to submit booking', {
        description: 'Please try again or call us directly.',
        duration: 4000,
      })
    }
  }

  return (
    <div>
      {/* Option 1: Embed Calendly/JaneApp here */}
      {/* <div className="calendly-inline-widget" data-url="YOUR_CALENDLY_URL" style={{minWidth:320,height:700}}></div> */}
      
      {/* Option 2: Custom booking form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.name 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.email 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.phone 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Service *
            </label>
            <select
              id="service"
              {...register('service')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.service 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-2" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              min={new Date().toISOString().split('T')[0]}
              {...register('date')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.date 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            />
            {errors.date && (
              <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-neutral-700 mb-2">
              <Clock className="w-4 h-4 inline mr-2" />
              Preferred Time *
            </label>
            <input
              type="time"
              id="time"
              {...register('time')}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
                errors.time 
                  ? 'border-red-300 focus:border-red-500' 
                  : 'border-neutral-300 focus:border-primary-500'
              } focus:outline-none focus:ring-2 focus:ring-primary-200`}
            />
            {errors.time && (
              <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
            )}
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
            {...register('message')}
            className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors resize-none"
            placeholder="Tell us about your goals or any questions you have..."
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-premium w-full text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <span>Request Appointment</span>
          )}
        </button>
        
        <p className="text-xs text-neutral-500 text-center">
          This form is HIPAA-compliant. Your information is secure and confidential.
        </p>
      </form>
    </div>
  )
}
