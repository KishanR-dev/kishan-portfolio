# Milestone 1: Architectural Decisions

## Framework Choice
**Next.js (App Router)** with **TypeScript** and **Tailwind CSS**. Next.js was selected for its robust Server Components capability, allowing the presentation layer to render canonical evidence natively on the server without shipping heavy client-side JavaScript. This satisfies the strict performance and architecture constraints outlined in the specifications.

## Package/Dependency Rationale
- `@tailwindcss/container-queries`: Added to allow `ProjectArticle` and deeply nested components to self-size fluidly in grid systems based on context instead of relying entirely on standard viewport media queries.
- `framer-motion`: Explicitly chosen for client-side layout transitions and graceful intersection-driven animations (`whileInView`). `GSAP` was explicitly rejected during architecture review due to the absence of complex timeline requirements in this iteration and LCP performance considerations.
- `@playwright/test`: Selected as the standard for end-to-end integration boundaries, ensuring the initial smoke test passes.

## Folder Architecture
The `src/` directory explicitly delineates responsibilities to avoid premature dashboard frameworks:
`src/app` - Routing and static page generation.
`src/components` - Visual components grouped into `core/` (atomic elements like Layout grids and metrics) and `project/` (aggregated entities).
`src/data` - Differentiates `sources/` (the literal JSON truth of metrics) vs `adapters/` (transformations tailored for presentation).

## Server / Client Component Strategy
**Server components are the absolute default.** All data ingestion, string formatting, and iteration logic runs entirely via RSCs inside the layout or page files. 
Client boundaries (`"use client"`) are strictly isolated to leaf nodes responsible solely for interactivity, such as the hardware-style `DirectionalLight` and the intersection-observing `FadeInContainer`.

## Content & Data Model
Encoded via `PresentationDataset`. Projects are represented by identifiers (`BUILD`, `QUALITY`, `TRANSFORM`, `TRACE`, `OBSERVE`). The Canonical Evidence holds arrays of `VerifiedMetrics`. Rendering is halted safely via the adapter for any metric lacking an explicit `verificationSource`.

## Motion Boundaries
Motion is kept extremely intentional. Framer Motion governs simple enter-animations (`FadeInContainer`). `prefers-reduced-motion` hooks dictate automated fallbacks—for instance, changing the active directional light tracking into a static amber background state when disabled via accessibility toggles at the OS level.

## Responsive Strategy
Components, specifically `HardwareMetric` and `ProjectArticle`, use Tailwind grid classes (`grid-cols-1`, `md:grid-cols-2`) supplemented by container queries. Widths and paddings rely on relative constraints rather than fixed breakpoints to prevent the UI from acting like a squeezed desktop application on mobile viewports.

## Accessibility Strategy
- Heavy use of semantic HTML layout: `<article>`, `<main>`, `<dl>`/`<dt>`/`<dd>` grouping for data facts.
- A highly contrastive palette centering around `#030303` versus `#EAEAEA` ensuring readable text regardless of lighting overlays.
- A `prefers-reduced-motion` compliance system tied to every dynamic node via Framer hooks.

## QA Strategy
Basic infrastructure is deployed via `@playwright/test` for robust e2e regression testing. Smoke tests are built in right now for ensuring `Geist` integrations and void layout bounds compile into the DOM effectively (i.e. measuring true computed styles rendering against #030303 background values).

## Evidence/Data Separation
The presentation (`page.tsx`) explicitly does NOT own the data shape. The canonical portfolio projects are decoupled. If the `baseline_results.json` data shifts from `10.62s` to anything else across the CI lifecycle, updating `evidence.json` directly cascades it into the components without UI rewrite risk.
