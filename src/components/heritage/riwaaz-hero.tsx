"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const FRAME_COUNT = 241;
const FRAME_PATH = (i: number) => `/hero/frames/frame${String(i).padStart(3, "0")}.webp`;

export function RiwaazHero() {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const riwaazScale = useTransform(scrollYProgress, [0, 0.32], [1, 0.28]);
  const riwaazY = useTransform(scrollYProgress, [0, 0.32], ["0%", "-88%"]);
  const riwaazX = useTransform(scrollYProgress, [0, 0.32], ["0%", "-42%"]);
  const riwaazOpacity = useTransform(scrollYProgress, [0.28, 0.38], [1, 0]);
  const ownedOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const embroideryY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Canvas scrub — image sequence for butter-smooth 60fps
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // preload frames
    const imgs: HTMLImageElement[] = [];
    let loaded = 0;
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.decoding = "async";
      imgs[i] = img;
      img.onload = () => {
        loaded++;
        if (loaded === 1) draw(0); // first frame asap
      };
    }

    function draw(frameIndex: number) {
      const img = imgs[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width * dpr;
      const h = rect.height * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      ctx.clearRect(0, 0, w, h);
      // object-cover 50% 12% — preserve face at top
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;
      const scale = Math.max(w / iw, h / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (w - dw) / 2;
      // 12% from top bias
      const dy = (h - dh) * 0.12 - (h - dh) * 0.5 + (h - dh) / 2; // simplified 12% top
      // For object-position 50% 12%, y offset = (containerH - scaledH) * 0.12
      const dy2 = (h - dh) * 0.12;
      ctx.drawImage(img, dx, dy2, dw, dh);
    }

    let targetFrame = 0;
    let currentFrame = 0;
    let raf = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      // lerp for higher perceived FPS
      const diff = targetFrame - currentFrame;
      if (Math.abs(diff) > 0.01) {
        currentFrame += diff * 0.28;
        const idx = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(currentFrame)));
        draw(idx);
      } else if (Math.round(targetFrame) !== Math.round(currentFrame)) {
        const idx = Math.round(targetFrame);
        draw(idx);
        currentFrame = targetFrame;
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    const unsub = scrollYProgress.on("change", (v) => {
      // scrub window 0 → 0.22 as agreed (fast, immediate)
      const p = Math.min(Math.max(v / 0.22, 0), 1);
      targetFrame = p * (FRAME_COUNT - 1);
    });

    // handle resize
    const onResize = () => {
      const idx = Math.round(currentFrame);
      draw(idx);
    };
    window.addEventListener("resize", onResize);

    // init
    targetFrame = Math.min(Math.max(scrollYProgress.get() / 0.22, 0), 1) * (FRAME_COUNT - 1);
    currentFrame = targetFrame;
    // draw first available
    const iv = setInterval(() => {
      if (imgs[0]?.complete) {
        draw(Math.round(targetFrame));
        clearInterval(iv);
      }
    }, 30);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      unsub();
      window.removeEventListener("resize", onResize);
      clearInterval(iv);
    };
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="relative h-[220vh] bg-[#FFF8E7]">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: embroideryY }} className="absolute inset-0 pointer-events-none" aria-hidden>
          <img src="/ornaments/riwaaz-bg.png" alt="" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
          <div className="absolute inset-0 bg-[#FFF8E7]/22" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(200,169,106,0.18),transparent_60%),radial-gradient(ellipse_at_20%_85%,rgba(74,14,14,0.08),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `repeating-linear-gradient(45deg, #4A0E0E 0 1px, transparent 1px 28px)` }} />
        </motion.div>

        <motion.div
          style={{ scale: riwaazScale, y: riwaazY, x: riwaazX, opacity: riwaazOpacity }}
          className="absolute left-1/2 top-[38%] sm:top-[42%] -translate-x-1/2 z-20 w-[92vw] max-w-[520px] flex flex-col items-center pointer-events-none"
        >
          <h1
            className="font-display text-[42px] sm:text-[64px] lg:text-[74px] font-light leading-none text-[#FFF8E7] text-center"
            style={{ textShadow: "0 3px 20px rgba(0,0,0,0.55), 0 1px 0 rgba(74,14,14,0.9)" }}
          >
            Riwaaz
          </h1>
          <motion.div style={{ opacity: ownedOpacity }} className="mt-1.5 flex items-center gap-2">
            <span className="h-px w-6 sm:w-8 bg-[#E8D5A8]/70" />
            <span className="text-[10px] sm:text-xs tracking-[0.26em] font-semibold text-[#FFF8E7]" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}>
              OWNED BY — {SITE.owner.toUpperCase()}
            </span>
            <span className="h-px w-6 sm:w-8 bg-[#E8D5A8]/70" />
          </motion.div>
        </motion.div>

        <div className="relative z-10 w-[92vw] max-w-[520px] lg:max-w-[560px] flex flex-col items-center">
          <div className="relative w-full aspect-[3/4.1] overflow-hidden rounded-t-[32%] rounded-b-2xl border border-[#C8A96A]/30 shadow-xl bg-[#F5EFE0]">
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ width: "100%", height: "100%" }} />
            {/* video fallback for reduced-motion */}
            <noscript>
              <img src="/hero/riwaaz-namaste-A.jpg" alt="Riwaaz — Namaste" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "50% 12%" }} />
            </noscript>
            <div className="pointer-events-none absolute inset-0 rounded-t-[32%] rounded-b-2xl ring-1 ring-[#C8A96A]/20" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4A0E0E]/14 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent p-3 sm:p-4">
              <div className="text-[10px] sm:text-xs tracking-[0.16em] font-semibold text-[#E8D5A8]">NAMASTE — SCROLL TO GREET</div>
              <div className="font-display text-white text-sm">Stepping forward · Heerapura, Jaipur</div>
            </div>
          </div>

          <div className="hidden lg:flex absolute -right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-2 pointer-events-none">
            <span className="text-[11px] tracking-[0.32em] font-semibold text-[#8B7340] [writing-mode:vertical-lr]">SAROJ</span>
            <span className="h-10 w-px bg-[#C8A96A]/40" />
            <span className="font-display text-[44px] font-light leading-none text-[#4A0E0E] [writing-mode:vertical-lr] tracking-[0.12em]">Kanwar</span>
          </div>
          <div className="lg:hidden mt-3 inline-flex items-center gap-2 bg-white border border-[#E8DDC4] rounded-full px-4 py-1.5 shadow text-xs">
            <span className="tracking-[0.14em] font-semibold text-[#4A0E0E]">{SITE.owner.toUpperCase()}</span>
            <span className="h-3 w-px bg-[#C8A96A]/40" />
            <span className="text-[#8B7340]">{SITE.addressShort}</span>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild className="tracking-[0.08em] shadow-md">
              <Link href="/collections">
                EXPLORE COLLECTION <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="bg-white/90 backdrop-blur">
              <Link href="/stitching">BOOK STITCHING</Link>
            </Button>
          </div>
          <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#C8A96A]/20 bg-white/70 px-3 py-1 text-xs tracking-[0.10em] font-semibold text-[#6B5B4F]">
            <Sparkles className="h-3.5 w-3.5 text-[#C8A96A]" /> SCROLL — HANDS JOIN
          </div>
        </div>
      </div>
    </section>
  );
}
