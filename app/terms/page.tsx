import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms and Conditions | Aesthetic Arts Skin Boutique',
  description: 'Terms and conditions for using Aesthetic Arts Skin Boutique services.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-8">
            Terms and Conditions
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 text-neutral-700 leading-relaxed">
            <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision
                of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Services</h2>
              <p>
                Aesthetic Arts Skin Boutique provides aesthetic and cosmetic treatments. All services are provided
                by licensed professionals. Results may vary by individual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Appointments</h2>
              <p>
                Appointments are subject to availability. We require 24-hour notice for cancellations. Late
                cancellations or no-shows may be subject to fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Payment</h2>
              <p>
                Payment is due at the time of service. We accept cash, credit cards, and Afterpay. All sales
                are final unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
              <p>
                Aesthetic Arts Skin Boutique shall not be liable for any indirect, incidental, special, or
                consequential damages resulting from the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Information</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                Email: info@aestheticarts.ca<br />
                Phone: 416-991-SKIN (7546)
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

