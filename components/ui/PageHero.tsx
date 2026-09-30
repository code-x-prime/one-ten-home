import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Award,
  Calendar,
  Flame,
  Leaf,
  Phone,
  ShieldCheck,
  Snowflake,
  Wrench,
} from 'lucide-react'
import CanadianBadge from '@/components/ui/CanadianBadge'

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  tone = 'orange',
  cta = 'REQUEST SERVICE',
}: {
  eyebrow: string
  title: React.ReactNode
  description: string
  image: string
  imageAlt: string
  tone?: 'orange' | 'blue'
  cta?: string
}) {
  const accent = tone === 'blue' ? '#0877D9' : '#F47732'
  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] px-3 pt-3 sm:px-5 sm:pt-5 lg:px-6 lg:pt-6">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]">
        <div data-hero-image className="relative min-h-[560px] w-full sm:min-h-[530px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-[70%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/45 sm:bg-gradient-to-r sm:from-[#FAF8F2] sm:via-[#FAF8F2]/70 sm:to-transparent lg:from-[#FAF8F2] lg:via-[#FAF8F2]/40 lg:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent sm:hidden" />

          {/* Decorative diagonal wave, bottom-right */}
          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-[60%] lg:block [clip-path:polygon(30%_100%,100%_40%,100%_100%)]">
            <div className="h-full w-full bg-gradient-to-tr from-[#F3692C] to-[#0877D9]" />
          </div>

          {/* Floating solution cards — desktop only */}
          <div
            data-hero-float
            className="absolute left-[46%] top-8 hidden w-52 items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur lg:flex xl:left-[48%] xl:w-56"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#F3692C] text-white">
              <Flame size={18} />
            </span>
            <span className="text-xs font-bold leading-tight text-[#111]">
              Heating Solutions
              <span className="mt-0.5 block text-[11px] font-medium text-[#777]">
                Stay warm all winter
              </span>
            </span>
          </div>
          <div
            data-hero-float
            className="absolute right-4 top-32 hidden w-52 items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur lg:flex xl:top-36 xl:w-56"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#0877D9] text-white">
              <Snowflake size={18} />
            </span>
            <span className="text-xs font-bold leading-tight text-[#111]">
              Cooling Solutions
              <span className="mt-0.5 block text-[11px] font-medium text-[#777]">
                Stay cool all summer
              </span>
            </span>
          </div>
          <div
            data-hero-float
            className="absolute left-[36%] top-56 hidden w-52 items-center gap-3 rounded-2xl bg-white/95 p-3.5 shadow-xl backdrop-blur lg:flex xl:w-56"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#5B7BF5] text-white">
              <Wrench size={18} />
            </span>
            <span className="text-xs font-bold leading-tight text-[#111]">
              Repairs & Maintenance
              <span className="mt-0.5 block text-[11px] font-medium text-[#777]">
                Fast, reliable service
              </span>
            </span>
          </div>

          <div className="relative flex h-full flex-col justify-end p-5 pb-6 sm:justify-center sm:p-8 sm:pb-8 lg:p-14 lg:pb-14 xl:p-16 xl:pb-16">
            <div className="max-w-xl">
              <CanadianBadge />
              <p
                data-hero-line
                className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.18em] text-white sm:text-[#626262]"
              >
                <span className="h-px w-8" style={{ backgroundColor: accent }} />
                {eyebrow}
              </p>
              <h1
                data-hero-line
                className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-.055em] text-white sm:text-5xl sm:text-[#111] lg:text-6xl xl:text-[4.25rem]"
              >
                {title}
              </h1>
              <p
                data-hero-line
                className="mt-5 max-w-md text-sm leading-7 text-white/90 sm:text-base sm:leading-8 sm:text-[#606060] md:text-lg"
              >
                {description}
              </p>
              <div data-hero-line className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 text-xs font-bold text-white transition hover:-translate-y-0.5 ${tone === 'blue' ? 'bg-[#0877D9] hover:bg-[#0863b2]' : 'bg-[#F36D2B] hover:bg-[#dc571a]'}`}
                >
                  {cta}
                  <ArrowUpRight size={17} />
                </Link>
                <a
                  href="tel:6476191472"
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 text-xs font-bold text-white backdrop-blur transition hover:border-white sm:border-black/15 sm:bg-white sm:text-[#111] sm:hover:border-black"
                >
                  <Phone size={16} /> CALL 647-619-1472
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust stat strip — its own row below the photo, never overlapping it */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 bg-[#111] px-5 py-4 sm:justify-start sm:gap-x-8 sm:px-8 lg:px-14 xl:px-16">
          {[
            [ShieldCheck, 'Licensed & Insured'],
            [Award, 'Quality Workmanship'],
            [Calendar, 'Same-Day Service'],
            [Leaf, 'Energy-Efficient'],
          ].map(([Icon, label]) => {
            const Symbol = Icon as typeof ShieldCheck
            return (
              <div key={label as string} className="flex items-center gap-2">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-white">
                  <Symbol size={14} />
                </span>
                <span className="text-[11px] font-semibold text-white sm:text-xs">
                  {label as string}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
