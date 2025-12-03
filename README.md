# Aesthetic Arts Skin Boutique - Modern Website

A modern, conversion-focused website for Aesthetic Arts Skin Boutique built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern, minimalist hero section with gradient backgrounds
- 🎯 Streamlined navigation with mega-menu for treatments
- 📱 Mobile-first responsive design
- 🎨 Cohesive pink/soft neutral brand colors
- ⚡ Fast performance with Next.js 14 App Router
- 🔒 HIPAA-compliant form structure
- 📊 SEO optimized with schema markup
- 🎭 Smooth animations with Framer Motion
- 💬 Testimonials carousel
- 📸 Results gallery
- 📅 Booking integration ready (Calendly/JaneApp/Fresha)
- 🔍 Accessible components with Headless UI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **Icons**: Lucide React
- **Hosting**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata and schema
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── services/           # Services listing and individual pages
│   ├── book/               # Booking page
│   ├── contact/            # Contact page
│   ├── faqs/               # FAQs page
│   └── gallery/            # Gallery page
├── components/
│   ├── Navigation.tsx      # Main navigation with mega-menu
│   ├── Hero.tsx            # Hero section
│   ├── ServicesGrid.tsx    # Services grid component
│   ├── TestimonialsCarousel.tsx
│   ├── ResultsGallery.tsx
│   ├── BookingWidget.tsx   # Booking form/widget
│   └── ...
└── ...
```

## Next Steps

1. **Add Images**: Replace placeholder images in `/public/images/` with actual photos
2. **Booking Integration**: Integrate Calendly, JaneApp, or Fresha in `BookingWidget.tsx`
3. **Email Service**: Connect newsletter signup to your email service (Mailchimp, ConvertKit, etc.)
4. **Google Reviews**: Add your Google Reviews link in `TestimonialsCarousel.tsx`
5. **Analytics**: Add Google Analytics or Plausible
6. **CMS**: Consider integrating Sanity or Contentful for content management
7. **Forms**: Connect forms to HIPAA-compliant service (JotForm HIPAA, etc.)

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Customization

- **Colors**: Edit `tailwind.config.ts` to adjust the color palette
- **Fonts**: Update fonts in `app/layout.tsx`
- **Content**: Update service descriptions, FAQs, and other content in respective page files

## License

Private - Aesthetic Arts Skin Boutique

# aestheticarts
