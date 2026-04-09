// ARX Website — Single source of truth for all placeholder values and constants.
// Replace these before production go-live.

export const SITE_CONFIG = {
  name: "ARX",
  fullName: "Agentic Runtime for eXecution",
  tagline: "One-command local-first Minecraft server operations.",
  description:
    "ARX is a local-first Minecraft operations platform with one-command install, local AI via Ollama + Gemma, a browser dashboard, CLI controls, and optional internet tunneling.",
  url: "https://arxmc.studio",
  docsUrl: "https://arxmc.studio/docs",
  statusUrl: "https://arxmc.studio/status",
} as const;

export const INSTALLER = {
  linux: `curl -fsSL https://arxmc.studio/install.sh | bash`,
  windows: `irm https://arxmc.studio/install.ps1 | iex`,
  githubFallback: `https://github.com/Adichapati/ARX/releases`,
  model: "gemma4:e2b",
} as const;

export const CLI_COMMANDS = [
  { command: "arx start", description: "Launch your Minecraft server and dashboard" },
  { command: "arx status", description: "Check server health and system status" },
  { command: "arx shutdown", description: "Gracefully stop everything" },
  { command: "arx help", description: "View all available commands" },
  { command: "arx ai set-context 4096", description: "Configure AI context window" },
  { command: "arx tunnel setup", description: "Set up Playit tunnel for internet access" },
  { command: "arx tunnel status", description: "Check tunnel connection status" },
] as const;

export const GITHUB = {
  org: "Adichapati",
  websiteRepo: "arx-website",
  runtimeRepo: "ARX",
} as const;

export const SOCIAL_LINKS = {
  github: `https://github.com/Adichapati`,
} as const;

export const CONTACT = {
  support: "support@arxmc.studio",
  security: "security@arxmc.studio",
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "Install", href: "/install" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Status", href: "/status" },
] as const;

export const DOCS_NAV = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Quick Start", href: "/docs/getting-started" },
    ],
  },
  {
    title: "Usage",
    items: [
      { label: "CLI Reference", href: "/docs/cli" },
      { label: "Configuration", href: "/docs/configuration" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "Security Model", href: "/docs/security" },
      { label: "Release Verification", href: "/docs/release-verification" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
] as const;

export const PLATFORMS = [
  { name: "Linux", supported: "official" as const, icon: "🐧" },
  { name: "Windows", supported: "official" as const, icon: "🪟" },
  { name: "macOS", supported: "best-effort" as const, icon: "🍎" },
] as const;
