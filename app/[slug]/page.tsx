import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Clock,
  Ear,
  Flame,
  Home as HomeIcon,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  ShieldCheck,
  Snowflake,
  Wrench,
  Zap,
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import SectionHeading from '@/components/ui/SectionHeading'
import CTASection from '@/components/sections/CTASection'
import ContactForm from '@/components/sections/ContactForm'
import { services } from '@/lib/content'

const pages = ['about', 'heating', 'cooling', 'contact', 'privacy-policy', 'terms-and-conditions']
export function generateStaticParams() {
  return pages.map((slug) => ({ slug }))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const names: Record<string, string> = {
    about: 'About',
    heating: 'Heating Services',
    cooling: 'Cooling Services',
    contact: 'Contact & Request Service',
    'privacy-policy': 'Privacy Policy',
    'terms-and-conditions': 'Terms & Conditions',
  }
  return {
    title: names[slug] || 'Page',
    description: `${names[slug] || 'One Ten Home Solutions'} | HVAC and gas appliance service in Oshawa and the GTA. Call or text 647-619-1472.`,
  }
}

function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT ONE TEN HOME SOLUTIONS"
        title={
          <>
            Comfort is more than <span className="text-[#F36D2B]">temperature.</span>
          </>
        }
        description="Good service starts with listening. We help homeowners understand what their heating and cooling systems need, then work toward a practical solution."
        image="/images/technician-furnace.jpg"
        imageAlt="Technician inspecting home heating equipment"
      />
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
          <div
            data-reveal
            className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:rounded-[28px]"
          >
            <Image
              src="/images/customer-experience.png"
              alt="An HVAC technician talking with a homeowner about their home comfort needs"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div data-reveal className="order-1 lg:order-2">
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
              <span className="h-px w-8 bg-[#F47732]" />
              WHO WE ARE
            </p>
            <h2 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
              Home comfort, <span className="text-[#F36D2B]">handled with care.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#666] md:text-lg">
              One Ten Home Solutions provides residential heating and air conditioning service. Our
              work includes repairs, installations, and maintenance across the systems that keep
              homes comfortable.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#666] md:text-lg">
              Whether you are dealing with an equipment problem or planning an upgrade, we want the
              next step to feel clear and considered.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                [Wrench, '10+', 'Years serving GTA'],
                [ShieldCheck, '100%', 'Licensed & insured'],
                [HomeIcon, '500+', 'Homes served'],
              ].map(([Icon, stat, label]) => {
                const Symbol = Icon as typeof Wrench
                return (
                  <div key={label as string} className="rounded-2xl bg-[#FAF8F2] p-4">
                    <Symbol size={18} className="text-[#F3692C]" />
                    <strong className="mt-3 block font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      {stat as string}
                    </strong>
                    <span className="mt-0.5 block text-xs leading-5 text-[#777]">
                      {label as string}
                    </span>
                  </div>
                )
              })}
            </div>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 border-b border-[#111] pb-2 text-sm font-semibold text-[#111]"
            >
              EXPLORE OUR SERVICES
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F1EA] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#FFE8D9] text-[#F3692C]">
                  <Zap size={13} fill="currentColor" />
                </span>
                WHAT WE DO
              </p>
              <h2 className="max-w-lg font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
                Service for every <span className="text-[#0877D9]">season.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#666] md:text-lg">
              One team for the equipment your home depends on.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              [
                Flame,
                'orange',
                'Heating',
                'Furnaces, fireplaces, gas appliances, water heaters, humidifiers, and seasonal care.',
                '/heating',
                '/images/technician-furnace.jpg',
              ],
              [
                Snowflake,
                'blue',
                'Cooling',
                'Air conditioning, heat pumps, and summer comfort.',
                '/cooling',
                '/images/outdoor-ac.jpg',
              ],
              [
                Monitor,
                'violet',
                'Home control',
                'Smart thermostats and practical temperature control.',
                '/services/smart-thermostat',
                '/images/smart-thermostat.jpg',
              ],
            ].map(([Icon, tone, t, d, h, img]) => {
              const Symbol = Icon as typeof Flame
              const badgeBg =
                tone === 'blue'
                  ? 'bg-[#DCF1FB] text-[#0877D9]'
                  : tone === 'violet'
                    ? 'bg-[#EAE6FB] text-[#6C4EE0]'
                    : 'bg-[#FFE8D9] text-[#F3692C]'
              return (
                <Link
                  data-reveal
                  key={t as string}
                  href={h as string}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img as string}
                      alt={`${t} service`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span
                        data-service-badge
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${badgeBg}`}
                      >
                        <Symbol size={20} />
                      </span>
                      <ArrowUpRight size={18} className="text-[#999]" />
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight">
                      {t as string}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#666]">{d as string}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1220] py-14 text-white sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-[#F3692C]/25 via-transparent to-[#0877D9]/25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-white/60">
            <span className="h-px w-8 bg-[#F3692C]" />
            OUR APPROACH
          </p>
          <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
            Good work starts with <span className="text-[#69CBEA]">good questions.</span>
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {[
              [Ear, 'orange', 'Listen first', 'We learn what is happening in your home.'],
              [
                MessageCircle,
                'blue',
                'Assess carefully',
                'We look at the system before recommending a path.',
              ],
              [Award, 'orange', 'Explain clearly', 'You get information to make a decision.'],
              [ShieldCheck, 'blue', 'Work with care', 'Your home and comfort matter throughout.'],
            ].map(([Icon, tone, t, d], i) => {
              const Symbol = Icon as typeof Ear
              const blue = tone === 'blue'
              return (
                <div
                  data-reveal
                  key={t as string}
                  className="rounded-2xl border border-white/10 bg-white/[.03] p-6"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-heading text-sm font-bold ${blue ? 'text-[#69CBEA]' : 'text-[#F79A59]'}`}
                    >
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-white/15" />
                  </div>
                  <span
                    data-service-badge
                    className={`mt-4 grid h-11 w-11 place-items-center rounded-full ${blue ? 'bg-[#0877D9]' : 'bg-[#F3692C]'}`}
                  >
                    <Symbol size={20} />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold tracking-tight sm:text-xl">
                    {t as string}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/55">{d as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <CTASection tone="dark" title="Ready to feel comfortable at home?" />
    </>
  )
}

