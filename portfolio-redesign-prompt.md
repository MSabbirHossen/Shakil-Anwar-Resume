# Prompt: Upgrade Shakil Anwar's Portfolio Site

Use this as a single prompt for an AI coding tool (Claude Code, Cursor, v0.dev, etc.) or as a spec for a developer.

---

## Context

I have a one-page dark-themed developer portfolio (currently sections: Hero, Core Focus, Experience, Technical Skills, Education, Selected Projects, Achievements, Contact/CTA footer). The content is strong (real metrics, real employers, real stack) but the UI has these problems: no navigation, contact info repeated 3x with no new value, projects have zero visuals/links, no photo/identity mark, every section uses identical card styling with no hierarchy, inconsistent vertical spacing, no social proof, no resume download, and likely missing SEO/Open Graph meta tags (page may be a client-rendered SPA with empty initial HTML).

## Source of Truth

The primary/authoritative content lives in an HTML file in this repo:
`https://github.com/MSabbirHossen/Shakil-Anwar-Resume`

Before writing any component, do this first:
1. Open the repo and locate the HTML file (likely `index.html`, `resume.html`, or similar).
2. Extract ALL factual content exactly as written — name, title, tagline, summary, location, email, phone, social links, core focus bullets, each job's title/company/location/dates/bullets, every skill under every category, education (degree, institution, location, dates, CGPA), every project's name/tags/description/bullets/links, and every achievement.
3. Structure this extracted content into typed JS/JSON data files (see `data/` folder below) — do NOT hand-type content into JSX from memory or guesswork. Treat the HTML file as the single source of truth for facts; this prompt only governs layout, structure, and styling.
4. If the HTML file contains content that contradicts or extends what's summarized in this prompt (e.g., additional projects, updated dates, different wording), the HTML file wins — flag the discrepancy in your output notes rather than silently picking one.
5. If any section this prompt asks for (testimonials, project screenshots, headshot, resume PDF) has no corresponding data in the HTML file, leave a clearly marked placeholder/TODO in the data file instead of inventing content.

## Tech Stack

- **React** (functional components + hooks, no class components)
- **Tailwind CSS** for all styling — no separate CSS files, no inline styles, no CSS-in-JS
- Use a component-per-section structure: `Header.jsx`, `Hero.jsx`, `CoreFocus.jsx`, `Experience.jsx`, `Skills.jsx`, `Projects.jsx`, `Testimonials.jsx`, `Education.jsx`, `Achievements.jsx`, `Footer.jsx`, composed in `App.jsx` (or `page.jsx` if Next.js)
- If SEO/SSR matters (see section 11), prefer **Next.js** (App Router) over plain Vite/CRA React so pages can be server-rendered or statically generated; otherwise use `react-helmet-async` for meta tags in a client-only React app
- Define the color palette and spacing scale as Tailwind theme extensions in `tailwind.config.js` (see Constraints) rather than hardcoding hex values or arbitrary spacing throughout components
- Content lives in a `data/` folder, one file per section, populated from the HTML source of truth (see Source of Truth below): `data/profile.js` (name, title, tagline, summary, contact, socials), `data/coreFocus.js`, `data/experience.js`, `data/skills.js`, `data/education.js`, `data/projects.js`, `data/achievements.js`, `data/testimonials.js`. Components import from these files and render them — no hardcoded resume text inside JSX.
- Use `lucide-react` for icons (GitHub, LinkedIn, mail, phone, location icons, etc.)
- Scrollspy/active-nav-link behavior via `IntersectionObserver` in a small custom hook (`useActiveSection.js`), not a heavy external library
- Keep components accessible: semantic HTML tags (`<nav>`, `<section>`, `<article>`), proper heading order (h1 → h2 → h3), `alt` text on all images

## Task

Rebuild/refactor this into a polished, professional single-page portfolio that keeps the dark theme + mint-green accent (`#2dd4a7`-ish) but fixes structure, hierarchy, and proof. Implement all of the following:

