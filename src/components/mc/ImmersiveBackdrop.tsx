"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ImmersiveBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="mc-immersive-backdrop" aria-hidden="true">
      <div className="mc-backdrop-autumn-base" />

      <motion.div
        className="mc-backdrop-autumn-layer mc-backdrop-autumn-layer-mid"
        animate={reduced ? undefined : { x: [0, -18, 0] }}
        transition={reduced ? undefined : { duration: 34, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="mc-backdrop-autumn-layer mc-backdrop-autumn-layer-fore"
        animate={reduced ? undefined : { x: [0, 24, 0] }}
        transition={reduced ? undefined : { duration: 22, ease: "easeInOut", repeat: Infinity }}
      />

      <motion.div
        className="mc-backdrop-stars"
        animate={reduced ? undefined : { x: [0, -30, 0], y: [0, 10, 0] }}
        transition={reduced ? undefined : { duration: 36, ease: "linear", repeat: Infinity }}
      />

      <motion.div
        className="mc-backdrop-fog"
        animate={reduced ? undefined : { opacity: [0.34, 0.56, 0.34] }}
        transition={reduced ? undefined : { duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
