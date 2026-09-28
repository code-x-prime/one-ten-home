'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'

const input =
  'mt-2 block w-full min-w-0 rounded-2xl border border-black/15 bg-white px-5 py-4 text-sm text-[#111] outline-none transition focus-visible:border-[#F36D2B] focus-visible:ring-2 focus-visible:ring-[#FF8A00]/30'
const label = 'block min-w-0 text-[11px] font-bold tracking-[.12em] text-[#555]'
export default function ContactForm() {
  const [status, setStatus] = useState('')
  return (
    <form
      className="w-full min-w-0 rounded-[28px] border border-black/10 bg-[#F4F1E8] p-6 shadow-[0_20px_60px_rgba(17,17,17,.06)] sm:p-9 lg:p-11"
      onSubmit={(e) => {
        e.preventDefault()
        const d = new FormData(e.currentTarget)
        const body = encodeURIComponent(
          `Service request for ${d.get('service')}\nName: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email') || 'Not provided'}\nPreferred date: ${d.get('date') || 'Flexible'}\n\n${d.get('message')}`,
        )
        window.location.href = `sms:6476191472?body=${body}`
        setStatus(
          'Your messaging app should open with the request. Tap Send there to deliver it. If it does not open, call us directly.',
        )
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          FULL NAME *
          <input
            className={input}
            name="name"
            required
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
            pattern="[0-9+(). -]{7,}"
            placeholder="(647) 000-0000"
          />
        </label>
        <label className={label}>
          EMAIL (OPTIONAL)
          <input
            className={input}
            name="email"
            type="email"
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
            {[
              'Furnace Repair',
              'Furnace Installation',
              'Air Conditioning',
              'AC Maintenance',
              'Heat Pump',
              'Water Heater',
              'Fireplace',
              'Gas Appliance',
              'Humidifier',
              'Smart Thermostat',
              'Other',
            ].map((x) => (
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
          rows={5}
          placeholder="Tell us a little about what is happening..."
        />
      </label>
      <button
        type="submit"
        className="mt-7 flex min-h-14 cursor-pointer w-full items-center justify-center gap-3 rounded-full bg-[#F36D2B] px-7 text-xs font-bold text-white transition hover:bg-[#d95519] sm:w-auto"
      >
        PREPARE TEXT REQUEST
        <ArrowUpRight size={17} />
      </button>
      <p className="mt-5 text-xs leading-6 text-[#666]">
        Your details are used to prepare a service request text message. Nothing is sent until you
        tap Send in your messaging app. See our{' '}
        <Link href="/privacy-policy" className="font-semibold underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
      {status && (
        <p
          role="status"
          className="mt-4 flex items-start gap-2 rounded-xl bg-white px-4 py-3 text-xs leading-6 text-[#236c50]"
        >
          <Check size={16} className="mt-1 shrink-0" />
          {status}
        </p>
      )}
    </form>
  )
}
