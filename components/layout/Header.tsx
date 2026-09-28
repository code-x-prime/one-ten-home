'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowUpRight,
  ChevronDown,
  Droplet,
  Flame,
  Home as HomeIcon,
  Menu,
  Monitor,
  Phone,
  Snowflake,
  Thermometer,
  X,
  Zap,
} from 'lucide-react'
import gsap from 'gsap'
import { services } from '@/lib/content'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Heating', '/heating'],
  ['Cooling', '/cooling'],
  ['Contact', '/contact'],
]

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

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const menuRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const closeServicesDelayed = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }, [pathname])

  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setServicesOpen(false)
    }
    window.addEventListener('mousedown', onClick)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('mousedown', onClick)
      window.removeEventListener('keydown', onKey)
    }
  }, [servicesOpen])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !headerRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, { y: -24, opacity: 0, duration: 0.7, ease: 'power3.out' })
      gsap.from('[data-nav-item]', {
        y: -10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        delay: 0.15,
        ease: 'power2.out',
      })
      gsap.from('[data-nav-cta]', {
        y: -10,
        opacity: 0,
        duration: 0.5,
        delay: 0.4,
        ease: 'power2.out',
      })
    }, headerRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!open || !menuRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -18 },
        { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' },
      )
      gsap.fromTo(
        '.mobile-link',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.045, delay: 0.08, ease: 'power2.out' },
      )
    }, menuRef)
    return () => ctx.revert()
  }, [open])
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', open)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header ref={headerRef} className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-black/5">
        <div
          className="h-full bg-gradient-to-r from-[#F3692C] to-[#0877D9] transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <div
        className={`border-b transition-all duration-300 ${scrolled ? 'border-black/10 bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,.06)] backdrop-blur-xl' : 'border-transparent bg-[#FAF8F2]/80 backdrop-blur-md'}`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 transition-[height] duration-300 sm:px-8 lg:px-12 xl:px-16 ${scrolled ? 'h-[76px] lg:h-20' : 'h-[76px] lg:h-24'}`}
        >
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 transition-transform duration-300"
            aria-label="One Ten Home Solutions home"
          >
            <Image
              src="/logo.png"
              alt="One Ten Home Solutions"
              width={100}
              height={100}
              priority
              className={`shrink-0 object-contain transition-all duration-300 ${scrolled ? 'h-14 w-14 md:h-16 md:w-16' : 'h-16 w-16 md:h-20 md:w-20'}`}
            />
            <span className="hidden text-[14px] font-extrabold leading-tight tracking-[-.05em] text-[#111] sm:block">
              ONE TEN
              <span className="block text-[10px] font-bold tracking-[.17em]">HOME SOLUTIONS</span>
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.slice(0, 2).map(([label, href]) => (
              <Link
                data-nav-item
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`group relative py-3 text-[13px] font-medium transition-colors hover:text-[#111] ${pathname === href ? 'text-[#111] font-semibold' : 'text-[#555]'}`}
              >
                {label}
                <span
                  className={`absolute bottom-1 left-0 h-[2px] bg-[#F3692C] transition-all duration-300 ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            ))}
            <div
              data-nav-item
              ref={servicesRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={closeServicesDelayed}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`group flex items-center gap-1.5 py-3 text-[13px] font-medium transition-colors hover:text-[#111] ${pathname.startsWith('/services') ? 'text-[#111] font-semibold' : 'text-[#555]'}`}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-2 w-[560px] -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-2 shadow-2xl">
                  <div className="grid grid-cols-2">
                    {services.map((s) => {
                      const Icon = serviceIcons[s.slug] ?? Flame
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group/item relative flex items-center gap-3 overflow-hidden rounded-xl p-2.5"
                        >
                          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-[#FFF3EC] to-transparent opacity-0 transition duration-200 group-hover/item:opacity-100" />
                          <span className="relative h-6 w-1 shrink-0 origin-center rounded-full bg-transparent transition-all duration-200 group-hover/item:h-7 group-hover/item:bg-[#F3692C]" />
                          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#FFF0E5] text-[#F3692C] transition-transform duration-200 group-hover/item:scale-110">
                            <Icon size={17} />
                          </span>
                          <span className="relative text-[13px] font-semibold text-[#111] transition-transform duration-200 group-hover/item:translate-x-0.5">
                            {s.shortTitle}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#111] py-2.5 text-xs font-bold text-white transition hover:bg-[#F36D2B]"
                  >
                    VIEW ALL SERVICES
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              )}
            </div>
            {links.slice(2).map(([label, href]) => (
              <Link
                data-nav-item
                key={href}
                href={href}
                aria-current={pathname === href ? 'page' : undefined}
                className={`group relative py-3 text-[13px] font-medium transition-colors hover:text-[#111] ${pathname === href ? 'text-[#111] font-semibold' : 'text-[#555]'}`}
              >
                {label}
                <span
                  className={`absolute bottom-1 left-0 h-[2px] bg-[#F3692C] transition-all duration-300 ${pathname === href ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </Link>
            ))}
          </nav>
          <div data-nav-cta className="hidden shrink-0 items-center gap-4 lg:flex">
            <a
              href="tel:6476191472"
              className="flex items-center gap-2 text-[13px] font-bold text-[#F36D2B] transition hover:text-[#dd581a]"
            >
              <Phone size={15} /> 647-619-1472
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-black px-5 text-[12px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#EF6629]"
            >
              REQUEST SERVICE
              <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <a
              href="tel:6476191472"
              aria-label="Call 647-619-1472"
              className="grid h-11 w-11 place-items-center rounded-full border border-black/15 text-[#111]"
            >
              <Phone size={19} />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-black/15"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <nav
          ref={menuRef}
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[60] flex h-dvh flex-col overflow-y-auto bg-[#FAF8F2] px-6 pb-10 pt-5 shadow-xl sm:px-10 lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-black/10 pb-5">
            <Link href="/" onClick={() => setOpen(false)} aria-label="One Ten Home Solutions home">
              <Image
                src="/logo.png"
                alt="One Ten Home Solutions"
                width={84}
                height={84}
                className="h-20 w-20 object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-black/15"
            >
              <X size={21} />
            </button>
          </div>
          {links.slice(0, 2).map(([label, href], i) => (
            <Link
              className="mobile-link flex items-center justify-between border-b border-black/10 py-3.5 text-[clamp(1.5rem,6vw,2.5rem)] font-semibold tracking-tight"
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <ArrowUpRight size={20} className={i % 2 ? 'text-[#0877D9]' : 'text-[#F3692C]'} />
            </Link>
          ))}
          <div className="mobile-link border-b border-black/10">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex w-full cursor-pointer items-center justify-between py-3.5 text-[clamp(1.5rem,6vw,2.5rem)] font-semibold tracking-tight"
            >
              <span>Services</span>
              <ChevronDown
                size={26}
                className={`text-[#F3692C] transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="grid grid-cols-1 gap-1 pb-4 sm:grid-cols-2">
                {services.map((s) => {
                  const Icon = serviceIcons[s.slug] ?? Flame
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-black/[.03]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#FFF0E5] text-[#F3692C]">
                        <Icon size={18} />
                      </span>
                      <span className="text-sm font-semibold text-[#111]">{s.shortTitle}</span>
                    </Link>
                  )
                })}
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#111] py-3 text-xs font-bold text-white sm:col-span-2"
                >
                  VIEW ALL SERVICES
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            )}
          </div>
          {links.slice(2).map(([label, href], i) => (
            <Link
              className="mobile-link flex items-center justify-between border-b border-black/10 py-3.5 text-[clamp(1.5rem,6vw,2.5rem)] font-semibold tracking-tight"
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              <span>{label}</span>
              <ArrowUpRight size={20} className={i % 2 ? 'text-[#0877D9]' : 'text-[#F3692C]'} />
            </Link>
          ))}
          <div className="mobile-link mt-8 grid grid-cols-2 gap-3">
            <a
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-black px-4 text-xs font-bold text-white"
              href="tel:6476191472"
            >
              <Phone size={16} /> CALL NOW
            </a>
            <Link
              className="flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#F36D2B] px-4 text-xs font-bold text-white"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              REQUEST SERVICE
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
