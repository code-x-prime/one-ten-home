'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Motion() {
  const pathname = usePathname()
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let active = true
    let cleanup = () => {}
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (!active) return
        gsap.registerPlugin(ScrollTrigger)

        // Scroll-revealed content must never be able to get stuck invisible: if an
        // element is already inside (or above) the viewport by the time this runs,
        // animate it immediately instead of arming a ScrollTrigger for a threshold
        // it has already passed. `once: true` ScrollTriggers do not fire retroactively
        // for a starting point that is already behind the current scroll position, so
        // gating on `ScrollTrigger.isInViewport` here removes that failure mode rather
        // than papering over it with a post-hoc refresh.
        const revealAll = (selector: string, vars: Record<string, unknown>, startPct = 0.9) => {
          gsap.utils.toArray<HTMLElement>(selector).forEach((el) => {
            const alreadyVisible = ScrollTrigger.isInViewport(el, startPct)
            if (alreadyVisible) {
              gsap.from(el, { ...vars, clearProps: 'all' })
            } else {
              gsap.from(el, {
                ...vars,
                clearProps: 'all',
                scrollTrigger: { trigger: el, start: `top ${startPct * 100}%`, once: true },
              })
            }
          })
        }

        const ctx = gsap.context(() => {
          gsap.from('[data-hero-line]', {
            y: 36,
            opacity: 0,
            duration: 0.8,
            stagger: 0.11,
            ease: 'power3.out',
            clearProps: 'all',
          })
          gsap.from('[data-hero-image]', {
            clipPath: 'inset(0 0 100% 0 round 22px)',
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            delay: 0.15,
            ease: 'power3.inOut',
            clearProps: 'all',
          })
          gsap.from('[data-hero-float]', {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 0.5,
            ease: 'back.out(1.6)',
            clearProps: 'all',
          })
          // Canadian-owned badge: a soft light sweep that repeats so the banner catches
          // the eye without being distracting.
          gsap.utils.toArray<HTMLElement>('[data-shine]').forEach((el) => {
            const width = (el.parentElement?.offsetWidth ?? 260) + 80
            gsap.fromTo(
              el,
              { x: -60 },
              { x: width, duration: 1.4, ease: 'power2.inOut', repeat: -1, repeatDelay: 2.2 },
            )
          })
          revealAll('[data-reveal]', {
            y: 28,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
          })
          revealAll(
            '[data-signature-image]',
            {
              clipPath: 'inset(0 50% 0 50% round 22px)',
              duration: 1,
              ease: 'power3.inOut',
            },
            0.85,
          )
          revealAll(
            '[data-signature-badge]',
            {
              scale: 0,
              opacity: 0,
              duration: 0.7,
              delay: 0.4,
              ease: 'back.out(1.7)',
            },
            0.85,
          )
          revealAll(
            '[data-service-badge]',
            {
              scale: 0,
              opacity: 0,
              duration: 0.55,
              delay: 0.2,
              ease: 'back.out(1.8)',
            },
            0.92,
          )

          // Benefit cards: staggered scale + slight rotation entrance, distinct from the
          // plain fade-up used for `data-reveal`, grouped per section so each row of
          // cards animates together rather than one at a time across the whole page.
          const benefitGroups = new Map<Element, HTMLElement[]>()
          gsap.utils.toArray<HTMLElement>('[data-benefit-card]').forEach((el) => {
            const section = el.closest('section') ?? el.parentElement ?? el
            const group = benefitGroups.get(section) ?? []
            group.push(el)
            benefitGroups.set(section, group)
          })
          benefitGroups.forEach((cards) => {
            const trigger = cards[0]
            const alreadyVisible = ScrollTrigger.isInViewport(trigger, 0.85)
            const vars = {
              scale: 0.85,
              opacity: 0,
              rotate: -2,
              duration: 0.6,
              stagger: 0.12,
              ease: 'back.out(1.5)',
              clearProps: 'all',
            }
            if (alreadyVisible) {
              gsap.from(cards, vars)
            } else {
              gsap.from(cards, {
                ...vars,
                scrollTrigger: { trigger, start: 'top 85%', once: true },
              })
            }
          })
        })
        cleanup = () => ctx.revert()

        // Hard failsafe: whatever else goes wrong above (a missed trigger, a layout
        // shift GSAP didn't catch, a plugin error swallowed somewhere), nothing on the
        // page is allowed to stay invisible forever. After a short delay, force every
        // tracked element back to its normal, visible state unconditionally.
        const revealSelectors = [
          '[data-hero-line]',
          '[data-hero-image]',
          '[data-hero-float]',
          '[data-reveal]',
          '[data-signature-image]',
          '[data-signature-badge]',
          '[data-service-badge]',
          '[data-benefit-card]',
        ].join(',')
        const failsafeTimer = window.setTimeout(() => {
          gsap.set(revealSelectors, { clearProps: 'all' })
        }, 2500)
        const prevCleanup = cleanup
        cleanup = () => {
          prevCleanup()
          window.clearTimeout(failsafeTimer)
        }
      },
    )
    return () => {
      active = false
      cleanup()
    }
  }, [pathname])
  return null
}
