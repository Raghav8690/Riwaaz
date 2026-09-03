"use client";

import { useState } from "react";
import { ShoppingBag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, buyMessage } from "@/lib/site";
import type { Product } from "@/data/products";

export function WhatsappBuyButton({ product }: { product: Product }) {
  const [busy, setBusy] = useState(false);

  // avoid window during render to prevent hydration mismatch
  const text = buyMessage(product);
  const waHref = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;

  async function handleBuy() {
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const textWithOrigin = buyMessage(product, origin || undefined);
    const href = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(textWithOrigin)}`;
    try {
      setBusy(true);
      const canShareFile =
        typeof navigator !== "undefined" &&
        // @ts-ignore
        typeof navigator.canShare === "function" &&
        "share" in navigator;

      if (canShareFile) {
        try {
          const res = await fetch(product.image);
          const blob = await res.blob();
          const ext = product.image.includes(".png") ? "png" : "jpg";
          const file = new File([blob], `${product.slug}.${ext}`, { type: blob.type || `image/${ext}` });
          // @ts-ignore
          if (navigator.canShare({ files: [file] })) {
            // @ts-ignore
            await navigator.share({ files: [file], text: textWithOrigin, title: product.title });
            setBusy(false);
            return;
          }
        } catch {
          // fall through
        }
      }
    } finally {
      setBusy(false);
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Button size="lg" onClick={handleBuy} disabled={busy} className="tracking-[0.08em]">
        <ShoppingBag className="h-4 w-4" />
        {busy ? "OPENING…" : "BUY ON WHATSAPP"}
      </Button>
      <Button variant="outline" size="lg" asChild>
        <a href={waHref} target="_blank" rel="noreferrer">
          <Share2 className="h-4 w-4" /> CHAT WITH IMAGE LINK
        </a>
      </Button>
      <p className="w-full text-xs leading-5 text-[#8B7340]">
        Opens WhatsApp to <span className="font-semibold text-[#4A0E0E]">{SITE.owner} — {SITE.phoneDisplay}</span> with a pre-filled message that includes the product image link (preview in chat). On supported phones we’ll also try to attach the photo directly.
      </p>
    </div>
  );
}

export function QuickBuyButton({ product, className }: { product: Product; className?: string }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const text = buyMessage(product, origin || undefined);
    const href = `https://wa.me/${SITE.phoneWa}?text=${encodeURIComponent(text)}`;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className ?? "inline-flex items-center gap-1.5 rounded-full bg-[#4A0E0E] text-[#FFF8E7] px-3 py-1.5 text-xs tracking-[0.1em] font-semibold border border-[#C8A96A] hover:bg-[#6B1A1A] shadow-md"}
    >
      <ShoppingBag className="h-3.5 w-3.5" /> BUY
    </button>
  );
}

// Backwards compat — deprecated, use QuickBuyButton
export function QuickBuyLink(props: { product: Product; className?: string }) {
  return <QuickBuyButton {...props} />;
}
