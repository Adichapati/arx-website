"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CodeBlock } from "@/components/CodeBlock";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ARX_ASCII, INSTALLER } from "@/lib/constants";

type Platform = "linux" | "windows" | "macos";

const PLATFORMS: { id: Platform; label: string }[] = [
  { id: "linux", label: "Linux" },
  { id: "windows", label: "Windows" },
  { id: "macos", label: "macOS" },
];

const POST_INSTALL = [
  { step: "1.", cmd: "arx start", label: "START" },
  { step: "2.", cmd: "arx status", label: "STATUS" },
  { step: "3.", cmd: "arx help", label: "HELP" },
];

const TROUBLESHOOT = [
  { issue: "Command not found after install", fix: "Restart your terminal or run source ~/.bashrc" },
  { issue: "Ollama fails to start", fix: "Ensure port 11434 is free and run ollama serve" },
  { issue: "Permission denied on Linux", fix: "Run the install script with sudo" },
  { issue: "Windows Defender blocks script", fix: "Run PowerShell as Administrator with execution policy bypass" },
];

export default function InstallPage() {
  const [activePlatform, setActivePlatform] = useState<Platform>("linux");

  const installCmds: Record<Platform, { cmd: string; note: string }> = {
    linux: {
      cmd: INSTALLER.linux,
      note: "Installs ARX, Ollama, and pulls gemma4:e2b automatically.",
    },
    windows: {
      cmd: INSTALLER.windows,
      note: "Run PowerShell as Administrator. Handles Ollama installation and model setup.",
    },
    macos: {
      cmd: INSTALLER.linux,
      note: "macOS is best-effort. Community contributions welcome.",
    },
  };

  return (
    <div className="min-h-screen pt-14">
      {/* Header */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto" style={{ borderBottom: "1px solid var(--border)" }}>
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Installation</p>
          <h1 className="display font-bold mb-4"
            style={{ fontSize: "clamp(2.1rem, 5.8vw, 4.7rem)", color: "var(--heading)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
            Install ARX.
          </h1>
          <pre className="arx-ascii mt-2 mb-5" aria-label="ARX ASCII logo">
            {ARX_ASCII.join("\n")}
          </pre>
          <p className="max-w-2xl text-base leading-relaxed mt-6" style={{ color: "var(--body)" }}>
            ARX gives you a local-first control layer for Minecraft operations — start/stop and monitor your server,
            manage players and backups, and run Gemma via Ollama from one dashboard + CLI.
            Install it if you want reliable day-to-day server ops without cloud lock-in.
          </p>
        </ScrollReveal>
      </section>

      <div className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Installer sources */}
        <ScrollReveal>
          <div className="py-4" style={{ borderBottom: "1px solid var(--border)" }}>
            <p className="label-caps" style={{ color: "var(--muted)" }}>
              Official installer endpoints are live on arxmc.studio.{" "}
              <a href={INSTALLER.githubFallback} target="_blank" rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                View GitHub Releases →
              </a>
            </p>
          </div>
        </ScrollReveal>

        {/* Platform selector — text links in column grid */}
        <div className="grid" style={{ gridTemplateColumns: `repeat(${PLATFORMS.length}, 1fr)`, borderBottom: "1px solid var(--border)" }}>
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className="relative py-4 text-left focus-ring"
              style={{
                borderRight: p.id !== "macos" ? "1px solid var(--border)" : "none",
                paddingLeft: p.id !== "linux" ? "1.5rem" : "0",
              }}
            >
              {activePlatform === p.id && (
                <motion.div
                  layoutId="platform-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="label-caps" style={{ color: activePlatform === p.id ? "var(--heading)" : "var(--muted)" }}>
                {p.label}
                {p.id === "macos" && <span style={{ color: "var(--muted)" }}> (best effort)</span>}
              </span>
            </button>
          ))}
        </div>

        {/* Install command */}
        <ScrollReveal>
          <motion.div
            key={activePlatform}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="py-8"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <CodeBlock
              code={installCmds[activePlatform].cmd}
              language="bash"
              label="INSTALL"
              step="1."
            />
            <p className="text-sm mt-4" style={{ color: "var(--muted)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.06em" }}>
              {installCmds[activePlatform].note}
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Post-install */}
        <section className="py-16" style={{ borderBottom: "1px solid var(--border)" }}>
          <ScrollReveal>
            <p className="label-caps mb-8" style={{ color: "var(--muted)" }}>After Installation</p>
            <div className="space-y-0 max-w-xl">
              {POST_INSTALL.map((item) => (
                <CodeBlock
                  key={item.cmd}
                  code={item.cmd}
                  language="bash"
                  label={item.label}
                  step={item.step}
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Verification */}
        <section className="py-16" style={{ borderBottom: "1px solid var(--border)" }}>
          <ScrollReveal>
            <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Release Verification</p>
            <h2 className="display font-semibold mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "var(--heading)" }}>
              Verify your install.
            </h2>
            <div className="max-w-xl space-y-0">
              <CodeBlock
                code={`curl -fsSL https://arxmc.studio/checksums.txt -o checksums.txt`}
                language="bash"
                label="DOWNLOAD CHECKSUMS"
                step="1."
              />
              <CodeBlock
                code={`sha256sum -c checksums.txt`}
                language="bash"
                label="VERIFY (LINUX)"
                step="2."
              />
              <CodeBlock
                code={`Get-FileHash install.ps1 -Algorithm SHA256\nGet-FileHash arx-runtime.zip -Algorithm SHA256`}
                language="bash"
                label="VERIFY (WINDOWS)"
                step="2."
              />
            </div>
            <Link href="/docs/release-verification" className="btn-secondary inline-flex mt-8">
              Full Verification Guide
            </Link>
          </ScrollReveal>
        </section>

        {/* Troubleshooting */}
        <section className="py-16">
          <ScrollReveal>
            <p className="label-caps mb-8" style={{ color: "var(--muted)" }}>Quick Troubleshooting</p>
            <div className="space-y-0 max-w-2xl" style={{ borderTop: "1px solid var(--border)" }}>
              {TROUBLESHOOT.map((item, i) => (
                <div key={i} className="py-5" style={{ borderBottom: "1px solid var(--border)" }}>
                  <p className="text-sm font-medium mb-1" style={{ color: "var(--heading)" }}>{item.issue}</p>
                  <p className="text-sm" style={{ color: "var(--body)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem" }}>
                    {item.fix}
                  </p>
                </div>
              ))}
            </div>
            <Link href="/docs/troubleshooting" className="btn-secondary inline-flex mt-8">
              Full Troubleshooting Guide →
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
