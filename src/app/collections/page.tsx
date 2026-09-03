import { Suspense } from "react";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";
import { Badge } from "@/components/ui/badge";
import { CollectionGrid } from "./filter";
import { getProducts } from "@/lib/sheets";

export const metadata = { title: "Collections" };
export const revalidate = 300;

export default async function CollectionsPage() {
  const products = await getProducts();
  return (
    <div className="bg-[#FDF6E3]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="default">COLLECTIONS</Badge>
          <h1 className="mt-3 font-display text-4xl font-medium text-[#1A1A1A]">Poshaks, Dresses & Jewellery</h1>
          <p className="mt-3 text-sm leading-6 text-[#6B5B4F]">
            Filter by category or tap any piece for full detail and WhatsApp Buy — new items appear automatically from your Google Sheet.
          </p>
          <OrnamentalDivider className="mt-6" />
        </div>
        <Suspense fallback={<div className="mt-8 text-center text-sm text-[#6B5B4F]">Loading…</div>}>
          <CollectionGrid products={products} />
        </Suspense>
      </div>
    </div>
  );
}
