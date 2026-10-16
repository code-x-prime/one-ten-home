import type { Metadata } from 'next'
import { faqs, services } from '@/lib/content'

export const SITE_URL = 'https://onetenhomesolutions.com'
export const SITE_NAME = 'One Ten Home Solutions'
const OG_IMAGE = '/og-image.jpg'

export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path || '/' },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: 'en_CA',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [OG_IMAGE],
    },
  }
}

export const pageSeo: Record<string, { title: string; description: string }> = {
  about: {
    title: 'About Us – Local HVAC & Gas Appliance Team in Oshawa',
    description:
      'Meet One Ten Home Solutions, a Canadian-owned HVAC and gas appliance company in Oshawa, Ontario. Clear advice, careful work and reliable heating and cooling service.',
  },
  heating: {
    title: 'Heating Services in Oshawa – Furnace, Heat Pump & Fireplace',
    description:
      'Furnace repair, heat pumps, water heaters, fireplaces and gas appliance service in Oshawa and the GTA. Call or text 647-619-1472.',
  },
  cooling: {
    title: 'Cooling & Air Conditioning Services in Oshawa',
    description:
      'Air conditioning repair, maintenance, heat pumps and smart thermostats in Oshawa and the GTA. Call or text 647-619-1472 for service.',
  },
  contact: {
    title: 'Contact & Request Service – Oshawa HVAC',
    description:
      'Request heating, cooling, fireplace or gas appliance service in Oshawa. Call or text 647-619-1472 or email onetenhomesolutions@gmail.com.',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description:
      'How One Ten Home Solutions collects, uses and protects your personal information.',
  },
  'terms-and-conditions': {
    title: 'Terms & Conditions',
    description: 'Terms and conditions for using the One Ten Home Solutions website and services.',
  },
}

const crumbs = (items: [string, string][]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${SITE_URL}${path}`,
  })),
})

export const businessGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: 'en-CA',
      publisher: { '@id': `${SITE_URL}/#business` },
    },
    {
      '@type': 'HVACBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.jpg`,
      description:
        'Canadian-owned heating, air conditioning, fireplace and gas appliance service company in Oshawa, Ontario.',
      telephone: ['+1-647-619-1472', '+1-647-992-7212'],
      email: 'onetenhomesolutions@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oshawa',
        addressRegion: 'ON',
        addressCountry: 'CA',
      },
      areaServed: [
        { '@type': 'City', name: 'Oshawa' },
        { '@type': 'AdministrativeArea', name: 'Durham Region' },
        { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'HVAC and gas appliance services',
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: s.title, url: `${SITE_URL}/services/${s.slug}` },
        })),
      },
    },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.slice(0, 5).map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export function serviceSchema(slug: string) {
  const s = services.find((x) => x.slug === slug)
  if (!s) return null
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        description: s.description,
        url: `${SITE_URL}/services/${slug}`,
        serviceType: s.title,
        provider: { '@id': `${SITE_URL}/#business` },
        areaServed: { '@type': 'City', name: 'Oshawa' },
      },
      crumbs([
        ['Home', '/'],
        ['Services', '/services'],
        [s.title, `/services/${slug}`],
      ]),
    ],
  }
}

export function pageSchema(slug: string) {
  const seo = pageSeo[slug]
  if (!seo) return null
  const type = slug === 'contact' ? 'ContactPage' : slug === 'about' ? 'AboutPage' : 'WebPage'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': type,
        name: seo.title,
        description: seo.description,
        url: `${SITE_URL}/${slug}`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#business` },
      },
      crumbs([
        ['Home', '/'],
        [seo.title.split(' – ')[0], `/${slug}`],
      ]),
    ],
  }
}
