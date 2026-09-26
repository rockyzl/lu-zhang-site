# Customer landing page integration

The customer-facing English and Chinese home pages share
`src/components/ResearchLanding.astro` and `src/styles/landing.css`.
The visual direction was approved from the separate SciencesLoop landing preview:
large typography, warm ivory, forest green, and a conceptual research photograph.

## Scope

- Replace the two personal-portfolio home pages with a service introduction.
- Keep three selectable needs: connected knowledge, experiment comparison, and
  connected workflows, each with its own short illustrative animation.
- Support keyboard tab selection, mobile navigation, replay and reduced motion.
- Use native expandable sections for the pilot process.
- Contact opens an email draft; no submission or agent execution is added.
- Keep project, lab, blog, research archive and founder links in both languages.
- Existing content routes, demo registry data, APIs, privacy and SMS flows remain
  intact. The existing site assistant remains on its existing interior pages.
- Preserve the existing social-preview image. Hero imagery is clearly labeled
  conceptual and makes no claim about a company facility or customer deployment.

## Validation

Run `npm run build` (includes registry validation). Check both home-page output
documents for their three tab/panel pairs, local asset/link targets, language
metadata, and absence of preview-only text. Browser layout and click verification
should be repeated against the Vercel PR preview before production merge; the
separate reference prototype was browser-tested, but that does not validate this
Astro port.

## Release and rollback

### Expert-review integration — 2026-09-25

- Kept the approved theme, image, three needs and illustrative animations.
- Made scoped pilots visible in the hero and concrete proposed handoffs explicit:
  selected source-linked records, comparisons with missing-information checks,
  and one agreed data-to-analysis-to-review workflow.
- Added illustrative sample-ID/concentration/temperature checks, without implying
  causality or an analysis actually performed by a deployed product.
- Added founder/research-archive links and separated prior scientific work from
  evidence of customer deployment.
- Added example acceptance checks, non-confidential intake guidance and a visible
  email address. No fabricated ROI, security guarantee or customer claim.
- Matched tab orientation and arrow keys to the viewport, reset inactive button
  backgrounds and added a no-script view of all three services.
- English and Chinese remain synchronized. Browser acceptance is still pending;
  the previously documented preview/sign-in limitations remain.
- Validation: full build passed (78 pages, 9 registered demos); generated HTML
  links/assets and intake text checked in both locales. DOM-mock execution passed
  initialization, selected/hidden states, horizontal/vertical keyboard navigation,
  wraparound and Home. This is not a browser rendering test.

This change uses the existing Astro/Vercel deployment path. Merge the reviewed PR
to release through the repository's normal deployment process. Reverting that
merge restores the prior home pages; no data migration is required.
