'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Plus } from 'lucide-react'
export default function FAQ({
  items,
  title = 'Questions, answered.',
  showAll = false,
}: {
  items: [string, string][]
  title?: string
  showAll?: boolean
}) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="bg-[#FAF8F2] py-12 md:py-16 ">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:px-12 xl:px-16">
        <div data-reveal>
          <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] text-[#666]">
            <span className="h-px w-8 bg-[#F47732]" />
            GOOD TO KNOW
          </p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-.055em] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-[#666]">
            Have another question? Our team is a call away.
          </p>
          {!showAll && (
            <Link
              href="/faq"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#111] pb-2 text-sm font-semibold"
            >
              SEE ALL FAQs
              <ArrowUpRight size={16} />
            </Link>
          )}
        </div>
        <div data-reveal className="border-t border-black/15">
          {items.map(([q, a], i) => (
            <div key={q} className="border-b border-black/15">
              <button
                type="button"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                className="flex min-h-19 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-sm font-semibold sm:text-base"
              >
                <span>{q}</span>
                <Plus
                  size={19}
                  className={`shrink-0 text-[#EF6629] transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-6 pr-7 text-sm leading-7 text-[#666]">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
