"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Shield,
  Cpu,
  Globe,
  Layers,
  Zap,
  Check,
  ChevronDown,
  Download,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Server,
  Wifi,
  Lock,
  FileCheck,
} from "lucide-react";
import { ThreeBackground } from "@/components/ThreeBackground";
import { CodeBlock } from "@/components/CodeBlock";
import { AnimatedButton } from "@/components/AnimatedButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CLI_COMMANDS, PLATFORMS, SITE_CONFIG, INSTALLER } from "@/lib/constants";
import { useState } from "react";

/* ========== HERO ========== */
function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-arx-bg-card/60 border border-arx-border backdrop-blur-sm mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-arx-text-secondary">
              Local-first Minecraft Operations
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[0.95]">
            <span className="text-arx-text-primary">Meet </span>
            <span className="text-gradient-cyan">ARX</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-arx-text-secondary mb-4 tracking-tight">
            {SITE_CONFIG.fullName}
          </p>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-arx-text-secondary/80 mb-10 leading-relaxed">
            One command to install. Local AI via Ollama &amp; Gemma.
            Dashboard + CLI to run your Minecraft server — no cloud lock-in.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AnimatedButton href="/install" variant="primary" size="lg" icon={<Download className="w-4 h-4" />}>
              Install ARX
            </AnimatedButton>
            <AnimatedButton href="/docs" variant="secondary" size="lg" icon={<BookOpen className="w-4 h-4" />}>
              Read Docs
            </AnimatedButton>
          </div>

          {/* Install preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 max-w-lg mx-auto"
          >
            <CodeBlock code={INSTALLER.linux} language="bash" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-arx-text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ========== HOW IT WORKS ========== */
function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Install",
      desc: "One command installs ARX, Ollama, and the Gemma model. Linux, Windows, or macOS.",
      icon: Download,
    },
    {
      num: "02",
      title: "Configure",
      desc: "ARX auto-detects your system and sets sensible defaults. Customize via config or CLI.",
      icon: Layers,
    },
    {
      num: "03",
      title: "Launch",
      desc: "Run `arx start` to bring up your Minecraft server, dashboard, and local AI.",
      icon: Zap,
    },
    {
      num: "04",
      title: "Operate",
      desc: "Manage lifecycle, tunnels, AI context — all through the dashboard or CLI.",
      icon: Terminal,
    },
  ];

  return (
    <section className="section-padding relative" id="how-it-works">
      <div className="gradient-line mb-20" />
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Up and running in <span className="text-gradient-cyan">minutes</span>
            </h2>
            <p className="text-arx-text-secondary max-w-xl mx-auto">
              From install to operating your server — four simple steps.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.1}>
              <div className="glass-card-hover p-6 h-full relative group">
                {/* Step number */}
                <span className="text-5xl font-black text-arx-border absolute top-4 right-4 select-none group-hover:text-arx-cyan/10 transition-colors">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-lg bg-arx-cyan/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-arx-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-arx-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== FEATURES ========== */
