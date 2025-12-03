'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, ArrowRight } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with email service (Mailchimp, ConvertKit, etc.)
    console.log('Submitting email:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          >
            <Mail className="w-10 h-10 text-white" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Stay Informed
          </h2>
          <p className="text-xl lg:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Subscribe to receive updates on new services and special offers
          </p>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-8 py-6 rounded-xl border-0 focus:outline-none focus:ring-4 focus:ring-white/30 text-neutral-900 placeholder-neutral-400 text-lg shadow-2xl"
              />
              <button
                type="submit"
                disabled={submitted}
                className="btn-premium text-primary-600 px-10 py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Sign Up</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
            <p className="text-xs text-neutral-500 mt-4">
              This form is protected by reCAPTCHA and the Google{' '}
              <a href="/privacy" className="text-primary-400 hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms" className="text-primary-400 hover:underline">
                Terms of Service
              </a>{' '}
              apply.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

