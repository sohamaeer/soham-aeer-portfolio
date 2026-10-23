# Soham Aeer — Full Stack Developer & DevOps Portfolio

Production-ready, multi-page portfolio website for **Soham Aeer**, Full Stack Developer specializing in **React.js, Next.js, Node.js, Express.js, Linux VPS deployment, Technical SEO across 20+ websites, and AI API integrations**.

---

## 1. Architectural Highlights

- **Framework:** Next.js 14 App Router with React Server Components (RSC) and Client Components where interactivity is required.
- **Language & Styling:** 100% Pure JavaScript (no TypeScript) and 100% Plain CSS (zero Tailwind, Bootstrap, or heavy CSS frameworks) using modern CSS Custom Properties.
- **Theme System:** `next-themes` dark-first design with a dedicated light theme, persistent local storage, and zero theme flash.
- **Backend Architecture:**
  - **Preferred (Vercel Serverless):** Native Next.js Route Handler (`/api/contact/route.js`) using Nodemailer for 1-click global Vercel deployment without server management.
  - **Alternative (Linux VPS / Standalone):** Standalone Express.js server (`server/server.js`) with PM2 daemon management and CORS configuration for self-hosted Linux VPS environments (e.g. Contabo).
- **Transactional Email System:** Two-way Nodemailer workflow:
  1. Instant HTML notification to `sohamayer516@gmail.com` with client IP, timestamp, and sanitized form data.
  2. Branded confirmation email sent to the prospective client.
  3. Anti-spam honeypot, in-memory IP rate limiting, and header injection defense.
- **Technical SEO:**
  - Structured Data (JSON-LD): `Person`, `WebSite`, `BreadcrumbList`, `FAQPage`, and `SoftwareApplication`.
  - Dynamic `sitemap.xml` generated via `src/app/sitemap.js`.
  - Dynamic `robots.txt` generated via `src/app/robots.js`.
  - Open Graph and Twitter Card metadata on all routes.
  - Complete keyword mapping and intent documentation in `docs/seo-keyword-mapping.md`.

---

## 2. Directory Structure

```text
├── docs/
│   └── seo-keyword-mapping.md        # Technical SEO keywords, intent & H1 mappings
├── public/
│   ├── certificates/                 # Real certificate assets (CodeSignal, NASD, Microsoft)
│   ├── documents/                    # Soham_Aeer_Resume.pdf
│   ├── images/                       # Real photography and project screenshots
│   └── Soham_Aeer_Resume.pdf         # Root-accessible verified resume
├── resources/                        # Source asset directory
├── server/
│   └── server.js                     # Standalone Express.js server (VPS / PM2 compatible)
├── src/
│   ├── app/
│   │   ├── about/                    # About page (/about)
│   │   ├── api/contact/route.js      # Nodemailer Route Handler (/api/contact)
│   │   ├── certifications/           # Certifications page (/certifications)
│   │   ├── contact/                  # Contact page (/contact)
│   │   ├── experience/               # Experience timeline page (/experience)
│   │   ├── projects/                 # Projects hub (/projects)
│   │   │   └── [slug]/               # Dynamic project case study (/projects/[slug])
│   │   ├── resume/                   # Online resume (/resume)
│   │   ├── skills/                   # Skills hub (/skills)
│   │   │   └── [slug]/               # Dynamic skill detail page (/skills/[slug])
│   │   ├── layout.js                 # Root layout with Person & WebSite schema
│   │   ├── not-found.js              # Custom 404 page
│   │   ├── page.js                   # Homepage (/)
│   │   ├── robots.js                 # Dynamic robots.txt
│   │   └── sitemap.js                # Dynamic sitemap.xml
│   ├── components/
│   │   ├── Breadcrumbs.js            # Breadcrumb navigation with BreadcrumbList schema
│   │   ├── ContactForm.js            # Interactive enquiry form with honeypot & validation
│   │   ├── FAQSection.js             # Accordion with FAQPage JSON-LD schema
│   │   ├── Footer.js                 # Global footer with internal site links
│   │   ├── Header.js                 # Navbar, skills dropdown & mobile menu drawer
│   │   ├── JsonLd.js                 # Safe JSON-LD injector component
│   │   ├── ProjectCard.js            # Reusable project card with status badges
│   │   ├── ProjectsDirectory.js      # Category filterable project portfolio
│   │   ├── ThemeProvider.js          # next-themes wrapper
│   │   └── ThemeToggle.js            # Client-side theme switch button
│   ├── data/
│   │   ├── certifications.js         # Real certifications and issuing authorities
│   │   ├── experience.js             # Integral Web Solution history & Viva College education
│   │   ├── navigation.js             # Header & footer sitemap links
│   │   ├── personalInfo.js           # Central source of truth for name, contacts & metrics
│   │   ├── projects.js               # 6 real-world project case studies
│   │   └── skills.js                 # 8 skill categories & 16 individual skill pages
│   └── styles/
│       ├── globals.css               # Design tokens, CSS custom properties & reset
│       ├── components.css            # Buttons, badges, cards, terminal elements & accordions
│       ├── header.css                # Navigation bar & mobile drawer styling
│       ├── footer.css                # Multi-column footer styles
│       ├── home.css                  # Homepage styling
│       ├── about.css                 # About page styling
│       ├── skills.css                # Skills hub & detail page styles
│       ├── projects.css              # Projects catalog & case study styles
│       ├── experience.css            # Timeline layout styling
│       ├── certifications.css        # Certificate showcase styling
│       ├── resume.css                # Printable/screen resume styling
│       └── contact.css               # Contact form & alert styling
├── .env.example                      # Environment variables template
├── jsconfig.json                     # Path alias (@/* -> src/*)
├── next.config.js                    # Next.js image optimization configuration
└── package.json                      # Scripts and dependencies
```

