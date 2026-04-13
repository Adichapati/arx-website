"use client";

import { useEffect, useRef } from "react";

export function GrainAndProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    let prevPct = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Only update DOM when value actually changes (avoids layout thrash)
      if (Math.abs(pct - prevPct) > 0.1) {
        bar.style.transform = `scaleX(${pct / 100})`;
        prevPct = pct;
      }

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      ref={barRef}
      className="scroll-progress-line"
      style={{ width: "100%", transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}
