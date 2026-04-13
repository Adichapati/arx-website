# ARX Website

Public website and documentation for ARX.

Live: https://arxmc.studio

## What this repo contains

- Marketing site pages (`/`, `/install`, `/changelog`, `/status`)
- Documentation pages (`/docs/*`)
- Public installer artifacts under `public/`
  - `install.sh`
  - `install.ps1`
  - `arx-runtime.zip`
  - `checksums.txt`

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

## Artifact publishing notes

`public/` is treated as release surface for installer files.
When updating installer artifacts:

1. Replace files in `public/`
2. Regenerate `public/checksums.txt` (SHA-256)
3. Commit and push
4. Confirm live endpoints on `arxmc.studio`

## Runtime repository

ARX runtime/backend repo:

https://github.com/Adichapati/ARX

## Repository cleanup policy

This repository intentionally excludes AI-agent scaffolding and prompt-pack assets.
Only production website code, docs, and release artifacts required for arxmc.studio should live here.

## License

Use the repository license policy in this project.
