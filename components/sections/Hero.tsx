'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Flame, Phone, Snowflake } from 'lucide-react'

const slides = [
  {
    src: '/images/hero-main.png',
    alt: 'An HVAC technician servicing a residential outdoor air conditioning condenser beside a modern home',
    mobilePosition: 'object-[70%_center]',
  },
  {
    src: '/images/outdoor-ac.jpg',
    alt: 'Residential outdoor air conditioning system beside a home',
    mobilePosition: 'object-center',
  },
  {
    src: '/images/technician-furnace.jpg',
    alt: 'HVAC technician checking a furnace',
    mobilePosition: 'object-[35%_center]',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#FAF8F2] px-3 pt-3 sm:px-5 sm:pt-5 lg:px-6 lg:pt-6">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[22px] sm:rounded-[28px] lg:rounded-[32px]">
        <div
          data-hero-image
          className="relative min-h-[560px] w-full sm:aspect-[16/10] sm:min-h-0 lg:aspect-[21/9]"
        >
          {slides.map((s, i) => (
            <Image
              key={s.src}
              src={s.src}
              alt={s.alt}
              fill
              priority={i === 0}
              loading={i === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
              quality={90}
              className={`object-cover ${s.mobilePosition} transition-opacity duration-1000 ease-in-out sm:object-center ${i === index ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/45 sm:bg-gradient-to-r sm:from-[#FAF8F2] sm:via-[#FAF8F2]/70 sm:to-transparent lg:from-[#FAF8F2] lg:via-[#FAF8F2]/40 lg:to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/60 to-transparent sm:hidden" />

          <div className="relative flex h-full flex-col justify-end p-5 pb-8 sm:justify-center sm:p-8 sm:pb-8 lg:p-14 xl:p-16">
            <div className="max-w-xl">
              <div
                data-hero-line
                className="relative mb-4 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-[#D52B1E] py-1.5 pl-2 pr-4 shadow-[0_8px_24px_rgba(213,43,30,.35)] ring-1 ring-white/30 sm:mb-5"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#D52B1E" aria-hidden="true">
                    <path d="M12 1.5l2.1 4.2 2.6-1.1-1.2 6 3.7-2.6.7 2.1 3-.5-1.4 3.9 1.9 1.6-5.3 3.9.5 1.6-6-.9V22.5h-1.2v-4.6l-6 .9.5-1.6-5.3-3.9 1.9-1.6L2.6 9.9l3 .5.7-2.1 3.7 2.6-1.2-6 2.6 1.1z" />
                  </svg>
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-white">
                  Canadian Owned Company
                </span>
                <span
                  data-shine
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-0 w-10 -skew-x-12 bg-white/40 blur-[2px]"
                />
              </div>
              <p
                data-hero-line
                className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-bold tracking-[.18em] text-white sm:mb-4 sm:text-[#626262]"
              >
                <span className="h-px w-8 bg-[#F3692C]" />
                ONE TEN HOME SOLUTIONS <span className="hidden text-[#999] sm:inline">/</span>{' '}
                <span className="hidden sm:inline">HEATING & AIR CONDITIONING</span>
              </p>
              <h1
                data-hero-line
                className="font-heading text-[2.25rem] font-semibold leading-[1.1] tracking-[-.04em] text-white sm:text-5xl sm:leading-[1.05] sm:tracking-[-.055em] sm:text-[#111] lg:text-6xl xl:text-[4.5rem]"
              >
                Comfort,
                <br />
                engineered for
                <br />
                <span className="bg-gradient-to-r from-[#F36A25] via-[#ed6d32] to-[#0877D9] bg-clip-text text-transparent">
                  every season.
                </span>
              </h1>
              <p
                data-hero-line
                className="mt-4 max-w-md text-sm leading-6 text-white/90 sm:mt-5 sm:leading-8 sm:text-base sm:text-[#606060] md:text-lg"
              >
                Professional heating and air conditioning services designed to keep your home
                comfortable through every season.
              </p>
              <div data-hero-line className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#F36D2B] px-7 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#dd581a] sm:min-h-14"
                >
                  REQUEST SERVICE
                  <ArrowUpRight size={17} />
                </Link>
                <a
                  href="tel:6476191472"
                  className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 text-xs font-bold text-white backdrop-blur transition hover:border-white sm:min-h-14 sm:border-black/15 sm:bg-white sm:text-[#111] sm:hover:border-black"
                >
                  <Phone size={16} /> CALL 647-619-1472
                </a>
              </div>
              <p
                data-hero-line
                className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] font-bold tracking-[.12em] text-white/85 sm:mt-7 sm:text-[#777]"
              >
                <span className="h-2 w-2 rounded-full bg-[#08a8d7]" /> HEATING{' '}
                <span className="text-white/40 sm:text-[#ccc]">/</span> COOLING{' '}
                <span className="text-white/40 sm:text-[#ccc]">/</span> REPAIR{' '}
                <span className="text-white/40 sm:text-[#ccc]">/</span> INSTALLATION
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 hidden items-center gap-2 sm:flex sm:bottom-5 sm:right-5 lg:bottom-8 lg:right-8">
          <div
            data-hero-float
            className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur sm:px-4 sm:py-3"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#FFF0E5] text-[#F36D2B] sm:h-9 sm:w-9">
              <Flame size={16} />
            </span>
            <span className="text-[10px] font-bold leading-tight text-[#111]">
              Heating
              <span className="mt-0.5 block text-[9px] font-medium text-[#777]">Stay Warm</span>
            </span>
          </div>
          <div
            data-hero-float
            className="flex items-center gap-2 rounded-2xl border border-black/10 bg-white/95 px-3 py-2.5 shadow-xl backdrop-blur sm:px-4 sm:py-3"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E4F8FD] text-[#0877D9] sm:h-9 sm:w-9">
              <Snowflake size={16} />
            </span>
            <span className="text-[10px] font-bold leading-tight text-[#111]">
              Cooling
              <span className="mt-0.5 block text-[9px] font-medium text-[#777]">Stay Cool</span>
            </span>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 flex gap-1.5 sm:bottom-5 sm:left-8 lg:bottom-8">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white sm:bg-[#111]' : 'w-1.5 bg-white/50 sm:bg-black/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
