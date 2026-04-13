"use client";

import { useEffect, useState, useRef } from "react";

export function PickaxeCursor() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const trailRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.dataset.customCursor = "on";
    root.style.setProperty("--pickaxe-x", "50vw");
    root.style.setProperty("--pickaxe-y", "50vh");

    const onMove = (event: MouseEvent) => {
      posRef.current = { x: event.clientX, y: event.clientY };
      root.style.setProperty("--pickaxe-x", `${event.clientX}px`);
      root.style.setProperty("--pickaxe-y", `${event.clientY}px`);
    };

    const onDown = () => {
      setActive(true);
      window.setTimeout(() => setActive(false), 560);
    };

    // Smooth trail follower via rAF
    const updateTrail = () => {
      const trail = trailRef.current;
      if (trail) {
        trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.15;
        trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.15;
        trail.style.left = `${trailPosRef.current.x}px`;
        trail.style.top = `${trailPosRef.current.y}px`;
      }
      rafRef.current = requestAnimationFrame(updateTrail);
    };
    rafRef.current = requestAnimationFrame(updateTrail);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });

    return () => {
      delete root.dataset.customCursor;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Trailing glow that follows with lag */}
      <div
        ref={trailRef}
        className="pickaxe-trail"
        aria-hidden="true"
        style={{
          position: "fixed",
          left: "50vw",
          top: "50vh",
          width: "1.2rem",
          height: "1.2rem",
          pointerEvents: "none",
          zIndex: 1000,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 20%, transparent), transparent 70%)",
          opacity: 0.5,
          filter: "blur(6px)",
        }}
      />
      <div
        className={`pickaxe-cursor ${active ? "active" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
