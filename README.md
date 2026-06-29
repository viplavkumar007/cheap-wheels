# Cheap Wheels — React Website

**Stack:** React 18 + Vite + Tailwind CSS + Framer Motion  
**Language:** JavaScript only (no TypeScript)

---

## Folder Structure

```
cheap-wheels/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Fleet.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   ├── About.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTABanner.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── Logo.jsx
│   │       ├── Button.jsx
│   │       ├── Section.jsx
│   │       ├── SectionLabel.jsx
│   │       └── WhatsAppFloat.jsx
│   ├── data/
│   │   └── siteContent.js   ← ALL content lives here
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
├── netlify.toml
└── package.json
```

---

## Local Development

```bash
npm install
npm run dev
```

Open: http://localhost:5173

---

## Deploy to Vercel

1. Push to GitHub
2. Import repo at vercel.com
3. Framework: **Vite** — auto-detected
4. Click **Deploy**

Or via CLI:
```bash
npm i -g vercel
vercel --prod
```

---

## Deploy to Netlify

1. Push to GitHub
2. New site → import from GitHub
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**

Or drag-drop the `dist/` folder at netlify.com/drop

---

## Customising Content

All content (brand info, services, fleet, FAQs, etc.) is in:

```
src/data/siteContent.js
```

Edit this file to update any text, WhatsApp number, images, or business details — no component changes needed.

---

## WhatsApp Number

Currently set to: **9122849580**  
To change: update `brand.whatsapp` in `src/data/siteContent.js`
