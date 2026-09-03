import type { Product } from "@/data/products";

export const SITE = {
  name: "Riwaaz",
  owner: "Saroj Kanwar",
  phoneDisplay: "+91 63783 39954",
  phoneRaw: "6378339954",
  phoneWa: "916378339954",
  telHref: "tel:+916378339954",
  addressShort: "18 A, Satya Colony, Heerapura, Jaipur",
  addressFull: "18 A, Satya Colony, Heerapura, Jaipur, Rajasthan 302021",
  mapsQuery: "18 A Satya Colony Heerapura Jaipur 302021",
  hours: "Mon–Sat · 10:30am – 8:00pm",
  hoursNote: "Sunday by appointment",
  since: "1998",
} as const;

export function waLink(text: string) {
  return `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
}

export function buyMessage(p: Product, origin?: string) {
  const page = origin ? `${origin}/collections/${p.slug}` : `https://stich.example.com/collections/${p.slug}`;
  return [
    `Hi ${SITE.owner} / ${SITE.name} 👋`,
    `I want to buy this item:`,
    ``,
    `*${p.title}*`,
    `Category: ${p.category} | Price: ₹${p.price.toLocaleString("en-IN")}${p.fabric ? ` | ${p.fabric}` : ""}${p.work ? ` | ${p.work}` : ""}`,
    `Color: ${p.color}`,
    ``,
    `Image: ${p.image}`,
    `Page: ${page}`,
    ``,
    `Please confirm availability & stitching timeline.`,
  ].join("\n");
}

export function generalEnquiryMessage(topic = "poshak / dress / jewellery") {
  return `Hi ${SITE.owner} / ${SITE.name}, I'd like to enquire about ${topic}. Please share details.`;
}
