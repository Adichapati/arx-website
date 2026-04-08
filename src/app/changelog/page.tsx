"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { CodeBlock } from "@/components/CodeBlock";
import { Tag, Calendar, ArrowRight } from "lucide-react";

const releases = [
  {
    version: "0.3.0",
    date: "Coming Soon",
    tag: "upcoming",
    changes: [
      "Playit tunnel integration for internet access",
      "Enhanced AI context management",
      "Dashboard improvements and new monitoring views",
    ],
  },
  {
    version: "0.2.0",
    date: "2025-03-15",
    tag: "latest",
    changes: [
      "Local AI support via Ollama with gemma4:e2b",
      "CLI command: arx ai set-context",
      "Browser dashboard for server monitoring",
      "Configuration file support (~/.arx/config.yml)",
      "Windows installer (PowerShell)",
    ],
  },
  {
    version: "0.1.0",
    date: "2025-01-20",
    tag: "initial",
    changes: [
      "Initial release of ARX",
      "One-command Linux installer",
      "Core CLI commands: start, status, shutdown, help",
      "Minecraft server lifecycle management",
      "Release checksum verification",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="section-padding !pt-8 !pb-12">
        <div className="container-narrow text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-arx-bg-card/60 border border-arx-border mb-6">
              <Tag className="w-3.5 h-3.5 text-arx-cyan" />
              <span className="text-xs font-medium text-arx-text-secondary">Changelog</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Release <span className="text-gradient-cyan">Notes</span>
            </h1>
            <p className="text-arx-text-secondary max-w-xl mx-auto">
              Track what&apos;s new, improved, and fixed in each ARX release.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-narrow px-4 sm:px-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-arx-border" />

          <div className="space-y-12">
            {releases.map((release, i) => (
              <ScrollReveal key={release.version} delay={i * 0.1}>
                <div className="relative pl-12 sm:pl-20">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 sm:left-6.5 top-1 w-3 h-3 rounded-full border-2 ${
                      release.tag === "latest"
                        ? "bg-arx-cyan border-arx-cyan shadow-lg shadow-arx-cyan/30"
                        : release.tag === "upcoming"
                        ? "bg-arx-violet border-arx-violet"
                        : "bg-arx-bg-card border-arx-border"
                    }`}
                  />

                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-xl font-bold">v{release.version}</h2>
                      {release.tag === "latest" && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-arx-cyan/10 text-arx-cyan rounded-full border border-arx-cyan/20">
                          Latest
                        </span>
                      )}
                      {release.tag === "upcoming" && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-arx-violet/10 text-arx-violet rounded-full border border-arx-violet/20">
                          Upcoming
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-xs text-arx-text-muted">
                        <Calendar className="w-3 h-3" />
                        {release.date}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {release.changes.map((change, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-arx-text-secondary">
                          <ArrowRight className="w-3.5 h-3.5 text-arx-cyan flex-shrink-0 mt-0.5" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
