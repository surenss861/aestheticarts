import { Metadata } from 'next'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'FAQs | Aesthetic Arts Skin Boutique',
  description: 'Frequently asked questions about aesthetic treatments, procedures, and services at Aesthetic Arts in Toronto.',
}

const faqs = [
  {
    question: 'What is micro-needling and how does it work?',
    answer: 'Micro-needling, also known as Collagen Induction Therapy, uses fine needles to create controlled micro-injuries in the skin. This stimulates your body\'s natural healing process, promoting collagen and elastin production. The result is smoother, firmer, and more radiant skin with improved texture and reduced fine lines.',
  },
  {
    question: 'How long do anti-wrinkle injections last?',
    answer: 'Anti-wrinkle injections (Botox, Dysport, Xeomin) typically last 3-4 months. Results vary by individual and treatment area. Regular maintenance treatments can help prolong results and prevent new wrinkles from forming.',
  },
  {
    question: 'Are dermal fillers safe?',
    answer: 'Yes, dermal fillers are FDA-approved and considered safe when administered by a qualified professional. We use premium hyaluronic acid fillers like Restylane and Belotero, which are biocompatible and can be dissolved if needed. Side effects are typically mild and temporary.',
  },
  {
    question: 'Is there any downtime after treatments?',
    answer: 'Most treatments have minimal to no downtime. You can typically return to your daily activities immediately. Some treatments may cause mild redness, swelling, or bruising that resolves within a few hours to days. We\'ll provide detailed post-treatment care instructions.',
  },
  {
    question: 'How do I prepare for my appointment?',
    answer: 'Before your appointment, avoid blood-thinning medications (with doctor approval), alcohol, and certain supplements. Arrive with clean skin, free of makeup. We recommend avoiding sun exposure and tanning beds before treatments. A detailed preparation guide will be provided during your consultation.',
  },
  {
    question: 'What is PRF hair restoration?',
    answer: 'PRF (Platelet Rich Fibrin) hair restoration uses your own blood platelets to stimulate hair growth. Blood is drawn, processed to extract growth factors, and then injected into the scalp. This natural, non-surgical treatment promotes hair follicle regeneration and increases hair density.',
  },
  {
    question: 'Do you offer consultations?',
    answer: 'Yes! We offer free consultations to discuss your goals, assess your needs, and create a personalized treatment plan. Consultations are an opportunity to ask questions, learn about treatments, and ensure we\'re the right fit for you.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards (VISA, AMEX, DISCOVER), and Afterpay. Payment is due at the time of service. We do not accept insurance for cosmetic treatments, but we can provide receipts for your records.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online through our website, call us at 416-991-SKIN (7546), or email info@aestheticarts.ca. We recommend booking in advance as appointments fill up quickly.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer: 'Your first visit includes a comprehensive consultation where we discuss your goals, medical history, and treatment options. We\'ll answer all your questions and create a personalized plan. If you decide to proceed with treatment, it can often be done the same day.',
  },
]

export default function FAQsPage() {
  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-primary-50 to-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-700">
              Everything you need to know about our treatments and services
            </p>
          </div>

          <FAQAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  )
}

