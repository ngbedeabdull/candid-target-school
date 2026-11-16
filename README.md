# Candid Target Secondary School — Website

A responsive, high-performance web application built with **React** and **Vite**, based on the Google Stitch design system for Candid Target Secondary School.

## 🚀 Features

- **Pixel-Perfect Fidelity**: Preserves all original typography (`Playfair Display` + `Inter`), colors (Deep Navy `#0F1F38`, Primary Navy `#1B365D`, Gold `#D4AF37`), layout spacing, and SVG iconography.
- **5 Complete Interactive Pages**:
  - **Home (`/`)**: Hero section, stats strip, Principal's message, 4 pillars of excellence, news & events, call-to-action banner.
  - **About Us (`/about`)**: School heritage & history, vision & mission cards, core values, leadership directory, and world-class campus facilities.
  - **Academics (`/academics`)**: JSS & SSS curriculum divisions, interactive 4-department switcher tabs, co-curriculars & clubs, 2026/2027 academic calendar, and curriculum prospectus package download.
  - **Admissions (`/admissions`)**: 4-step admission journey, criteria & scholarship information, interactive online admission inquiry form with validation, and accessible FAQ accordion.
  - **Contact Us (`/contact`)**: Office hours, official correspondence, categorized contact form with validation, campus map with animated pin, and driving directions modal.
- **Responsive Navigation**: Sticky header with scroll shadow enhancement, mobile hamburger drawer, active route indicators, and smooth scroll restoration between pages.
- **Forms & Interactivity**:
  - Controlled inputs with real-time validation and error notifications.
  - Success feedback banners upon valid submission.
  - Interactive modal dialogs for prospectus downloads and driving directions.
  - Fully accessible accordion with stateful expand/collapse and ARIA attributes.
  - Controlled department tab navigation.

## 🛠️ Project Structure

```text
stitch_secondary_school_website_template/
├── dist/                          # Production build output
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── PageBanner.jsx     # Reusable inner page banner with breadcrumbs
│   │   │   └── ScrollToTop.jsx    # Automatically scrolls to top on navigation
│   │   └── layout/
│   │       ├── Header.jsx         # Sticky header, topbar, mobile drawer
│   │       └── Footer.jsx         # 4-column footer, social links, contact
│   ├── pages/
│   │   ├── HomePage.jsx           # Home page
│   │   ├── AboutPage.jsx          # About Us page
│   │   ├── AcademicsPage.jsx      # Academics page with department tabs
│   │   ├── AdmissionsPage.jsx     # Admissions page with timeline & form
│   │   ├── ContactPage.jsx        # Contact page with form & directions
│   │   └── NotFoundPage.jsx       # 404 fallback page
│   ├── App.jsx                    # Route mapping
│   ├── index.css                  # Global & modular responsive styles
│   └── main.jsx                   # Application entry point
├── index.html                     # HTML root template with Google Fonts
├── package.json                   # Dependencies & scripts
└── vite.config.js                 # Vite configuration
```

## 💻 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
npm install
```

### Running Locally
To launch the Vite development server:
```bash
npm run dev
```
The website will be available at `http://localhost:3000/`.

### Production Build
To create an optimized production build in `dist/`:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
