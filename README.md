# Coffee House — Website Template

A restaurant/cafe landing page template. This is a demo/portfolio piece — not built for or affiliated with any real, existing business. Names, contact details, and location are placeholders.

The site is a single-page marketing template: it introduces the space, showcases a full menu, and demonstrates the kind of contact/ordering flow (delivery link, Instagram, maps, phone) a real cafe site would need — with placeholder values in place of real ones.

## Features

- **Bilingual UI (English / Arabic)** — full content translation with right-to-left (RTL) layout support, including font swaps (Cairo for Arabic, Cormorant Garamond / DM Sans for English)
- **Hero image slideshow** — auto-rotating background slides with a subtle Ken Burns zoom effect and manual dot navigation
- **Interactive menu** — categorized tabs (Hot Drinks, Cold Drinks, Breakfast, Bites, Sweets) with bilingual item names, descriptions, and prices
- **About section** — cafe story and highlight stats
- **Contact & visit footer** — address, opening hours, social link, phone number, and a prominent delivery-order call to action
- **Responsive design** — mobile hamburger navigation, responsive grid layouts for the menu and footer
- **Security headers** — sensible defaults configured in `next.config.mjs` (CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy, etc.)

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- TypeScript
- [lucide-react](https://lucide.dev/) for icons
- Plain CSS-in-JS (no external UI framework) with Google Fonts

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app runs on [http://localhost:3002](http://localhost:3002) by default.

### Production Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
  app/
    layout.tsx   # Root layout and page metadata
    page.tsx     # Main single-page site (hero, about, menu, footer)
next.config.mjs   # Next.js config with security headers
```

## Notes

This is a template/demo, not a real client project. Contact links, address, phone number, and photos are all placeholders — swap them for real values to adapt it for an actual business.
