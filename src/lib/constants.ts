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
  windows: `# Open PowerShell and paste this block (not Command Prompt)
$installer = Join-Path $env:TEMP "arx-install.ps1"
Invoke-RestMethod 'https://arxmc.studio/install.ps1' -OutFile $installer
& $installer
Remove-Item -Force $installer`,
  githubFallback: `https://github.com/Adichapati/ARX/releases`,
  model: "gemma4:e2b",
} as const;

export const CLI_COMMANDS = [
  { command: "arx start", description: "Launch dashboard, Minecraft runtime, and AI services" },
  { command: "arx status", description: "Show live status for dashboard/server/ollama/playit" },
  { command: "arx shutdown", description: "Gracefully stop all managed services" },
  { command: "arx help", description: "Show complete command menu" },
  { command: "arx ai set-context 4096", description: "Set Gemma context size for local runtime" },
  { command: "arx tunnel setup", description: "Set up optional Playit tunnel" },
  { command: "arx tunnel status", description: "Show tunnel status and configured public URL" },
] as const;

export const GITHUB = {
  org: "Adichapati",
  websiteRepo: "arx-website",
  runtimeRepo: "ARX",
} as const;

export const SOCIAL_LINKS = {
  github: `https://github.com/Adichapati/ARX`,
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
