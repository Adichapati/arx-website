"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  Terminal,
  Shield,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Info,
} from "lucide-react";
import { CodeBlock } from "@/components/CodeBlock";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedButton } from "@/components/AnimatedButton";
import { INSTALLER, GITHUB } from "@/lib/constants";
import type { Metadata } from "next";

type Platform = "linux" | "windows" | "macos";

export default function InstallPage() {
  const [activePlatform, setActivePlatform] = useState<Platform>("linux");

  const platforms: { id: Platform; label: string; icon: string; supported: string }[] = [
    { id: "linux", label: "Linux", icon: "🐧", supported: "Official" },
    { id: "windows", label: "Windows", icon: "🪟", supported: "Official" },
    { id: "macos", label: "macOS", icon: "🍎", supported: "Best Effort" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="section-padding !pt-8 !pb-12">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arx-bg-card/60 border border-arx-border mb-6">
              <Download className="w-3.5 h-3.5 text-arx-cyan" />
              <span className="text-xs font-medium text-arx-text-secondary">Installation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Install <span className="text-gradient-cyan">ARX</span>
            </h1>
            <p className="text-arx-text-secondary max-w-xl mx-auto">
              Get ARX running on your system in one command. Linux and Windows are officially
              supported. macOS is best effort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Placeholder notice */}
      <div className="container-narrow px-4 sm:px-6 mb-8">
        <ScrollReveal>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
            <Info className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-200/80">
              Installer URL is currently a placeholder and will be replaced after domain finalization.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Platform tabs */}
      <section className="container-narrow px-4 sm:px-6 mb-12">
        <ScrollReveal>
          <div className="flex gap-2 p-1 bg-arx-bg-card/50 border border-arx-border rounded-xl w-fit mx-auto mb-8">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePlatform(p.id)}
                className={`relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all focus-ring ${
                  activePlatform === p.id
                    ? "text-arx-bg"
                    : "text-arx-text-secondary hover:text-arx-text-primary"
                }`}
              >
                {activePlatform === p.id && (
                  <motion.div
                    layoutId="platform-tab"
                    className="absolute inset-0 bg-arx-cyan rounded-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-6">
            {/* Install command */}
            {activePlatform === "linux" && (
              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-arx-cyan" />
                  Quick Install (Linux)
                </h2>
                <CodeBlock
                  code={INSTALLER.linux}
                  language="bash"
                  title="Terminal"
                />
                <p className="text-sm text-arx-text-secondary mt-3">
                  This script installs ARX, sets up Ollama, and pulls the{" "}
                  <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">
                    {INSTALLER.model}
                  </code>{" "}
                  model automatically.
                </p>
              </div>
            )}

            {activePlatform === "windows" && (
              <div>
                <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-arx-cyan" />
                  Quick Install (Windows — PowerShell)
                </h2>
                <CodeBlock
                  code={INSTALLER.windows}
                  language="bash"
                  title="PowerShell (Run as Administrator)"
                />
                <p className="text-sm text-arx-text-secondary mt-3">
                  Run PowerShell as Administrator. The script handles Ollama installation and model setup.
                </p>
              </div>
            )}

            {activePlatform === "macos" && (
              <div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20 mb-4">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-200">Best Effort Support</p>
                    <p className="text-sm text-yellow-200/70 mt-1">
                      macOS is not officially supported. The installer may work but is not regularly tested.
                      Community contributions welcome.
                    </p>
                  </div>
                </div>
                <CodeBlock
                  code={INSTALLER.linux}
                  language="bash"
                  title="Terminal (macOS)"
                />
              </div>
            )}

            {/* GitHub fallback */}
            <div className="glass-card p-6">
              <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-arx-text-muted" />
                Alternative: GitHub Release Download
              </h3>
              <p className="text-sm text-arx-text-secondary mb-3">
                You can also download release assets directly from GitHub:
              </p>
              <AnimatedButton
                href={INSTALLER.githubFallback}
                variant="secondary"
                size="sm"
                external
              >
                View GitHub Releases
              </AnimatedButton>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Post-install */}
      <section className="container-narrow px-4 sm:px-6 mb-12">
        <ScrollReveal>
          <div className="gradient-line mb-12" />
          <h2 className="text-2xl font-bold mb-6">After Installation</h2>
          <p className="text-arx-text-secondary mb-6">
            Once installed, the <code className="px-1.5 py-0.5 bg-arx-bg-card rounded text-arx-cyan text-xs">arx</code> command
            is available globally. Try these commands:
          </p>
          <CodeBlock
            code={`# Start the server stack\narx start\n\n# Check status\narx status\n\n# Gracefully shut down\narx shutdown\n\n# Get help\narx help`}
            language="bash"
            title="Post-install commands"
          />
        </ScrollReveal>
      </section>

      {/* Verification */}
      <section className="container-narrow px-4 sm:px-6 mb-12">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-arx-violet" />
            Verify Your Installation
          </h2>
          <p className="text-arx-text-secondary mb-6">
            Every ARX release includes SHA-256 checksums. Verify your download:
          </p>
          <CodeBlock
            code={`# Download checksum file\ncurl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/checksums.txt -o checksums.txt\n\n# Verify (Linux)\nsha256sum -c checksums.txt\n\n# Verify (Windows PowerShell)\nGet-FileHash arx-installer.exe -Algorithm SHA256`}
            language="bash"
            title="Release verification"
          />
          <div className="mt-4">
            <AnimatedButton href="/docs/release-verification" variant="ghost" showArrow>
              Full verification guide
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </section>

      {/* Troubleshooting */}
      <section className="container-narrow px-4 sm:px-6">
        <ScrollReveal>
          <h2 className="text-2xl font-bold mb-6">Quick Troubleshooting</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                issue: "Command not found after install",
                fix: "Restart your terminal or run `source ~/.bashrc`",
              },
              {
                issue: "Ollama fails to start",
                fix: "Ensure port 11434 is free and run `ollama serve`",
              },
              {
                issue: "Permission denied on Linux",
                fix: "Run the install script with `sudo`",
              },
              {
                issue: "Windows Defender blocks script",
                fix: "Run PowerShell as Administrator with execution policy bypass",
              },
            ].map((item, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="text-sm font-semibold text-arx-text-primary mb-1.5">{item.issue}</h3>
                <p className="text-sm text-arx-text-secondary">{item.fix}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <AnimatedButton href="/docs/troubleshooting" variant="secondary" showArrow>
              Full Troubleshooting Guide
            </AnimatedButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
