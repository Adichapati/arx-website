"use client";

import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;

    const handleMove = (event: MouseEvent) => {
      const normalizedX = (event.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    const reset = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, [mouseX, mouseY, reduced]);

  const tiltX = useTransform(smoothY, [-1, 1], [1.3, -1.3]);
  const tiltY = useTransform(smoothX, [-1, 1], [-1.7, 1.7]);

  const driftFarX = useTransform(smoothX, [-1, 1], [-5, 5]);
  const driftFarY = useTransform(smoothY, [-1, 1], [-3, 3]);
  const driftMidX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const driftMidY = useTransform(smoothY, [-1, 1], [-5, 5]);
  const driftForeX = useTransform(smoothX, [-1, 1], [-12, 12]);
  const driftForeY = useTransform(smoothY, [-1, 1], [-8, 8]);
  const driftOverlayX = useTransform(smoothX, [-1, 1], [-14, 14]);
  const driftOverlayY = useTransform(smoothY, [-1, 1], [-9, 9]);

  const sceneClass = useMemo(() => `mc-scroll-scene mc-zone-${zone}`, [zone]);

  return (
    <div className={sceneClass} data-zone={zone} aria-hidden="true">
      <motion.div className="mc-scene-tilt" style={reduced ? undefined : { rotateX: tiltX, rotateY: tiltY }}>
        <motion.div className="mc-layer-shell" style={reduced ? undefined : { y: farY }}>
          <motion.div
            className="mc-scene-layer mc-scene-layer-base"
            style={reduced ? undefined : { x: driftFarX, y: driftFarY }}
          />
        </motion.div>

        <motion.div className="mc-layer-shell" style={reduced ? undefined : { y: midY }}>
          <motion.div
            className="mc-scene-layer mc-scene-layer-mid"
            style={reduced ? undefined : { x: driftMidX, y: driftMidY }}
          />
        </motion.div>

        <motion.div className="mc-layer-shell" style={reduced ? undefined : { y: foreY }}>
          <motion.div
            className="mc-scene-layer mc-scene-layer-fore"
            style={reduced ? undefined : { x: driftForeX, y: driftForeY }}
          />
        </motion.div>

        <motion.div className="mc-layer-shell" style={reduced ? undefined : { y: overlayY }}>
          <motion.div
            className="mc-scene-layer mc-scene-layer-overlay"
            style={reduced ? undefined : { x: driftOverlayX, y: driftOverlayY }}
          />
        </motion.div>
      </motion.div>

      <div className="mc-scene-vignette" />

      <div className="mc-sprite-track">
        <span className={`mc-runner mc-runner-a ${reduced ? "mc-runner-static" : ""}`} />
        <span className={`mc-runner mc-runner-b ${reduced ? "mc-runner-static" : ""}`} />
        <span className={`mc-runner mc-runner-c ${reduced ? "mc-runner-static" : ""}`} />

        {!reduced && (
          <div className="mc-battle-lane">
            <span className="mc-fighter mc-fighter-left" />
            <span className="mc-fighter mc-fighter-right" />
            <span className="mc-fighter mc-fighter-archer" />
            <span className="mc-battle-arrow" />
            <span className="mc-battle-slash" />
            <span className="mc-battle-spell" />
          </div>
        )}
      </div>
    </div>
  );
}
