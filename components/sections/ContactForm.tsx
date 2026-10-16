'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check, Loader2, TriangleAlert } from 'lucide-react'
import { requestServices } from '@/lib/content'

const input =
  'mt-2 block w-full min-w-0 rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#111] outline-none transition focus-visible:border-[#F36D2B] focus-visible:ring-2 focus-visible:ring-[#FF8A00]/30'
const label = 'block min-w-0 text-[11px] font-bold tracking-[.12em] text-[#555]'

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  return (
    <form
      className="relative w-full min-w-0 rounded-[28px] border border-black/10 bg-[#F4F1E8] p-6 shadow-[0_20px_60px_rgba(17,17,17,.06)] sm:p-9 lg:p-11"
      onSubmit={async (e) => {
        e.preventDefault()
        if (state === 'sending') return
        const form = e.currentTarget
        const data = new FormData(form)
        setState('sending')
        setError('')
        try {
          const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(data.entries())),
          })
          const out = await res.json().catch(() => ({}))
          if (!res.ok || !out.ok) throw new Error(out.error || 'Something went wrong.')
          form.reset()
          setState('sent')
        } catch (err) {
          setError(
            err instanceof Error ? err.message : 'We could not send your request. Please call us.',
          )
          setState('error')
        }
      }}
    >
      {/* Spam trap: invisible to people, bots fill it in and are quietly ignored. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          FULL NAME *
          <input
            className={input}
            name="name"
            required
            minLength={2}
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
          />
        </label>
        <label className={label}>
          PHONE NUMBER *
          <input
            className={input}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            pattern="[0-9+(). \-]{7,30}"
            placeholder="(647) 000-0000"
          />
        </label>
        <label className={label}>
          EMAIL (OPTIONAL)
          <input
            className={input}
            name="email"
            type="email"
            maxLength={150}
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label className={label}>
          SERVICE NEEDED *
          <select className={input} name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {requestServices.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={`${label} mt-5`}>
        PREFERRED DATE
        <input className={input} name="date" type="date" />
      </label>
      <label className={`${label} mt-5`}>
        HOW CAN WE HELP? *
        <textarea
          className={input}
          name="message"
          required
          minLength={5}
          maxLength={2000}
          rows={5}
          placeholder="Tell us a little about what is happening..."
        />
      </label>
      <button
        type="submit"
        disabled={state === 'sending'}
        className="mt-7 flex min-h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#F36D2B] px-7 text-xs font-bold text-white transition hover:bg-[#d95519] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {state === 'sending' ? (
          <>
            SENDING… <Loader2 size={17} className="animate-spin" />
          </>
        ) : (
          <>
            SEND REQUEST
            <ArrowUpRight size={17} />
          </>
        )}
      </button>
      <p className="mt-5 text-xs leading-6 text-[#666]">
        By sending this request you agree that One Ten Home Solutions may contact you about it by
        phone, text, or email. We only use your details to respond to your request and never sell
        them. See our{' '}
        <Link href="/privacy-policy" className="font-semibold underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      {state === 'sent' && (
        <p
          role="status"
          className="mt-4 flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-xs leading-6 text-[#236c50]"
        >
          <Check size={16} className="mt-1 shrink-0" />
          Thank you — your request has been sent. We will contact you shortly. For urgent issues,
          call or text 647-619-1472.
        </p>
      )}
      {state === 'error' && (
        <p
          role="alert"
          className="mt-4 flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-xs leading-6 text-[#b3261e]"
        >
          <TriangleAlert size={16} className="mt-1 shrink-0" />
          {error} You can also call or text 647-619-1472.
        </p>
      )}
    </form>
  )
}
