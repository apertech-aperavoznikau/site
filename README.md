# Personal Site (Static HTML/CSS/JS)

This repository contains a static website built with plain HTML, CSS, and JavaScript. It appears to be a personal/professional site (e.g., services and contact/booking links) using a Colorlib template and common front-end libraries.

## Overview
- Stack: Static site — HTML5, CSS3, and client-side JavaScript
- Entry point: `index.html`
- No backend/server code, no build step, and no package manager configuration present
- Assets: CSS in `css/`, JS in `js/`, fonts in `fonts/`, images in `images/`

## Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: a simple static HTTP server for local development and testing (recommended for correct loading of some assets)
  - Examples: Python 3 built-in HTTP server, PHP built-in server, or any static server

## Getting Started (Run Locally)
You can open `index.html` directly in a browser, or serve the site via a lightweight HTTP server.

> Note: There is no `package.json` or build tooling in this repository.

## Scripts and Libraries
Client-side scripts live in `js/` and are referenced from `index.html`.

- `js/jquery-3.2.1.min.js` and `js/jquery.min.js` — jQuery (duplicated versions present; `index.html` chooses which to load)
- `js/popper.min.js` — Popper.js (Bootstrap dependency)
- `js/bootstrap.min.js` — Bootstrap JavaScript components
- `js/owl.carousel.min.js` — Owl Carousel (sliders)
- `js/jquery.magnific-popup.min.js` — Magnific Popup (lightboxes/modals)
- `js/jquery.waypoints.min.js` — Waypoints (scroll-based triggers)
- `js/jquery.stellar.min.js` — Stellar (parallax)
- `js/scrollax.min.js` — Scrollax (scroll animations)
- `js/jquery.easing.1.3.js` — Easing functions
- `js/jquery.animateNumber.min.js` — Number animation
- `js/google-map.js` — Google Maps integration (may require a valid API key if used; see TODO below)
- `js/main.js` — Site-specific initialization and behaviors

Styles are under `css/` and include Bootstrap, Font Awesome, animation helpers, Owl Carousel, Magnific Popup, and a `style.css` for site-specific styles.

## Environment Variables / Configuration
- No environment variables are required for basic local use.
- TODO: If using Google Maps or other third-party services, document where to place API keys (e.g., in `index.html` or a separate config) and any domain restrictions required.

## Tests
- No automated tests are present in this repository.
- TODO: Add basic CI or visual regression tests if desired (e.g., Playwright, Cypress, or Percy) for critical pages/components.

## Project Structure
```
/ (project root)
├─ index.html                 # Home (landing) page
├─ mentoring.html             # Mentoring page
├─ psychology.html            # Psychology page
├─ css/                       # Stylesheets and related assets
│  ├─ bootstrap.min.css
│  ├─ ...
│  └─ style.css               # Main site styles
├─ js/                        # Client-side scripts
│  ├─ main.js                 # Site-specific JS
│  └─ ...                     # Vendor libraries (jQuery, Bootstrap, etc.)
├─ images/                    # Image assets (favicon, photos, icons)
├─ fonts/                     # Font assets (Flaticon, etc.)
└─ .gitignore
```

## How to Deploy
Because this is a static site, it can be deployed to any static hosting provider (GitHub Pages, Netlify, Vercel, S3/CloudFront, Nginx/Apache, etc.).

Typical steps:
- Upload the repository contents to your static host
- Ensure the document root points to the project root (where `index.html` resides)
- Configure caching/headers as desired

TODO:
- Document the chosen hosting provider and deployment steps/commands for this project.
- Add a public URL for the live site.

## License and Attributions
- Template: The footer references a Colorlib template. Colorlib templates are typically licensed under CC BY 3.0. Please keep the attribution as required. See: https://colorlib.com/
- Flaticon: The repository includes `fonts/flaticon/license/license.pdf`; ensure compliance with the included license for icon usage.
- Fonts/Icons: `fonts/flaticon/font/flaticon.css` and related files are included; verify their licenses before redistribution.

Project License: TODO — Add a top-level LICENSE file specifying the license for your custom content and code in this repository.

## Maintenance Notes
- Consider removing duplicated libraries if any are unused (e.g., multiple jQuery files) to reduce page weight.
- If adding analytics, cookie consent, or third-party embeds, update this README with configuration and privacy considerations.
- For SEO and social sharing, add/update meta tags and favicons accordingly.

## Cookie Consent (EU GDPR/ePrivacy)
This site uses Cookiebot to provide a cookie consent banner and prior consent for non-essential cookies.

- Consent provider: Cookiebot (consent.cookiebot.com)
- Implementation: see `index.html` bottom. Auto-blocking mode is enabled.
- Categorization:
  - Necessary: core site JS/CSS
  - Preferences: Google Maps API and `js/google-map.js` (blocked until consent)
- Manage settings: use the "Cookie Settings" link in the footer to reopen the dialog.
- To add other third-party scripts, mark them with `type="text/plain"`, add `data-cookieconsent` with the appropriate category (e.g., `statistics`, `marketing`), and move the original URL to `data-src`.
