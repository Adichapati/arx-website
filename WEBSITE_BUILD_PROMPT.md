You are a senior product designer + frontend architect + UI motion engineer. I want you to design and implement a production-quality public website for my project ARX (Agentic Runtime for eXecution).

Important:
- Do NOT build my internal dashboard app.
- Build the public-facing website where users discover ARX, install it, and access docs.
- The site should feel premium, modern, and memorable (OpenClaw/Hermes-level polish), with advanced UI/UX and motion.
- Use tasteful creativity: not gimmicky, but visually stunning and highly usable.

Project context (must reflect accurately):
- Product name: ARX (Agentic Runtime for eXecution)
- Core concept: one-command local-first Minecraft server operations platform
- Local AI model via Ollama (Gemma-focused experience)
- Required model path in product messaging: gemma4:e2b
- Official support target: Linux + Windows (macOS best effort)
- ARX has installer scripts and post-install global CLI command `arx`
- CLI examples users should see:
  - arx start
  - arx status
  - arx shutdown
  - arx help
  - arx ai set-context 4096
  - arx tunnel setup
  - arx tunnel status
- Security/safety positioning:
  - local-first
  - controlled command execution
  - OP-only command execution pathways
  - explicit validation and operational safeguards
- Optional internet access tunnel via Playit
- Installer/launch flow has OpenClaw-style UX inspiration with ASCII branding touches

Domain/status constraints:
- I do NOT have final domain yet
- Use placeholders where needed:
  - https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh
  - https://INSTALLER_DOMAIN_PLACEHOLDER/docs
- Also include a GitHub install fallback section using release assets

What I want you to build:
1) A complete multi-page marketing + docs website (not just mockups)
2) Beautiful reactive visuals:
   - dynamic/reactive animated background
   - 3D if possible (preferred)
   - smooth scroll-linked animations
   - custom interactive buttons
   - microinteractions throughout
3) Highly polished UX:
   - excellent spacing/typography hierarchy
   - fast perceived performance
   - clear conversion path: Understand -> Install -> Verify -> Run
   - docs are easy to navigate and searchable
4) Production-ready code and structure, with maintainability in mind

Design direction (mandatory):
- Mood: futuristic, clean, tactical, high-trust, developer-premium
- Visual language:
  - dark-first theme with optional light mode
  - layered gradients + subtle glow + glass/mesh accents
  - ARX identity motifs (can include subtle ASCII-inspired patterns)
- Motion:
  - Framer Motion quality motion system (or equivalent)
  - Scroll reveal choreography that feels intentional
  - Hero interaction should react to cursor/scroll
- 3D background:
  - preferred: Three.js / react-three-fiber
  - include graceful fallback for low-power devices or reduced motion users
- Buttons:
  - custom animated CTA buttons
  - tactile hover/press states
  - keyboard accessible and visible focus states

Information architecture (must include):
- /
  - Hero, value proposition, CTA to install/docs
  - How it works section
  - Feature highlights
  - Platform support matrix
  - Security/safety section
  - CLI quick commands
  - FAQ
- /install
  - Linux install command
  - Windows install command
  - macOS best-effort note
  - Verification checksums flow
  - Troubleshooting quick fixes
- /docs
  - Docs home with cards and quick links
- /docs/getting-started
- /docs/cli
- /docs/configuration
- /docs/troubleshooting
- /docs/security
- /docs/release-verification
- /changelog (or release notes section/page)
- /status (lightweight placeholder status page)

Content requirements:
- Use confident but honest copy (no fake claims)
- Include these exact practical ideas:
  - one-command install
  - local Ollama setup
  - gemma4:e2b readiness
  - dashboard + CLI lifecycle operations
  - optional Playit tunnel
  - release checksum verification
- Add explicit notes:
  - Linux + Windows officially supported, macOS best effort
  - Replace installer placeholder URL after domain is finalized
- Include copy that is beginner-friendly but still respected by advanced users

Install commands section:
- Show placeholder command block:
  curl -fsSL https://INSTALLER_DOMAIN_PLACEHOLDER/install.sh | bash
- Show Windows command examples (PowerShell/cmd style)
- Show ARX post-install commands:
  arx start
  arx status
  arx shutdown

Technical constraints and standards:
- Use a modern stack suitable for production:
  - Next.js (App Router) + TypeScript (preferred), or equivalent high-quality stack
  - Tailwind or CSS system with clear design tokens
  - Framer Motion for animation
  - Three.js/react-three-fiber for 3D reactive background (with fallback)
- Must be responsive and look excellent on:
  - mobile
  - tablet
  - desktop ultrawide
- Accessibility:
  - semantic HTML
  - keyboard navigation
  - sufficient contrast
  - reduced-motion mode support
- Performance:
  - optimize animation budget
  - lazy-load heavy visuals
  - avoid blocking scripts
  - target strong Lighthouse scores

SEO + social:
- Proper metadata and OpenGraph/Twitter cards
- Sitemap + robots
- Strong title/description strategy for ARX keywords
- Structured headings and crawlable docs

Docs UX requirements:
- Left sidebar nav + in-page TOC
- Search input UX (can be local/static for now)
- Copy button for code blocks
- Edit this page placeholder links
- Prev/next doc navigation

Deliverables I need from you:
1) Brief design rationale (why this style suits ARX)
2) Final sitemap
3) Full implementation code
4) Project file tree
5) Setup + run instructions
6) Deployment instructions (Vercel + static host option)
7) List of placeholders I need to replace later:
   - domain URL
   - docs URL
   - GitHub org/repo references
   - social links
8) A polish checklist I can run before going live

Execution behavior:
- Do not stop at wireframes.
- Produce complete, runnable code.
- If you need to make assumptions, make sensible defaults and clearly list them.
- Keep the output practical and implementation-ready.

Success criteria:
- Site feels premium and unique at first glance
- Instantly communicates ARX value
- Makes install + docs dead simple
- Looks polished enough for public launch and community trust
