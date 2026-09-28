export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string
  title: React.ReactNode
  description?: string
  light?: boolean
}) {
  return (
    <div
      data-reveal
      className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
    >
      <div>
        <p
          className={`mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[.19em] ${light ? 'text-white/65' : 'text-[#666]'}`}
        >
          <span className="h-px w-8 bg-[#F47732]" />
          {eyebrow}
        </p>
        <h2
          className={`max-w-4xl font-heading text-4xl font-semibold leading-[1.12] tracking-[-.055em] sm:text-5xl lg:text-6xl ${light ? 'text-white' : 'text-[#111]'}`}
        >
          {title}
        </h2>
      </div>
      {description && (
        <p
          className={`max-w-sm text-base leading-7 md:text-lg ${light ? 'text-white/65' : 'text-[#666]'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
