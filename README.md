# Tulas International School (TIS) - Homepage Redesign

A modern, animated, fully responsive redesign of the TIS homepage, built around the school's own imagery and the "What makes school awesome?" message.

## Live Demo
- **Live URL:** _add your Vercel link here_
- **Repository:** _add your GitHub link here_

## Tech Stack
- React 18 + Vite
- Plain CSS with design tokens (CSS variables)
- Framer Motion (animation), Lucide React (icons)
- Deployment: Vercel

## Standout Features (all four implemented)
1. **Custom cursor** (`animation/CustomCursor.jsx`): spring-following ring that grows over links and buttons; disabled on touch (`pointer: coarse`).
2. **Scroll-triggered reveals** (`animation/Reveal.jsx`): staggered fade-up with `whileInView` and `once: true` (about 0.5s).
3. **Animated dark/light switch** (`animation/ThemeToggle.jsx`, `hooks/useTheme.jsx`): accessible switch, saved in `localStorage`, follows OS preference.
4. **Scroll progress bar** (`animation/ScrollProgress.jsx`): `useScroll` + `useSpring`.

Also: skip link, visible focus states, `prefers-reduced-motion` support, compressed WebP images with explicit dimensions.

## Getting Started
```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```
Requires Node.js 20.19+ (see `.nvmrc`).

## Architecture
```
src/
  components/
    ui/          Button
    layout/      Navbar, Footer
    sections/    Hero, Stats, About, Programs, Approach, CTA
    animation/   ScrollProgress, CustomCursor, Reveal, ThemeToggle
  hooks/         useTheme
  data/          content.js (navigation, facts, program cards)
  styles/        global.css
public/images/   Official TIS logo and photography (WebP)
```

## Brand Identity Retained
Logo, photography, message and admissions links come from tis.edu.in. Brand and copy belong to Tulas International School.

## Security
0 npm audit vulnerabilities, no `dangerouslySetInnerHTML`, no secrets, external links use `rel="noopener noreferrer"`, security headers in `vercel.json`.
