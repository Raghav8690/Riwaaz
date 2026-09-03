import { Badge } from "@/components/ui/badge";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { SITE } from "@/lib/site";

export const metadata = { title: "Heritage" };

export default function HeritagePage() {
  return (
    <div className="bg-[#FDF6E3]">
      <div className="mx-auto max-w-[880px] px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <Badge variant="default">OUR HERITAGE</Badge>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-light text-[#1A1A1A]">
          A haveli workshop,<br /><span className="font-semibold text-[#4A0E0E]">not a showroom.</span>
        </h1>
        <p className="mt-4 text-sm leading-7 text-[#6B5B4F]">
          STICH began in {SITE.since} with one cutting table in Jaipur and a promise: heirloom-grade poshaks that fit like they were made for you — because they are.
          Today the atelier is at {SITE.addressFull}, curated by {SITE.owner}. Replace this copy with your real artisan photos and timeline before launch.
        </p>
        <OrnamentalDivider className="mt-8" />

        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
            <div className="font-display text-3xl font-semibold text-[#4A0E0E]">1998</div>
            <div className="text-xs tracking-[0.14em] text-[#8B7340]">JAIPUR ATELIER FOUNDED</div>
          </div>
          <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
            <div className="font-display text-3xl font-semibold text-[#4A0E0E]">2500+</div>
            <div className="text-xs tracking-[0.14em] text-[#8B7340]">BRIDES STITCHED</div>
          </div>
          <div className="bg-white border border-[#E8DDC4] p-6 rounded-xl">
            <div className="font-display text-3xl font-semibold text-[#4A0E0E]">Hand</div>
            <div className="text-xs tracking-[0.14em] text-[#8B7340]">ZARDOZI · GOTA · DORI</div>
          </div>
        </div>

        <div className="mt-10 bg-white border border-[#E8DDC4] p-6 sm:p-8 rounded-xl">
          <h2 className="font-display text-2xl text-[#1A1A1A]">How we work</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B5B4F]">
            <li><span className="font-semibold text-[#4A0E0E]">Pure fabrics</span> — georgette, upada, cotton silk; fully lined. No blended shortcuts.</li>
            <li><span className="font-semibold text-[#4A0E0E]">Hand work</span> — zardozi laid by hand, gota pressed, odhna finished four-side.</li>
            <li><span className="font-semibold text-[#4A0E0E]">To-measure</span> — we cut after your measurements, with video consult if you can’t visit.</li>
          </ul>
        </div>

        <div className="mt-8 text-xs tracking-[0.12em] text-[#8B7340]">
          Tip: Add real atelier photos to <code>public/</code> and swap Unsplash images in <code>src/data/products.ts</code>.
        </div>
      </div>
    </div>
  );
}
