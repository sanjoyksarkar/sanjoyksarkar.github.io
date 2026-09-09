# Sanjoy Kumar Sarkar — IT & Digital Systems Portfolio

A responsive, static career portfolio for GitHub Pages: an editorial ivory, sage and navy design, five professional case studies, research contributions, education and a public CV. No framework, package installation, external fonts, trackers or runtime dependencies.

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
- `assets/Sanjoy_Sarkar_CV.pdf` — the exact PDF supplied by Sanjoy; all download links use this file.
- `assets/social-preview.svg` — editable source of the 1200 × 630 social preview PNG.

After content or template changes, run `npm run build` and `npm run check`. Commit the source and regenerated HTML together. Existing project URLs are retained.

## Publish on GitHub Pages

1. Add this project to your GitHub repository, using the `main` branch. This downloaded folder did not contain a `.git` directory or configured remote.
2. In the repository's **Settings → Pages**, select **GitHub Actions** as the build source.
3. Push to `main`, or manually run **Publish portfolio to GitHub Pages** from Actions.

The included workflow builds and checks the site, automatically uses the actual GitHub Pages URL for canonical links, sitemap, social images and the 404 page, then publishes only `dist/`. Project-repository subpaths and user sites are supported. No repository URL is guessed.

For another host, set `person.siteUrl` in `data/portfolio.mjs` to the full HTTPS site URL (including its subpath, if any), run the build and upload only `dist/`. With no deployment URL configured, local builds intentionally omit canonical links and `sitemap.xml`; they are generated during the Pages workflow.

## CV and contact

The download is Sanjoy's supplied PDF, copied unchanged on 9 September 2026. Replace `assets/Sanjoy_Sarkar_CV.pdf` with a new approved PDF when needed, then build and push. The site build copies the file without regenerating or rewriting it.

The earlier original remains in `.private/Original_CV.pdf`, excluded from Git, the local server and deployment. The legacy `scripts/build-cv.py` now writes an optional draft to `tmp/generated-CV.pdf`; it does not replace the approved public CV.

“Get in touch” opens an accessible contact window with Gmail, the visitor's default email app, and copy-address options. It supports Escape, focus restoration and clipboard failure feedback. Without JavaScript, the button retains a standard email link. No message is sent by the website, and no backend or third-party form service is needed.

Organization marks retain their colors and proportions. Clean official Save the Children and Oxfam assets replace the supplied checkerboard screenshots; Winrock and IEDCR use the supplied PNGs. Source references are in `assets/LOGO-SOURCES.md`.

## Content accuracy

- “8 years” is the rounded summary of the October 2018–June 2026 career period.
- User counts refer to approximate organizational environment sizes, not a combined personal support total.
- Professional systems use clearly labelled conceptual illustrations. No internal endpoints, credentials, health records or dashboard screenshots are included.
- The 2026 CEDAAH item is labelled as a conference abstract contribution, without claiming a completed presentation.
- The 2025 poster was accepted, but the conference was not held.
- Sanjoy confirmed the dengue upserts/epi-week checks, NMCP monthly malaria updates and ERA5 integration details.
- The fifth case study documents his confirmed external-dashboard-access incident. PostgreSQL data validation is explicitly separate from the outage diagnosis; no exact network cause or restoration time has been invented.
- No testimonials, numerical outcomes, certifications or technical specializations have been invented.

## Validation

`npm run check` validates seven HTML pages, local links and assets, anchor targets, heading/ID structure, metadata and known stale/private text. Browser QA covers desktop, tablet and mobile layouts, mobile menu state, Escape, section selection, CV downloading, reduced motion and navigation without JavaScript. No Lighthouse score is claimed without a measured audit.
