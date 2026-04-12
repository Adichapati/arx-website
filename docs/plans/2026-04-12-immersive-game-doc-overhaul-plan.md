# ARX Immersive Game-Doc Overhaul Plan

> For Hermes: execute in phases, verify lint/build after each phase, then push to `main`.

Goal
Transform arxmc.studio from a standard documentation-marketing page into an immersive “playable operations manual” that feels Minecraft-inspired (calm + adventurous + retro) while preserving core product functionality.

Architecture
- Keep app-router structure and existing routes intact.
- Overhaul home-page structure and shared visual primitives.
- Use layered CSS + framer-motion for fluid motion (no heavy WebGL dependency).
- Keep docs/install/status functionality unchanged, but inherit improved skin tokens.

Tech Stack
- Next.js 14 app router
- React + Framer Motion
- CSS variables + utility classes in `globals.css`
- Existing reusable components (`CodeBlock`, `ScrollReveal`, `BiomeThemeControl`)

---

## Functional Guardrails

Must preserve
- Working routes: `/`, `/docs`, `/install`, `/status`, `/changelog`
- Installer commands and CLI snippets
- Existing biome theme persistence
- Mobile nav + keyboard accessibility + reduced-motion handling

Allowed changes
- Home page IA and visual structure can be fully reworked
- Remove redundant buttons and duplicate calls-to-action
- Replace old hero strip with full-viewport immersive world

Rollback
- Current rollback baseline: commit `4338291`
- If severe breakage occurs: `git revert 4338291..HEAD` (or targeted revert commit)

---

## Phase A — Structural Overhaul (Hero + Seamless Flow)

Objective
- Make hero fill the viewport and feel like a game world, not a small block under title.

Changes
- Rewrite `src/app/page.tsx` sections into:
  1) Full-viewport “World Hero”
  2) Quest steps path
  3) Feature inventory grid
  4) Command deck + security + FAQ in seamless progression
- Reduce duplicate button rows and make CTA hierarchy clear.
- Improve navbar structure and simplify noisy controls.

Files
- Modify: `src/app/page.tsx`
- Modify: `src/components/Navbar.tsx`

Verification
- Home renders with hero filling first viewport on desktop + mobile.

---

## Phase B — Immersive Visual System (Sprites + Reactive Atmosphere)

Objective
- Make the website visibly game-like with stronger retro elements.

Changes
- Add reusable immersive background component with low-amplitude parallax.
- Upgrade hero world layering: moon/sun tiles, mountain silhouettes, trees, fog, fireflies.
- Increase sprite visibility and usage across cards/chips/labels.
- Retune color tokens away from generic “AI blue” look toward Minecraft-night palettes.

Files
- Create: `src/components/mc/ImmersiveBackdrop.tsx`
- Modify: `src/components/mc/SpriteGlyph.tsx`
- Modify: `src/components/mc/HeroSceneStrip.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

Verification
- Motion is smooth and non-jarring, reduced-motion remains safe.

---

## Phase C — Polish + Practicality

Objective
- Remove friction and make UI feel coherent as a product site.

Changes
- Remove low-value controls/duplicated links.
- Tighten copy for “game-manual” tone while preserving technical clarity.
- Improve hover/scroll/transition timing consistency.
- Keep docs pages readable and uncluttered.

Files
- Modify: `src/app/page.tsx`
- Modify: `src/components/Footer.tsx` (if needed)
- Modify: `src/app/globals.css`

---

## Quality Gates (Every Phase)

1) `npm run lint`
2) `npm run build`
3) Browser check on `/` and `/docs`
4) Ensure no console JS errors

Deployment
- Single production push to `main` after all phases pass.
