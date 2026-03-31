'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroller() {
  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.0,          // Default is 1.2, reducing slightly for more "snappy" feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.15,             // Faster response
      wheelMultiplier: 1,
      touchMultiplier: 2,
      smoothWheel: true,
    });

    // raf loop
    let requestFrame: number;
    function raf(time: number) {
      lenis.raf(time);
      requestFrame = requestAnimationFrame(raf);
    }

    requestFrame = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      cancelAnimationFrame(requestFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}
