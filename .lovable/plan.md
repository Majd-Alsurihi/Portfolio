
Goal: make every major section (About, Tech Stack, Projects, Certifications, Contact) visually match the same frosted-glass strength as the Hero/Navbar.

1) Root-cause analysis (what is likely happening)
- The project currently mixes multiple glass definitions:
  - Navbar uses inline Tailwind glass classes (`bg-white/30 backdrop-blur-xl border ...`).
  - Sections use custom `.glass-section` / `.glass-card`.
  - Hero uses `.glass-section` plus extra border/shadow classes.
- Even when blur values are close, these layered differences (different border/shadow/opacity stacks) create visibly different results.
- Backdrop blur looks weaker when the background behind a section is low-contrast. Lower parts of the page can appear “less blurry” even with similar blur radius.

2) Restructure approach (single source of truth)
- Create one canonical glass token system in `src/index.css` using CSS variables:
  - `--glass-bg`, `--glass-border`, `--glass-blur`, `--glass-shadow`
- Define reusable classes:
  - `.glass-surface` (base)
  - `.glass-surface--section`
  - `.glass-surface--card`
  - `.glass-surface--nav`
- Make Hero, Navbar, and all section wrappers consume these same tokens so they are mathematically identical (not “close”).

3) Apply consistently across components
- Update:
  - `src/components/Navbar.tsx`
  - `src/components/PortfolioHero.tsx`
  - `src/components/AboutSection.tsx`
  - `src/components/TechStackSlider.tsx`
  - `src/components/ProjectsSection.tsx`
  - `src/components/CertificationsSection.tsx`
  - `src/components/ContactSection.tsx`
  - `src/components/ProjectCard.tsx` (if card variant should match)
- Remove duplicated/conflicting glass-related utility classes from JSX (extra border/bg/shadow utilities that override or visually diverge).
- Keep spacing/layout/animations unchanged.

4) Ensure blur stays visible across scroll
- Add a subtle global backdrop contrast layer (non-intrusive gradient/noise) behind content so blur effect remains perceivable in all sections, not only near hero.
- Keep `ParticleBackground` as-is unless it conflicts; if needed, only adjust opacity minimally.

5) Config cleanup
- Simplify `src/config/portfolio.ts` styling keys so they map to the new canonical class names only (no split between `glassBlur` and `glassOpacity` that can drift again).
- This prevents future regressions when changing one section but not others.

6) Validation checklist (done after implementation)
- Desktop and mobile: each section container should match Hero/Nav glass intensity.
- Compare computed styles for section shells:
  - same `backdrop-filter`
  - same background alpha
  - same border/shadow recipe
- Confirm no section-specific overrides remain.
- Confirm animations/translations still work and no JSX/runtime errors introduced.

Technical notes
- Preferred implementation detail:
  - Use explicit CSS for blur (`backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);`) rather than relying only on utility composition.
  - Keep class names static in JSX (avoid dynamic string fragments for core glass behavior).
- Result: one shared glass system, predictable visuals, and Hero/Navbar/sections rendered with equal blur strength.
