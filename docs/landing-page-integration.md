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

This change uses the existing Astro/Vercel deployment path. Merge the reviewed PR
to release through the repository's normal deployment process. Reverting that
merge restores the prior home pages; no data migration is required.
