# Zghairon Cafe Website

A restaurant landing page built as a freelance/client project for **Zghairon Cafe**, a cafe located on the Al-Khalha Stairs in Downtown Amman (Al-Balad), Jordan.

The site is a single-page marketing site designed to give the cafe a clean, modern web presence: it introduces the space, showcases the full menu, and routes visitors straight to the cafe's real-world contact channels (Talabat for delivery, Instagram, Google Maps, and phone).

## Features

- **Bilingual UI (English / Arabic)** — full content translation with right-to-left (RTL) layout support, including font swaps (Cairo for Arabic, Cormorant Garamond / DM Sans for English)
- **Hero image slideshow** — auto-rotating background slides with a subtle Ken Burns zoom effect and manual dot navigation
- **Interactive menu** — categorized tabs (Hot Drinks, Cold Drinks, Breakfast, Bites, Sweets) with bilingual item names, descriptions, and prices
- **About section** — cafe story and highlight stats
- **Contact & visit footer** — address with a Google Maps link, opening hours, Instagram link, phone number, and a prominent "Order on Talabat" call to action
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

This project was built for a real, existing business (Zghairon Cafe) as a client/portfolio piece. Content such as the menu, address, phone number, and social links reflect the cafe's actual public business information.
