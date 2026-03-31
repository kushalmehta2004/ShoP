'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroller() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wrapper: window,
      content: document.documentElement,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
    });

    // raf loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
