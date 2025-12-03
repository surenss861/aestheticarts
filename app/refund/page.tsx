import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy | Aesthetic Arts Skin Boutique',
  description: 'Refund policy for Aesthetic Arts Skin Boutique services.',
}

export default function RefundPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-8">
            Refund Policy
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 text-neutral-700 leading-relaxed">
            <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">General Policy</h2>
              <p>
                Due to the nature of aesthetic treatments and the personalized service provided, all sales are
                final. We do not offer refunds for completed treatments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Appointment Cancellations</h2>
              <p>
                Appointments cancelled with at least 24 hours notice may be rescheduled without penalty.
                Cancellations with less than 24 hours notice may be subject to a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Treatment Packages</h2>
              <p>
                Treatment packages are non-refundable but may be transferable. Unused treatments expire
                according to the terms specified at purchase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Satisfaction Guarantee</h2>
              <p>
                We strive to ensure your satisfaction. If you have concerns about your treatment, please
                contact us within 48 hours to discuss your options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Us</h2>
              <p>
                For questions about our refund policy, please contact us:
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

