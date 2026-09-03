import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { WhatsappBuyButton } from "@/components/buy/whatsapp-buy";
import { getProducts, getProductBySlug } from "@/lib/sheets";

export const revalidate = 300;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) return {};
  return { title: p.title, description: p.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = await getProductBySlug(slug);
  if (!p) notFound();

  return (
    <div className="bg-[#FFF8E7]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/collections" className="inline-flex items-center gap-2 text-xs tracking-[0.14em] font-semibold text-[#4A0E0E] hover:text-[#6B1A1A]">
          <ArrowLeft className="h-4 w-4" /> BACK TO COLLECTIONS
        </Link>

        <div className="mt-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="bg-white border border-[#E8DDC4] p-2">
            <div className="aspect-[4/5] overflow-hidden bg-[#F5EFE0]">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
            </div>
            {p.images.length > 1 && (
              <div className="mt-2 grid grid-cols-4 gap-2">
                {p.images.map((img, i) => (
                  <div key={i} className="aspect-square overflow-hidden border border-[#E8DDC4] bg-[#F5EFE0]">
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <Badge variant={p.category === "jewellery" ? "gold" : "burgundy"}>{p.category.toUpperCase()}</Badge>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl leading-tight text-[#1A1A1A]">{p.title}</h1>
            <div className="mt-2 text-sm tracking-[0.06em] text-[#8B7340]">
              {p.color}
              {p.fabric ? ` · ${p.fabric}` : ""}
              {p.work ? ` · ${p.work}` : ""}
            </div>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-display text-2xl font-semibold text-[#4A0E0E]">₹{p.price.toLocaleString("en-IN")}</span>
              {p.originalPrice && <span className="text-sm line-through text-[#6B5B4F]">₹{p.originalPrice.toLocaleString("en-IN")}</span>}
              {p.originalPrice && <Badge variant="outline">SAVE ₹{(p.originalPrice - p.price).toLocaleString("en-IN")}</Badge>}
            </div>

            <OrnamentalDivider className="mt-6 justify-start !mx-0" />

            <p className="mt-6 text-sm leading-7 text-[#6B5B4F]">{p.description}</p>

            <div className="mt-6 rounded-xl border border-[#E8DDC4] bg-white p-4">
              <div className="text-xs tracking-[0.14em] font-semibold text-[#4A0E0E]">WHAT YOU GET</div>
              <ul className="mt-2 space-y-1.5 text-sm text-[#6B5B4F]">
                <li>— Lined & finished; cancan added on request</li>
                <li>— Odhna with four-side kinari / jaal</li>
                <li>— Stitched to your measurements (video consult)</li>
                <li>— Hand-finished in Heerapura atelier</li>
              </ul>
            </div>

            <div className="mt-6">
              <WhatsappBuyButton product={p} />
            </div>

            <div className="mt-4 flex gap-3">
              <Button variant="outline" size="lg" asChild>
                <Link href="/stitching">STITCHING DETAILS</Link>
              </Button>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/contact">VISIT ATELIER</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
