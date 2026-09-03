import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { Header } from "@/components/heritage/header";
import { Footer } from "@/components/heritage/footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Riwaaz — Rajputi Poshaks & Heritage Jewellery | Heerapura, Jaipur — Saroj Kanwar",
    template: "%s — Riwaaz",
  },
  description:
    "Heirloom Rajputi poshaks, dresses, artificial jewellery & bespoke stitching from 18 A, Satya Colony, Heerapura, Jaipur (Saroj Kanwar). Royal heritage, handcrafted since 1998.",
  keywords: ["Riwaaz", "Rajputi poshak", "Rajputi dress", "artificial jewellery", "Jaipur", "Heerapura", "poshak stitching", "Saroj Kanwar"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
