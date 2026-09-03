"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { RotateCcw, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { QuickBuyButton } from "@/components/buy/whatsapp-buy";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group relative bg-white border border-[#E8DDC4] overflow-hidden hover:border-[#C8A96A] hover:shadow-xl transition-all duration-300 [perspective:1000px]"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* flip container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F5EFE0] [transform-style:preserve-3d]">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 [transform-style:preserve-3d]"
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 [backface-visibility:hidden]"
            onClick={() => setFlipped(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setFlipped(true)}
            aria-label={`View specifications for ${product.title}`}
          >
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
            <div className="absolute left-3 top-3 flex gap-2">
              <Badge variant={product.category === "jewellery" ? "gold" : "burgundy"}>{product.category.toUpperCase()}</Badge>
              {product.originalPrice && <Badge variant="outline" className="bg-white">SALE</Badge>}
              {product.featured && <Badge variant="default" className="hidden sm:inline-flex">FEATURED</Badge>}
            </div>
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-2.5 py-1.5 text-xs font-semibold text-[#4A0E0E] border border-[#E8DDC4] shadow">
                <Eye className="h-3.5 w-3.5" /> TAP TO FLIP
              </span>
              <QuickBuyButton product={product} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/10 to-transparent pointer-events-none sm:hidden" />
          </div>

          {/* BACK — specifications */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FFF8E7] p-4 flex flex-col"
            onClick={() => setFlipped(false)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setFlipped(false)}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.14em] font-semibold text-[#8B7340]">SPECIFICATIONS</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#4A0E0E] border border-[#E8DDC4] bg-white rounded-full px-2.5 py-1">
                <RotateCcw className="h-3.5 w-3.5" /> TAP TO FLIP BACK
              </span>
            </div>
            <div className="mt-3 font-display text-[15px] font-semibold leading-tight text-[#1A1A1A] line-clamp-2">{product.title}</div>
            <div className="mt-2 space-y-1.5 text-xs leading-5 text-[#6B5B4F]">
              <div><span className="font-semibold text-[#4A0E0E]">Fabric:</span> {product.fabric ?? "—"}</div>
              <div><span className="font-semibold text-[#4A0E0E]">Work:</span> {product.work ?? "—"}</div>
              <div><span className="font-semibold text-[#4A0E0E]">Color:</span> {product.color}</div>
              <div><span className="font-semibold text-[#4A0E0E]">Category:</span> {product.category}</div>
              <div className="pt-2 flex items-baseline gap-2">
                <span className="font-display text-base font-semibold text-[#4A0E0E]">₹{product.price.toLocaleString("en-IN")}</span>
                {product.originalPrice && <span className="text-xs line-through text-[#6B5B4F]">₹{product.originalPrice.toLocaleString("en-IN")}</span>}
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-[#6B5B4F] line-clamp-3">{product.description}</p>
            <div className="mt-auto pt-3 flex gap-2">
              <QuickBuyButton product={product} className="flex-1 inline-flex justify-center items-center gap-1.5 rounded-full bg-[#4A0E0E] text-[#FFF8E7] px-3 py-2 text-xs tracking-[0.1em] font-semibold border border-[#C8A96A]" />
              <Link
                href={`/collections/${product.slug}`}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center rounded-full border border-[#E8DDC4] bg-white px-3 py-2 text-xs font-semibold text-[#4A0E0E] hover:border-[#C8A96A]"
              >
                VIEW
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* title row — not flipped, always visible */}
      <div className="p-4 bg-white border-t border-[#E8DDC4]/60">
        <Link href={`/collections/${product.slug}`} className="font-display text-[15px] leading-tight text-[#1A1A1A] hover:text-[#4A0E0E] line-clamp-2">
          {product.title}
        </Link>
        <div className="mt-1 text-xs tracking-[0.06em] text-[#8B7340]">{product.fabric ? `${product.fabric} · ${product.work}` : product.color}</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-[15px] font-semibold text-[#4A0E0E]">₹{product.price.toLocaleString("en-IN")}</span>
          {product.originalPrice && <span className="text-xs line-through text-[#6B5B4F]">₹{product.originalPrice.toLocaleString("en-IN")}</span>}
        </div>
      </div>
    </div>
  );
}
