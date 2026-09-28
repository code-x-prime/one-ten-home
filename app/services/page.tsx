import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Droplet,
  Flame,
  Home as HomeIcon,
  Monitor,
  Snowflake,
  Thermometer,
  Zap,
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import CTASection from '@/components/sections/CTASection'
import { services } from '@/lib/content'

export const metadata = {
  title: 'Heating, Cooling & Gas Appliance Services',
  description:
    'Furnace repair, air conditioning, heat pumps, water heaters, fireplaces, gas appliances, humidifiers, smart thermostats, and seasonal HVAC maintenance.',
}

const iconMap: Record<string, typeof Flame> = {
  'furnace-repair': Flame,
  'air-conditioning': Snowflake,
  'heat-pump': Droplet,
  'water-heater': Thermometer,
  fireplace: Flame,
  'gas-appliance': Zap,
  humidifier: HomeIcon,
  'smart-thermostat': Monitor,
}

const toneMap: Record<
  string,
  { badgeBg: string; badgeText: string; tagText: string; tag: string }
> = {
  HEATING: {
    badgeBg: 'bg-[#FFE8D9]',
    badgeText: 'text-[#F3692C]',
    tagText: 'text-[#F3692C]',
    tag: 'HEATING',
  },
  COOLING: {
    badgeBg: 'bg-[#DCF1FB]',
    badgeText: 'text-[#0877D9]',
    tagText: 'text-[#0877D9]',
    tag: 'COOLING',
  },
  'HEATING + COOLING': {
    badgeBg: 'bg-[#EAE6FB]',
    badgeText: 'text-[#6C4EE0]',
    tagText: 'text-[#6C4EE0]',
    tag: 'HEATING + COOLING',
  },
  'HOT WATER': {
    badgeBg: 'bg-[#FFE8D9]',
    badgeText: 'text-[#F3692C]',
    tagText: 'text-[#F3692C]',
    tag: 'HOT WATER',
  },
  FIREPLACES: {
    badgeBg: 'bg-[#FFE8D9]',
    badgeText: 'text-[#F3692C]',
    tagText: 'text-[#F3692C]',
    tag: 'FIREPLACES',
  },
  'GAS APPLIANCES': {
    badgeBg: 'bg-[#DFF5E7]',
    badgeText: 'text-[#2FA35C]',
    tagText: 'text-[#2FA35C]',
    tag: 'GAS APPLIANCES',
  },
  'INDOOR AIR': {
    badgeBg: 'bg-[#DFF5E7]',
    badgeText: 'text-[#2FA35C]',
    tagText: 'text-[#2FA35C]',
    tag: 'INDOOR AIR',
  },
  'HOME CONTROL': {
    badgeBg: 'bg-[#EAE6FB]',
    badgeText: 'text-[#6C4EE0]',
    tagText: 'text-[#6C4EE0]',
    tag: 'HOME CONTROL',
  },
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="COMPLETE HOME COMFORT"
        title={
          <>
            Services for <span className="text-[#F36D2B]">every season.</span>
          </>
        }
        description="From urgent repairs to careful installations and maintenance, we help you care for the systems that keep your home comfortable."
        image="/images/technician-furnace.jpg"
        imageAlt="HVAC technician inspecting a home furnace"
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
              <span className="h-px w-8 bg-[#F47732]" />
              WHAT WE CAN HELP WITH
            </p>
            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
              One team for <span className="text-[#F36D2B]">home comfort.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#666] md:text-lg">
              Explore a service below, or call us and tell us what is happening in your home.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-10 sm:gap-12 lg:mt-14 lg:gap-16">
            {services.map((s, i) => {
              const Icon = iconMap[s.slug] ?? Flame
              const tone = toneMap[s.category] ?? toneMap.HEATING
              const reversed = i % 2 === 1
              return (
                <Link
                  data-reveal
                  href={`/services/${s.slug}`}
                  key={s.slug}
                  className="group grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl sm:rounded-[28px] lg:aspect-[16/11] ${reversed ? 'lg:order-2' : ''}`}
                  >
                    <Image
                      src={s.image}
                      alt={`${s.title} service`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      data-service-badge
                      className={`absolute left-5 top-5 grid h-12 w-12 shrink-0 place-items-center rounded-xl shadow-md ${tone.badgeBg} ${tone.badgeText}`}
                    >
                      <Icon size={22} />
                    </span>
                  </div>
                  <div className={reversed ? 'lg:order-1' : ''}>
                    <span className={`text-[11px] font-bold tracking-[.15em] ${tone.tagText}`}>
                      0{i + 1} / {tone.tag}
                    </span>
                    <h3 className="mt-3 font-heading text-2xl font-semibold leading-[1.1] tracking-[-.04em] sm:text-3xl lg:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#666] sm:text-base">
                      {s.summary}
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#666] sm:text-base">
                      {s.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[.1em] text-[#111]">
                      EXPLORE SERVICE
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
