import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUp,
  Droplets,
  Fan,
  Flame,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Snowflake,
  Wrench,
  Zap,
} from 'lucide-react'
import { services } from '@/lib/content'

const serviceIcons: Record<string, typeof Wrench> = {
  'furnace-repair': Wrench,
  'air-conditioning': Snowflake,
  'heat-pump': Fan,
  'water-heater': Droplets,
  humidifier: Droplets,
  'smart-thermostat': Monitor,
  fireplace: Flame,
  'gas-appliance': Zap,
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-[#F3692C] via-[#0B1220]/0 to-[#0877D9] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block">
        <Image
          src="/images/footer-home.jpg"
          alt=""
          fill
          sizes="40vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 lg:px-12 lg:pt-20 xl:px-16">
        <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="One Ten Home Solutions"
              width={128}
              height={128}
              className="h-24 w-24 object-contain sm:h-28 sm:w-28"
            />
            <p className="mt-4 text-sm font-semibold text-white">Heating & Air Conditioning</p>
            <p className="mt-2 max-w-[240px] text-sm leading-6 text-white/50">
              Thoughtful care for home comfort. Reliable heating & cooling solutions for a
              comfortable tomorrow.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="mb-1 text-[11px] font-bold tracking-[.18em] text-[#F79A59]">
              COMPANY
              <span className="mt-2 block h-0.5 w-6 bg-[#F79A59]" />
            </h3>
            {[
              ['Home', '/'],
              ['About', '/about'],
              ['Services', '/services'],
              ['Contact', '/contact'],
            ].map(([x, h]) => (
              <Link
                key={h}
                href={h}
                className="w-fit text-sm text-white/60 transition hover:text-white"
              >
                {x}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <h3 className="mb-1 text-[11px] font-bold tracking-[.18em] text-[#69CBEA]">
              HEATING & COOLING
              <span className="mt-2 block h-0.5 w-6 bg-[#69CBEA]" />
            </h3>
            {services.map((s) => {
              const Icon = serviceIcons[s.slug] ?? Flame
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex w-fit items-center gap-2.5 text-sm text-white/60 transition hover:text-white"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/5 text-white/50 transition group-hover:bg-[#0877D9]/20 group-hover:text-[#69CBEA]">
                    <Icon size={13} />
                  </span>
                  {s.shortTitle}
                </Link>
              )
            })}
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="mb-1 text-[11px] font-bold tracking-[.18em] text-[#F79A59]">
              GET IN TOUCH
              <span className="mt-2 block h-0.5 w-6 bg-[#F79A59]" />
            </h3>
            <a href="tel:6476191472" className="group flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F3692C]/15 text-[#F3692C] transition group-hover:bg-[#F3692C]/25">
                <Phone size={16} />
              </span>
              <span className="text-sm text-white/60">
                Call or text
                <strong className="block text-base font-semibold text-white">647-619-1472</strong>
              </span>
            </a>
            <a
              href="mailto:onetenhomesolutions@gmail.com"
              className="flex items-center gap-3 text-sm text-white/60 transition hover:text-white"
            >
              <Mail size={16} className="shrink-0 text-white/50" />
              onetenhomesolutions@gmail.com
            </a>
            <p className="flex items-center gap-3 text-sm text-white/60">
              <MapPin size={16} className="shrink-0 text-white/50" />
              Oshawa, Ontario, Canada
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span>© 2026 One Ten Home Solutions. All rights reserved.</span>
            <span>
              Design By :{' '}
              <a
                href="https://groxmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white/70 transition hover:text-[#F79A59]"
              >
                Grox Media
              </a>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
            <a
              href="#top"
              aria-label="Back to top"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#F3692C]/40 text-[#F3692C] transition hover:bg-[#F3692C] hover:text-white"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
