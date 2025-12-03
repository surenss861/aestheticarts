'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-champagne-50 to-neutral-50 pt-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-9xl font-serif font-bold text-gold-600 mb-4">404</h1>
        <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-neutral-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-600 to-gold-500 text-white px-8 py-4 rounded-full hover:from-gold-700 hover:to-gold-600 transition-colors font-medium"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center space-x-2 bg-white text-gold-600 px-8 py-4 rounded-full hover:bg-champagne-50 transition-colors font-medium border-2 border-gold-600"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  )
}