### 1. Navigation
- Build a `Header.jsx` component: `sticky top-0 z-50` with a `backdrop-blur` + semi-transparent dark background (`bg-slate-950/80`) so content doesn't jump underneath it.
- Anchor links: About, Experience, Skills, Projects, Contact — use `<a href="#section-id">` with smooth scroll (`scroll-behavior: smooth` on `html`, set via Tailwind's `scroll-smooth` class).
- Track active section with a small `useActiveSection` hook using `IntersectionObserver`; apply `text-emerald-400` (or current accent) + maybe a bottom border to the active link, `text-slate-400` to inactive ones.
- Include a "Download CV" button in the header, styled as an outlined button (`border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-950`), linking to a static PDF in `/public`.
- On mobile (`< md:`), collapse links into a hamburger menu using `useState` for open/close, animated with Tailwind's `transition` + `translate` utilities (no extra animation library needed).

### 2. Hero section
- Keep name, title, tagline, and summary.
- Add a professional headshot OR a subtle animated/geometric monogram if a photo isn't available.
- Keep ONE clear primary CTA ("Get in touch") and ONE secondary CTA ("Download Resume") — remove "View projects" if it just scrolls the same page, or replace it with a real anchor-linked button styled distinctly from the primary CTA.
- Contact details (email, phone, location, social links) should appear **once**, in the header or footer — remove duplication from the hero and any other section.

### 3. Core Focus / About
- Keep the 4-bullet focus list but visually differentiate it from the Experience cards (e.g., different background tone, icon-based layout instead of bullets).

### 4. Experience
- Keep as-is structurally but tighten spacing consistency with adjacent sections.
- Add a subtle timeline visual (vertical line + dots) connecting the two roles chronologically.

### 5. Technical Skills
- Keep pill-tag layout; group by category as already done.
- Optionally add proficiency indicators (dots or bars) only for top 4-5 core skills — skip for the rest to avoid clutter.

### 6. Projects (highest priority fix)
- Model projects as a data array (`projects.js` or `projects.json`) mapped into a reusable `ProjectCard.jsx` component — don't hardcode each project as separate JSX.
- Make this section visually larger/featured than other sections: bigger cards (`p-8` vs `p-6` elsewhere), a subtle `hover:scale-[1.02] transition-transform` on cards, and an image/visual area at the top of each card (`aspect-video` container with `object-cover`).
- Each `ProjectCard` must render:
  - A visual (screenshot, diagram, or logo) — `<img>` with `alt` text, or an inline SVG diagram if no image available
  - A live link and/or GitHub repo link as a real `<a>` (make "dropmatix.com" clickable — currently plain text)
  - 1-2 sentence case-study framing: problem → solution → measurable outcome
  - Tech-stack pills reusing the same `Pill.jsx` component from the Skills section for visual consistency
- If code/systems are private, use an anonymized architecture diagram (SVG or exported image) instead of a screenshot.
- Layout: `grid md:grid-cols-2 gap-8` so cards read as a proper showcase grid, not a stacked list.

### 7. Social proof (new section)
- Add a short "Testimonials" section with 1-2 quotes from managers/clients, or a GitHub contribution graph/stats widget if public repos exist.
- If no testimonials exist yet, add a placeholder section structure so it's easy to plug in later.

### 8. Achievements
- Merge into Experience as small inline badges/tags rather than a separate full-width section, OR keep separate but make it visually lighter-weight (smaller card, no full section padding) since it's currently underweight for the space it takes.

### 9. Visual hierarchy
- Vary section styling: featured sections (Projects) get bigger cards/more visual weight; secondary sections (Education) get a lighter, more compact treatment.
- Fix the inconsistent vertical spacing — establish one spacing scale (e.g., 64px between major sections, 24px between cards) and apply it uniformly, including the gap before the final CTA footer.

### 10. Footer / final CTA
- Single "Let's build something" CTA with contact details (this becomes the ONE place contact info lives, per point 2).
- Include social icons (GitHub, LinkedIn, Facebook) here only.

### 11. SEO & shareability
- If using Next.js: set metadata via the App Router's `metadata` export (or `next/head` in Pages Router) — `title`, `description`, `openGraph.title/description/images`, `twitter.card`.
- If using plain Vite/CRA React (no SSR): add these tags via `react-helmet-async`, AND strongly consider migrating to Next.js or pre-rendering with `vite-plugin-ssr`/`react-snap` so crawlers see real content instead of an empty `<div id="root">`.
- Add a proper `<title>` beyond just the name (e.g., "Shakil Anwar — Software Engineer | Laravel, Node.js, AI Automation").
- Add a favicon (`/public/favicon.ico` + apple-touch-icon) if missing.

### 12. Resume download
- Add a "Download Resume" button (header + hero) linking to an up-to-date PDF export of this content.

## Constraints
- Keep the existing dark background + mint-green accent color scheme; define it in `tailwind.config.js` under `theme.extend.colors` (e.g., `background: '#0a0f1a'`, `accent: '#2dd4a7'`) so it's referenced as `bg-background` / `text-accent` everywhere instead of hardcoded hex values.
- Define a consistent spacing scale in the same config (or just use Tailwind's default scale consistently — e.g., `py-16` between major sections, `gap-6` between cards) and apply it uniformly, including the gap before the final CTA footer.
- Keep all existing factual content (metrics, employers, dates) — do not invent new claims or numbers.
- Mobile-first responsive layout using Tailwind's `sm:` / `md:` / `lg:` breakpoints; nav collapses to a hamburger menu below `md:`.
- No CSS frameworks/utilities outside Tailwind; no jQuery or heavy animation libraries — use Tailwind's built-in `transition`, `animate-*`, and simple React state/hooks for interactivity.
- Prioritize implementation in this order: Navigation → Projects visuals/links → Contact dedup → Social proof → Visual hierarchy/spacing → SEO tags → Resume download.

## Deliverable
1. The populated `data/` folder, extracted faithfully from the repo's HTML file (per Source of Truth above) — this should be reviewable on its own before component work proceeds, so factual errors can be caught early.
2. Production-ready React + Tailwind code (component files as listed in Tech Stack, plus `tailwind.config.js`) implementing everything above and consuming only the `data/` files.
3. A short list of any content that had no source in the HTML file and was left as a placeholder (e.g., headshot photo, testimonial quotes, project screenshots, resume PDF, live/GitHub links for projects).
