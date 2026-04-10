"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";
import { CodeBlock } from "@/components/CodeBlock";
import { ARX_ASCII, CLI_COMMANDS, INSTALLER, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { ChevronDown, Check, Shield, Github } from "lucide-react";

/* ─── WORD-STAGGER hero headline ─── */
function HeroHeadline() {
  const words = ["LOCAL-FIRST", "MINECRAFT", "OPERATIONS."];
  return (
    <h1 className="display font-bold mb-6 leading-none" style={{ fontSize: "clamp(2.5rem, 7.2vw, 6.4rem)", letterSpacing: "-0.03em", color: "var(--heading)" }}>
      {words.map((word, wi) => (
        <span key={wi} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: wi * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  const [heroInstallTarget, setHeroInstallTarget] = useState<"linux" | "windows">("linux");
  const heroInstallCommand = heroInstallTarget === "windows" ? INSTALLER.windows : INSTALLER.linux;

  useEffect(() => {
    const ua = typeof navigator !== "undefined" ? navigator.userAgent.toLowerCase() : "";
    const isWindows = ua.includes("windows");
    if (isWindows) {
      setHeroInstallTarget("windows");
    }
  }, []);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-between pt-[4.5rem]" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="flex-1 flex flex-col justify-center px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto w-full">
        {/* ARX ASCII brand block */}
        <motion.pre
          className="arx-ascii mb-5"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-label="ARX ASCII logo"
        >
          {ARX_ASCII.join("\n")}
        </motion.pre>

        {/* Overline */}
        <motion.p
          className="label-caps mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          style={{ color: "var(--muted)" }}
        >
          {SITE_CONFIG.fullName} &bull; Open Source &bull; Local AI
        </motion.p>

        {/* Staggered headline */}
        <HeroHeadline />

        {/* Subline */}
        <motion.p
          className="max-w-2xl text-base sm:text-lg leading-relaxed mb-5"
          style={{ color: "var(--body)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          ARX is a local-first Minecraft operations platform: install once, run your server reliably,
          and manage day-to-day ops from one dashboard + CLI with Gemma on Ollama.
          It’s built for admins who want fast setup, safer controls, and zero cloud lock-in.
        </motion.p>

        {/* Hermes-style numbered install steps */}
        <motion.div
          className="max-w-xl space-y-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 pb-3" style={{ borderBottom: "1px solid var(--border)" }}>
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
          <CodeBlock
            code={heroInstallCommand}
            language="bash"
            label={heroInstallTarget === "windows" ? "INSTALL (WINDOWS)" : "INSTALL"}
            step="1."
          />
          <CodeBlock
            code="arx start"
            language="bash"
            label="LAUNCH"
            step="2."
          />
          <p className="label-caps pt-3" style={{ color: "var(--muted)" }}>
            {heroInstallTarget === "windows" ? "PowerShell one-liner for Windows." : "Shell one-liner for Linux."} &nbsp;
            <Link href="/install" style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              Full installer options →
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Bottom row — scroll hint */}
      <motion.div
        className="flex items-center justify-between px-5 sm:px-8 lg:px-12 py-4 max-w-7xl mx-auto w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="label-caps" style={{ color: "var(--muted)" }}>↓ Scroll</p>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="label-caps transition-colors duration-200" style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--heading)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            Docs
          </Link>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
            className="label-caps transition-colors duration-200" style={{ color: "var(--muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--heading)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  const steps = [
    { n: "01", title: "Install", desc: "One command installs ARX, Ollama, and the Gemma model. Linux, Windows, or macOS." },
    { n: "02", title: "Configure", desc: "ARX auto-detects your system and sets sensible defaults. Customize via config or CLI." },
    { n: "03", title: "Launch", desc: "Run arx start to bring up your Minecraft server, dashboard, and local AI." },
    { n: "04", title: "Operate", desc: "Manage lifecycle, tunnels, AI context — via dashboard or CLI." },
  ];

  return (
    <section className="section-padding" id="how-it-works">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>How it works</p>
          <h2 className="display font-semibold mb-16" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
            Up and running in minutes.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 0.08}>
              <div
                className="py-10 pr-8 group"
                style={{ borderRight: i < 3 ? "1px solid var(--border)" : "none", paddingLeft: i > 0 ? "2rem" : 0 }}
              >
                <p className="label-caps mb-6" style={{ color: "var(--muted)" }}>{step.n}</p>
                <h3 className="display font-semibold text-2xl mb-3 transition-colors duration-200 group-hover:text-accent"
                  style={{ color: "var(--heading)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ─── */
function FeaturesSection() {
  const features = [
    { tag: "AI", title: "Local AI via Ollama", desc: "Gemma-focused experience with gemma4:e2b. Your data stays on your machine." },
    { tag: "CLI", title: "Powerful CLI", desc: "Full lifecycle management from your terminal. Start, stop, configure, and monitor." },
    { tag: "Dashboard", title: "Browser Dashboard", desc: "Visual operations dashboard alongside CLI. No cloud dependency required." },
    { tag: "Network", title: "Playit Tunnel", desc: "Optional internet access tunnel via Playit. Share your server easily." },
    { tag: "Security", title: "Security-First", desc: "Local-first operation, controlled command pathways, OP-only execution boundaries." },
    { tag: "Integrity", title: "Verified Releases", desc: "Checksum verification for every release. Know your install is authentic." },
  ];

  return (
    <section className="section-padding" id="features">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Features</p>
          <h2 className="display font-semibold mb-16" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
            Everything to operate.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((feat, i) => (
            <ScrollReveal key={feat.title} delay={i * 0.06}>
              <div
                className="py-8 group cursor-default"
                style={{
                  borderRight: (i % 3 !== 2) ? "1px solid var(--border)" : "none",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                  paddingLeft: (i % 3 !== 0) ? "2rem" : 0,
                  paddingRight: "2rem",
                  transition: "background 200ms",
                }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--bg-surface)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <p className="label-caps mb-3" style={{ color: "var(--accent)" }}>{feat.tag}</p>
                <h3 className="display font-semibold text-xl mb-3" style={{ color: "var(--heading)" }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{feat.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CLI REFERENCE ─── */
function CLISection() {
  return (
    <section className="section-padding" id="cli-preview">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-start">
          <ScrollReveal>
            <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>CLI Reference</p>
            <h2 className="display font-semibold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
              Your entire server in a terminal.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--body)" }}>
              The arx CLI provides complete lifecycle management. Available globally after installation.
            </p>
            <Link href="/docs/cli" className="btn-secondary inline-flex">
              Full CLI Reference
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div style={{ borderLeft: "1px solid var(--border)" }} className="pl-0 lg:pl-12">
              <div className="space-y-0">
                {CLI_COMMANDS.map((cmd, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 py-4 group transition-colors duration-150"
                    style={{ borderBottom: "1px solid var(--border)" }}
                    onMouseEnter={e => (e.currentTarget.style.paddingLeft = "0.5rem")}
                    onMouseLeave={e => (e.currentTarget.style.paddingLeft = "0")}
                  >
                    <code className="text-sm font-mono flex-shrink-0" style={{ color: "var(--accent)", fontFamily: "'JetBrains Mono', monospace" }}>
                      {cmd.command}
                    </code>
                    <span className="text-xs text-right" style={{ color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                      {cmd.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── PLATFORM SUPPORT ─── */
function PlatformSection() {
  const platforms = [
    { name: "Linux", status: "Official", note: "bash installer" },
    { name: "Windows", status: "Official", note: "PowerShell installer" },
    { name: "macOS", status: "Best Effort", note: "manual setup" },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Platform Support</p>
          <h2 className="display font-semibold mb-16" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
            Runs where you need it.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.08}>
              <div
                className="py-10 pr-8"
                style={{
                  borderRight: i < 2 ? "1px solid var(--border)" : "none",
                  paddingLeft: i > 0 ? "2rem" : 0,
                }}
              >
                <h3 className="display font-semibold text-2xl mb-2" style={{ color: "var(--heading)" }}>{p.name}</h3>
                <p className="label-caps mb-1" style={{ color: p.status === "Official" ? "var(--accent)" : "var(--muted)" }}>
                  {p.status}
                </p>
                <p className="text-sm" style={{ color: "var(--muted)" }}>{p.note}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECURITY ─── */
function SecuritySection() {
  const safeguards = [
    "Local-first — data never leaves your machine",
    "Controlled command execution pathways",
    "OP-oriented execution boundaries",
    "Explicit command validation safeguards",
    "Release integrity via SHA-256 checksums",
  ];

  return (
    <section className="section-padding" id="security">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Security</p>
            <h2 className="display font-semibold mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
              Built for trust.
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--body)" }}>
              ARX is local-first. No cloud dependencies, no hidden network calls, no uncontrolled command execution.
            </p>
            <Link href="/docs/security" className="btn-secondary inline-flex">
              Security Model →
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="space-y-0">
              {safeguards.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <span className="text-sm" style={{ color: "var(--body)" }}>{s}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left focus-ring"
        aria-expanded={open}
      >
        <span className="text-sm font-medium" style={{ color: "var(--heading)" }}>{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="label-caps flex-shrink-0 mt-0.5" style={{ color: "var(--muted)" }}>
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
    </div>
  );
}

function FAQSection() {
  const faqs = [
    { q: "What is ARX?", a: "ARX (Agentic Runtime for eXecution) is a local-first Minecraft server operations platform. It provides one-command installation, a browser dashboard, CLI controls, and local AI assistance via Ollama and Gemma." },
    { q: "Does ARX require internet access?", a: "ARX runs entirely locally. Internet is only needed for initial installation and optional features like the Playit tunnel for sharing your server." },
    { q: "Which platforms are supported?", a: "Linux and Windows are officially supported. macOS support is provided on a best-effort basis." },
    { q: "What AI model does ARX use?", a: "ARX uses Ollama to run models locally, with a Gemma-focused experience. The default model is gemma4:e2b." },
    { q: "Is ARX free?", a: "Yes. ARX is open source and free to use." },
    { q: "How do I verify my installation?", a: "ARX provides SHA-256 checksums for every release. See the Release Verification docs for step-by-step instructions." },
  ];

  return (
    <section className="section-padding" id="faq">
      <div className="container-wide">
        <RevealedRule className="mb-16" />
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>FAQ</p>
          <h2 className="display font-semibold mb-16" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--heading)" }}>
            Common questions.
          </h2>
        </ScrollReveal>
        <div className="max-w-3xl" style={{ borderTop: "1px solid var(--border)" }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <FAQItem question={faq.q} answer={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ─── */
function CTABanner() {
  return (
    <section className="section-padding" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="container-wide">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="display font-bold mb-6"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "var(--heading)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
                Ready to run?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/install" className="btn-primary">
                Install ARX
              </Link>
              <Link href="/docs" className="btn-secondary">
                Read Docs
              </Link>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CLISection />
      <PlatformSection />
      <SecuritySection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
