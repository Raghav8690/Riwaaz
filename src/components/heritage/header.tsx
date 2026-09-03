"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, ShoppingBag } from "lucide-react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/stitching", label: "Bespoke Stitching" },
  { href: "/heritage", label: "Heritage" },
  { href: "/contact", label: "Atelier" },
];

export function Header() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const pastHero = y > window.innerHeight * 0.90;
      const dirUp = y < lastY.current;
      // show only when past hero AND scrolling up
      const shouldShow = pastHero && dirUp;
      // hide immediately when scrolling down
      setVisible((prev) => {
        if (y < window.innerHeight * 0.5) return false;
        if (!pastHero) return false;
        if (dirUp) return true;
        return false;
      });
      // keep lastY for next frame
      lastY.current = y;
      // also handle the case where we want to show on up: ensure visible true when dirUp
      if (dirUp && pastHero) setVisible(true);
      if (!dirUp && pastHero) setVisible(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating hamburger — always accessible on mobile */}
      <div className="lg:hidden fixed top-3 right-3 z-[60]">
        {!visible && !open && (
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-[#E8DDC4] shadow-md text-[#4A0E0E]"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        {visible && (
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-[#E8DDC4] shadow-md text-[#4A0E0E]"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}
      </div>

      <motion.header
        initial={false}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 border-b bg-[#FFF8E7]/95 backdrop-blur-md border-[#E8DDC4] shadow-sm"
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex h-[56px] items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#4A0E0E] text-[#C8A96A] font-display text-sm font-semibold border border-[#C8A96A]/40">रि</div>
              <span className="font-display text-[18px] tracking-[0.18em] font-semibold text-[#4A0E0E]">{SITE.name.toUpperCase()}</span>
              <span className="hidden sm:inline text-[10px] tracking-[0.18em] text-[#8B7340]">· {SITE.owner}</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-1">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="px-3 py-1.5 text-[12px] tracking-[0.14em] font-medium text-[#4A0E0E]/80 hover:text-[#4A0E0E]">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="hidden lg:flex items-center gap-2">
              <a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#4A0E0E] text-[#FFF8E7] px-4 py-2 text-xs tracking-[0.12em] font-semibold border border-[#C8A96A] hover:bg-[#6B1A1A]">
                <Phone className="h-3.5 w-3.5" /> {SITE.phoneDisplay}
              </a>
              <Link href="/collections" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#E8DDC4] bg-white text-[#4A0E0E] hover:border-[#C8A96A]">
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:hidden w-10" aria-hidden />
          </div>
        </div>
        <AnimatePresence>
          {open && visible && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="lg:hidden border-t border-[#E8DDC4] bg-[#FFF8E7]">
              <nav className="mx-auto max-w-[1280px] px-4 py-4 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2.5 text-sm tracking-[0.12em] font-medium text-[#4A0E0E] border-b border-[#E8DDC4]/60 last:border-0">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {open && !visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-14 right-3 left-3 z-[59] bg-[#FFF8E7] border border-[#E8DDC4] rounded-xl shadow-xl overflow-hidden"
          >
            <nav className="px-4 py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2.5 text-sm tracking-[0.12em] font-medium text-[#4A0E0E] border-b border-[#E8DDC4]/60 last:border-0">
                  {item.label}
                </Link>
              ))}
              <div className="pt-3">
                <a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#4A0E0E] text-[#FFF8E7] px-4 py-2 text-xs tracking-[0.12em] font-semibold border border-[#C8A96A]">
                  <Phone className="h-3.5 w-3.5" /> {SITE.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      {open && <button aria-label="Close menu" onClick={() => setOpen(false)} className="fixed inset-0 z-40 bg-black/20 lg:hidden" />}
    </>
  );
}