---

## 3. Getting Started Locally

### Prerequisites
- Node.js version 18.x or higher (Node 20+ recommended).
- npm, pnpm, or yarn.

### Installation

```bash
# 1. Clone repository
git clone https://github.com/sohamaeer/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Create local environment file
cp .env.example .env.local

# 4. Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Environment Variables Configuration

In `.env.local` (or the Vercel Project Settings > Environment Variables):

| Variable | Description | Example Value |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical public domain | `https://sohamaeer.vercel.app` |
| `SMTP_HOST` | Outgoing SMTP mail server | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP port | `587` |
| `SMTP_SECURE` | Use SSL (`true` for port 465, `false` for 587) | `false` |
| `SMTP_USER` | SMTP username or email | `sohamayer516@gmail.com` |
| `SMTP_PASS` | SMTP App Password (do not commit!) | `your-16-char-app-password` |
| `CONTACT_TO_EMAIL` | Destination for incoming enquiries | `sohamayer516@gmail.com` |
| `CONTACT_FROM_EMAIL` | Verified sender display and address | `"Soham Aeer Portfolio" <notifications@sohamaeer.com>` |

> **Development Mock Mode:** If SMTP credentials are not configured, the contact form validates input and safely logs the sanitized inquiry to the server console, informing the client gracefully without failing.

---

## 5. Deployment Architecture Options

### Option A: Vercel Deployment via GitHub (Recommended)

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Soham Aeer full stack portfolio"
   git branch -M main
   git remote add origin https://github.com/sohamaeer/soham-aeer-portfolio.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `soham-aeer-portfolio` repository.
4. Next.js will be detected automatically.
5. In **Environment Variables**, add the keys from `.env.example`.
6. Click **Deploy**. Vercel will build the static pages and deploy the `/api/contact` route as a serverless Edge function.

### Option B: Self-Hosted Linux VPS Deployment (Contabo / Ubuntu)

To run on a self-hosted Ubuntu Linux VPS (matching Soham's production setup):

```bash
# 1. Build Next.js application
npm run build

# 2. Start Next.js server with PM2
pm2 start npm --name "soham-portfolio" -- start

# 3. (Optional) Run standalone Express backend
pm2 start server/server.js --name "soham-express-api"

# 4. Save PM2 state for automatic reboot recovery
pm2 save
pm2 startup
```

Configure Nginx or Apache as a reverse proxy forwarding port 80/443 to `http://localhost:3000`.

---

## 6. How to Maintain and Update Content

### Adding a New Project
1. Open `src/data/projects.js`.
2. Add a new project object to the `projects` array with: `slug`, `name`, `headline`, `category`, `image`, `githubUrl`, `liveUrl`, `techStack`, `overview`, `architecture`, `keyFeatures`, `technicalChallenges`, `seoImplementation`, and 4 `faqs`.
3. If providing a screenshot, save the optimized `.webp` or `.png` into `public/images/projects/`.
4. Run `npm run build` to verify the new route `/projects/[slug]` builds statically.

### Adding or Updating a Technical Skill
1. Open `src/data/skills.js`.
2. To add to the category grid, add the item under the appropriate category in `skillCategories`.
3. To add a dedicated detail page, add a matching entry in `skillDetails` with `h1`, `summary`, `description`, `howIUse`, `implementationConcepts`, `businessValue`, 4 `faqs`, and `seo` metadata.

### Updating Personal Information or Resume
1. Update `src/data/personalInfo.js` for changes in phone, email, bio, or role.
2. Replace `public/Soham_Aeer_Resume.pdf` and `public/documents/Soham_Aeer_Resume.pdf` with the updated resume PDF.

---

## 7. Post-Deployment SEO Checklist

1. **Verify Google Search Console:** Add your production domain in [Google Search Console](https://search.google.com/search-console).
2. **Submit Sitemap:** Submit `https://your-domain.com/sitemap.xml`.
3. **Inspect URLs:** Request indexing for `/`, `/about`, `/projects`, and primary skill pages.
4. **Test Rich Results:** Validate schema at [Google Rich Results Test](https://search.google.com/test/rich-results) for `Person`, `BreadcrumbList`, and `FAQPage`.
5. **Monitor Core Web Vitals:** Review real-world LCP, INP, and CLS performance in the Experience tab.

---

## 8. License & Verification
Designed and engineered for **Soham Aeer**. All project references, experience milestones, and technical certifications correspond to verified professional work.
