import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Motion from '@/components/sections/Motion'
import MobileBar from '@/components/layout/MobileBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' })

export const metadata: Metadata = {
  title: {
    default: 'One Ten Home Solutions | Heating & Air Conditioning',
    template: '%s | One Ten Home Solutions',
  },
  description:
    'Professional HVAC and gas appliance services from One Ten Home Solutions in Oshawa and the GTA, including furnace repair, AC services, heat pumps, water heaters, fireplaces, gas appliances, humidifiers and smart thermostats.',
  metadataBase: new URL('https://onetenhomesolutions.com'),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  openGraph: {
    title: 'One Ten Home Solutions | Heating, Cooling, Fireplaces & Gas Appliances',
    description:
      'Professional HVAC and gas appliance services for a more comfortable home in Oshawa and the GTA.',
    url: 'https://onetenhomesolutions.com',
    siteName: 'One Ten Home Solutions',
    images: ['/images/outdoor-ac.jpg'],
    type: 'website',
  },
}
export const viewport: Viewport = { themeColor: '#FAF8F2', colorScheme: 'light' }
const schema = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: 'One Ten Home Solutions',
  url: 'https://onetenhomesolutions.com',
  telephone: ['+1-647-619-1472', '+1-647-992-7212'],
  email: 'onetenhomesolutions@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oshawa',
    addressRegion: 'ON',
    addressCountry: 'CA',
  },
  areaServed: 'Greater Toronto Area',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC and gas appliance services',
    itemListElement: [
      'Furnace repair',
      'Air conditioning',
      'Heat pumps',
      'Water heaters',
      'Fireplaces',
      'Gas appliances',
      'Humidifiers',
      'Smart thermostats',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-[#FAF8F2] pb-[72px] font-sans text-[#111] antialiased selection:bg-[#ffe0c2] selection:text-[#111] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-[#0877D9] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-2 [&_button:focus-visible]:outline-[#0877D9] lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileBar />
        <Motion />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  )
}
