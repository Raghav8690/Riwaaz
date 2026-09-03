import Link from "next/link";
import { Scissors, Ruler, MessageCircle, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { SITE } from "@/lib/site";

export const metadata = { title: "Bespoke Stitching" };

const steps = [
  { icon: MessageCircle, title: "1 — Consult", desc: "WhatsApp photos + your occasion, budget & blouse/poshak preference. We suggest fabric, lining & work." },
  { icon: Ruler, title: "2 — Measure", desc: "Visit Heerapura (18 A, Satya Colony) or send measurements via video call. We cut to you, not to a size chart." },
  { icon: Scissors, title: "3 — Stitch", desc: "Cut, lined, interlined, hand-finished with gota/zardozi pressed. Odhna with four-side kinari." },
  { icon: Truck, title: "4 — Trial & Deliver", desc: "Trial on video or in-atelier; final press and deliver. Alterations within 7 days." },
];

export default function StitchingPage() {
  return (
    <div className="bg-[#FFF8E7]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="max-w-3xl">
          <Badge variant="default">BESPOKE STITCHING</Badge>
          <h1 className="mt-3 font-display text-4xl font-medium text-[#1A1A1A]">Stitched to your measure — not to a size chart.</h1>
          <p className="mt-3 text-sm leading-7 text-[#6B5B4F]">
            Every poshak and dress is cut after we have your measurements. We line, interline where needed, and finish by hand.
            Timeline: 12–18 days for bridal poshaks, 7–10 days for festive wear. Urgent orders on request.
          </p>
          <OrnamentalDivider className="justify-start !mx-0 mt-6" />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.title} className="bg-white border border-[#E8DDC4] p-5 rounded-xl">
              <s.icon className="h-5 w-5 text-[#C8A96A]" />
              <div className="mt-3 font-display font-semibold text-[#1A1A1A]">{s.title}</div>
              <div className="mt-1 text-sm leading-6 text-[#6B5B4F]">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
            <div className="text-xs tracking-[0.14em] font-semibold text-[#8B7340]">WHAT TO SHARE FOR QUOTE</div>
            <ul className="mt-3 space-y-2 text-sm text-[#6B5B4F]">
              <li>— Photo / reference + fabric preference</li>
              <li>— Occasion & date</li>
              <li>— Measurements (or book video consult)</li>
              <li>— Blouse style / sleeve / back</li>
            </ul>
            <Button className="mt-6" size="lg" asChild>
              <a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer">WHATSAPP {SITE.phoneDisplay}</a>
            </Button>
          </div>
          <div className="bg-[#4A0E0E] text-[#E8DDC4] p-6 rounded-xl border border-[#C8A96A]/30">
            <div className="text-xs tracking-[0.14em] font-semibold text-[#C8A96A]">ATELIER — {SITE.owner.toUpperCase()}</div>
            <p className="mt-3 font-display text-lg leading-relaxed text-[#FFF8E7]">
              “We don’t sell standard sizes. Every piece is made to sit on your shoulders, not hang off them.”
            </p>
            <div className="mt-2 text-sm text-[#E8DDC4]/80">{SITE.addressFull} · {SITE.phoneDisplay}</div>
            <Button variant="gold" className="mt-6" asChild>
              <Link href="/contact">VISIT HEERAPURA ATELIER</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
