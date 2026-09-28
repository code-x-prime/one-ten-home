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

const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2m0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4M17.7 5.4a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34',
  },
  {
    label: 'YouTube',
    href: '#',
    path: 'M21.8 8.3a2.8 2.8 0 0 0-2-2C18.1 6 12 6 12 6s-6.1 0-7.8.3a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .2 3.7 2.8 2.8 0 0 0 2 2C5.9 18 12 18 12 18s6.1 0 7.8-.3a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.2-3.7M10 15V9l5.2 3z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 8.48H3V21h4zM13.32 8.48H9.34V21h3.94v-6.57c0-1.74.33-3.42 2.48-3.42 2.12 0 2.15 1.98 2.15 3.53V21H22v-7.93c0-3.66-.79-6.47-5.06-6.47-2.05 0-3.43 1.13-4 2.2h-.05z',
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-br from-[#F3692C] via-[#0B1220]/0 to-[#0877D9] opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block">
        <Image
          src="/images/footer-home.png"
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
            <div className="mt-6 flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
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
          <span>© 2026 One Ten Home Solutions. All rights reserved.</span>
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
