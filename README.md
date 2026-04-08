# ARX Website Handoff Repo

This repository is a Claude Code handoff package for building the public ARX website.

Use these files first:

1. `WEBSITE_BUILD_PROMPT.md` — the full implementation prompt for Claude
2. `CONTENT_SOURCE.md` — source-of-truth product facts and copy constraints
3. `BRAND_NOTES.md` — design direction and UX/motion expectations
4. `PLACEHOLDERS.md` — URLs/handles that must be replaced before launch

## Recommended Claude workflow

1. Open this repo in Claude Code.
2. Ask Claude to read all four handoff docs before generating code.
3. Ask Claude to scaffold and implement a production-ready site (Next.js + TypeScript preferred).
4. Ask Claude to output a final `LAUNCH_CHECKLIST.md` and `REPLACEMENT_GUIDE.md`.

## Scope reminder

- This is only for the public website and docs experience.
- Do NOT mix this repo with runtime/dashboard backend code.
