# CebuCentral

**Your local resource hub for Cebu, Philippines.**

A fast, practical front-end website for citizens, commuters, and tourists — covering transport, weather, emergency contacts, and travel prep in one place.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar          # Sticky top navigation with mobile menu
│   ├── Hero            # Landing hero section with CTAs
│   ├── SectionHeader   # Shared section heading component
│   ├── Button          # Multi-variant button/link component
│   └── Footer          # Dark footer with quick links
│
├── sections/           # Full-width page sections
│   ├── CebuToday       # Dashboard: date, weather tile, transport, emergency
│   ├── ServicesGrid    # 6-card service entry grid
│   ├── Transportation  # 6 transport modes with tips and provider links
│   ├── Weather         # Static forecast + seasonal info + source links
│   ├── Emergency       # Tap-to-call emergency contacts by category
│   └── BeforeYouGo     # Pre-travel checklist cards
│
├── data/               # Static content — edit these to update the site
│   ├── services.js     # Services grid content
│   ├── transport.js    # Transport options with tips and providers
│   ├── emergency.js    # Emergency contact numbers by category
│   ├── weather.js      # Static weather placeholder + seasonal info
│   └── beforeYouGo.js  # Checklist items
│
└── styles/
    ├── variables.css   # Design tokens (colors, fonts, spacing, shadows)
    └── global.css      # CSS reset and base styles
```

---

## Design System

All design tokens are in `src/styles/variables.css`.

**Brand Colors**
- Red: `#C0392B` — primary actions, emergency emphasis
- Gold: `#D97706` — checklist accents, tips, highlights
- Neutrals: `#111827` text, `#F9FAFB` backgrounds, `#E5E7EB` borders

**Typography**
- Display: Plus Jakarta Sans (headings, brand name)
- Body: Inter (UI text, descriptions)

**Signature Element**
Every major card has a 4px red left border — the consistent visual identity of CebuCentral.

---

## How to Update Content

All site content lives in `src/data/`. No component code needs to change for content updates.

| What to update           | Edit this file              |
|--------------------------|-----------------------------|
| Transport options/tips   | `src/data/transport.js`     |
| Emergency numbers        | `src/data/emergency.js`     |
| Weather data             | `src/data/weather.js`       |
| Services grid cards      | `src/data/services.js`      |
| Before You Go checklist  | `src/data/beforeYouGo.js`   |

---

## Adding a Logo

Two logo placeholder areas are ready:

1. **Navbar** — `src/components/Navbar.jsx`, look for `logoPlaceholder`
2. **Hero** — `src/components/Hero.jsx`, look for `logoFrame`

Replace the `<ImageIcon>` and placeholder text with your actual `<img>` tag or SVG component.

---

## Upgrading to Live Weather (V2)

The weather section is built to accept the same data shape from an API.

In `src/sections/Weather.jsx`, replace the static imports:
```js
// Replace this:
import { currentWeather, weekForecast, ... } from '../data/weather';

// With a live fetch from PAGASA API or OpenWeatherMap:
// https://api.openweathermap.org/data/2.5/forecast?q=Cebu,PH&appid=YOUR_KEY
```

The component structure is already ready for this upgrade.

---

## Version 1 Scope

- ✅ Static front-end only
- ✅ No APIs required
- ✅ No authentication
- ✅ No database
- ✅ Mobile-friendly
- ✅ Tap-to-call emergency links
- ❌ Live weather (planned for V2)
- ❌ Real-time transport tracking (planned for V2)
- ❌ User accounts / saved favorites (planned for V3)

---

## Tech Stack

- **React 18** + **Vite 5**
- **CSS Modules** — scoped styles per component
- **Lucide React** — consistent icon set
- **Plus Jakarta Sans** + **Inter** — via Google Fonts
- No other dependencies

---

Built for Cebu, Philippines 🇵🇭
