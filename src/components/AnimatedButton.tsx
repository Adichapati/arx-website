"use client";

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
  const Comp = external ? "a" : Link;
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  const base = "btn-primary";
  const secondary = "btn-secondary";
  const ghost = "inline-flex items-center gap-2 label-caps transition-colors duration-200";

  const cls = variant === "primary" ? base : variant === "secondary" ? secondary : ghost;

  return (
    <Comp
      href={href}
      {...externalProps}
      className={`${cls} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {showArrow && <ArrowRight className="w-3.5 h-3.5" />}
    </Comp>
  );
}
