# Skill: ARX Website UI Polish

Use this skill when improving visual design, interaction quality, layout consistency, and overall premium feel of the ARX public website.

## Goal
Raise ARX web UX to a launch-grade premium standard while preserving performance, accessibility, and trust-oriented product messaging.

## Non-negotiables
- Dark-mode only experience (no light mode implementation)
- Keep ARX product claims factual and aligned with `CONTENT_SOURCE.md`
- Preserve install/docs conversion clarity
- Do not add fake metrics or unverifiable claims

## Visual quality checklist
- Refine typographic hierarchy (hero -> section -> body -> utility text)
- Increase spacing consistency across breakpoints
- Improve visual rhythm with intentional section transitions
- Ensure consistent card/button border radius, shadows, and glow scale
- Reduce visual noise; keep effects premium and controlled

## Motion and interaction checklist
- Scroll reveals should be subtle and directional, not distracting
- Keep motion timing consistent (e.g., 180ms/260ms/420ms system)
- Add microinteractions to:
  - CTA buttons
  - nav hover states
  - code copy actions
  - cards and docs links
- Respect prefers-reduced-motion

## 3D/reactive background guidance
- Keep GPU load bounded
- Provide static fallback for low-power devices
- Ensure text readability above animated layers
- Prefer depth/parallax finesse over high-contrast clutter

## Conversion UX
- Home page path should be obvious:
  1) understand ARX
  2) install quickly
  3) verify release integrity
  4) run first commands
- Make install CTAs persistent but not intrusive
- Keep command snippets copyable and immediately actionable

## Docs UX
- Improve docs readability with:
  - max readable line width
  - stable sidebar behavior
  - clear active section highlight
  - sticky in-page TOC where useful
- Keep docs search simple (client-side filtering acceptable)

## Accessibility baseline
- Keyboard focus visible on all interactive controls
- Ensure contrast on gradients/glass overlays
- Don’t rely on color alone for state indicators
- Test on mobile and tablet layouts, not just desktop

## Performance guardrails
- Lazy-load heavy visual components
- Avoid large JS bundles for purely decorative effects
- Keep Core Web Vitals healthy (especially LCP/CLS)

## ARX content constraints to preserve
- Official support: Linux + Windows, macOS best effort
- Placeholder installer URL remains until domain is finalized
- Show practical commands:
  - arx start
  - arx status
  - arx shutdown
  - arx ai set-context 4096
  - arx tunnel setup
  - arx tunnel status

## Deliverable format when done
Provide:
1. Summary of UX improvements
2. Before/after rationale by page
3. Accessibility checks performed
4. Performance checks performed
5. Remaining polish backlog (if any)
