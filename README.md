# Sanjoy Kumar Sarkar — IT & Digital Systems Portfolio

A responsive, static career portfolio for GitHub Pages: warm-white backgrounds, charcoal text, an editorial serif introduction, compact career entries, interactive technology pills, five case studies, research contributions and a public CV. No framework, external fonts, trackers or runtime dependencies.

## Preview locally

Requires Node.js 22 or newer. No `npm install` needed.

```sh
npm run build
npm start
```

Open http://127.0.0.1:4173. The checked-in HTML also works by opening `index.html` directly. The local server only serves approved public files.

## Edit the content

- `data/portfolio.mjs` — professional profile, dated experience, projects, capabilities, research and education.
- `scripts/build.mjs` — shared page templates, case studies and SEO generation.
- `scripts/homepage.mjs` — homepage composition, skill evidence and conceptual project illustrations.
- `scripts/story.mjs` — origin, interactive career chapters, and current/next chapter sections.
- `data/journey.mjs` — evidence-grounded narrative for the four career chapters.
- `styles.css` — colors, typography, layouts and responsive breakpoints.
- `script.js` — mobile navigation, skill evidence, project filtering, active sections, reduced-motion-aware reveals and the contact chooser.
- `assets/sanjoy-portrait.png` — user-supplied blazer portrait, framed responsively using CSS.
- `assets/sanjoy-sarkar.jpg` — retained original portrait.
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

The 2026 FETP Abstract 66 entry is sourced from the supplied conference photograph and the confirmed poster selection. It does not claim a completed presentation.

## Validation

`npm run check` validates seven HTML pages, local links and assets, anchor targets, heading/ID structure, metadata and known stale/private text. Browser QA covers desktop, tablet and mobile layouts, mobile menu state, Escape, section selection, CV downloading, reduced motion and navigation without JavaScript. No Lighthouse score is claimed without a measured audit.

## Visual direction and assets

The light editorial redesign uses DevLove and the Stackrater Astro portfolio as visual references: a narrow reading column, restrained typography, compact career rows and icon-based skill pills. It does not copy their content or claim their skills. Native disclosure controls keep experience and research accessible without JavaScript. Skill buttons show supported experience levels and link to corresponding case studies; project filters announce the visible result count. All content remains visible with reduced motion.

Technology icons are vendored from the Devicon project (https://github.com/devicons/devicon), with its MIT license at `assets/DEVICON-LICENSE.txt`. The Microsoft four-square mark and Power BI bars are simple inline vector representations. Organization assets retain the sources in `assets/LOGO-SOURCES.md`. The supplied portrait is framed with CSS; the original pixels are unchanged.

## Story structure

The homepage follows a six-part narrative: undergraduate foundation and first role; four chronological career chapters (Save the Children, Oxfam, Winrock, IEDCR); case studies in career order; the toolkit developed along the way; collaborative research; and current study plus future opportunities. The latest IEDCR role remains dated March 2025–June 2026; it is not presented as ongoing.

Career chapters support pointer selection, Previous/Next, Left/Right, Home/End, direct fragment links, and descriptive tab/panel associations. Without JavaScript all four chapters remain readable. Printing reveals every chapter. Reduced-motion preferences disable animated movement, and progression never advances automatically. A desktop story index and thin reading-progress line help readers keep their place.

The toolkit also includes the user-confirmed KoBoToolbox, Azure AD, Cisco Meraki Dashboard, Active Directory, DHIS2, Jira and ServiceNow. These use compact illustrative SVG symbols. Their detail panels link to related work without attributing a particular tool to an unconfirmed project; DHIS2 retains the documented integration-concepts level.
