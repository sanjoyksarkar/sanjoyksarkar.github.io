# Sanjoy Kumar Sarkar — IT & Digital Systems Portfolio

A responsive, static career portfolio for GitHub Pages: an editorial ivory, sage and navy design, four professional case studies, research contributions, education and a public CV. No framework, package installation, external fonts, trackers or runtime dependencies.

## Preview locally

Requires Node.js 22 or newer. No `npm install` needed.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. The checked-in HTML also works by opening `index.html` directly. The local server only serves approved public files.

## Edit the content

- `data/portfolio.mjs` — professional profile, dated experience, projects, capabilities, research and education.
- `scripts/build.mjs` — page templates and SEO generation.
- `styles.css` — colors, typography, layouts and responsive breakpoints.
- `script.js` — accessible mobile navigation and active-section state.
- `assets/sanjoy-sarkar.jpg` — existing portrait, displayed at a restrained size.
- `assets/Sanjoy_Sarkar_CV.pdf` — updated public CV.
- `assets/social-preview.svg` — editable source of the 1200 × 630 social preview PNG.

After content or template changes, run `npm run build` and `npm run check`. Commit the source and regenerated HTML together. Existing project URLs are retained.

## Publish on GitHub Pages

1. Add this project to your GitHub repository, using the `main` branch. This downloaded folder did not contain a `.git` directory or configured remote.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the build source.
3. Push to `main`, or manually run **Publish portfolio to GitHub Pages** from Actions.

The included workflow builds and checks the site, automatically uses the actual GitHub Pages URL for canonical links, sitemap, social images and the 404 page, then publishes only `dist/`. Project-repository subpaths and user sites are supported. No repository URL is guessed.

For another host, set `person.siteUrl` in `data/portfolio.mjs` to the full HTTPS site URL (including its subpath, if any), run the build and upload only `dist/`. With no deployment URL configured, local builds intentionally omit canonical links and `sitemap.xml`; they are generated during the Pages workflow.

## CV and privacy

The old CV contained a date of birth, private referee emails and outdated employment information. Its original copy is in `.private/Original_CV.pdf`, excluded by `.gitignore`, the local server and the deployment allowlist. Do not manually upload the `.private` folder. The public PDF has been replaced with a two-page CV using the supplied brief, with IEDCR ending June 2026 and the ongoing master's programme included.

The PDF is committed, so deployment does not require Python. To regenerate it after changing content, install Python with `reportlab`, export the source data and run:

```sh
node -e "import('./data/portfolio.mjs').then(async d=>{const fs=await import('node:fs/promises');await fs.mkdir('tmp',{recursive:true});await fs.writeFile('tmp/portfolio.json',JSON.stringify(d))})"
python scripts/build-cv.py tmp/portfolio.json
npm run build
```

The generator uses Arial if available on Windows, otherwise Helvetica. Visually review both PDF pages after regeneration.

## Content accuracy

- Around eight years reflects the October 2018–June 2026 career period.
- User counts refer to approximate organizational environment sizes, not a combined personal support total.
- Professional systems use clearly labelled conceptual illustrations. No internal endpoints, credentials, health records or dashboard screenshots are included.
- The 2026 CEDAAH contribution is labelled as a conference abstract; final presentation status remains to be confirmed.
- The 2025 poster was accepted, but the conference was not held.
- No testimonials, numerical outcomes, certifications or technical specializations have been invented.

## Validation

`npm run check` validates six HTML pages, local links and assets, anchor targets, heading/ID structure, metadata and known stale/private text. Browser QA covers desktop, tablet and mobile layouts, mobile menu state, Escape, section selection, CV downloading, reduced motion and navigation without JavaScript. No Lighthouse score is claimed without a measured audit.
