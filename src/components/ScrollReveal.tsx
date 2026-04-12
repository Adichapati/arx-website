"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const offsets: Record<string, object> = {
    up: { y: 24, filter: "blur(4px)" },
    down: { y: -24, filter: "blur(4px)" },
    left: { x: 24, filter: "blur(4px)" },
    right: { x: -24, filter: "blur(4px)" },
    none: { filter: "blur(3px)" },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" } : { opacity: 0, ...offsets[direction] }}
      transition={{
        duration: 0.74,
        delay,
        ease: [0.19, 1, 0.22, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Expands a 1px ruled line from left when in view — Hermes section divider animation */
export function RevealedRule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ height: "1px", backgroundColor: "var(--border)" }}>
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "var(--border-bright)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
