# ARX Retro Minecraft Redesign Plan

> For Hermes: Execute phase-by-phase. Commit only after lint/build passes for each phase.

Goal
Create a calm + adventurous + retro Minecraft visual identity for arxmc.studio while preserving production stability, docs readability, and performance.

Architecture
Use a layered visual system:
1) Global design tokens (already biome-aware) for color and atmosphere
2) Reusable presentation components (sprites, scene strips, pixel cards)
3) Home-page specific hero/section storytelling enhancements
4) Optional progressive enhancements gated by reduced-motion and viewport size

Tech Stack
- Next.js app router
- React + Framer Motion
- CSS variables in globals.css
- Tailwind utility layer

---

## Constraints and Guardrails

Must keep
- Existing page IA/navigation and content hierarchy
- Fast load and stable static generation
- Docs pages highly readable and uncluttered
- Accessibility contrast and reduced-motion support

Must avoid
- Heavy canvas/WebGL that can regress performance
- Noisy animation that hurts reading flow
- Large unoptimized raster assets

---

## Visual Direction: Campfire Ops

Mood
- Calm evening operations base
- Adventure implied through layered horizon + subtle journey cues
- Retro texture and sprites as accents, not decoration overload

UI Language
- Pixel-edge motifs for containers/dividers
- Inventory-slot inspired chips/buttons in selective areas
- Sprite glyphs for section identity

---

## Phase Plan

### Phase 1 — Safe High-Impact (Implement now)
Objective
Improve home-page personality immediately without structural risk.

Scope
- Add lightweight sprite motif system (pure SVG/CSS, no heavy assets)
- Add retro scene strip inside hero (non-blocking, subtle)
- Add pixel-card treatment utility and apply to selected sections
- Add section badge/icon language for Features/Security/FAQ
- Keep all effects subtle and optional on small screens

Files
- Create: src/components/mc/SpriteGlyph.tsx
- Create: src/components/mc/HeroSceneStrip.tsx
- Modify: src/app/page.tsx
- Modify: src/app/globals.css

Validation
- npm run lint
- npm run build

### Phase 2 — Reactive Atmosphere (post-Phase 1)
Objective
Add calm reactive backgrounds and parallax depth without distraction.

Scope
- Mouse/scroll parallax layers with very low amplitude
- Biome-aware sky/fog gradients
- Disable or simplify on mobile/reduced-motion

Potential files
- Create: src/components/mc/ReactiveBackdrop.tsx
- Modify: src/app/layout.tsx
- Modify: src/app/globals.css

### Phase 3 — Retro Interaction System
Objective
Enhance micro-interactions and identity cohesion.

Scope
- "Acquired" style copy feedback micro-toast
- XP-style progress accents and section checkpoint markers
- FAQ reveal easing + stepped transitions

Potential files
- Modify: src/components/CodeBlock.tsx
- Modify: src/components/GrainAndProgress.tsx
- Modify: src/app/page.tsx
- Modify: src/app/globals.css

### Phase 4 — Optional Premium Enhancements
Objective
Add thematic polish once baseline is proven stable.

Scope
- Animated stars/fireflies (very subtle)
- Limited biome scene variants for hero strip
- Seasonal visual presets (optional toggle)

---

## Testing and Quality Gates per Phase

For every phase
1) Lint clean
2) Build clean
3) Verify homepage readability on desktop + mobile widths
4) Verify docs pages remain clear and uncluttered
5) Verify reduced-motion mode does not break layout

---

## Commit Strategy

- One commit per phase
- Message format:
  - feat(web): phase-1 campfire ops hero/sprites
  - feat(web): phase-2 reactive atmosphere
  - feat(web): phase-3 retro microinteractions

---

## Rollback Safety

- Keep changes isolated to reusable components + styles
- No runtime/installer/backend changes
- Easy rollback via phase-specific commit revert
