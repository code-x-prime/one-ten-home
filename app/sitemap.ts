import type { MetadataRoute } from 'next'
export const dynamic = 'force-static'
import { services } from '@/lib/content'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://onetenhomesolutions.com'
  return [
    '',
    'about',
    'services',
    'heating',
    'cooling',
    'contact',
    'privacy-policy',
    'terms-and-conditions',
    ...services.map((s) => `services/${s.slug}`),
  ].map((path) => ({
    url: `${base}/${path}`,
    changeFrequency: 'monthly' as const,
    priority: path ? 0.7 : 1,
  }))
}
