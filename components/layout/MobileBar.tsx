import Link from 'next/link'
import { ArrowUpRight, Phone } from 'lucide-react'
export default function MobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-40 grid grid-cols-2 gap-2 rounded-full border border-black/10 bg-[#FAF8F2]/95 p-1.5 shadow-[0_10px_35px_rgba(0,0,0,.14)] backdrop-blur-xl lg:hidden">
      <a
        href="tel:6476191472"
        className="flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#111] px-2 text-[10px] font-bold text-white sm:gap-2 sm:text-xs"
      >
        <Phone size={15} /> CALL NOW
      </a>
      <Link
        href="/contact"
        className="flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-[#F36D2B] px-2 text-[10px] font-bold text-white sm:gap-2 sm:text-xs"
      >
        REQUEST SERVICE
        <ArrowUpRight size={15} />
      </Link>
    </div>
  )
}
