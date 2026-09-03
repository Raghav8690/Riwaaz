"use client";

import dynamic from "next/dynamic";

const MedallionScene = dynamic(() => import("./medallion").then((m) => m.MedallionScene), {
  ssr: false,
  loading: () => <div className="h-[320px] sm:h-[420px] w-full animate-pulse bg-[#F5EFE0] rounded-xl" />,
});

export function MedallionWrapper() {
  return <MedallionScene />;
}
