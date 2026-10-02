# VC Paisa

Nano venture firm landing site — we invest **₹1** into startups to scout founders.

- Domains: [vcpaisa.com](https://vcpaisa.com) · [paisa.vc](https://paisa.vc)
- Stack: Next.js (App Router) · TypeScript · Tailwind CSS · Vercel-ready

## Features

- Hero + CTAs (Apply / Get the badge)
- How it works
- Apply form → `POST /api/apply` (validates + logs; appends to `data/applications.jsonl` when the filesystem is writable)
- Featured sample portfolio
- Funded-by badge (`/public/badge.svg`) with HTML + Markdown copy snippets

## Local development

```bash
cd /workspace/vcpaisa   # or clone the repo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

### Option A — GitHub (recommended)

1. Push this repo to GitHub (already set up as `sai-preetham/vcpaisa` if you followed the soft-launch push).
2. Import the repo in [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js**. Deploy.
4. Add custom domains: `vcpaisa.com` and `paisa.vc` (and `www` if needed) under Project → Settings → Domains. Point DNS as Vercel instructs.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
cd /path/to/vcpaisa
vercel        # preview
vercel --prod # production
```

If the CLI is not authenticated yet, run `vercel login` in a browser-capable session, then redeploy.

## API

`POST /api/apply`

```json
{
  "name": "Aanya Shah",
  "startup": "Acme",
  "website": "https://acme.example",
  "oneLiner": "We build X for Y.",
  "email": "aanya@acme.example"
}
```

Success: `{ "ok": true, "message": "Application received." }`

## Badge embed

HTML:

```html
<a href="https://vcpaisa.com" target="_blank" rel="noopener noreferrer">
  <img src="https://vcpaisa.com/badge.svg" alt="Funded by VC Paisa" width="240" height="72" />
</a>
```

Markdown:

```md
[![Funded by VC Paisa](https://vcpaisa.com/badge.svg)](https://vcpaisa.com)
```

## Contact

Placeholder: `hello@vcpaisa.com`
