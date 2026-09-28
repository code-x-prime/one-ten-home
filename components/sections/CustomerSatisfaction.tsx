import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Ear, Heart, MessageCircle, ShieldCheck, Snowflake, Star } from 'lucide-react'

const benefits = [
  {
    icon: Ear,
    tone: 'orange',
    title: 'Listen carefully',
    desc: 'Understand your needs and concerns.',
  },
  {
    icon: MessageCircle,
    tone: 'blue',
    title: 'Explain clearly',
    desc: 'No confusing jargon — just honest advice.',
  },
  {
    icon: ShieldCheck,
    tone: 'green',
    title: 'Work with care',
    desc: 'Clean, professional and respectful.',
  },
  {
    icon: Heart,
    tone: 'violet',
    title: 'Lasting comfort',
    desc: 'Solutions that keep your home comfortable.',
  },
]

const toneStyles: Record<string, string> = {
  orange: 'bg-[#FFE8D9] text-[#F3692C]',
  blue: 'bg-[#DCF1FB] text-[#0877D9]',
  green: 'bg-[#DFF5E7] text-[#2FA35C]',
  violet: 'bg-[#EAE6FB] text-[#6C4EE0]',
}

export default function CustomerSatisfaction() {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] py-12 sm:py-16 ">
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#F3692C]/[.06] blur-3xl" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
        <div data-reveal>
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
            <span className="h-px w-8 bg-[#F47732]" />
            CUSTOMER EXPERIENCE
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
            Comfort you can feel.
            <br />
            <span className="text-[#F36D2B]">Care you can see.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#666] md:text-lg">
            The best service feels clear from the first conversation. We focus on listening,
            explaining the work, and treating your home with care.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <span
                    data-service-badge
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${toneStyles[b.tone]}`}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <strong className="block text-sm font-semibold text-[#111]">{b.title}</strong>
                    <span className="mt-1 block text-xs leading-5 text-[#777]">{b.desc}</span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="inline-flex min-h-13 items-center gap-3 rounded-full bg-[#F36D2B] px-7 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#dd581a]"
            >
              TALK TO OUR TEAM
              <ArrowUpRight size={17} />
            </Link>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {['A', 'M', 'J'].map((letter, i) => (
                  <span
                    key={letter}
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 border-[#FAF8F2] text-xs font-bold text-white ${i % 2 ? 'bg-[#0877D9]' : 'bg-[#F3692C]'}`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <span className="text-xs leading-tight text-[#666]">
                Trusted by
                <strong className="block text-sm font-bold text-[#111]">100+ Homeowners</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 pr-8 pt-4 lg:max-w-none">
          <div className="relative aspect-[4/3] w-full -rotate-1 overflow-hidden rounded-[24px] shadow-[0_30px_80px_rgba(17,17,17,.18)]">
            <Image
              src="/images/customer-experience.png"
              alt="An HVAC technician talking with a homeowner in their living room"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div
            data-hero-float
            className="absolute -right-2 -top-4 hidden h-32 w-32 place-items-center rounded-full border-4 border-[#FAF8F2] bg-gradient-to-br from-white to-[#FFF3E9] text-center shadow-xl sm:grid"
          >
            <div>
              <Heart size={20} className="mx-auto text-[#F36D2B]" />
              <span className="mt-1.5 block text-[11px] font-bold leading-tight text-[#111]">
                Your Home
                <br />
                Our Care
              </span>
            </div>
          </div>

          <div className="absolute bottom-8 left-0 flex max-w-[220px] items-start gap-2.5 rounded-2xl bg-white p-3.5 shadow-xl sm:max-w-[240px] sm:p-4">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#F3692C]/15 text-xs font-bold text-[#F3692C]">
              S
            </span>
            <div>
              <div className="flex gap-0.5 text-[#F3692C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-xs leading-5 text-[#333]">
                &ldquo;Professional, on time and very friendly. Highly recommend!&rdquo;
              </p>
              <span className="mt-1 block text-[11px] font-bold text-[#111]">Sarah M.</span>
            </div>
          </div>

          <div className="absolute -bottom-6 right-16 z-10 hidden items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-24 sm:flex lg:right-28">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#E4F8FD] text-[#0877D9]">
              <Snowflake size={16} />
            </span>
            <span className="text-xs font-semibold leading-tight text-[#111]">
              Reliable comfort
              <br />
              all year round.
            </span>
          </div>

          <div className="absolute -bottom-8 -right-4 hidden h-32 w-24 rotate-3 overflow-hidden rounded-2xl border-4 border-[#FAF8F2] shadow-xl sm:block">
            <Image
              src="/images/outdoor-ac.jpg"
              alt="Residential outdoor air conditioning system beside a home"
              fill
              sizes="100px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
