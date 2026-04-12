"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ImmersiveBackdrop() {
  const reduced = useReducedMotion();

  return (
    <div className="mc-immersive-backdrop" aria-hidden="true">
      <motion.div
        className="mc-backdrop-stars"
        animate={reduced ? undefined : { x: [0, -30, 0], y: [0, 10, 0] }}
        transition={reduced ? undefined : { duration: 36, ease: "linear", repeat: Infinity }}
      />
      <motion.div
        className="mc-backdrop-clouds"
        animate={reduced ? undefined : { x: [0, 24, 0] }}
        transition={reduced ? undefined : { duration: 28, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="mc-backdrop-ridge mc-backdrop-ridge-far"
        animate={reduced ? undefined : { x: [0, -12, 0] }}
        transition={reduced ? undefined : { duration: 22, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="mc-backdrop-ridge mc-backdrop-ridge-near"
        animate={reduced ? undefined : { x: [0, 16, 0] }}
        transition={reduced ? undefined : { duration: 18, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        className="mc-backdrop-fog"
        animate={reduced ? undefined : { opacity: [0.4, 0.62, 0.4] }}
        transition={reduced ? undefined : { duration: 8, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
