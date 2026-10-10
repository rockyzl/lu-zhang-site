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

## PR #10 acceptance checkpoint — 2026-10-01

Reviewed the current draft head `9de6185` and its shared Astro component/CSS. The three need selectors, matching panels, visible email address, non-confidential intake text, conditional service language, founder research links, viewport-dependent tab orientation, no-script service fallback, and reduced-motion CSS are present in source. GitHub reports the PR open and draft. Vercel's status check for that head is `success`; its bot comment reports the preview ready. This confirms deployment status, not rendered layout or interaction quality.

The live preview could not be inspected in this run: automatic approval review rejected opening the Vercel preview in the cloud browser. Browser acceptance therefore remains pending. Before merge, check the actual English and Chinese preview at desktop and 320/390px widths; use mouse/touch and keyboard to switch all three services; test mobile menu, replay, reduced motion, email link, no-script rendering, and links to retained sections. Record screenshots or observed failures against this PR. Do not mark this port visually accepted from the older prototype's results.

## Automated acceptance checkpoint — 2026-10-09

`npm run build` now runs `npm run landing:check` before Astro compilation. The
dependency-free checker verifies that both route files use the shared component,
the three service IDs exist, and the source retains the tab linkage, direct email
path, no-script fallback, mobile-menu relationship, mobile breakpoint and
reduced-motion rules. Astro then performs the full static build and the existing
demo-registry validation still runs afterward.

`npm run landing:check:generated` is retained as a stricter diagnostic for an
already-built `dist/`; it is not part of the deployment gate until its generated
HTML assumptions are validated in an environment with build-log access. The
first attempt to gate deployment on that generated-output check failed Vercel,
and this environment could not read the protected build log. The corrected
pre-build source contract plus Astro/registry sequence passed Vercel at commit
`f617c19`. This is repeatable source/build acceptance, not browser layout or
interaction acceptance.

## Generated-output gate — 2026-10-10

A full local checkout reproduced the stricter check's earlier failure. The page
contained exactly three rendered tab panels; the validator counted a fourth
text occurrence from the bundled client script's
`querySelectorAll('[role="tabpanel"]')`. The checker now counts HTML elements
whose start tags carry the role instead of counting raw string occurrences.

The generated-output check now passes for both English and Chinese after a clean
78-page Astro build, and `npm run build` runs it between compilation and the
existing nine-entry demo-registry check. This closes the generated-markup
acceptance gap without weakening the required count. Protected-preview visual,
responsive, pointer and keyboard acceptance remains pending; no merge or
deployment is implied.

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

