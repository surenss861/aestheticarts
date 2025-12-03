'use client'

import { useState, useEffect } from 'react'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 lg:py-40 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-rosegold-500/10 rounded-full blur-3xl" />
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.5) 1px, transparent 0)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-semibold text-rosegold-400 uppercase tracking-wider mb-4 glass-dark px-4 py-2 rounded-full shadow-dark">
            Testimonials
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Client Testimonials
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
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
              <div className="card-dark rounded-2xl p-10 sm:p-14 relative overflow-hidden">
                {/* Decorative quote mark */}
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote className="w-24 h-24 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-8">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-7 h-7 text-gold-400 fill-gold-400"
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl sm:text-2xl text-white/95 leading-relaxed mb-8 font-light italic">
                    &ldquo;{testimonials[currentIndex].text}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-lg shadow-luxury-lg">
                      {testimonials[currentIndex].name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-white/60 text-sm">
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="glass-dark p-3 rounded-full text-white hover:text-rosegold-400 transition-colors shadow-dark hover:shadow-luxury-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-rosegold-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={next}
              className="glass-dark p-3 rounded-full text-white hover:text-rosegold-400 transition-colors shadow-dark hover:shadow-luxury-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
