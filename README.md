# Suraj S — Portfolio

A premium, responsive developer portfolio: **React (Vite)** frontend + a small **Java (Spring Boot)** contact API.

```
UknowMe/
├── frontend/   React + Vite site (static; deploy anywhere)
└── backend/    Spring Boot 2.7 / Java 8 contact API (optional)
```

The site works fully without the backend. The backend only powers the contact form; without it the form falls back to `mailto:`.

## 1. Run locally

### Frontend (Node 14+; Node 18+ recommended)

```bash
cd frontend
npm install
cp .env.example .env.local   # then edit values
npm run dev                  # http://localhost:5173
npm run lint
npm run build                # outputs dist/ (+ dist/404.html for SPA fallback)
npm run preview              # serves the production build on :4173
```

### Backend (Java 8+, Maven wrapper included)

```bash
cd backend
./mvnw spring-boot:run        # Windows: mvnw.cmd spring-boot:run   -> http://localhost:8080
./mvnw verify                 # runs tests and builds target/portfolio-api-1.0.0.jar
```

Endpoints: `GET /api/health`, `POST /api/contact` (`name`, `email`, `subject`, `message`).
It validates input, rate-limits per IP (5 per 10 min), ignores honeypot submissions, appends messages to `data/messages.jsonl`, and — only if SMTP is configured — forwards them by email.

To connect the form, set `VITE_API_URL=http://localhost:8080` in `frontend/.env.local` and restart `npm run dev`.

## 2. Edit your content

All content lives in `frontend/src/data/` — no component edits needed:

| File | What it controls |
|---|---|
| `profile.js` | Name, headline, intro, years of experience, location, About text, strengths, photo, resume path, nav links |
| `experience.js` | Timeline (dates/titles/responsibilities) — **verify dates before publishing** |
| `skills.js` | Skill categories; `core: true` highlights primary stack |
| `projects.js` | Sanitized case studies. `impact` is shown **only** when `impactVerified: true` |
| `ai.js` | AI tools, workflow steps, disclaimer |
| `hobbies.js` | "Beyond Work" cards |

Contact details come from `frontend/.env.local` (public values, never secrets):

```
VITE_EMAIL=you@example.com
VITE_GITHUB_URL=https://github.com/<your-username>
VITE_LINKEDIN_URL=https://www.linkedin.com/in/<your-handle>
VITE_API_URL=            # optional Java API base URL
```

Anything left empty is hidden or shown as "Not configured yet" — no fake links are ever rendered.

**Things to confirm before publishing**
- The "~20% fewer failures" claim on the email-delivery project is stored but **hidden** (`impactVerified: false`). Set it to `true` only if you can substantiate it.
- Experience dates (2022–Present, 2021) and "3+ years" are editable placeholders from your brief.
- Education is a placeholder (`profile.education`).
- Project contribution/challenge text is written generically from your highlights; refine it with your real details (keep it free of client names, hostnames and code).

## 3. Replace the resume

`frontend/public/resume/Suraj_S_Resume.pdf` is a **labelled placeholder**. Replace it with your real PDF using the same file name (or change `profile.resume.url`/`fileName`), then set `isPlaceholder: false` in `src/data/profile.js` to remove the on-page notice.
The "Resume" section also has a print-friendly view (`Print this view` → browser print/PDF).

## 4. Contact form behaviour (honest by design)

- **API configured** (`VITE_API_URL`): sends to the Java backend; success is shown only after a real 2xx response.
- **No API**: opens the visitor's email app via `mailto:` with the message prefilled. Limitation: needs a mail client on the device and delivery can't be confirmed. The UI says so.
- **Neither email nor API configured**: shows an error instead of pretending to send.

### Optional email forwarding (backend)

Set environment variables before starting the backend:

```
PORTFOLIO_MAIL_TO=you@example.com
PORTFOLIO_MAIL_FROM=no-reply@yourdomain.com
SMTP_HOST=smtp.example.com  SMTP_PORT=587  SMTP_USERNAME=...  SMTP_PASSWORD=...
CORS_ALLOWED_ORIGINS=https://your-site.example
```

Secrets stay on the server — never in the frontend.

## 5. Deploy for free

### Frontend (static)

**Cloudflare Pages** — connect the repo; root directory `frontend`, build command `npm run build`, output `dist`. Add the `VITE_*` variables in project settings.

**GitHub Pages** — for a project site at `https://<user>.github.io/<repo>/`:

```bash
cd frontend
VITE_BASE=/<repo>/ npm run build    # PowerShell: $env:VITE_BASE="/<repo>/"; npm run build
```

Publish the `dist/` folder (e.g. with a GitHub Actions Pages workflow or the `gh-pages` branch). `dist/404.html` is generated so unknown URLs show the custom 404 page.

**Netlify / Vercel** also work with the same settings.

### Backend (optional)

Build `backend/target/portfolio-api-1.0.0.jar` and run it with `java -jar` on any host that runs Java (free tiers: Render, Railway, Fly.io — check their current limits). Set `CORS_ALLOWED_ORIGINS` to your site's origin and `VITE_API_URL` in the frontend to the backend URL. Note: free hosts often have ephemeral disks, so stored `messages.jsonl` may be lost — configure SMTP forwarding if you need reliable delivery.

## 6. Tech notes

- React 18, Vite 2, React Router 6 (custom 404), Framer Motion (respects `prefers-reduced-motion`), Lucide icons. No paid services or APIs.
- Pinned to Vite 2 because the dev machine runs Node 14. On Node 18+ you may upgrade Vite/plugin-react; `npm audit` reports advisories in the old dev tooling (dev server only, not shipped code).
- Fonts (Inter, JetBrains Mono) load from Google Fonts; remove the `<link>` in `index.html` to self-host or use system fonts.
- Dark is the default theme; the toggle persists to `localStorage`.

## 7. What was and wasn't verified

Verified here: `npm run lint` clean, `npm run build` passes, no console errors, no horizontal overflow at 375px, mobile menu, theme toggle, project filter/modal, form validation, backend tests (4/4), and a live API call including CORS rejection of a foreign origin.
Not verified: deployment to a hosting platform, real email delivery (no SMTP credentials), 768/1024/1440px were built mobile-first with breakpoints but only 375px and desktop were inspected, and cross-browser testing.
