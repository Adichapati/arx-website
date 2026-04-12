"use client";

import { useMemo, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";

type ScrollZone = "spawn" | "inventory" | "operations" | "guidebook";

function resolveZone(progress: number): ScrollZone {
  if (progress < 0.28) return "spawn";
  if (progress < 0.58) return "inventory";
  if (progress < 0.84) return "operations";
  return "guidebook";
}

export function WorldScrollScene() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const [zone, setZone] = useState<ScrollZone>("spawn");

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = resolveZone(value);
    setZone((prev) => (prev === next ? prev : next));
  });

  const farY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const foreY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, 320]);

  const sceneClass = useMemo(() => `mc-scroll-scene mc-zone-${zone}`, [zone]);

  return (
    <div className={sceneClass} data-zone={zone} aria-hidden="true">
      <motion.div className="mc-scene-layer mc-scene-layer-base" style={reduced ? undefined : { y: farY }} />
      <motion.div className="mc-scene-layer mc-scene-layer-mid" style={reduced ? undefined : { y: midY }} />
      <motion.div className="mc-scene-layer mc-scene-layer-fore" style={reduced ? undefined : { y: foreY }} />
      <motion.div className="mc-scene-layer mc-scene-layer-overlay" style={reduced ? undefined : { y: overlayY }} />
      <div className="mc-scene-vignette" />

      <div className="mc-sprite-track">
        <span className={`mc-runner mc-runner-a ${reduced ? "mc-runner-static" : ""}`} />
        <span className={`mc-runner mc-runner-b ${reduced ? "mc-runner-static" : ""}`} />
        <span className={`mc-runner mc-runner-c ${reduced ? "mc-runner-static" : ""}`} />
      </div>
    </div>
  );
}
