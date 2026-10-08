# Git and Deployment Guide

## Which host is best?
**Vercel.** The brief lists it first, it auto-detects Vite, deploys in about a minute, gives HTTPS and a public URL, and redeploys on every `git push`. Netlify is equally good. GitHub Pages works but needs extra config (base path) and has no custom headers.

## 1. Push to GitHub
1. Create an empty **public** repo on github.com named `tis-homepage-redesign` (no README, no .gitignore).
2. In the project folder:
```bash
git init
git add .
git commit -m "feat: TIS homepage redesign"
git branch -M main
git remote add origin https://github.com/<your-username>/tis-homepage-redesign.git
git push -u origin main
```
If asked for a password, use a Personal Access Token (GitHub > Settings > Developer settings) or sign in with `gh auth login`.

## 2. Deploy on Vercel (recommended)
1. Go to vercel.com and sign in with GitHub.
2. **Add New > Project**, import `tis-homepage-redesign`.
3. Framework Preset: **Vite** (auto). Build: `npm run build`. Output: `dist`.
4. Click **Deploy**. Copy the `*.vercel.app` URL.
Future `git push` to `main` redeploys automatically.

## 3. Alternative: Netlify
New site from Git > pick repo > Build `npm run build`, Publish `dist`.

## 4. Alternative: GitHub Pages
1. Add `base: '/tis-homepage-redesign/'` to `vite.config.js`.
2. Build, then publish `dist` (e.g. with the `gh-pages` package or a GitHub Actions workflow).

## 5. Final checklist
- Confirm TIS text and locally bundled assets are approved for public use
- `npm run build` succeeds
- Test at 375px, 768px, 1280px+
- Put the live URL and repository link in README
- Record a screen recording (Loom or Drive), set sharing to "Anyone with the link"
- Submit the Google Form: https://forms.gle/1njGvsG8a2MW8cRR7
- Be ready to explain your hooks (`useTheme`, `useCounter`), the cursor, and the reveal component in the review

## Troubleshooting
- **Build fails on Node version:** use Node 20.19+ (`nvm use`, the repo has an `.nvmrc`). On Vercel set Node 22 under Project Settings > General.
- **Blank page on GitHub Pages:** the `base` path in `vite.config.js` is missing or wrong.
- **Push rejected:** run `git pull --rebase origin main`, then push again.
