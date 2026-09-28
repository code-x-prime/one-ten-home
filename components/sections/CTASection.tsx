import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Flame,
  Phone,
  ShieldCheck,
  Snowflake,
  Truck,
  Home as HomeIcon,
} from 'lucide-react'

export default function CTASection({
  tone = 'orange',
  title = 'Need heating or cooling service?',
  description = "Tell us what is going on. We'll help you find the right next step with fast, reliable and professional support.",
}: {
  tone?: 'orange' | 'blue' | 'dark'
  title?: string
  description?: string
}) {
  const bg = tone === 'blue' ? 'bg-[#0877D9]' : tone === 'dark' ? 'bg-[#111827]' : 'bg-[#F06B2A]'
  const scrimFrom =
    tone === 'blue'
      ? 'from-[#0877D9]/50'
      : tone === 'dark'
        ? 'from-[#111827]/60'
        : 'from-[#F06B2A]/50'
  const mobileScrimFrom =
    tone === 'blue'
      ? 'from-[#0877D9]/70'
      : tone === 'dark'
        ? 'from-[#111827]/80'
        : 'from-[#F06B2A]/70'

  return (
    <section className={`relative overflow-hidden text-white ${bg}`}>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <Image src="/images/hero-main.png" alt="" fill sizes="46vw" className="object-cover" />
        <div
          className={`absolute inset-0 bg-gradient-to-r ${scrimFrom} via-transparent to-transparent`}
        />
      </div>
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[1fr_.9fr] lg:gap-8 lg:px-12 lg:py-20 xl:px-16">
        <div data-reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-white/70">
            <span className="h-px w-8 bg-white" />
            LET&apos;S MAKE HOME FEEL RIGHT
          </p>
          <h2 className="max-w-lg font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/85 md:text-lg">
            {description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-0 sm:divide-x sm:divide-white/25">
            {[
              [Truck, 'Fast Response', 'Get help quickly'],
              [ShieldCheck, 'Trusted Experts', 'Licensed & insured'],
              [HomeIcon, 'Comfort First', 'Your home, our care'],
            ].map(([Icon, l1, l2]) => {
              const Symbol = Icon as typeof Truck
              return (
                <div key={l1 as string} className="flex items-center gap-3 sm:px-5 sm:first:pl-0">
                  <span
                    data-service-badge
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15 text-white"
                  >
                    <Symbol size={19} />
                  </span>
                  <span className="text-xs font-semibold leading-tight">
                    <strong className="block text-sm font-bold">{l1 as string}</strong>
                    <span className="text-white/70">{l2 as string}</span>
                  </span>
                </div>
              )
            })}
          </div>

          <div data-reveal className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-xs font-bold text-[#111] transition hover:-translate-y-0.5"
            >
              REQUEST SERVICE
              <ArrowUpRight size={17} />
            </Link>
            <a
              href="tel:6476191472"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/50 px-7 text-xs font-bold transition hover:border-white"
            >
              <Phone size={16} /> CALL 647-619-1472
            </a>
          </div>
        </div>

        <div className="relative -mx-5 h-56 sm:-mx-8 sm:h-72 lg:hidden">
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/hero-main.png"
              alt="An HVAC technician servicing a residential outdoor air conditioning condenser"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${mobileScrimFrom} via-transparent to-transparent`}
            />
          </div>
        </div>
      </div>

      <div
        data-hero-float
        className="absolute left-[52%] top-6 hidden w-64 items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur lg:flex xl:left-[54%]"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F3692C]/15 text-[#F3692C]">
          <Flame size={18} />
        </span>
        <span className="text-xs font-bold leading-tight text-[#111]">
          Heating Solutions
          <span className="mt-0.5 block text-[11px] font-medium text-[#777]">
            Stay warm all season
          </span>
        </span>
        <ArrowUpRight size={16} className="ml-auto shrink-0 text-[#999]" />
      </div>

      <div
        data-hero-float
        className="absolute bottom-6 right-4 hidden w-64 items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur lg:flex"
      >
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#E4F8FD] text-[#0877D9]">
          <Snowflake size={18} />
        </span>
        <span className="text-xs font-bold leading-tight text-[#111]">
          Cooling Solutions
          <span className="mt-0.5 block text-[11px] font-medium text-[#777]">
            Stay cool and comfortable
          </span>
        </span>
        <ArrowUpRight size={16} className="ml-auto shrink-0 text-[#999]" />
      </div>
    </section>
  )
}
