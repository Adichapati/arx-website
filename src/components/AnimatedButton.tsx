"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
}

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "md",
  icon,
  showArrow = false,
  external = false,
  className = "",
}: AnimatedButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-arx-cyan text-arx-bg font-semibold hover:bg-arx-cyan-dim hover:shadow-lg hover:shadow-arx-cyan/25",
    secondary:
      "bg-arx-bg-card border border-arx-border text-arx-text-primary font-medium hover:border-arx-cyan/30 hover:bg-arx-bg-hover",
    ghost:
      "bg-transparent text-arx-text-secondary font-medium hover:text-arx-cyan hover:bg-arx-bg-card/50",
  };

  const Comp = external ? "a" : Link;
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Comp
        href={href}
        {...externalProps}
        className={`
          inline-flex items-center gap-2 rounded-xl transition-all duration-200 focus-ring
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {showArrow && (
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        )}
      </Comp>
    </motion.div>
  );
}
