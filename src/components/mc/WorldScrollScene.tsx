"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function WorldScrollScene() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const farY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const foreY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const overlayY = useTransform(scrollYProgress, [0, 1], [0, 320]);

  return (
    <div className="mc-scroll-scene" aria-hidden="true">
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
