import { cn } from "@/lib/utils";

export function OrnamentalDivider({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "compact" | "gold";
}) {
  if (variant === "compact") {
    return <div className={cn("gold-hairline w-24 mx-auto", className)} />;
  }
  return (
    <div className={cn("flex items-center justify-center gap-3 py-2", className)} aria-hidden>
      <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-[#C8A96A]" />
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#C8A96A]">
        <path d="M14 0L16.5 5.5L22 6L17.8 9.2L18.8 14.5L14 12L9.2 14.5L10.2 9.2L6 6L11.5 5.5L14 0Z" fill="currentColor" opacity={0.9} />
        <circle cx="14" cy="7" r="1.5" fill="#4A0E0E" />
      </svg>
      <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-[#C8A96A]" />
    </div>
  );
}

export function DoubleHairline({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="h-px bg-[#E8DDC4]" />
      <div className="h-px bg-[#C8A96A]/40" />
    </div>
  );
}
