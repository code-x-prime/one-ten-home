import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Clock,
  Droplet,
  Flame,
  Home as HomeIcon,
  Settings2,
  ShieldCheck,
  Snowflake,
  Sun,
  Thermometer,
  Users,
  Wind,
  Wrench,
  Zap,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import FAQ from '@/components/sections/FAQ'
import CustomerSatisfaction from '@/components/sections/CustomerSatisfaction'
import Hero from '@/components/sections/Hero'
import { faqs } from '@/lib/content'

const toneStyles = {
  orange: {
    badgeBg: 'bg-[#FFE8D9]',
    badgeText: 'text-[#F3692C]',
    pillBg: 'bg-[#FFF0E5]',
    arrowBg: 'bg-[#F3692C]',
    tag: 'HEATING',
  },
  blue: {
    badgeBg: 'bg-[#DCF1FB]',
    badgeText: 'text-[#0877D9]',
    pillBg: 'bg-[#E4F8FD]',
    arrowBg: 'bg-[#5BC0EE]',
    tag: 'COOLING',
  },
  violet: {
    badgeBg: 'bg-[#EAE6FB]',
    badgeText: 'text-[#6C4EE0]',
    pillBg: 'bg-[#EFEBFC]',
    arrowBg: 'bg-[#B7A6F2]',
    tag: 'HEATING & COOLING',
  },
  green: {
    badgeBg: 'bg-[#DFF5E7]',
    badgeText: 'text-[#2FA35C]',
    pillBg: 'bg-[#E6F8ED]',
    arrowBg: 'bg-[#7BDDA0]',
    tag: 'GAS APPLIANCES',
  },
} as const

