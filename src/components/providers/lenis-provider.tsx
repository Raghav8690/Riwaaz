"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function LenisProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
    });

    // respectReducedMotion is true by default — lenis handles it
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
