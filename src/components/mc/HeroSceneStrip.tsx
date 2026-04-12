"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroSceneStrip() {
  const reduced = useReducedMotion();

  return (
    <div className="mc-scene-strip" aria-hidden="true">
      <motion.div
        className="mc-scene-stars"
        animate={reduced ? undefined : { x: [0, -24, 0] }}
        transition={reduced ? undefined : { duration: 30, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="mc-scene-clouds"
        animate={reduced ? undefined : { x: [0, 28, 0] }}
        transition={reduced ? undefined : { duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="mc-scene-hills"
        animate={reduced ? undefined : { x: [0, 12, 0] }}
        transition={reduced ? undefined : { duration: 16, ease: "easeInOut", repeat: Infinity }}
      />
      <div className="mc-scene-foreground" />
      <div className="mc-scene-mist" />
    </div>
  );
}
