import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-[0.08em] transition-colors",
  {
    variants: {
      variant: {
        default: "border-[#C8A96A] bg-[#C8A96A]/15 text-[#4A0E0E]",
        gold: "border-[#C8A96A] bg-[#C8A96A] text-[#1A1A1A]",
        burgundy: "border-[#4A0E0E] bg-[#4A0E0E] text-[#FFF8E7]",
        outline: "border-[#E8DDC4] text-[#6B5B4F]",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export function Badge({ className, variant, ...props }: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
