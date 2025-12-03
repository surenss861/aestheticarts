import Link from 'next/link'
import Image from 'next/image'
import { Mail, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms and Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ],
}

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:info@aestheticarts.ca',
    icon: Mail,
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/aestheticarts',
    icon: Facebook,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/aestheticarts',
    icon: Instagram,
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-900 via-neutral-900 to-black text-neutral-300 overflow-hidden border-t border-neutral-800">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.webp"
                alt="Aesthetic Arts Skin Boutique"
                width={200}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Professional aesthetic treatments in Toronto. Transform your natural beauty with trusted care.
            </p>
            <div className="space-y-2 text-sm text-neutral-500">
              <p className="font-medium text-neutral-400">2444 Danforth Avenue</p>
              <p>Toronto, ON M4C 1K9</p>
              <p className="mt-4 text-primary-400 font-semibold">416-991-SKIN (7546)</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.main.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay in the Loop</h3>
            <p className="text-neutral-400 mb-4 text-sm">
              Subscribe to receive updates on new services and special offers.
            </p>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-14 h-14 rounded-xl bg-neutral-800/50 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-primary-600 hover:to-primary-500 transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="text-sm text-neutral-500">We Accept:</span>
            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <span>VISA</span>
              <span>•</span>
              <span>AMEX</span>
              <span>•</span>
              <span>DISCOVER</span>
              <span>•</span>
              <span>Afterpay</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} Aesthetic Arts Skin Boutique. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