function FeaturesSection() {
  const features = [
    {
      icon: Cpu,
      title: "Local AI via Ollama",
      desc: "Gemma-focused experience with gemma4:e2b. Your data stays on your machine.",
    },
    {
      icon: Terminal,
      title: "Powerful CLI",
      desc: "Full lifecycle management from your terminal. Start, stop, configure, and monitor.",
    },
    {
      icon: Server,
      title: "Browser Dashboard",
      desc: "Visual operations dashboard alongside CLI. No cloud dependency required.",
    },
    {
      icon: Wifi,
      title: "Playit Tunnel",
      desc: "Optional internet access tunnel via Playit. Share your server easily.",
    },
    {
      icon: Lock,
      title: "Security-First",
      desc: "Local-first operation, controlled command pathways, OP-only execution boundaries.",
    },
    {
      icon: FileCheck,
      title: "Verified Releases",
      desc: "Checksum verification for every release. Know your install is authentic.",
    },
  ];

  return (
    <section className="section-padding" id="features">
      <div className="container-wide">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to <span className="text-gradient-cyan">operate</span>
            </h2>
            <p className="text-arx-text-secondary max-w-xl mx-auto">
              ARX provides a complete operations toolkit for Minecraft server management.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <div className="glass-card-hover p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-arx-cyan/10 to-arx-violet/10 border border-arx-border flex items-center justify-center mb-4 group-hover:border-arx-cyan/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-arx-cyan" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-arx-text-secondary leading-relaxed">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ========== PLATFORM SUPPORT ========== */
function PlatformSection() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Platform <span className="text-gradient-cyan">support</span>
            </h2>
            <p className="text-arx-text-secondary">
              ARX runs where you need it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className={`glass-card p-6 text-center ${
                  platform.supported === "official"
                    ? "border-arx-cyan/20"
                    : "border-arx-border"
                }`}
              >
                <span className="text-3xl mb-3 block">{platform.icon}</span>
                <h3 className="text-lg font-semibold mb-1">{platform.name}</h3>
                <div className="flex items-center justify-center gap-1.5">
                  {platform.supported === "official" ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-green-400">Official</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400">Best Effort</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== CLI COMMANDS ========== */
function CLISection() {
  return (
    <section className="section-padding" id="cli-preview">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient-cyan">CLI</span> at your fingertips
            </h2>
            <p className="text-arx-text-secondary">
              Manage your entire Minecraft operation from the terminal.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-arx-border bg-arx-bg-elevated/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-arx-text-muted font-mono ml-2">terminal</span>
            </div>

            {/* Commands */}
            <div className="p-5 font-mono text-sm space-y-3">
              {CLI_COMMANDS.map((cmd, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                  <div className="flex items-center">
                    <span className="text-arx-cyan mr-2 select-none">$</span>
                    <span className="text-arx-text-primary font-medium">{cmd.command}</span>
                  </div>
                  <span className="text-arx-text-muted text-xs sm:text-sm">
                    # {cmd.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== SECURITY ========== */
function SecuritySection() {
  const safeguards = [
    "Local-first operation — your data never leaves your machine",
    "Controlled command execution pathways",
    "OP-oriented command execution boundaries",
    "Explicit command validation safeguards",
    "Release integrity verification via checksums",
  ];

  return (
    <section className="section-padding" id="security">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="w-12 h-12 rounded-xl bg-arx-violet/10 border border-arx-violet/20 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-arx-violet" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Security you can <span className="text-gradient-reverse">trust</span>
              </h2>
              <p className="text-arx-text-secondary leading-relaxed mb-8">
                ARX is designed with safety as a first principle. No cloud dependencies,
                no hidden network calls, no uncontrolled command execution.
              </p>
              <AnimatedButton href="/docs/security" variant="secondary" showArrow>
                Security Model
              </AnimatedButton>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-3">
              {safeguards.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 glass-card p-4"
                >
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-arx-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ========== FAQ ========== */
function FAQSection() {
  const faqs = [
    {
      q: "What is ARX?",
      a: "ARX (Agentic Runtime for eXecution) is a local-first Minecraft server operations platform. It provides one-command installation, a browser dashboard, CLI controls, and local AI assistance via Ollama and Gemma.",
    },
    {
      q: "Does ARX require internet access?",
      a: "ARX runs entirely locally. Internet is only needed for initial installation and optional features like the Playit tunnel for sharing your server.",
    },
    {
      q: "Which platforms are supported?",
      a: "Linux and Windows are officially supported. macOS support is provided on a best-effort basis.",
    },
    {
      q: "What AI model does ARX use?",
      a: "ARX uses Ollama to run models locally, with a Gemma-focused experience. The default model is gemma4:e2b.",
    },
    {
      q: "Is ARX free?",
      a: "Yes. ARX is open source and free to use.",
    },
    {
      q: "How do I verify my installation?",
      a: "ARX provides SHA-256 checksums for every release. See the Release Verification docs for step-by-step instructions.",
    },
  ];

  return (
    <section className="section-padding" id="faq">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently <span className="text-gradient-cyan">asked</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem question={faq.q} answer={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus-ring rounded-2xl"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-arx-text-muted" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-sm text-arx-text-secondary leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

/* ========== CTA BANNER ========== */
function CTABanner() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="glass-card p-10 sm:p-14 text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-arx-cyan/10 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to get started?
              </h2>
              <p className="text-arx-text-secondary mb-8 max-w-lg mx-auto">
                Install ARX in one command and have your Minecraft server running in minutes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <AnimatedButton href="/install" variant="primary" size="lg" icon={<Download className="w-4 h-4" />}>
                  Install Now
                </AnimatedButton>
                <AnimatedButton
                  href={`https://github.com/YOUR_GITHUB_ORG_OR_USER/openclaw-dashboard-oneclick`}
                  variant="secondary"
                  size="lg"
                  external
                >
                  View on GitHub
                </AnimatedButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ========== PAGE ========== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <PlatformSection />
      <CLISection />
      <SecuritySection />
      <FAQSection />
      <CTABanner />
    </>
  );
}
