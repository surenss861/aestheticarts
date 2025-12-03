import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Aesthetic Arts Skin Boutique',
  description: 'Privacy policy for Aesthetic Arts Skin Boutique. Learn how we protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 mb-8">
            Privacy Policy
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6 text-neutral-700 leading-relaxed">
            <p className="text-sm text-neutral-500">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Introduction</h2>
              <p>
                Aesthetic Arts Skin Boutique (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Information We Collect</h2>
              <p>We may collect information about you in various ways:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Personal information (name, email, phone number) provided through contact forms</li>
                <li>Health information disclosed during consultations</li>
                <li>Payment information for services</li>
                <li>Website usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">How We Use Your Information</h2>
              <p>We use collected information for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Providing and improving our services</li>
                <li>Processing appointments and consultations</li>
                <li>Communicating with you about your treatments</li>
                <li>Complying with legal obligations (HIPAA/PIPEDA)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">HIPAA/PIPEDA Compliance</h2>
              <p>
                As a healthcare provider, we are committed to maintaining the confidentiality of your health
                information in accordance with HIPAA (Health Insurance Portability and Accountability Act) and
                PIPEDA (Personal Information Protection and Electronic Documents Act) regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
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

