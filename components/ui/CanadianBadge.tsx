export default function CanadianBadge() {
  return (
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
  )
}