const serviceCards = [
  {
    number: '01',
    title: 'Furnace repair & installation',
    description: 'Reliable warmth starts with a system cared for properly.',
    href: '/services/furnace-repair',
    image: '/images/technician-furnace.jpg',
    tone: 'orange' as const,
    icon: HomeIcon,
  },
  {
    number: '02',
    title: 'Air conditioning',
    description: 'Cool, consistent comfort when the days heat up.',
    href: '/services/air-conditioning',
    image: '/images/outdoor-ac.jpg',
    tone: 'blue' as const,
    icon: Snowflake,
  },
  {
    number: '03',
    title: 'Heat pumps',
    description: 'Heating and cooling working together in one system.',
    href: '/services/heat-pump',
    image: '/images/heat-pump.jpg',
    tone: 'violet' as const,
    icon: Droplet,
  },
  {
    number: '04',
    title: 'Water heaters',
    description: 'Dependable hot water for everyday routines.',
    href: '/services/water-heater',
    image: '/images/water-heater.jpg',
    tone: 'orange' as const,
    icon: Thermometer,
  },
  {
    number: '05',
    title: 'Fireplace service & repair',
    description: 'Safe, efficient warmth you can count on.',
    href: '/services/fireplace',
    image: '/images/fireplace.jpg',
    tone: 'orange' as const,
    icon: Flame,
  },
  {
    number: '06',
    title: 'Gas appliance service & repair',
    description: 'Licensed gas work for the appliances your home depends on.',
    href: '/services/gas-appliance',
    image: '/images/gas-appliance.jpg',
    tone: 'green' as const,
    icon: Zap,
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-0 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-5 lg:px-12 xl:px-16">
          {[
            [Flame, 'Heating services'],
            [Snowflake, 'Cooling services'],
            [Wrench, 'Repairs'],
            [Settings2, 'Installation'],
            [Wind, 'Maintenance'],
          ].map(([Icon, title], i) => {
            const Symbol = Icon as typeof Flame
            return (
              <div
                key={title as string}
                className="flex min-h-20 items-center gap-3 border-b border-black/10 px-2 sm:border-b-0 lg:justify-center"
              >
                <Symbol size={20} className={i % 2 ? 'text-[#0877D9]' : 'text-[#F36D2B]'} />
                <span className="text-[10px] font-bold uppercase tracking-[.12em] text-[#525252]">
                  {title as string}
                </span>
              </div>
            )
          })}
        </div>
      </div>
      <section className="relative overflow-hidden bg-[#FAF8F2] py-12 md:py-16 ">
        <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-[40%] bg-[#F3692C]/15 blur-2xl sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-16 -top-16 hidden h-40 w-40 rounded-full border border-[#F3692C]/20 sm:block" />
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-[40%] bg-[#F3692C]/10 blur-2xl sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute bottom-10 left-0 hidden h-24 w-24 rounded-full border border-[#0877D9]/15 sm:block" />

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-12 xl:px-16">
          <div
            data-reveal
            className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[590px]"
          >
            <Image
              src="/images/technician-furnace.jpg"
              alt="Technician inspecting residential heating equipment"
              fill
              sizes="(max-width: 1024px) 100vw, 43vw"
              className="object-cover"
            />
            <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:left-5 sm:top-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F3692C] text-white">
                <Zap size={16} fill="currentColor" />
              </span>
              <span className="text-xs font-bold leading-tight text-[#111]">
                Trusted HVAC Experts
                <span className="mt-0.5 block text-[11px] font-medium text-[#777]">Since 2015</span>
              </span>
            </div>
            <Link
              href="/about"
              className="group absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-black/80 px-4 py-3 text-white backdrop-blur sm:left-5 sm:right-5 sm:bottom-5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F3692C]">
                <Check size={16} />
              </span>
              <span className="flex-1 text-xs font-bold leading-tight">
                Care in every detail
                <span className="mt-0.5 block text-[11px] font-medium text-white/70">
                  Reliable • Professional • Affordable
                </span>
              </span>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-black transition group-hover:-translate-y-0.5">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>

          <div data-reveal>
            <SectionHeading
              eyebrow="THE RIGHT TEAM"
              title={
                <>
                  Comfort starts with the <span className="text-[#F36D2B]">right team.</span>
                </>
              }
            />
            <p className="mt-6 max-w-xl text-base leading-8 text-[#666] md:text-lg">
              When heating or cooling stops working, you need clear answers and quality work. We
              help with repairs, installations, and maintenance for the systems your home depends
              on.
            </p>
            <div className="mt-10 border-t border-black/15">
              {[
                [Wrench, 'Professional service', 'Clear advice and careful workmanship.', '/about'],
                [
                  Sun,
                  'Heating & cooling expertise',
                  'Support for comfort in every season.',
                  '/services',
                ],
                [
                  HomeIcon,
                  'Quality installation',
                  'Systems installed with attention to detail.',
                  '/services',
                ],
                [Users, 'Customer-focused support', 'People you can talk to directly.', '/contact'],
              ].map(([Icon, t, d, href]) => {
                const Symbol = Icon as typeof Wrench
                return (
                  <Link
                    key={t as string}
                    href={href as string}
                    className="group flex items-center gap-4 border-b border-black/15 py-5 transition hover:bg-black/[.02] sm:gap-5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FFF0E5] text-[#F36D2B]">
                      <Symbol size={22} />
                    </span>
                    <span className="flex-1">
                      <strong className="block text-sm font-semibold sm:text-base">
                        {t as string}
                      </strong>
                      <small className="mt-1 block text-xs text-[#777] sm:text-sm">
                        {d as string}
                      </small>
                    </span>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/15 text-[#111] transition group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </Link>
                )
              })}
            </div>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#F36D2B] pb-2 text-sm font-bold text-[#F36D2B]"
            >
              MORE ABOUT OUR APPROACH
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 sm:py-16 ">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div
            data-reveal
            className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between"
          >
            <div>
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#FFE8D9] text-[#F3692C]">
                  <Zap size={13} fill="currentColor" />
                </span>
                WHAT WE DO
                <span className="h-px w-8 bg-[#F3692C]" />
              </p>
              <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                Everything your home needs
                <br />
                <span className="text-[#F36D2B]">to stay comfortable.</span>
              </h2>
            </div>
            <div className="max-w-sm lg:pt-2">
              <p className="text-base leading-7 text-[#666] md:text-lg">
                From a quick repair to a new system, we help you get back to feeling comfortable.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  [ShieldCheck, 'Trusted Experts'],
                  [Clock, 'On-Time Service'],
                  [Award, 'Quality Work'],
                ].map(([Icon, label]) => {
                  const Symbol = Icon as typeof ShieldCheck
                  return (
                    <div key={label as string} className="flex items-center gap-2.5">
                      <Symbol size={20} className="shrink-0 text-[#F3692C]" />
                      <span className="whitespace-nowrap text-xs font-semibold text-[#333]">
                        {label as string}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2 max-w-7xl mx-auto">
            {serviceCards.slice(0, 3).map((s, i) => {
              const t = toneStyles[s.tone]
              const Icon = s.icon
              return (
                <Link
                  data-reveal
                  key={s.href}
                  href={s.href}
                  className={`group relative flex min-h-[380px] flex-col justify-end overflow-hidden rounded-[24px] ${i === 0 ? 'lg:row-span-2' : ''}`}
                >
                  <Image
                    src={s.image}
                    alt={`${s.title} service`}
                    fill
                    sizes={
                      i === 0
                        ? '(max-width: 1024px) 100vw, 50vw'
                        : '(max-width: 1024px) 100vw, 50vw'
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 sm:left-6 sm:top-6">
                    <span
                      data-service-badge
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${t.badgeBg} ${t.badgeText}`}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold tracking-[.1em] text-[#111]">
                      {s.number} / {t.tag}
                    </span>
                  </div>
                  <div className="relative p-5 text-white sm:p-6">
                    <h3
                      className={`max-w-sm font-heading font-semibold leading-[1.12] tracking-[-.05em] ${i === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/85">{s.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[.1em]">
                      EXPLORE SERVICE
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                  <span
                    className={`absolute bottom-5 right-5 grid h-11 w-11 shrink-0 place-items-center rounded-full text-white shadow-lg transition group-hover:-translate-y-0.5 sm:bottom-6 sm:right-6 ${t.arrowBg}`}
                  >
                    <ArrowRight size={18} />
                  </span>
                </Link>
              )
            })}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3 max-w-7xl mx-auto">
            {serviceCards.slice(3).map((s) => {
              const t = toneStyles[s.tone]
              const Icon = s.icon
              return (
                <Link
                  data-reveal
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span
                      data-service-badge
                      className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${t.badgeBg} ${t.badgeText}`}
                    >
                      <Icon size={20} />
                    </span>
                  </div>
                  <p className="mt-4 text-[10px] font-bold tracking-[.1em] text-[#999]">
                    {s.number} / {t.tag}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-semibold tracking-tight text-[#111] sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#666]">{s.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-[.1em] text-[#111]">
                      EXPLORE SERVICE
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-white transition group-hover:-translate-y-0.5 ${t.arrowBg}`}
                    >
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="mt-9 text-center">
            <Link
              href="/services"
              className="inline-flex min-h-13 items-center gap-3 rounded-full bg-[#111] px-7 text-xs font-bold text-white transition hover:bg-[#F36D2B]"
            >
              VIEW ALL SERVICES
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF8F2] py-12 sm:py-16 ">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div data-reveal className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
              <span className="h-px w-8 bg-[#F47732]" />
              OUR SIGNATURE
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
              One home. <span className="text-[#F36D2B]">Every</span>{' '}
              <span className="text-[#0877D9]">season.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666] md:text-lg">
              From winter warmth to summer cooling, One Ten Home Solutions helps keep your home
              comfortable throughout the year.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 lg:relative lg:mt-12 lg:block lg:overflow-hidden lg:rounded-[28px]">
            {/* Mobile/tablet: two stacked panels, each cropped to its own half of the photo */}
            <Link
              href="/heating"
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white sm:aspect-[16/9] sm:p-7 lg:hidden"
            >
              <Image
                src="/images/signature-comfort.png"
                alt="A family relaxing in a warm living room"
                fill
                sizes="100vw"
                className="object-cover object-left"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              <div className="relative">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[.2em] text-[#FFC79A]">
                  <Flame size={14} /> HEATING SERVICES
                </p>
                <h3 className="max-w-xs font-heading text-xl font-semibold leading-[1.1] tracking-[-.04em] sm:text-2xl">
                  Warmth when you need it.
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs font-semibold sm:text-sm">
                  {[
                    'Furnace Repair',
                    'Furnace Installation',
                    'Heating Maintenance',
                    'Water Heaters',
                  ].map((x) => (
                    <li key={x} className="flex items-center gap-1.5">
                      <Check size={13} className="shrink-0 text-white/85" />
                      {x}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#111] transition group-hover:-translate-y-0.5">
                  Explore Heating
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
            <Link
              href="/cooling"
              className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white sm:aspect-[16/9] sm:p-7 lg:hidden"
            >
              <Image
                src="/images/signature-comfort.png"
                alt="A man relaxing comfortably in a cool, bright living room"
                fill
                sizes="100vw"
                className="object-cover object-right"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />
              <div className="relative">
                <p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[.2em] text-[#9FE3F5]">
                  <Snowflake size={14} /> COOLING SERVICES
                </p>
                <h3 className="max-w-xs font-heading text-xl font-semibold leading-[1.1] tracking-[-.04em] sm:text-2xl">
                  Cool comfort all summer.
                </h3>
                <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs font-semibold sm:text-sm">
                  {['Air Conditioning', 'AC Maintenance', 'Heat Pumps', 'Smart Thermostats'].map(
                    (x) => (
                      <li key={x} className="flex items-center gap-1.5">
                        <Check size={13} className="shrink-0 text-white/85" />
                        {x}
                      </li>
                    ),
                  )}
                </ul>
                <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#111] transition group-hover:-translate-y-0.5">
                  Explore Cooling
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>

            {/* Desktop: single wide photo with split overlay */}
            <div className="relative hidden lg:block">
              <div data-signature-image className="relative aspect-[21/9] w-full">
                <Image
                  src="/images/signature-comfort.png"
                  alt="A family enjoying a warm living room on one side and a relaxed home cooling scene on the other, representing year-round comfort"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  quality={90}
                />
              </div>
              <div className="absolute inset-0">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              </div>
              <div className="absolute inset-0 grid grid-cols-2 items-end gap-4 p-10">
                <div data-reveal className="flex flex-col justify-end text-white">
                  <p className="mb-2 flex items-center gap-2 text-[11px] font-bold tracking-[.2em] text-[#FFC79A]">
                    <Flame size={14} /> HEATING SERVICES
                  </p>
                  <h3 className="max-w-xs font-heading text-3xl font-semibold leading-[1.1] tracking-[-.04em]">
                    Warmth when you need it.
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm font-semibold">
                    {[
                      'Furnace Repair',
                      'Furnace Installation',
                      'Heating Maintenance',
                      'Water Heaters',
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-1.5">
                        <Check size={13} className="shrink-0 text-white/85" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/heating"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#111] transition hover:-translate-y-0.5"
                  >
                    Explore Heating
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
                <div
                  data-reveal
                  className="flex flex-col items-end justify-end text-right text-white"
                >
                  <p className="mb-2 flex flex-row-reverse items-center gap-2 text-[11px] font-bold tracking-[.2em] text-[#9FE3F5]">
                    <Snowflake size={14} /> COOLING SERVICES
                  </p>
                  <h3 className="max-w-xs font-heading text-3xl font-semibold leading-[1.1] tracking-[-.04em]">
                    Cool comfort all summer.
                  </h3>
                  <ul className="mt-3 grid grid-cols-2 justify-items-end gap-x-3 gap-y-1.5 text-sm font-semibold">
                    {['Air Conditioning', 'AC Maintenance', 'Heat Pumps', 'Smart Thermostats'].map(
                      (x) => (
                        <li key={x} className="flex flex-row-reverse items-center gap-1.5">
                          <Check size={13} className="shrink-0 text-white/85" />
                          {x}
                        </li>
                      ),
                    )}
                  </ul>
                  <Link
                    href="/cooling"
                    className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#111] transition hover:-translate-y-0.5"
                  >
                    Explore Cooling
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70" />
              <div
                data-signature-badge
                className="pointer-events-none absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-white shadow-2xl"
              >
                <Image
                  src="/logo.png"
                  alt="One Ten Home Solutions"
                  width={110}
                  height={110}
                  className="h-[88px] w-[88px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#0B1220] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <Image src="/images/footer-home.png" alt="" fill sizes="42vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/30 to-transparent" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-[#F3692C]/25 via-transparent to-[#0877D9]/25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div
            data-reveal
            className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16"
          >
            <div>
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-white/60">
                <span className="h-px w-8 bg-[#F3692C]" />
                WHY ONE TEN
              </p>
              <h2 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                Built around
                <br />
                <span className="text-[#69CBEA]">your comfort.</span>
              </h2>
            </div>
            <p className="max-w-sm border-l-0 pl-0 text-base leading-7 text-white/70 md:text-lg lg:border-l lg:border-white/20 lg:pl-8 lg:pt-2">
              From a small repair to a complete HVAC installation, we focus on doing the job
              properly. Reliable solutions, skilled technicians, and a customer-first approach for a
              more comfortable home.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {[
              [
                Wrench,
                'orange',
                'Professional service',
                'Practical help for your home.',
                '/images/water-heater.jpg',
              ],
              [
                Flame,
                'blue',
                'Heating expertise',
                'Support when warmth matters most.',
                '/images/technician-furnace.jpg',
              ],
              [
                Snowflake,
                'blue',
                'Cooling expertise',
                'A comfortable home in warmer weather.',
                '/images/outdoor-ac.jpg',
              ],
              [
                Check,
                'orange',
                'Careful workmanship',
                'Thoughtful work from start to finish.',
                '/images/heat-pump.jpg',
              ],
            ].map(([Icon, tone, title, desc, image], i) => {
              const Symbol = Icon as typeof Wrench
              const blue = tone === 'blue'
              return (
                <div
                  data-reveal
                  key={title as string}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]"
                >
                  <div className="flex items-center gap-2 px-5 pt-5">
                    <span
                      className={`font-heading text-sm font-bold ${blue ? 'text-[#69CBEA]' : 'text-[#F79A59]'}`}
                    >
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <div className="px-5 pb-5 pt-4">
                    <div className="flex items-center justify-start gap-3">
                      <span
                        data-service-badge
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${blue ? 'bg-[#0877D9]' : 'bg-[#F3692C]'}`}
                      >
                        <Symbol size={20} />
                      </span>
                      <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight sm:text-xl">
                        {title as string}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-sm leading-6 text-white/55">{desc as string}</p>
                  </div>
                  <div className="relative mt-auto h-32 w-full sm:h-40">
                    <Image
                      src={image as string}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${blue ? 'from-[#0877D9]/50' : 'from-[#F3692C]/50'} via-transparent to-black/40`}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#FAF8F2] py-12 md:py-16 ">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title={
              <>
                A simpler path to
                <br />
                <span className="text-[#F36D2B]">better comfort.</span>
              </>
            }
            description="Clear steps from the first conversation to the final check."
          />
          <div className="mt-14 grid border-t border-black/15 md:grid-cols-5">
            {[
              ['01', 'Tell us what you need'],
              ['02', 'We understand the problem'],
              ['03', 'We recommend the right service'],
              ['04', 'We complete the work'],
              ['05', 'Enjoy your comfort'],
            ].map(([n, t]) => (
              <div
                data-reveal
                key={n}
                className="flex min-h-28 items-center gap-5 border-b border-black/15 py-5 md:min-h-[205px] md:flex-col md:items-start md:justify-between md:border-b-0 md:border-r md:px-5 md:py-7 md:first:pl-0 md:last:border-r-0"
              >
                <span className="font-heading text-xl font-semibold text-[#F36D2B]">{n}</span>
                <h3 className="flex-1 font-heading text-lg font-semibold tracking-[-.04em] md:flex-none">
                  {t}
                </h3>
                <ArrowUpRight size={18} className="text-[#999]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#FAF8F2] pb-20 md:pb-28 lg:pb-36">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:px-8 lg:grid-cols-[1.3fr_.7fr] lg:px-12 xl:px-16">
          <div
            data-reveal
            className="relative h-[400px] overflow-hidden rounded-[28px] sm:h-[570px]"
          >
            <Image
              src="/images/heat-pump.jpg"
              alt="Residential heat pump installed outside a home"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
            />
            <span className="absolute bottom-6 left-6 rounded-full bg-white px-5 py-3 text-[10px] font-bold tracking-[.15em]">
              COMFORT IN EVERY DETAIL
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div
              data-reveal
              className="flex flex-col justify-end rounded-[28px] bg-[#DFF1F4] p-8 sm:p-10"
            >
              <Thermometer size={26} className="text-[#0877D9]" />
              <h3 className="mt-8 font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em]">
                One home.
                <br />
                Every season.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#555]">
                Heating and cooling solutions selected around your home and your needs.
              </p>
            </div>
            <div data-reveal className="relative min-h-[240px] overflow-hidden rounded-[28px]">
              <Image
                src="/images/smart-thermostat.jpg"
                alt="Smart thermostat in a comfortable home"
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <CustomerSatisfaction />
      <FAQ items={faqs.slice(0, 5)} />
      <CTASection />
    </>
  )
}
