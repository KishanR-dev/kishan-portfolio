# Kishan Ramesha - Engineering Portfolio

An evidence-first engineering portfolio demonstrating scalable architecture, observability, and full-stack software development best practices.

## Overview

This portfolio is an interactive technical showcase based on the core narrative:
**BUILD → QUALITY → TRANSFORM → TRACE → OBSERVE**

It documents large-scale engineering outcomes over five sequential projects spanning January 2026 through April 2026. The portfolio is built around "Systems in Motion"—providing tangible evidence of technical implementations, rigorous testing frameworks, and measurable performance optimizations rather than just screenshots.

## Major Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP (GreenSock) & Framer Motion
- **Quality Assurance**: Playwright (E2E), ESLint
- **Deployment**: Vercel-ready

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application locally.

## Production Build

```bash
# Run production build
npm run build

# Start production server
npm start
```

## Testing

```bash
# Run Playwright End-to-End tests
npx playwright test
```

## Structure

The portfolio data is carefully isolated from presentation components. Metric truth resides centrally, feeding into `ArchitectureFlow`, `TraceabilityGraph`, and real-time visualization modules.