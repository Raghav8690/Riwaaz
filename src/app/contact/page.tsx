import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { SITE, generalEnquiryMessage, waLink } from "@/lib/site";

export const metadata = { title: `Contact — ${SITE.addressShort}` };

export default function ContactPage() {
  const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(SITE.mapsQuery)}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&z=15&output=embed`;

  return (
    <div className="bg-[#FFF8E7]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <Badge variant="default">JAIPUR ATELIER · {SITE.owner.toUpperCase()}</Badge>
        <h1 className="mt-3 font-display text-4xl font-medium text-[#1A1A1A]">Visit us in Heerapura.</h1>
        <p className="mt-2 text-sm text-[#6B5B4F]">
          Curated by <span className="font-semibold text-[#4A0E0E]">{SITE.owner}</span> — {SITE.addressFull}
        </p>
        <OrnamentalDivider className="justify-start !mx-0 mt-6" />

        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="space-y-4">
            <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#C8A96A] mt-0.5" />
                <div>
                  <div className="text-xs tracking-[0.14em] font-semibold text-[#8B7340]">ADDRESS</div>
                  <div className="mt-1 text-sm leading-6 text-[#1A1A1A]">
                    {SITE.name} — Curated by {SITE.owner}<br />
                    {SITE.addressFull}
                  </div>
                  <a href={mapsHref} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs tracking-[0.12em] font-semibold text-[#4A0E0E] hover:underline">
                    OPEN IN MAPS →
                  </a>
                </div>
              </div>
              <iframe
                title={`Map — ${SITE.addressFull}`}
                src={embedSrc}
                className="mt-4 w-full h-[220px] rounded-lg border border-[#E8DDC4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#E8DDC4] p-5 rounded-xl flex gap-3">
                <Phone className="h-5 w-5 text-[#C8A96A]" />
                <div>
                  <div className="text-xs tracking-[0.12em] font-semibold text-[#8B7340]">CALL / WHATSAPP</div>
                  <a href={SITE.telHref} className="text-sm font-semibold text-[#4A0E0E]">
                    {SITE.phoneDisplay}
                  </a>
                  <div className="text-xs text-[#6B5B4F]">{SITE.hours}</div>
                  <div className="text-xs text-[#6B5B4F]">{SITE.owner}</div>
                </div>
              </div>
              <div className="bg-white border border-[#E8DDC4] p-5 rounded-xl flex gap-3">
                <Clock className="h-5 w-5 text-[#C8A96A]" />
                <div>
                  <div className="text-xs tracking-[0.12em] font-semibold text-[#8B7340]">STUDIO HOURS</div>
                  <div className="text-sm text-[#1A1A1A]">{SITE.hours}</div>
                  <div className="text-xs text-[#6B5B4F]">{SITE.hoursNote}</div>
                </div>
              </div>
            </div>
            <div className="bg-[#4A0E0E] border border-[#C8A96A]/30 p-6 rounded-xl text-[#E8DDC4]">
              <div className="flex items-center gap-2 text-[#C8A96A] text-xs tracking-[0.14em] font-semibold">
                <MessageCircle className="h-4 w-4" /> WHATSAPP VIDEO CONSULT
              </div>
              <p className="mt-2 text-sm leading-6 text-[#E8DDC4]/90">
                Send reference photos + measurements over WhatsApp to {SITE.owner}; we do a video fitting before cutting.
              </p>
              <Button variant="gold" className="mt-4" asChild>
                <a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer">
                  START WHATSAPP CHAT
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
            <div className="text-xs tracking-[0.14em] font-semibold text-[#8B7340]">ENQUIRY FORM (WIRES TO WHATSAPP)</div>
            <p className="mt-1 text-xs text-[#6B5B4F]">No backend yet — “Send” opens WhatsApp to {SITE.owner} with your message pre-filled.</p>
            <div className="mt-4 space-y-3">
              <input placeholder="Your name" className="w-full rounded-xl border border-[#E8DDC4] bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#C8A96A]" />
              <input placeholder="Phone / WhatsApp" className="w-full rounded-xl border border-[#E8DDC4] bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#C8A96A]" />
              <select className="w-full rounded-xl border border-[#E8DDC4] bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#C8A96A]">
                <option>Bridal Poshak</option>
                <option>Festive Poshak / Dress</option>
                <option>Artificial Jewellery</option>
                <option>Stitching only</option>
              </select>
              <textarea placeholder="Tell us occasion, date, fabric preference..." rows={4} className="w-full rounded-xl border border-[#E8DDC4] bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#C8A96A]" />
              <Button asChild className="w-full" size="lg">
                <a href={waLink(generalEnquiryMessage())} target="_blank" rel="noreferrer">
                  SEND ON WHATSAPP
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
