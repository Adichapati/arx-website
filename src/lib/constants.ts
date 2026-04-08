// ARX Website — Single source of truth for all placeholder values and constants.
// Replace these before production go-live.

export const SITE_CONFIG = {
  name: "ARX",
  fullName: "Agentic Runtime for eXecution",
  tagline: "One-command local-first Minecraft server operations.",
  description:
    "ARX is a local-first Minecraft operations platform with one-command install, local AI via Ollama + Gemma, a browser dashboard, CLI controls, and optional internet tunneling.",
  url: "https://INSTALLER_DOMAIN_PLACEHOLDER",
  docsUrl: "https://INSTALLER_DOMAIN_PLACEHOLDER/docs",
  statusUrl: "https://status.YOUR_DOMAIN",
} as const;

export const INSTALLER = {
  linux: `curl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh | bash`,
  windows: `irm https://INSTALLER_DOMAIN_PLACEHOLDER/install.ps1 | iex`,
  githubFallback: `https://github.com/YOUR_GITHUB_ORG_OR_USER/openclaw-dashboard-oneclick/releases`,
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
  org: "YOUR_GITHUB_ORG_OR_USER",
  websiteRepo: "arx-website",
  runtimeRepo: "openclaw-dashboard-oneclick",
} as const;

export const SOCIAL_LINKS = {
  twitter: "https://x.com/YOUR_HANDLE",
  discord: "https://discord.gg/YOUR_INVITE",
  youtube: "https://youtube.com/@YOUR_CHANNEL",
  github: `https://github.com/YOUR_GITHUB_ORG_OR_USER`,
} as const;

export const CONTACT = {
  support: "support@YOUR_DOMAIN",
  security: "security@YOUR_DOMAIN",
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