function Category({ heating }: { heating: boolean }) {
  const relevant = services.filter((s) =>
    heating
      ? [
          'furnace-repair',
          'water-heater',
          'humidifier',
          'heat-pump',
          'fireplace',
          'gas-appliance',
          'smart-thermostat',
        ].includes(s.slug)
      : ['air-conditioning', 'heat-pump', 'smart-thermostat'].includes(s.slug),
  )
  const image = heating ? '/images/technician-furnace.jpg' : '/images/outdoor-ac.jpg'
  return (
    <>
      <PageHero
        eyebrow={heating ? 'HEATING SERVICES' : 'COOLING SERVICES'}
        title={
          heating ? (
            <>
              Warmth when your <span className="text-[#F36D2B]">home needs it.</span>
            </>
          ) : (
            <>
              Cool comfort through <span className="text-[#0877D9]">every summer.</span>
            </>
          )
        }
        description={
          heating
            ? 'Furnace, water heater, fireplace, gas appliance, humidifier, and heat pump care to help your home stay comfortable when temperatures fall.'
            : 'Air conditioning and heat pump service to help your home feel comfortable when temperatures rise.'
        }
        image={image}
        imageAlt={
          heating
            ? 'Technician servicing residential furnace'
            : 'Outdoor air conditioning unit beside a home'
        }
        tone={heating ? 'orange' : 'blue'}
      />
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow={heating ? 'KEEP THE COLD OUT' : 'MAKE SUMMER EASIER'}
            title={
              heating ? (
                <>
                  Heating services for <span className="text-[#F36D2B]">real life.</span>
                </>
              ) : (
                <>
                  Cooling care that <span className="text-[#0877D9]">makes a difference.</span>
                </>
              )
            }
            description={
              heating
                ? 'From no heat to planned installations, we help you navigate the right next step.'
                : 'From AC concerns to seasonal maintenance, we help keep indoor comfort in reach.'
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {relevant.map((s, i) => (
              <Link
                data-reveal
                href={`/services/${s.slug}`}
                key={s.slug}
                className="group flex items-center gap-5 rounded-2xl border border-black/10 bg-[#FAF8F2] p-4 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-28 sm:w-32">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="128px"
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <span
                    className={`text-[10px] font-bold tracking-[.15em] ${heating ? 'text-[#F36D2B]' : 'text-[#0877D9]'}`}
                  >
                    0{i + 1} / {s.category}
                  </span>
                  <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 hidden text-xs leading-6 text-[#666] sm:block">{s.summary}</p>
                </div>
                <ArrowUpRight size={18} className="mr-1 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={heating ? 'bg-[#FFF1E5]' : 'bg-[#E8F5FB]'}>
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-28 xl:px-16">
          <div
            data-reveal
            className="relative h-[360px] overflow-hidden rounded-[28px] sm:h-[470px]"
          >
            <Image
              src={heating ? '/images/water-heater.jpg' : '/images/heat-pump.jpg'}
              alt={heating ? 'Residential water heater' : 'Residential heat pump'}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div data-reveal>
            <SectionHeading
              eyebrow={heating ? 'COMMON HEATING CONCERNS' : 'COMMON COOLING CONCERNS'}
              title={
                heating ? (
                  <>
                    When warmth <span className="text-[#F36D2B]">is missing.</span>
                  </>
                ) : (
                  <>
                    When cooling <span className="text-[#0877D9]">is not keeping up.</span>
                  </>
                )
              }
            />
            <p className="mt-6 text-base leading-8 text-[#555]">
              {heating
                ? 'No heat, uneven rooms, unusual noises, or a system that cycles often are good reasons to have your equipment assessed.'
                : 'Warm air, uneven temperatures, unusual sounds, or a system that will not start can signal that it is time for service.'}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {(heating
                ? ['No heat', 'Poor airflow', 'Uneven heating', 'Unusual noises']
                : ['Warm air', 'Uneven cooling', 'System not starting', 'Seasonal maintenance']
              ).map((x) => (
                <span
                  key={x}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold"
                >
                  <Check size={16} className={heating ? 'text-[#F36D2B]' : 'text-[#0877D9]'} />
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAF8F2] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <SectionHeading
            eyebrow="OUR PROCESS"
            title={
              <>
                Clear guidance,{' '}
                <span className={heating ? 'text-[#F36D2B]' : 'text-[#0877D9]'}>
                  start to finish.
                </span>
              </>
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {[
              ['01', 'Tell us what is happening'],
              ['02', 'We assess the system'],
              ['03', 'We recommend a path'],
              ['04', 'We complete the service'],
            ].map(([n, t]) => (
              <div data-reveal key={n} className="border-t border-black/15 pt-5">
                <span
                  className={`text-xl font-semibold ${heating ? 'text-[#F36D2B]' : 'text-[#0877D9]'}`}
                >
                  {n}
                </span>
                <h3 className="mt-10 font-heading text-lg font-semibold tracking-tight">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        tone={heating ? 'orange' : 'blue'}
        title={heating ? 'Need heating service?' : 'Need cooling service?'}
      />
    </>
  )
}

function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#FAF8F2] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#F3692C]/[.06] blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0877D9]/[.06] blur-3xl" />

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid min-w-0 gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="min-w-0">
              <p
                data-hero-line
                className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]"
              >
                <span className="h-px w-8 bg-[#F47732]" />
                CONTACT ONE TEN
              </p>
              <h1
                data-hero-line
                className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-5xl lg:text-6xl"
              >
                Let&apos;s get your home <span className="text-[#F36D2B]">comfortable again.</span>
              </h1>
              <p
                data-hero-line
                className="mt-6 max-w-lg text-base leading-7 text-[#666] md:text-lg"
              >
                Tell us what you need and we&apos;ll help you take the next step. For a faster
                response, call us directly.
              </p>

              <div data-hero-line className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                {[
                  [Clock, 'Fast Response', 'Usually within an hour'],
                  [ShieldCheck, 'Licensed & Insured', 'Fully certified team'],
                ].map(([Icon, l1, l2]) => {
                  const Symbol = Icon as typeof Clock
                  return (
                    <div key={l1 as string} className="flex items-center gap-2.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#FFE8D9] text-[#F3692C]">
                        <Symbol size={18} />
                      </span>
                      <span className="text-xs font-semibold leading-tight text-[#333]">
                        <strong className="block text-sm font-bold text-[#111]">
                          {l1 as string}
                        </strong>
                        {l2 as string}
                      </span>
                    </div>
                  )
                })}
              </div>

              <div data-reveal className="mt-9 grid min-w-0 gap-3">
                <a
                  href="tel:6476191472"
                  className="group flex min-w-0 items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    data-service-badge
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#FFE8D9] text-[#F3692C]"
                  >
                    <Phone size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <small className="block text-[10px] font-bold tracking-[.16em] text-[#F36D2B]">
                      CALL OR TEXT
                    </small>
                    <strong className="mt-1 block font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      647-619-1472
                    </strong>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#999] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
                <a
                  href="tel:6479927212"
                  className="group flex min-w-0 items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    data-service-badge
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#DCF1FB] text-[#0877D9]"
                  >
                    <Phone size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <small className="block text-[10px] font-bold tracking-[.16em] text-[#0877D9]">
                      ALTERNATE LINE
                    </small>
                    <strong className="mt-1 block font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                      647-992-7212
                    </strong>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#999] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
                <a
                  href="mailto:onetenhomesolutions@gmail.com"
                  className="group flex min-w-0 items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span
                    data-service-badge
                    className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#DFF5E7] text-[#2FA35C]"
                  >
                    <Mail size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <small className="block text-[10px] font-bold tracking-[.16em] text-[#2FA35C]">
                      EMAIL US
                    </small>
                    <strong className="mt-1 block truncate text-sm font-semibold tracking-tight sm:text-base">
                      onetenhomesolutions@gmail.com
                    </strong>
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-[#999] transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

              <div
                data-hero-image
                className="relative mt-6 hidden h-52 w-full overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(17,17,17,.14)] lg:block"
              >
                <Image
                  src="/images/technician-furnace.jpg"
                  alt="An HVAC technician ready to help with your home comfort needs"
                  fill
                  sizes="500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F3692C]/15 text-[#F3692C]">
                    <MapPin size={18} />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-[#111]">
                    Proudly serving
                    <strong className="mt-0.5 block text-sm font-bold">Oshawa & the GTA</strong>
                  </span>
                </div>
              </div>
            </div>

            <div data-reveal className="min-w-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const LEGAL_EFFECTIVE_DATE = 'September 26, 2026'

function Legal({ privacy }: { privacy: boolean }) {
  const privacySections: [string, React.ReactNode][] = [
    [
      'Our commitment',
      'One Ten Home Solutions ("we", "us", "our") is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario privacy law. This policy explains what information we collect, why we collect it, and how we protect it.',
    ],
    [
      'Information we collect',
      'When you request service through this website, by phone, or by text message, we may collect your name, phone number, email address, service address, the type of service requested, your preferred appointment date, and any details you share about the work needed. We do not knowingly collect information from anyone under the age of 18.',
    ],
    [
      'How we use your information',
      'We use the information you provide to respond to service requests, schedule and complete work, communicate about appointments, and provide invoices or follow-up support. We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
    ],
    [
      'How your information is shared',
      "Preparing a service request through this website opens your own device's messaging app, addressed to our business number; the message is sent by you, over your mobile carrier's network, the same as any other text message. We may share necessary details with subcontractors or suppliers only where required to complete a job you have requested, and only to the extent needed for that purpose.",
    ],
    [
      'Data retention',
      'We retain customer and service records for as long as reasonably necessary to provide our services, meet our tax and legal obligations, and support any warranty on completed work, and we securely delete or anonymize records that are no longer required for these purposes.',
    ],
    [
      'Security safeguards',
      'We take reasonable administrative and technical steps to protect the personal information in our care against loss, theft, unauthorized access, disclosure, or misuse, appropriate to the sensitivity of the information involved.',
    ],
    [
      'Your rights',
      'Under PIPEDA, you have the right to know what personal information we hold about you, to request access to it, and to request that inaccurate information be corrected. You may also withdraw your consent to our continued use of your information, subject to legal or contractual restrictions and reasonable notice.',
    ],
    [
      'Cookies and website analytics',
      'This website does not use non-essential tracking, advertising, or marketing cookies. Only the technical functionality required to serve the site is used.',
    ],
    [
      'How to reach us about privacy',
      'To ask a question, make a request, or raise a concern about how we handle your personal information, call or text us at 647-619-1472 or email onetenhomesolutions@gmail.com. If you are not satisfied with our response, you may contact the Office of the Privacy Commissioner of Canada at priv.gc.ca.',
    ],
    [
      'Changes to this policy',
      `We may update this policy from time to time to reflect changes in our practices or the law. The current version was last updated on ${LEGAL_EFFECTIVE_DATE}.`,
    ],
  ]

  const termsSections: [string, React.ReactNode][] = [
    [
      'Agreement to these terms',
      'These Terms & Conditions govern your use of the One Ten Home Solutions website and any service request you submit through it, by phone, or by text message. By using this website or requesting service, you agree to these terms.',
    ],
    [
      'Service requests are not confirmed appointments',
      'Submitting the contact form, sending a text message, or calling our team is a request for service, not a confirmed booking. A service request is only confirmed once a member of our team has contacted you directly to schedule the work.',
    ],
    [
      'Service descriptions and pricing',
      'Descriptions of our heating, cooling, and related services on this website are provided for general information only. Exact scope of work, availability, and pricing depend on an assessment of your specific equipment and home, and will be confirmed directly with you before any work begins.',
    ],
    [
      'Website content and intellectual property',
      'The text, images, logo, and design of this website are the property of One Ten Home Solutions or are used under licence, and may not be copied, reproduced, or used for commercial purposes without our prior written consent.',
    ],
    [
      'Limitation of liability',
      'While we strive for accuracy, this website is provided "as is" and information on it may occasionally be out of date. To the fullest extent permitted by Ontario law, One Ten Home Solutions is not liable for indirect, incidental, or consequential damages arising from your use of this website. Nothing in these terms limits any right or protection you have under Ontario consumer protection law that cannot be waived.',
    ],
    [
      'Cancellations and rescheduling',
      'You may reschedule or cancel a service appointment by contacting us directly by phone. We ask for as much notice as possible so we can offer the appointment time to another customer.',
    ],
    [
      'Governing law',
      'These terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable in Ontario, without regard to conflict-of-law principles.',
    ],
    [
      'Contact us',
      'Questions about these terms can be directed to us by phone or text at 647-619-1472, or by email at onetenhomesolutions@gmail.com.',
    ],
    [
      'Updates to these terms',
      `We may revise these terms from time to time. The version in effect is the one posted on this page, which was last updated on ${LEGAL_EFFECTIVE_DATE}.`,
    ],
  ]

  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#F3692C]/[.05] blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
          <span className="h-px w-8 bg-[#F47732]" />
          ONE TEN HOME SOLUTIONS
        </p>
        <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
          {privacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="mt-5 text-sm text-[#777]">
          Last updated:{' '}
          <strong className="font-semibold text-[#333]">{LEGAL_EFFECTIVE_DATE}</strong>
          {' · '}Governed by the laws of Ontario, Canada
        </p>

        <div className="mt-10 space-y-0 border-t border-black/15">
          {(privacy ? privacySections : termsSections).map(([title, body]) => (
            <section key={title} className="border-b border-black/15 py-7">
              <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                {title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#555] sm:leading-8">{body}</p>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm leading-7 text-[#777]">
          Looking for the other policy? Read our{' '}
          <Link
            href={privacy ? '/terms-and-conditions' : '/privacy-policy'}
            className="font-semibold text-[#111] underline underline-offset-2 hover:text-[#F36D2B]"
          >
            {privacy ? 'Terms & Conditions' : 'Privacy Policy'}
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!pages.includes(slug)) notFound()
  if (slug === 'about') return <About />
  if (slug === 'heating') return <Category heating />
  if (slug === 'cooling') return <Category heating={false} />
  if (slug === 'contact') return <Contact />
  return <Legal privacy={slug === 'privacy-policy'} />
}
