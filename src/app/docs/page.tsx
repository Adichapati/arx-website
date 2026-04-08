"use client";

import Link from "next/link";
import { BookOpen, Terminal, Settings, Shield, FileCheck, AlertTriangle, Rocket } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const docCards = [
  {
    title: "Getting Started",
    desc: "Install ARX and run your first server in minutes.",
    href: "/docs/getting-started",
    icon: Rocket,
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
  {
    title: "CLI Reference",
    desc: "Complete reference for all ARX CLI commands.",
    href: "/docs/cli",
    icon: Terminal,
    color: "text-arx-cyan",
    bg: "bg-arx-cyan/10",
  },
  {
    title: "Configuration",
    desc: "Customize ARX settings, AI context, and server options.",
    href: "/docs/configuration",
    icon: Settings,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    title: "Security Model",
    desc: "How ARX keeps your server and system safe.",
    href: "/docs/security",
    icon: Shield,
    color: "text-arx-violet",
    bg: "bg-arx-violet/10",
  },
  {
    title: "Release Verification",
    desc: "Verify download integrity with checksums.",
    href: "/docs/release-verification",
    icon: FileCheck,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Troubleshooting",
    desc: "Common issues and their solutions.",
    href: "/docs/troubleshooting",
    icon: AlertTriangle,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function DocsHomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-10">
      <ScrollReveal>
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Documentation</h1>
          <p className="text-lg text-arx-text-secondary">
            Everything you need to install, configure, and operate ARX.
          </p>
          <div className="gradient-line mt-6" />
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {docCards.map((card, i) => (
          <ScrollReveal key={card.href} delay={i * 0.06}>
            <Link
              href={card.href}
              className="glass-card-hover p-6 block group h-full"
            >
              <div className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center mb-4`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <h2 className="text-lg font-semibold mb-1.5 group-hover:text-arx-cyan transition-colors">
                {card.title}
              </h2>
              <p className="text-sm text-arx-text-secondary">{card.desc}</p>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
