import Link from "next/link";
import { ArrowRight, Scissors, Gem, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { ProductCard } from "@/components/collections/product-card";
import { RiwaazHero } from "@/components/heritage/riwaaz-hero";
import { getProducts } from "@/lib/sheets";

export const revalidate = 300;

export default async function HomePage() {
  const products = await getProducts();
  const featured = products.filter((p) => p.featured).slice(0, 6);

  return (
    <div className="flex flex-col">
      <RiwaazHero />

      <section className="relative border-y border-[#C8A96A]/30 bg-[#4A0E0E] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `repeating-linear-gradient(90deg, #C8A96A 0 1px, transparent 1px 28px)` }} aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap gap-4 sm:gap-8 items-center justify-between text-xs tracking-[0.14em] font-semibold text-[#E8DDC4]">
          <span className="flex items-center gap-2"><Scissors className="h-4 w-4 text-[#C8A96A]" /> STITCHED TO MEASURE</span>
          <span className="flex items-center gap-2"><Gem className="h-4 w-4 text-[#C8A96A]" /> PURE & LINED FABRICS</span>
          <span className="flex items-center gap-2"><Crown className="h-4 w-4 text-[#C8A96A]" /> SINCE 1998 · HEERAPURA</span>
          <span className="hidden md:inline-flex items-center gap-2 text-[#E8D5A8]">WHATSAPP VIDEO CONSULT →</span>
        </div>
      </section>

      <section className="relative bg-[#FDF6E3] py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(45deg, #4A0E0E 0 1px, transparent 1px 32px), repeating-linear-gradient(-45deg, #C8A96A 0 1px, transparent 1px 48px)` }} />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <Badge variant="default" className="mx-auto">SIGNATURE COLLECTIONS</Badge>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-medium text-[#1A1A1A]">Heirloom, not fast fashion</h2>
            <p className="mt-3 text-sm leading-6 text-[#6B5B4F]">Tap the photo to flip and see specifications — BUY goes to WhatsApp with image link.</p>
            <OrnamentalDivider className="mt-6" />
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/collections">VIEW ALL — {products.length} PIECES <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 border-t border-[#E8DDC4]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="outline">CRAFTSMANSHIP</Badge>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-light text-[#1A1A1A]">
                Cut in Jaipur.<br /><span className="font-semibold text-[#4A0E0E]">Finished by hand.</span>
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#6B5B4F]">Every poshak is lined and stitched to your measurements — Zardozi laid by hand, gota pressed, odhna four-side kinari.</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex gap-2"><span className="text-[#C8A96A]">—</span> Pure fabrics, full lining</li>
                <li className="flex gap-2"><span className="text-[#C8A96A]">—</span> Hand zardozi & gota</li>
                <li className="flex gap-2"><span className="text-[#C8A96A]">—</span> To-measure stitching</li>
                <li className="flex gap-2"><span className="text-[#C8A96A]">—</span> Video consult on WhatsApp</li>
              </ul>
              <div className="mt-8">
                <Button asChild><Link href="/stitching">HOW STITCHING WORKS <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#E8DDC4] bg-[#F5EFE0]"><img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80&auto=format&fit=crop" alt="Fabric" className="h-full w-full object-cover" /></div>
                <div className="rounded-xl border border-[#C8A96A]/30 bg-[#FFF8E7] p-4"><div className="text-xs tracking-[0.14em] font-semibold text-[#8B7340]">ODHNA FINISH</div><div className="mt-1 text-sm text-[#4A0E0E]">Four-side gota jaal, hand-pressed kinari.</div></div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-xl border border-[#C8A96A]/30 bg-[#4A0E0E] p-4 text-[#E8DDC4]"><div className="font-display text-lg">2500+ brides</div><div className="text-xs tracking-[0.12em] text-[#C8A96A]">STITCHED SINCE 1998</div></div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden border border-[#E8DDC4] bg-[#F5EFE0]"><img src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80&auto=format&fit=crop" alt="Jewellery" className="h-full w-full object-cover" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A] py-10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div><div className="text-xs tracking-[0.18em] font-semibold text-[#C8A96A]">ARTIFICIAL JEWELLERY</div><h3 className="mt-1 font-display text-2xl text-[#FFF8E7]">Jadau finish, bridal ready — without the locker worry.</h3></div>
          <Button variant="gold" size="lg" asChild><Link href="/collections?filter=jewellery">SHOP JEWELLERY <Gem className="h-4 w-4" /></Link></Button>
        </div>
      </section>

      <section className="bg-[#FFF8E7] py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="font-display text-2xl sm:text-3xl leading-relaxed text-[#4A0E0E] italic">“The poshak fit like it was made for me — because it was. The gota work is so fine, my mother said it looks like her wedding poshak.”</div>
          <div className="mt-4 text-xs tracking-[0.14em] font-semibold text-[#8B7340]">— PRIYA S., JAIPUR · BRIDAL POSHAK, DEC 2024</div>
          <OrnamentalDivider className="mt-8" />
        </div>
      </section>
    </div>
  );
}
