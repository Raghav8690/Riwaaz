import Link from "next/link";
import { Button } from "@/components/ui/button";
import { OrnamentalDivider } from "@/components/heritage/ornamental-divider";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-[#FFF8E7] px-4 py-16 text-center">
      <div className="font-display text-6xl text-[#4A0E0E]">404</div>
      <div className="mt-2 text-xs tracking-[0.18em] font-semibold text-[#8B7340]">PAGE NOT FOUND</div>
      <OrnamentalDivider className="mt-6" />
      <p className="mt-4 text-sm text-[#6B5B4F]">This haveli corridor ends here.</p>
      <Button asChild className="mt-6"><Link href="/">BACK TO HOME</Link></Button>
    </div>
  );
}
