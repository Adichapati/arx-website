"use client";

import { useEffect, useState } from "react";

export function PickaxeCursor() {
  const [active, setActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.style.setProperty("--pickaxe-x", "50vw");
    root.style.setProperty("--pickaxe-y", "50vh");

    const onMove = (event: MouseEvent) => {
      root.style.setProperty("--pickaxe-x", `${event.clientX}px`);
      root.style.setProperty("--pickaxe-y", `${event.clientY}px`);
    };

    const onDown = () => {
      setActive(true);
      window.setTimeout(() => setActive(false), 560);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`pickaxe-cursor ${active ? "active" : ""}`}
      aria-hidden="true"
    />
  );
}
