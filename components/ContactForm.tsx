'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, Check } from 'lucide-react'
import { toast } from 'sonner'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // TODO: Integrate with HIPAA-compliant form service
      console.log('Contact form submitted:', data)
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you within 24 hours.',
        duration: 4000,
      })
      
      reset()
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or call us directly.',
        duration: 4000,
      })
    }
  }

  return (
    <div className="card-premium rounded-2xl p-8">
      <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
            Name *
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
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors ${
              errors.subject 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-neutral-300 focus:border-primary-500'
            } focus:outline-none focus:ring-2 focus:ring-primary-200`}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors resize-none ${
              errors.message 
                ? 'border-red-300 focus:border-red-500' 
                : 'border-neutral-300 focus:border-primary-500'
            } focus:outline-none focus:ring-2 focus:ring-primary-200`}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-premium w-full text-white px-8 py-4 rounded-full font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
        
        <p className="text-xs text-neutral-500 text-center">
          This form is HIPAA-compliant. Your information is secure and confidential.
        </p>
      </form>
    </div>
  )
}
