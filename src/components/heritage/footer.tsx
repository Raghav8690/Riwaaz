import Link from "next/link";
import { OrnamentalDivider } from "./ornamental-divider";
import { SITE } from "@/lib/site";

export function Footer() {
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(SITE.mapsQuery)}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=15&output=embed`;

  return (
    <footer className="bg-[#1A1A1A] text-[#E8DDC4]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#C8A96A] to-transparent" />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="font-display text-2xl tracking-[0.18em] text-[#FFF8E7]">{SITE.name}</div>
            <div className="text-xs tracking-[0.22em] text-[#C8A96A] mt-1">JAIPUR ATELIER · {SITE.owner.toUpperCase()}</div>
            <p className="mt-4 text-sm leading-6 text-[#E8DDC4]/70 max-w-xs">
              Heirloom Rajputi poshaks, dresses & artificial jewellery — handcrafted in Jaipur since {SITE.since}. Curated by <span className="text-[#E8D5A8]">{SITE.owner}</span>.
            </p>
            <OrnamentalDivider variant="compact" className="mt-6 justify-start !mx-0" />
          </div>
          <div>
            <div className="text-xs tracking-[0.18em] font-semibold text-[#C8A96A]">COLLECTIONS</div>
            <ul className="mt-4 space-y-2 text-sm text-[#E8DDC4]/80">
              <li><Link href="/collections" className="hover:text-[#FFF8E7]">All Poshaks</Link></li>
              <li><Link href="/collections?filter=poshak" className="hover:text-[#FFF8E7]">Bridal Poshaks</Link></li>
              <li><Link href="/collections?filter=dress" className="hover:text-[#FFF8E7]">Rajputi Dresses</Link></li>
              <li><Link href="/collections?filter=jewellery" className="hover:text-[#FFF8E7]">Artificial Jewellery</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.18em] font-semibold text-[#C8A96A]">ATELIER</div>
            <ul className="mt-4 space-y-2 text-sm text-[#E8DDC4]/80">
              <li><Link href="/stitching" className="hover:text-[#FFF8E7]">Bespoke Stitching</Link></li>
              <li><Link href="/heritage" className="hover:text-[#FFF8E7]">Our Heritage</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFF8E7]">Visit / Contact</Link></li>
              <li><a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer" className="hover:text-[#FFF8E7]">WhatsApp {SITE.phoneDisplay}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs tracking-[0.18em] font-semibold text-[#C8A96A]">VISIT US</div>
            <div className="mt-4 text-sm leading-6 text-[#E8DDC4]/80">
              {SITE.addressFull}<br />
              {SITE.hours}<br />
              <a href={SITE.telHref} className="text-[#C8A96A] hover:text-[#FFF8E7]">{SITE.phoneDisplay}</a>
              <span className="text-[#E8DDC4]/60"> · {SITE.owner}</span>
            </div>
            <a href={mapsHref} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs tracking-[0.12em] font-semibold text-[#C8A96A] hover:text-white">OPEN IN MAPS →</a>
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 overflow-hidden rounded-xl border border-[#C8A96A]/20 bg-[#0f0f0f]">
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-[#C8A96A]/15">
            <div className="text-xs tracking-[0.14em] font-semibold text-[#C8A96A]">FIND US — {SITE.addressShort.toUpperCase()}</div>
            <a href={mapsHref} target="_blank" rel="noreferrer" className="text-xs tracking-[0.12em] font-semibold text-[#E8DDC4] hover:text-white border border-[#C8A96A]/30 rounded-full px-3 py-1">OPEN IN GOOGLE MAPS</a>
          </div>
          <iframe
            title={`Map — ${SITE.addressFull}`}
            src={embedSrc}
            className="w-full h-[280px] sm:h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 pt-6 border-t border-[#C8A96A]/15 flex flex-col sm:flex-row gap-3 justify-between text-xs tracking-[0.12em] text-[#E8DDC4]/50">
          <span>© {new Date().getFullYear()} {SITE.name} — Curated by {SITE.owner}, Jaipur. All rights reserved.</span>
          <span className="flex gap-4">
            <span>Privacy</span><span>Terms</span><span>Shipping & Returns</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
