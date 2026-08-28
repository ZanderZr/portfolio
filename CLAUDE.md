# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start                  # ng serve -> http://localhost:4200
npm run build              # production build -> dist/portfolio/browser
npm run watch              # development build in watch mode
npm test                   # Karma + Jasmine in Chrome (watch mode)
npx ng test --watch=false --browsers=ChromeHeadless   # single CI-style run
npx ng test --include='**/home.component.spec.ts'     # run one spec file
```

There is no linter configured (no ESLint, no `ng lint` target).

## Architecture

Angular 19 portfolio site, standalone components only — no NgModules. `AppComponent`
is just a `<router-outlet />`; everything lives in two routed components
([app.routes.ts](src/app/app.routes.ts)):

- `/` → [HomeComponent](src/app/home/home.component.ts) — the scroll-snap one-pager
  (`#home`, `#about`, `#projects`, `#contact`).
- `/project/:slug` → [ProjectDetailComponent](src/app/project-detail/project-detail.component.ts)
  — a per-project case-study page. `intraapp` redirects here for backwards
  compatibility with links published before the slug route existed. Not every project
  has a detail page; those link out instead (see below).

**Project data is split by whether it is translatable.** Language-independent data
(title, tech stack rows, metrics) lives in [projects.ts](src/app/projects.ts) keyed by
slug; translatable prose (badge, subtitle, description, highlights, role) lives in
`translations[lang].details[slug]`. Generic page chrome ("Tech Stack", "Back to
portfolio") is in `translations[lang].detail`. Adding a project means touching both
files plus `projects.items` in each language — a slug present in one and missing in
the other renders a blank page, so `ProjectDetailComponent` redirects unknown slugs
home rather than rendering empty sections.

Card buttons come from `projectLinks[slug]` in `projects.ts` — a list of
`{ kind, url }`, where `kind` picks the icon (`ACTION_ICONS`) and the translated label
(`translations[lang].actions[kind]`). URLs are not translatable, so they live only in
`projects.ts`; `kind: 'detail'` routes internally, everything else opens in a new tab.
A project with no entry renders no buttons.

Stack `layer` names and metric `label`s in `projects.ts` are English-only in both
languages; that is pre-existing, not an oversight to "fix" halfway.

**Scroll model.** [styles.scss](src/styles.scss) puts `scroll-snap-type: y mandatory`
on `html, body`, so the scrolling container is the document body, not a wrapper div.
Both `IntersectionObserver`s in `HomeComponent` are therefore constructed with
`root: document.body`. `ProjectDetailComponent` adds a `no-snap` class to `<body>` in
`ngOnInit` and removes it in `ngOnDestroy`, because a long case-study page cannot live
inside mandatory snapping.

- `sectionObserver` sets `activeSection`, driving the nav `.active` class and the
  `.scrolled` navbar variant (the navbar is transparent only on `#home`).
- `revealObserver` adds `.visible` to each `.reveal` element once, then unobserves it.
  The animation is defined globally in `styles.scss` (`.reveal`, `.from-left`,
  `.from-right`); stagger comes from a bound `transition-delay`.

The reveal wiring runs in **`ngAfterViewInit`, not `ngOnInit`** — project cards are
rendered by an `@for`, whose embedded views are created during the first change
detection pass, after `ngOnInit`. Moving it back to `ngOnInit` silently stops the cards
from animating (they stay at `opacity: 0`).

The project-card `@for` uses `track $index` deliberately: switching language swaps in a
different array, and tracking by title would destroy and recreate the DOM nodes, losing
the `.visible` class the observer already applied and leaving the cards invisible.

**i18n.** Hand-rolled, no i18n library. [translations.ts](src/app/translations.ts)
exports a `translations` object keyed by `Lang = 'en' | 'es'`;
[LangService](src/app/lang.service.ts) holds the active language in a signal and
persists it to `localStorage`. Components expose `get t()` returning the active
dictionary, so templates read `t.nav.home`, `t.detail.back`, etc. Every user-facing
string must exist in **both** language branches with the same shape. Strings containing
markup (`about.title`, `about.p1`, `about.p2`) are rendered via `[innerHTML]`, so keep
them literal — never interpolate user input into them.

**Styling.** SCSS, component-scoped (`inlineStyleLanguage: scss`; schematics default to
`.scss`). Global tokens (`--primary-color`, `--secondary-color`, `--text-color`), the
page gradient, section sizing and the reveal animation are in `styles.scss`; everything
else is per-component, with `@media (max-width: 768px)` blocks nested inside each
section block. Note the production budget caps any single component stylesheet at 24 kB
and [home.component.scss](src/app/home/home.component.scss) is already large.

Inter (Google Fonts) and Font Awesome 6 load from CDNs — a `@import` in `styles.scss`
and a `<link>` in [index.html](src/index.html). Icon class names are stored as data
(`icon: 'fa-solid fa-ticket'`), so the CDN is a hard runtime dependency of the cards.

**Contact form.** Reactive form in `HomeComponent` posting to the Web3Forms API; the
access key is a literal at the top of the file. It is a public client-side key by
design, but it is a real key — do not swap it for a placeholder while editing.

## Deployment

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds on every push to
`master` and publishes with `peaceiris/actions-gh-pages`. Two coupled values: the build
passes `--base-href /portfolio/` and the action publishes `./dist/portfolio/browser`.
If the repo name or `outputPath` in [angular.json](angular.json) changes, both must be
updated or the deployed site loads with broken asset paths.

Routing uses `withHashLocation()` ([app.config.ts](src/app/app.config.ts)), so real
URLs are `/#/project/<slug>`. That is what makes deep links survive on GitHub Pages,
which has no SPA fallback — don't "modernise" it to path-based routing without adding a
`404.html` copy of `index.html` first.

The two `.spec.ts` files are unmodified Angular CLI scaffolding: both only assert the
component is created. They pass, but cover none of the behaviour described above.
