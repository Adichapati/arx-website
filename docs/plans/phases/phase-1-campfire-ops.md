# Phase 1 — Campfire Ops (Execution Checklist)

Status: In Progress

Objective
Add calm retro Minecraft personality to homepage with low risk.

Tasks

1) Sprite glyph component
- [ ] Create src/components/mc/SpriteGlyph.tsx
- [ ] Include 6 glyphs: pickaxe, torch, chest, map, shield, spark
- [ ] Props: name, size, tone, className

2) Hero scene strip
- [ ] Create src/components/mc/HeroSceneStrip.tsx
- [ ] Pixel horizon layers (sky line, hills, tree silhouettes, mist)
- [ ] Optional tiny animation (drift) disabled by reduced-motion

3) Global CSS utilities
- [ ] Add .pixel-card utility
- [ ] Add .pixel-divider utility
- [ ] Add .sprite-chip utility
- [ ] Ensure utilities are subtle and biome-aware

4) Homepage integration
- [ ] Add HeroSceneStrip in Hero section
- [ ] Add SpriteGlyph tags in Features cards
- [ ] Add sprite bullets in Security safeguards
- [ ] Add checkpoint chip near FAQ heading

5) Validation
- [ ] npm run lint
- [ ] npm run build

6) Ship
- [ ] git add + commit
- [ ] git push origin main

Notes
- Keep docs and install/status/changelog layouts unchanged in this phase.
- If anything feels visually noisy, reduce opacity first before removing structure.
