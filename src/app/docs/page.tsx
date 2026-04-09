"use client";

import Link from "next/link";
import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";

const docCards = [
  { title: "Getting Started", desc: "Install ARX and run your first server in minutes.", href: "/docs/getting-started", tag: "Guide" },
  { title: "CLI Reference", desc: "Complete reference for all ARX CLI commands.", href: "/docs/cli", tag: "Reference" },
  { title: "Configuration", desc: "Customize ARX settings, AI context, and server options.", href: "/docs/configuration", tag: "Reference" },
  { title: "Security Model", desc: "How ARX keeps your server and system safe.", href: "/docs/security", tag: "Guide" },
  { title: "Release Verification", desc: "Verify download integrity with checksums.", href: "/docs/release-verification", tag: "Guide" },
  { title: "Troubleshooting", desc: "Common issues and their solutions.", href: "/docs/troubleshooting", tag: "Guide" },
];

export default function DocsHomePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12">
      <ScrollReveal>
        <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Documentation</p>
        <h1 className="display font-bold mb-3"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--heading)", letterSpacing: "-0.02em" }}>
          Everything to install, configure, and operate ARX.
        </h1>
        <RevealedRule className="mt-8 mb-12" delay={0.2} />
      </ScrollReveal>

      <div style={{ borderTop: "1px solid var(--border)" }}>
        {docCards.map((card, i) => (
          <ScrollReveal key={card.href} delay={i * 0.05}>
            <Link
              href={card.href}
              className="flex items-center justify-between py-5 group transition-all duration-200"
              style={{ borderBottom: "1px solid var(--border)" }}
              onMouseEnter={e => (e.currentTarget.style.paddingLeft = "0.75rem")}
              onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div>
                <p className="label-caps mb-1" style={{ color: "var(--accent)" }}>{card.tag}</p>
                <h2 className="text-base font-medium transition-colors duration-200" style={{ color: "var(--heading)" }}>
                  {card.title}
                </h2>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>{card.desc}</p>
              </div>
              <span className="label-caps ml-4 flex-shrink-0 transition-all duration-200 opacity-0 group-hover:opacity-100"
                style={{ color: "var(--muted)" }}>
                →
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
