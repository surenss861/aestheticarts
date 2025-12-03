'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Meena',
    location: 'Toronto',
    rating: 5,
    text: 'This was probably the best experience I\'ve ever had with fillers. Nurse Amy was very detailed and informative. She explained every step of the process and took a fair amount of time ensuring she understood what I wanted and making sure the shape was the best it could be. Her space was very clean and calming, and she sanitized regularly as she went along. I would definitely recommend going here!',
  },
  {
    id: 2,
    name: 'Sarah',
    location: 'Toronto',
    rating: 5,
    text: 'Amy is incredibly professional and knowledgeable. She made me feel comfortable throughout the entire process. The results exceeded my expectations!',
  },
  {
    id: 3,
    name: 'Jessica',
    location: 'Toronto',
    rating: 5,
    text: 'I\'ve been coming to Aesthetic Arts for over a year now and I couldn\'t be happier. The treatments are effective and Amy truly cares about her clients.',
  },
  {
    id: 4,
    name: 'Emily',
    location: 'Toronto',
    rating: 5,
    text: 'The best aesthetic clinic in Toronto! Professional service, beautiful results, and a welcoming atmosphere. Highly recommend!',
  },
]

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold text-primary-600 uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-4 leading-tight">
            Client Testimonials
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            What our clients say about their experience
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="card-modern rounded-xl p-8 sm:p-10 relative overflow-hidden">
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  
                  <Quote className="w-12 h-12 text-primary-200 mb-6" />
                  
                  <p className="text-xl text-neutral-700 mb-8 leading-relaxed font-light">
                    &quot;{testimonials[currentIndex].text}&quot;
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-6 border-t border-neutral-200">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-100 to-champagne-200 flex items-center justify-center text-primary-700 font-bold text-lg shadow-md">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-neutral-900">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-neutral-600 font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-neutral-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-neutral-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-neutral-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-neutral-700" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews CTA */}
        <div className="text-center mt-12">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <span>Read more reviews on Google</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

