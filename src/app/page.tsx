"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Github } from "lucide-react";
import { CLI_COMMANDS, INSTALLER, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { CodeBlock } from "@/components/CodeBlock";
import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";
import { SpriteGlyph } from "@/components/mc/SpriteGlyph";
import { WorldScrollScene } from "@/components/mc/WorldScrollScene";

function WorldHeroSection() {
  const [heroInstallTarget, setHeroInstallTarget] = useState<"linux" | "windows">("linux");
  const heroInstallCommand = heroInstallTarget === "windows" ? INSTALLER.windows : INSTALLER.linux;

  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    if (ua.includes("windows")) setHeroInstallTarget("windows");
  }, []);

  return (
    <section className="mc-world-hero" id="top">
      <div className="container-wide section-padding relative z-20 pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-18">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="sprite-chip label-caps mb-5" style={{ color: "var(--heading)", width: "fit-content" }}>
                <SpriteGlyph name="spark" size={14} tone="emerald" />
                World Manual · Local-First Ops
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h1
                className="display font-bold leading-none mb-6"
                style={{
                  fontSize: "clamp(2.25rem, 6.2vw, 5.4rem)",
                  letterSpacing: "-0.035em",
                  color: "var(--heading)",
                }}
              >
                ENTER THE
                <br />
                ARX WORLD.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="max-w-2xl text-base sm:text-lg leading-relaxed mb-8" style={{ color: "var(--body)" }}>
                {SITE_CONFIG.name} is a game-like operations manual for Minecraft server admins.
                Install once, launch fast, manage everything from your dashboard and CLI — with
                local Gemma on Ollama and no cloud lock-in.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link href="/install" className="btn-primary">Install ARX</Link>
                <Link href="/docs" className="btn-secondary">Open Manual</Link>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <div className="mc-stat-row">
                <div className="mc-stat-chip">
                  <SpriteGlyph name="map" size={14} tone="accent" />
                  <span>One-command install</span>
                </div>
                <div className="mc-stat-chip">
                  <SpriteGlyph name="shield" size={14} tone="emerald" />
                  <span>Local-first security</span>
                </div>
                <div className="mc-stat-chip">
                  <SpriteGlyph name="pickaxe" size={14} tone="accent" />
                  <span>CLI + Dashboard</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.12}>
            <div className="mc-hero-stage">
              <div className="mc-hero-console pixel-card">
                <div className="flex items-center justify-between pb-2 mb-2" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="label-caps" style={{ color: "var(--muted)" }}>Quick Spawn</p>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setHeroInstallTarget("linux")}
                      className="label-caps focus-ring"
                      style={{ color: heroInstallTarget === "linux" ? "var(--heading)" : "var(--muted)" }}
                      aria-pressed={heroInstallTarget === "linux"}
                    >
                      Linux
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroInstallTarget("windows")}
                      className="label-caps focus-ring"
                      style={{ color: heroInstallTarget === "windows" ? "var(--heading)" : "var(--muted)" }}
                      aria-pressed={heroInstallTarget === "windows"}
                    >
                      Windows
                    </button>
                  </div>
                </div>

                <CodeBlock
                  code={heroInstallCommand}
                  language="bash"
                  label={heroInstallTarget === "windows" ? "SPAWN (WINDOWS)" : "SPAWN"}
                  step="1."
                />
                <CodeBlock code="arx start" language="bash" label="ENTER WORLD" step="2." />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  const questSteps = [
    {
      id: "01",
      glyph: "map" as const,
      title: "Spawn",
      text: "Run one command and bring ARX, Ollama, and your default world online.",
    },
    {
      id: "02",
      glyph: "chest" as const,
      title: "Loadout",
      text: "Tune config, model context, and server profile from a clean setup flow.",
    },
    {
      id: "03",
      glyph: "pickaxe" as const,
      title: "Operate",
      text: "Use dashboard and terminal for lifecycle, world controls, and safety checks.",
    },
    {
      id: "04",
      glyph: "shield" as const,
      title: "Defend",
      text: "Run with controlled command pathways and integrity-verified release assets.",
    },
  ];

  return (
    <section className="section-padding mc-world-section" id="journey">
      <div className="container-wide">
        <RevealedRule className="mb-14" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Quest Path</p>
          <h2 className="display font-semibold mb-12" style={{ fontSize: "clamp(2rem, 4.6vw, 4.2rem)", color: "var(--heading)" }}>
            From spawn to stable runtime.
          </h2>
        </ScrollReveal>

        <div className="mc-quest-grid">
          {questSteps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.06}>
              <article className="mc-quest-card pixel-card">
                <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>{step.id}</p>
                <h3 className="display font-semibold text-2xl mb-3" style={{ color: "var(--heading)" }}>
                  <span className="inline-flex items-center gap-2">
                    <SpriteGlyph name={step.glyph} size={16} tone="accent" />
                    {step.title}
                  </span>
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{step.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InventorySection() {
  const modules = [
    {
      glyph: "spark" as const,
      title: "Local AI Engine",
      text: "Gemma-focused local assistant on Ollama with command-based context tuning.",
      tag: "AI",
    },
    {
      glyph: "map" as const,
      title: "Global ARX CLI",
      text: "Use one command surface for start, shutdown, status, tunnel, and AI controls.",
      tag: "CLI",
    },
    {
      glyph: "chest" as const,
      title: "Ops Dashboard",
      text: "Visual world management, server lifecycle, and operational controls in browser.",
      tag: "UI",
    },
    {
      glyph: "torch" as const,
      title: "Tunnel Access",
      text: "Optional Playit integration for public access when you choose to open the world.",
      tag: "NETWORK",
    },
    {
      glyph: "shield" as const,
      title: "Security Controls",
      text: "Controlled execution boundaries with CSRF protection and lockout-safe auth flows.",
      tag: "SECURITY",
    },
    {
      glyph: "pickaxe" as const,
      title: "Integrity Verified",
      text: "Release and installer checksum verification so bootstrap artifacts are trusted.",
      tag: "VERIFY",
    },
  ];

  return (
    <section className="section-padding mc-world-section" id="features">
      <div className="container-wide">
        <RevealedRule className="mb-14" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Inventory</p>
          <h2 className="display font-semibold mb-12" style={{ fontSize: "clamp(2rem, 4.6vw, 4.2rem)", color: "var(--heading)" }}>
            Core modules for real-world admins.
          </h2>
        </ScrollReveal>

        <div className="mc-inventory-grid">
          {modules.map((mod, i) => (
            <ScrollReveal key={mod.title} delay={i * 0.05}>
              <article className="mc-inventory-card pixel-card">
                <p className="sprite-chip label-caps mb-4" style={{ color: "var(--accent)", width: "fit-content" }}>
                  <SpriteGlyph name={mod.glyph} size={15} tone="accent" />
                  {mod.tag}
                </p>
                <h3 className="display font-semibold text-2xl mb-3" style={{ color: "var(--heading)" }}>
                  {mod.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{mod.text}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandDeckSection() {
  const safeguards = [
    "Local-first by default; no cloud LLM dependency.",
    "Installer and release integrity checks via SHA-256.",
    "Controlled command pathways with explicit boundaries.",
    "OP-centric runtime execution flow with safer defaults.",
  ];

  return (
    <section className="section-padding mc-world-section" id="operations">
      <div className="container-wide">
        <RevealedRule className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Command Deck</p>
            <h2 className="display font-semibold mb-6" style={{ fontSize: "clamp(2rem, 4.4vw, 3.8rem)", color: "var(--heading)" }}>
              Operate your entire stack from terminal.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--body)" }}>
              ARX keeps the workflow simple: one command surface, clear runtime states, and fast
              troubleshooting when something drifts.
            </p>

            <div className="space-y-0 mb-8" style={{ borderTop: "1px solid var(--border)" }}>
              {CLI_COMMANDS.map((cmd, i) => (
                <div
                  key={cmd.command}
                  className="flex items-start justify-between gap-3 py-3"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <code className="text-sm font-mono" style={{ color: "var(--accent)" }}>{cmd.command}</code>
                  <span className="text-xs text-right" style={{ color: "var(--muted)", maxWidth: "28ch" }}>{cmd.description}</span>
                </div>
              ))}
            </div>

            <Link href="/docs/cli" className="btn-secondary">Full CLI Reference</Link>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="pixel-card p-6 sm:p-8">
              <p className="sprite-chip label-caps mb-5" style={{ color: "var(--heading)", width: "fit-content" }}>
                <SpriteGlyph name="shield" size={15} tone="emerald" />
                Safety Layers
              </p>
              <div className="space-y-3" style={{ borderTop: "1px solid var(--border)" }}>
                {safeguards.map((item, i) => (
                  <div key={item} className="flex items-start gap-3 pt-3" style={{ borderBottom: i === safeguards.length - 1 ? "none" : "1px solid var(--border)" }}>
                    <SpriteGlyph name="spark" size={12} tone="emerald" className="mt-[3px]" />
                    <p className="text-sm leading-relaxed pb-3" style={{ color: "var(--body)" }}>{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/docs/security" className="btn-secondary mt-4">Security Model</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="mc-faq-item" style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-ring"
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: "var(--heading)" }}>{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }} className="label-caps" style={{ color: "var(--muted)" }}>
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--body)", maxWidth: "56ch" }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

function FinalSection() {
  const faqs = [
    {
      q: "Does ARX run offline after setup?",
      a: "Yes. ARX is local-first and runs on your machine. Internet is needed for installation and optional integrations like tunnel access.",
    },
    {
      q: "Can I tune AI context later?",
      a: "Yes. Use command-based tuning, for example arx ai set-context 4096, without rerunning installer setup.",
    },
    {
      q: "How do I verify release authenticity?",
      a: "Use the published SHA-256 checksums and release verification documentation to validate installer/runtime artifacts.",
    },
  ];

  return (
    <section className="section-padding mc-world-section" id="faq">
      <div className="container-wide">
        <RevealedRule className="mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          <ScrollReveal>
            <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Guidebook</p>
            <h2 className="display font-semibold mb-6" style={{ fontSize: "clamp(2rem, 4.4vw, 3.8rem)", color: "var(--heading)" }}>
              Ready to deploy your world?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--body)" }}>
              Start with the installer, follow the docs, and run ARX like a game-grade operational toolkit.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/install" className="btn-primary">Install ARX</Link>
              <Link href="/docs/getting-started" className="btn-secondary">Getting Started</Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="pixel-card p-6 sm:p-8" style={{ borderTop: "1px solid var(--border)" }}>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
    const isReload = navigationEntry?.type === "reload";

    if (isReload) {
      if (window.location.hash) {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      }

      window.requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    }
  }, []);

  return (
    <div className="mc-world-page">
      <WorldScrollScene />
      <div className="relative z-20 mc-home-main">
        <WorldHeroSection />
        <JourneySection />
        <InventorySection />
        <CommandDeckSection />
        <FinalSection />
      </div>
    </div>
  );
}
