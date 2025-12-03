import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.aestheticarts.ca'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/micro-needling',
    '/services/anti-wrinkle',
    '/services/dermal-fillers',
    '/services/lip-filler',
    '/services/hair-restoration',
    '/services/excessive-sweating',
    '/services/skin-hydrators',
    '/services/corticosteroid-injections',
    '/book',
    '/contact',
    '/faqs',
    '/gallery',
    '/privacy',
    '/terms',
    '/refund',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}

