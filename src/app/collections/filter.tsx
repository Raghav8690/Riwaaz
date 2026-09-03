"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ProductCard } from "@/components/collections/product-card";

const filters = [
  { key: "all", label: "All" },
  { key: "poshak", label: "Poshaks" },
  { key: "dress", label: "Dresses" },
  { key: "jewellery", label: "Jewellery" },
] as const;

export function CollectionGrid({ products }: { products: Product[] }) {
  const sp = useSearchParams();
  const active = (sp.get("filter") as string) || "all";
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center">
        {filters.map((f) => {
          const isActive = active === f.key;
          const href = f.key === "all" ? "/collections" : `/collections?filter=${f.key}`;
          return (
            <Link
              key={f.key}
              href={href}
              className={`rounded-full px-5 py-2 text-xs tracking-[0.14em] font-semibold border transition-colors ${isActive ? "bg-[#4A0E0E] text-[#FFF8E7] border-[#4A0E0E]" : "bg-white text-[#4A0E0E] border-[#E8DDC4] hover:border-[#C8A96A]"}`}
            >
              {f.label}
            </Link>
          );
        })}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <motion.div layout key={p.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-6 text-center text-xs tracking-[0.12em] text-[#6B5B4F]">{list.length} pieces · filtered by {active}</div>
    </>
  );
}
