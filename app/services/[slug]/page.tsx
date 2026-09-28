import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowUpRight,
  Award,
  Clock,
  Droplet,
  Flame,
  Home as HomeIcon,
  Monitor,
  Phone,
  ShieldCheck,
  Snowflake,
  Thermometer,
  Zap,
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import { services } from '@/lib/content'

const serviceIcons: Record<string, typeof Flame> = {
  'furnace-repair': Flame,
  'air-conditioning': Snowflake,
  'heat-pump': Droplet,
  'water-heater': Thermometer,
  fireplace: Flame,
  'gas-appliance': Zap,
  humidifier: HomeIcon,
  'smart-thermostat': Monitor,
}

const details: Record<string, { hero: string; problem: string; intro: string; types: string[] }> = {
  'furnace-repair': {
    hero: 'Reliable furnace service for a comfortable home.',
    problem: 'Common furnace problems',
    intro: 'From no heat to uneven rooms, a careful assessment helps find the right next step.',
    types: ['Furnace repair', 'Furnace installation', 'Heating maintenance'],
  },
  'air-conditioning': {
    hero: 'Stay cool with professional AC service.',
    problem: 'When cooling is not quite right',
    intro:
      'Cooling concerns can show up as warm air, inconsistent temperatures, or a system that stops running.',
    types: ['AC repair', 'AC installation', 'AC maintenance'],
  },
  'heat-pump': {
    hero: 'Heating and cooling, working together.',
    problem: 'When your heat pump needs attention',
    intro:
      'A heat pump needs to work through changing seasons. We help identify performance concerns and practical options.',
    types: ['Heat pump repair', 'Heat pump installation', 'Seasonal maintenance'],
  },
  'water-heater': {
    hero: 'Reliable hot water starts here.',
    problem: 'Signs your water heater needs care',
    intro:
      'Inconsistent temperature, unusual sounds, or a loss of hot water can interrupt the day. We help assess what is happening.',
    types: ['Water heater assessment', 'Water heater repair', 'Next-step guidance'],
  },
  humidifier: {
    hero: 'Balanced humidity. Better comfort.',
    problem: 'Dry air can change how home feels',
    intro:
      'We help you explore whole-home humidity control and the right installation approach for your heating system.',
    types: ['Whole-home humidifiers', 'System assessment', 'Installation and setup'],
  },
  'smart-thermostat': {
    hero: 'Smarter control. Better comfort.',
    problem: 'Control that fits your routine',
    intro:
      'A thermostat should work with your equipment and be simple to use. We help with compatibility and installation.',
    types: ['Compatibility check', 'Thermostat installation', 'System setup'],
  },
  fireplace: {
    hero: 'Safe, efficient fireplace service.',
    problem: 'Common fireplace concerns',
    intro:
      'A fireplace that will not light, an unusual smell, or a system due for its annual check are all good reasons to have it inspected.',
    types: ['Fireplace inspection', 'Fireplace repair', 'Annual safety check'],
  },
  'gas-appliance': {
    hero: 'Licensed gas service for your home.',
    problem: 'When to call for gas appliance service',
    intro:
      'Gas-fired equipment should only be serviced by a licensed technician. We help with furnaces, water heaters, and other gas appliances.',
    types: ['Gas appliance inspection', 'Gas appliance repair', 'Licensed installation'],
  },
}
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  return { title: s?.title ?? 'Service', description: s?.description }
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()
  const d = details[slug]
  const blue = ['air-conditioning', 'heat-pump', 'smart-thermostat'].includes(slug)
  const Icon = serviceIcons[slug] ?? Flame
  const accentBg = blue ? 'bg-[#DCF1FB]' : 'bg-[#FFE8D9]'
  const accentText = blue ? 'text-[#0877D9]' : 'text-[#F3692C]'
  return (
    <>
      <PageHero
        eyebrow={`${s.category} / ONE TEN HOME SOLUTIONS`}
        title={d.hero}
        description={s.description}
        image={s.image}
        imageAlt={`${s.title} equipment in a residential setting`}
        tone={blue ? 'blue' : 'orange'}
        cta={`REQUEST ${slug === 'furnace-repair' ? 'FURNACE' : 'SERVICE'}`}
      />

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-8 sm:grid-cols-3 sm:gap-4">
            {[
              [ShieldCheck, 'Licensed & Insured', 'Fully certified team'],
              [Clock, 'Fast Response', 'Usually within an hour'],
              [Award, 'Quality Workmanship', 'Done right, the first time'],
            ].map(([StatIcon, l1, l2]) => {
              const Symbol = StatIcon as typeof ShieldCheck
              return (
                <div key={l1 as string} className="flex items-center gap-3">
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${accentBg} ${accentText}`}
                  >
                    <Symbol size={20} />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-[#333]">
                    <strong className="block text-sm font-bold text-[#111]">{l1 as string}</strong>
                    {l2 as string}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8F2] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-12 xl:px-16">
          <div data-reveal>
            <span
              className={`grid h-14 w-14 place-items-center rounded-2xl ${accentBg} ${accentText}`}
            >
              <Icon size={26} />
            </span>
            <h2 className="mt-6 max-w-lg font-heading text-3xl font-semibold leading-[1.1] tracking-[-.05em] sm:text-4xl lg:text-5xl">
              {d.problem}
              <span className={accentText}>.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-[#666] sm:text-lg sm:leading-8">
              {d.intro}
            </p>
          </div>
          <div data-reveal className="grid gap-3 sm:grid-cols-2">
            {s.handles.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm sm:p-5"
              >
                <span
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${accentBg} ${accentText}`}
                >
                  <Icon size={18} />
                </span>
                <strong className="flex-1 text-sm font-semibold sm:text-base">{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
          <div
            data-reveal
            className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[420px] sm:rounded-[28px] lg:h-[480px]"
          >
            <Image
              src={s.image}
              alt={`${s.title} service detail`}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <span
              className={`absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl shadow-md sm:left-5 sm:top-5 ${accentBg} ${accentText}`}
            >
              <Icon size={22} />
            </span>
          </div>
          <div data-reveal>
            <SectionHeading
              eyebrow="WHAT WE CAN HELP WITH"
              title={
                <>
                  Practical care for{' '}
                  <span className={blue ? 'text-[#0877D9]' : 'text-[#F36D2B]'}>your home.</span>
                </>
              }
            />
            <p className="mt-6 text-base leading-8 text-[#666]">{s.description}</p>
            <div className="mt-9 space-y-4">
              {d.types.map((x) => (
                <div
                  key={x}
                  className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 text-sm font-semibold"
                >
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full ${blue ? 'bg-[#E5F4FB] text-[#0877D9]' : 'bg-[#FFF0E5] text-[#F36D2B]'}`}
                  >
                    <Icon size={16} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={`mt-8 inline-flex min-h-13 items-center gap-3 rounded-full px-7 text-xs font-bold text-white ${blue ? 'bg-[#0877D9]' : 'bg-[#F36D2B]'}`}
            >
              REQUEST SERVICE
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#111] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#F3692C]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#0877D9]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="WHY IT MATTERS"
            light
            title={
              <>
                Comfort worth <span className="text-[#77CEE8]">caring for.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:mt-14 lg:gap-6">
            {s.benefits.map((x, i) => {
              const cardBlue = i % 2 === 1
              return (
                <div
                  data-benefit-card
                  key={x}
                  className={`group relative overflow-hidden rounded-[24px] p-7 transition duration-300 hover:-translate-y-1.5 sm:p-8 ${cardBlue ? 'bg-gradient-to-b from-[#0877D9]/[.12] to-white/[.02]' : 'bg-gradient-to-b from-[#F3692C]/[.14] to-white/[.02]'}`}
                >
                  <div
                    className={`absolute inset-x-0 top-0 h-[3px] scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${cardBlue ? 'bg-[#0877D9]' : 'bg-[#F3692C]'}`}
                  />
                  <div className="absolute inset-0 rounded-[24px] border border-white/10 transition group-hover:border-white/25" />
                  <span
                    className={`absolute -right-3 -top-6 font-heading text-8xl font-bold leading-none ${cardBlue ? 'text-[#0877D9]/[.14]' : 'text-[#F3692C]/[.16]'}`}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={`relative grid h-16 w-16 place-items-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${cardBlue ? 'bg-[#0877D9] text-white shadow-[#0877D9]/30' : 'bg-[#F3692C] text-white shadow-[#F3692C]/30'}`}
                  >
                    <Icon size={28} />
                  </span>
                  <h3 className="relative mt-7 font-heading text-xl font-semibold leading-tight tracking-tight sm:text-2xl">
                    {x}
                  </h3>
                  <span
                    className={`relative mt-4 inline-flex items-center gap-1.5 text-xs font-bold tracking-[.1em] ${cardBlue ? 'text-[#77CEE8]' : 'text-[#F79A59]'}`}
                  >
                    BENEFIT 0{i + 1}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#FAF8F2] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title={
              <>
                Clear steps.{' '}
                <span className={blue ? 'text-[#0877D9]' : 'text-[#F36D2B]'}>
                  Confident decisions.
                </span>
              </>
            }
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-0 lg:border-t lg:border-black/15">
            {[
              ['01', 'Tell us what is happening'],
              ['02', 'We assess your system'],
              ['03', 'We explain your options'],
              ['04', 'We complete the service'],
            ].map(([n, t]) => (
              <div
                data-reveal
                key={n}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm sm:gap-5 lg:min-h-40 lg:flex-col lg:items-start lg:justify-between lg:rounded-none lg:border-r lg:border-black/15 lg:bg-transparent lg:px-5 lg:py-7 lg:shadow-none lg:first:pl-0 lg:last:border-r-0"
              >
                <span
                  className={`text-xl font-semibold ${blue ? 'text-[#0877D9]' : 'text-[#F36D2B]'}`}
                >
                  {n}
                </span>
                <strong className="flex-1 font-heading text-base font-semibold tracking-tight sm:text-lg lg:flex-none">
                  {t}
                </strong>
                <ArrowUpRight size={17} className="text-[#999]" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ items={s.questions} title={`${s.shortTitle} questions.`} />
      <CTASection
        tone={blue ? 'blue' : 'orange'}
        title={`Need ${s.shortTitle.toLowerCase()} service?`}
        description="Tell us what is happening, and we will help you find a practical next step."
      />
      <div className="bg-[#FAF8F2] px-5 py-8 text-center text-sm text-[#666]">
        <a
          href="tel:6476191472"
          className="inline-flex items-center gap-2 font-semibold text-[#111]"
        >
          <Phone size={16} /> Call or text 647-619-1472
        </a>
      </div>
    </>
  )
}
