"use client";

import { ScrollReveal, RevealedRule } from "@/components/ScrollReveal";

const releases = [
  {
    version: "v0.3.0",
    date: "Coming Soon",
    tag: "upcoming",
    changes: [
      "Playit tunnel integration for internet access",
      "Enhanced AI context management",
      "Dashboard improvements and new monitoring views",
    ],
  },
  {
    version: "v0.2.0",
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
    version: "v0.1.0",
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
    <div className="min-h-screen pt-14">
      {/* Header */}
      <section className="px-5 sm:px-8 lg:px-12 py-16 max-w-7xl mx-auto" style={{ borderBottom: "1px solid var(--border)" }}>
        <ScrollReveal>
          <p className="label-caps mb-4" style={{ color: "var(--muted)" }}>Changelog</p>
          <h1 className="display font-bold"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "var(--heading)", letterSpacing: "-0.03em", lineHeight: 0.95 }}>
            Release Notes.
          </h1>
        </ScrollReveal>
      </section>

      <div className="px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="max-w-2xl space-y-0" style={{ borderTop: "1px solid var(--border)" }}>
          {releases.map((release, i) => (
            <ScrollReveal key={release.version} delay={i * 0.08}>
              <div className="py-10" style={{ borderBottom: "1px solid var(--border)" }}>
                {/* Version header */}
                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <h2 className="display font-bold text-3xl" style={{ color: "var(--heading)" }}>
                    {release.version}
                  </h2>
                  {release.tag === "latest" && (
                    <span className="label-caps" style={{ color: "var(--accent)" }}>Latest</span>
                  )}
                  {release.tag === "upcoming" && (
                    <span className="label-caps" style={{ color: "var(--muted)" }}>Upcoming</span>
                  )}
                  <span className="label-caps" style={{ color: "var(--muted)" }}>{release.date}</span>
                </div>

                {/* Changes */}
                <ul className="space-y-3">
                  {release.changes.map((change, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="label-caps mt-0.5" style={{ color: "var(--muted)" }}>—</span>
                      <span className="text-sm leading-relaxed" style={{ color: "var(--body)" }}>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
