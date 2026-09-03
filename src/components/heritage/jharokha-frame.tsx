import { cn } from "@/lib/utils";

// Arch-shaped image wrapper inspired by Rajasthani jharokha
export function JharokhaFrame({
  children,
  className,
  innerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={cn("relative p-[1px] bg-gradient-to-b from-[#C8A96A] to-[#8B7340]", className)}>
      <div className="absolute inset-[3px] border border-[#C8A96A]/40 pointer-events-none" />
      <div
        className={cn(
          "relative overflow-hidden bg-[#FDF6E3]",
          // arch top via border-radius
          "rounded-t-[50%] rounded-b-sm",
          innerClassName
        )}
        style={{ borderTopLeftRadius: "50% 28%", borderTopRightRadius: "50% 28%" }}
      >
        {children}
      </div>
    </div>
  );
}

export function GoldFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative bg-white p-1.5 shadow-sm", className)}>
      <div className="absolute inset-0 border border-[#C8A96A] pointer-events-none" />
      <div className="absolute inset-[5px] border border-[#C8A96A]/30 pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}
