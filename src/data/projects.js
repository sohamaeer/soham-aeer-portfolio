export const projectCategories = [
  "All Projects",
  "Full Stack Applications",
  "E-commerce",
  "Business Websites",
  "AI Integration",
  "DevOps & Infrastructure"
];

export const projects = [
  {
    slug: "fitcart",
    name: "FitCart — Headless Shopify E-Commerce Store",
    shortName: "FitCart",
    headline: "Headless fitness commerce platform powered by Next.js App Router, Shopify Storefront API, GraphQL, and OAuth 2.0 PKCE authentication.",
    category: "E-commerce",
    featured: true,
    badge: "Headless Commerce",
    image: "/images/projects/fitcart.png",
    imageAlt: "FitCart headless Shopify e-commerce platform homepage and product collection preview",
    githubUrl: "https://github.com/Sohamaeer/fitcart",
    liveUrl: "https://fitcart-five.vercel.app",
    role: "Lead Full Stack & Headless Architect",
    timeline: "2024",
    client: "Fitness E-commerce Brand",
    techStack: ["Next.js (App Router)", "React.js", "Shopify Storefront API", "GraphQL", "OAuth 2.0 (PKCE)", "Vercel", "CSS3"],
    overview: "FitCart is a production-grade headless e-commerce store engineered to replace traditional monolithic Shopify themes with a blazing-fast, decoupled Next.js frontend. The platform provides real-time product collections, dynamic variant selection, persistent cart synchronization via GraphQL mutations, GST-aware pricing tailored for Indian consumers, and secure customer authentication using Shopify's modern Customer Account API with OAuth 2.0 and Proof Key for Code Exchange (PKCE).",
    problem: "Standard Shopify Liquid storefronts often suffer from third-party app bloat, rigid layout constraints, and slow mobile render times. The objective was to build a tailored frontend experience with sub-second page transitions, complete layout customization, and localized tax calculations while retaining Shopify's battle-tested PCI-compliant checkout engine and order inventory backend.",
    responsibilities: [
      "Architected the complete Next.js App Router client with responsive, mobile-first CSS styling.",
      "Engineered GraphQL queries and mutations to communicate directly with the Shopify Storefront API.",
      "Implemented Shopify Customer Account API authentication utilizing OAuth 2.0 with PKCE for secure user login without exposing backend credentials.",
      "Built client-side cart management synchronized to Shopify's checkout engine.",
      "Integrated localized Indian GST tax logic directly into product displays and line-item sub-totals.",
      "Configured automated CI/CD deployments on Vercel with preview environments."
    ],
    architecture: {
      client: "Next.js 14 App Router with React Server Components for collection pages and Client Components for dynamic cart state.",
      dataFetching: "Shopify Storefront GraphQL endpoint querying products, collections, inventory levels, and customer account records.",
      auth: "Shopify Customer Account API utilizing OAuth 2.0 Authorization Code flow with PKCE token exchange.",
      checkout: "Direct redirect to secure Shopify-hosted PCI-compliant checkout containing serialized cart parameters.",
      hosting: "Vercel Global Edge Network with automatic asset optimization."
    },
    keyFeatures: [
      "Decoupled headless architecture with instant page transitions and zero theme bloat.",
      "Real-time inventory and multi-variant selector (sizes, flavors, packaging).",
      "Customer authentication with saved shipping addresses, order tracking, and profile management.",
      "Custom shopping cart drawer with live quantity adjustments and price updates.",
      "GST-aware calculation engine showing transparent tax breakdowns.",
      "Seamless handoff to official Shopify checkout with preserved session data."
    ],
    technicalChallenges: [
      {
        challenge: "Managing OAuth 2.0 PKCE authentication in a decoupled Next.js environment without a backend database.",
        solution: "Utilized Shopify's Customer Account API with PKCE code verifier and code challenge generation stored in secure HTTP-only cookies, exchanging authorization codes directly for customer session tokens."
      },
      {
        challenge: "Preventing layout shifts and maintaining fast image delivery across high-resolution product photography.",
        solution: "Leveraged Next.js Image component with explicit aspect-ratio constraints and responsive `sizes` attributes, pulling optimized WebP images from Shopify's global CDN."
      }
    ],
    seoImplementation: "Implemented dynamic metadata on collection and product routes, self-referential canonical URLs, Product JSON-LD structured data, and clean semantic heading structures.",
    faqs: [
      {
        question: "How does FitCart connect to Shopify without using Liquid templates?",
        answer: "FitCart uses the Shopify Storefront API over GraphQL. Next.js fetches data directly from Shopify's API, rendering custom React components while Shopify acts purely as the headless backend for products, inventory, and checkout."
      },
      {
        question: "How is customer account security handled?",
        answer: "Authentication is handled through Shopify Customer Account API using OAuth 2.0 and PKCE. Users log in through Shopify's secure identity flow, and tokens are stored in secure browser cookies."
      },
      {
        question: "Can FitCart handle international and local Indian currencies?",
        answer: "Yes. The store is architected to display INR (₹) with GST calculation logic, and Shopify's backend can automatically convert currencies based on visitor location."
      },
      {
        question: "Where is the live application hosted?",
        answer: "FitCart is deployed on Vercel's Edge Network at fitcart-five.vercel.app with continuous deployment directly from the GitHub repository."
      }
    ]
  },

  {
    slug: "mahadev-plastic",
    name: "Mahadev Plastic — Acrylic Sheet Manufacturer Website",
    shortName: "Mahadev Plastic",
    headline: "Full-stack production B2B marketing website, product inquiry pipeline, and private admin SEO & Blog CMS portal for an industrial acrylic sheet manufacturer.",
    category: "Full Stack Applications",
    featured: true,
    badge: "Full Stack & CMS",
    image: "/images/projects/mahadev-plastic.png",
    imageAlt: "Mahadev Plastics full-stack acrylic sheet manufacturer website homepage hero with live product showcase and inquiry engine",
    githubUrl: "https://github.com/sohamaeer/mahadev-plastic",
    liveUrl: "https://mahadevplastic.com",
    role: "Full Stack Developer & Technical SEO Specialist",
    timeline: "2024",
    client: "Mahadev Plastic (Talasari, Maharashtra)",
    techStack: ["Next.js 14 (App Router)", "TypeScript 5.6", "Node.js", "Express.js 4", "Tailwind CSS 3", "Nodemailer 6", "HMAC-SHA256 Auth", "JSON Flat-File DB", "Technical SEO", "Schema.org (JSON-LD)"],
    overview: "Mahadev Plastic is a full-stack production B2B web platform for a leading acrylic sheet manufacturer based in Achhad Industrial Estate, Talasari, Maharashtra. Engineered to drive nationwide commercial inquiries, the platform features a responsive Next.js 14 App Router frontend wrapped by a custom Express 4 server, an automated 3-way Nodemailer lead dispatch pipeline, persistent JSON flat-file storage for technical blogs, a private HMAC-SHA256 authenticated Admin CMS with rich SEO controls, and comprehensive Schema.org structured data (Product, FAQPage, BreadcrumbList).",
    problem: "The client required an authoritative, high-performance web presence to market their manufacturing capabilities across India (Cast Acrylic, Transparent, Frosted, Fluorescent, and MOP Acrylic Sheets). The platform needed to capture commercial purchase inquiries, deliver multi-party notifications, maintain an active technical content marketing hub via an internal admin CMS, and rank prominently on Google for highly competitive B2B industrial search terms.",
    responsibilities: [
      "Built the Next.js 14 App Router application with TypeScript 5.6 and Tailwind CSS 3, featuring an animated homepage hero slider, product mega-dropdown, and breadcrumb banners.",
      "Developed a custom Express 4 Node.js wrapper server to mount Next.js and handle backend REST APIs for inquiries, contact forms, and admin CMS endpoints.",
      "Engineered an automated 3-way HTML email notification system via Nodemailer 6: customer confirmation, owner lead notification to mahadevplastic2019@gmail.com, and technical audit log to the agency.",
      "Architected a private Admin CMS (/admin) secured by HMAC-SHA256 token authentication with a full blog CRUD manager, image upload pipeline (base64 to public storage), and schedule/publish toggles.",
      "Implemented a lightweight, zero-database-overhead runtime JSON flat-file storage engine (data/blogs.json) for persistent blog management.",
      "Designed comprehensive on-page and technical SEO: 3-tier keyword targeting (high-volume, medium, long-tail), canonical URLs, dynamic XML sitemaps, robots.txt, and targeted AI Overview / SGE search optimization hooks.",
      "Injected complete Schema.org JSON-LD data including Product (with SKU, MPN, brand, and AggregateOffer price ranges), FAQPage, and BreadcrumbList schemas across all product pages."
    ],
    architecture: {
      frontend: "Next.js 14 App Router with React Server Components for fast pre-rendered catalog pages, sticky responsive navigation with search routing, and floating WhatsApp action triggers.",
      server: "Custom Express 4 server wrapping the Next.js runtime, attaching API middleware for inquiry capture and admin CMS REST endpoints.",
      adminCms: "Private admin portal (/admin) secured by HMAC-SHA256 signed session tokens, featuring rich blog editor with SEO metadata controls, keyword mapping, and image uploads.",
      emailEngine: "Nodemailer 6 automated 3-recipient dispatch: branded buyer confirmation, factory owner lead notification with direct WhatsApp/Call CTAs, and technical audit log.",
      dataStorage: "Zero-overhead persistent JSON flat-file database (data/blogs.json) enabling dynamic article creation, editing, and publishing without database infrastructure costs.",
      seo: "Automated /sitemap.xml and /robots.txt, 11+ focus keywords in root layout, Product schemas with INR price ranges, and per-page AI Overview hooks."
    },
    keyFeatures: [
      "Full-stack Next.js 14 App Router frontend with custom Express 4 server architecture.",
      "Dynamic product catalog hub for 5 primary acrylic sheet lines (Cast, Transparent, Frosted, Fluorescent, MOP).",
      "Interactive product inquiry engine with 3-way automated HTML email dispatch via Nodemailer.",
      "Protected Admin CMS with HMAC-SHA256 token auth, blog CRUD dashboard, and image upload pipeline.",
      "Comprehensive 3-tier SEO keyword matrix with dynamic canonicalization and AI Overview hooks.",
      "Schema.org structured data: Product (AggregateOffer INR), FAQPage, and BreadcrumbList.",
      "Zero-database-overhead persistent JSON storage engine for dynamic content."
    ],
    technicalChallenges: [
      {
        challenge: "Wrapping Next.js 14 within a custom Express server while maintaining fast API response times and proper asset routing.",
        solution: "Configured Express to pass page requests directly to Next.js's request handler (`app.getRequestHandler()`) while intercepting `/api/*` and `/admin/*` routes through dedicated Express router middleware with input validation."
      },
      {
        challenge: "Securing the Admin CMS without a heavy external database or complex identity provider.",
        solution: "Implemented an HMAC-SHA256 signed token authentication strategy with 7-day expiration cookies, validating credentials against server-side environment variables and shielding admin routes."
      },
      {
        challenge: "Achieving high organic Google search ranking against established commercial acrylic competitors.",
        solution: "Engineered a 3-tier supportive keyword strategy across all product routes, injected valid Product and FAQPage JSON-LD schemas, and integrated concise AI Overview hooks optimized for Google SGE summaries."
      }
    ],
    seoImplementation: "Implemented comprehensive metadata across root and product pages, dynamic sitemap indexing all product lines and blogs, Schema.org Product (INR ranges), FAQPage, BreadcrumbList, and 3-tier keyword optimization for national search queries.",
    faqs: [
      {
        question: "How does the custom Express server integrate with Next.js 14?",
        answer: "The Express server boots first, initializes the Next.js application instance, attaches body-parsing and authentication middleware, routes API requests (/api/inquiry, /api/contact, /api/admin) through Express endpoints, and delegates page rendering to Next.js."
      },
      {
        question: "How does the automated 3-way email pipeline work for Mahadev Plastic?",
        answer: "When a buyer submits an inquiry, Nodemailer dispatches 3 customized HTML emails: a branded confirmation to the buyer, a detailed lead alert to the factory owner (mahadevplastic2019@gmail.com) with click-to-call CTAs, and a technical audit log to the agency."
      },
      {
        question: "How is security handled for the private Admin CMS?",
        answer: "Access to /admin is protected by HMAC-SHA256 signed session tokens. Requests without valid tokens are redirected to /admin/login, ensuring secure content and blog management."
      },
      {
        question: "What structured data is implemented for Mahadev Plastic products?",
        answer: "Every acrylic sheet page includes Product schema with SKU, MPN, brand, and AggregateOffer price ranges in INR, along with FAQPage schema for rich Google search snippet eligibility."
      }
    ]
  },

  {
    slug: "shreeji-sales-corporation",
    name: "Shreeji Sales Corporation — SIMPOVENT® Web Platform",
    shortName: "SIMPOVENT® Platform",
    headline: "Official B2B digital catalog, interactive CFM ventilation sizing platform, lead generation engine, and admin CMS for Shreeji Sales Corporation (Brand: Simpovent®, ISO 9001:2015).",
    category: "Business Websites",
    featured: true,
    badge: "B2B & Technical SEO",
    image: "/images/projects/shreeji-ventilator.png",
    imageAlt: "Shreeji Sales Corporation SIMPOVENT® B2B industrial web platform screenshot showing heavy duty roof extractors, CFM sizing calculator, and ISO 9001:2015 certification",
    githubUrl: "https://github.com/sohamaeer/shreeji-wind-ventilator",
    liveUrl: "https://shreejiwindventilator.com",
    role: "Full Stack Engineer & Technical SEO Specialist",
    timeline: "2024",
    client: "Shreeji Sales Corporation (SIMPOVENT®)",
    techStack: ["Next.js 15 (App Router)", "React 19", "Express.js 5", "TypeScript 5", "Tailwind CSS v4", "Nodemailer", "JSON Flat-File Store", "Technical SEO", "301 Redirects", "Schema.org (JSON-LD)"],
    overview: "The SIMPOVENT® platform is an enterprise-grade B2B web application engineered to drive high-intent commercial inquiries and rank top across national and regional search results for industrial ventilation searches. Established in 2005 in Vasai (East), Palghar, Maharashtra, Shreeji Sales Corporation is an ISO 9001:2015 certified manufacturer, exporter, and supplier of industrial wind-driven turbo roof ventilators, motorized hybrid extractors, and heavy-duty ventilation systems. The platform combines a 13-section conversion-driven homepage, 22 keyword-targeted root product pages (/[slug]), an interactive CFM sizing calculator, an automated 3-way email notification pipeline, a zero-database-overhead persistent JSON store, and an extensive Technical SEO suite with 50+ legacy 301 redirects and Schema.org rich snippets.",
    problem: "The client possessed an outdated legacy website (shreejiwindventilator.com) that ranked for valuable industrial keywords but suffered from high bounce rates, lack of mobile responsiveness, and zero interactive tools for factory architects. The challenge was to rebuild the entire platform on Next.js 15 while executing a flawless URL migration with 50+ legacy redirects, preserving historical Google rankings, providing real-time calculation tools, and generating high-intent commercial B2B leads.",
    responsibilities: [
      "Architected the Next.js 15 App Router frontend with React 19 and Tailwind CSS v4, building 13 modular conversion-driven sections on the homepage.",
      "Engineered 22 dynamic root-level keyword product pages (/[slug]) featuring technical specification tables (Throat Diameter, Outer Diameter, Vane Material, Bearing Make, MOC, Airflow CFM), working principles, ROI benefits, and watermarked factory galleries.",
      "Created the interactive CFM Ventilation Sizing Calculator (/calculator) implementing standard engineering formulas: Air Volume = L × W × H, Total CFM = (Air Volume × ACPH) / 60, and Ventilator Units Required based on preset ACPH ratings for 6 industrial categories.",
      "Built the standalone Express.js 5 backend microservice and Next.js serverless route (/api/inquiry) with automated 3-way HTML email dispatches (to Factory, Customer confirmation with WhatsApp link, and Internal Admin).",
      "Implemented a lightweight, zero-database-overhead JSON flat-file storage engine (src/data/store/) persisting leads, technical blogs, and system configuration.",
      "Audited and deployed 50+ permanent 301 redirects in next.config.mjs to preserve legacy backlinks and Google rankings during migration.",
      "Structured complete Schema.org JSON-LD data including Organization, LocalBusiness (with exact GPS coordinates: 19.3942109, 72.8611753), Product schema on all 22 products (AggregateRating 4.9 from 148 reviews), FAQPage schema, and BreadcrumbList.",
      "Targeted 15+ major industrial cities and MIDC/GIDC industrial corridors (Chakan, Bhosari, Vatva, Naroda, Sachin, Makarpura, Peenya, Sriperumbudur).",
      "Developed the secure Admin CMS & CRM portal (/admin) featuring an inquiry tracking dashboard, lead status pipeline (new → contacted → quoted → closed), and blog article editor."
    ],
    architecture: {
      frontend: "Next.js 15.2.1 App Router with React 19.2.8 and Tailwind CSS v4. Features Server Components for instant pre-rendered product catalogs and Client Components for the interactive CFM sizing calculator and inquiry modals.",
      backend: "Dual-layer backend architecture: Next.js serverless API routes paired with a standalone Express.js 5.2.1 microservice for independent health checks, CORS endpoints, and automated 3-way HTML email delivery via Nodemailer 9.0.6.",
      calculator: "Mathematical formula engine computing Air Volume (cu. ft.) = L × W × H, Total CFM = (Air Volume × ACPH) / 60, and required 21\" or 24\" units with ACPH presets for general engineering (15), warehouses (10), foundries (30), boiler rooms (25), chemical plants (20), and textile mills (18).",
      dataStore: "Zero-database-overhead flat-file JSON storage (src/data/store/) managing persistent customer quotation requests (leads.json), published technical guides (blogs.json), and dynamic contact/SMTP settings.",
      seo: "Comprehensive SEO architecture: 50+ legacy 301 redirects, Schema.org Organization, LocalBusiness, Product (4.9 rating / 148 reviews), FAQPage, dynamic XML sitemaps, robots.txt, and 15+ MIDC/GIDC regional industrial targeting.",
      admin: "Dedicated Admin CRM portal (/admin) with lead status pipeline (new, contacted, quoted, closed), blog CRUD editor, and system configuration manager."
    },
    keyFeatures: [
      "13-section conversion-driven homepage showcasing wind ventilators, motorized extractors, factory tours, and video demonstrations.",
      "22 keyword-targeted root product pages (/[slug]) optimized for top commercial search queries.",
      "Interactive CFM Ventilation Sizing Calculator with instant air volume and ventilator count estimation for 6 industrial presets.",
      "Automated 3-way HTML email notification pipeline delivering instant lead alerts to the factory, customer, and admin.",
      "Persistent flat-file JSON store with zero database maintenance overhead.",
      "Over 50 legacy 301 permanent redirects preserving historical Google indexing and backlink equity.",
      "Rich Schema.org structured data including LocalBusiness with exact coordinates and Product ratings (4.9/5 from 148 reviews).",
      "Protected Admin CMS & CRM portal with real-time lead status workflow and technical blog manager."
    ],
    technicalChallenges: [
      {
        challenge: "Migrating over 50 legacy URLs with varying PHP extensions and query strings without causing 404 drops or losing Google index equity.",
        solution: "Conducted a complete URL inventory of the legacy PHP site, mapped all legacy endpoints to clean root-level Next.js slugs, and configured comprehensive 301 permanent redirect rules in next.config.mjs."
      },
      {
        challenge: "Engineering an accurate, engineering-grade CFM sizing calculator that factory owners and MEP consultants can rely on.",
        solution: "Collaborated with Shreeji's manufacturing engineers to implement standard industrial ventilation formulas with dynamic ACPH presets and ceiling pitch multipliers, providing instant unit recommendations."
      },
      {
        challenge: "Eliminating database management overhead while ensuring reliable persistence for inbound leads and technical articles.",
        solution: "Architected a thread-safe JSON flat-file storage system in src/data/store/ with automated backup serialization, providing instant CRUD operations without database hosting costs."
      }
    ],
    seoImplementation: "Achieved zero 404 crawl errors during domain migration, mapped 50+ legacy URLs, deployed LocalBusiness, Product (4.9 rating), and FAQPage schemas, and achieved top organic rankings across 15+ MIDC/GIDC industrial corridors in Maharashtra, Gujarat, and Rajasthan.",
    faqs: [
      {
        question: "What formulas power the SIMPOVENT® CFM calculator?",
        answer: "The calculator computes Air Volume (L × W × H), Total CFM Required = (Air Volume × ACPH) / 60, and Recommended Units = ceil(Total CFM / CFM per unit: 1900 for 21\" or 2400 for 24\"), using verified industrial ACPH presets."
      },
      {
        question: "How does the automated 3-way email pipeline work?",
        answer: "When a lead submits an inquiry, Nodemailer dispatches 3 customized HTML emails simultaneously: one to the factory sales team with shed specs, one confirmation receipt to the customer with direct WhatsApp links, and one alert to the admin."
      },
      {
        question: "Why was a flat-file JSON store chosen instead of a SQL database?",
        answer: "For this specific B2B scale, the JSON store eliminates database hosting fees, connection pool overhead, and migration friction while remaining easily portable and completely version-controllable."
      },
      {
        question: "How was technical SEO structured across the 22 products?",
        answer: "Every product has a dedicated root-level slug matching commercial buyer search intent, complete with JSON-LD Product schema containing ISO 9001:2015 brand info, 4.9 rating, and dynamic Open Graph tags."
      }
    ]
  },

  {
    slug: "kavya-fragrances",
    name: "Kavya Fragrances — Luxury Perfume & Air Freshener Boutique",
    shortName: "Kavya Fragrances",
    headline: "Full-stack luxury fragrance platform featuring an interactive AI Scent Expert powered by Groq Llama 3.1 8B with climate-specific logic, Scent Pyramid education, and dynamic SEO suite.",
    category: "AI Integration",
    featured: true,
    badge: "AI & GenAI",
    image: "/images/projects/kavya-fragrances.webp",
    imageAlt: "Kavya Fragrances luxury website with Groq Llama 3.1 AI scent recommendation engine",
    githubUrl: "https://github.com/sohamaeer/kavya-fragrances",
    liveUrl: null,
    role: "Full Stack Developer & AI Integration Engineer",
    timeline: "2024",
    client: "Kavya Fragrances",
    techStack: ["React 18", "Vite", "React Router 7", "Node.js", "Express.js", "Groq Cloud SDK", "Llama 3.1 8B", "Nodemailer", "React Helmet Async", "Vanilla CSS3"],
    overview: "Kavya Fragrances is a premier full-stack luxury fragrance boutique application that blends 15+ years of traditional Indian aromatic wisdom with modern craftsmanship and artificial intelligence. Specializing in premium apparel perfumes and home air fresheners designed for long-lasting elegance and regional climate resilience across the Mumbai Metropolitan Region, the platform features an interactive AI Scent Expert powered by Groq Llama 3.1 8B, a detailed Scent Pyramid library (Top, Heart, Base notes), an automated Nodemailer lead pipeline, and an advanced SEO suite with PerfumeStore and ItemList schemas.",
    problem: "Choosing luxury perfumes online is challenging because visitors cannot physically sample scents before purchasing. The client needed an intelligent digital consultant that could guide shoppers to ideal fragrance families based on occasions, notes, and local environmental conditions, while establishing a strong digital brand and automated lead pipeline.",
    responsibilities: [
      "Built the responsive frontend with React 18, Vite, and React Router 7, designing a custom 'Luxury Boutique' aesthetic with smooth CSS3 keyframe animations.",
      "Integrated the Groq Cloud SDK running Meta's Llama 3.1 8B model on the Node.js backend to provide instantaneous, personalized scent recommendations.",
      "Engineered specialized climate-aware prompts that specifically consider Mumbai's tropical humidity when recommending long-lasting sillage and projection.",
      "Structured the Smart Scent Library educating consumers on olfactory pyramid composition (Top, Heart, and Base notes).",
      "Built the Express.js backend API with Nodemailer for automated lead notifications to the owners and instant auto-reply confirmation receipts to customers.",
      "Implemented a comprehensive SEO suite using React Helmet Async, dynamic canonical tags, Open Graph visual cards, and Schema.org PerfumeStore, ItemList, and FAQPage structured data."
    ],
    architecture: {
      frontend: "React 18 application built with Vite and React Router 7. Styled with pure Vanilla CSS3 keyframe animations and glassmorphism for a luxury boutique aesthetic without framework overhead.",
      aiInference: "Groq Cloud LPU inference running Meta Llama 3.1 8B via groq-sdk on Node.js, achieving response latencies under 500ms with custom context-aware system prompts.",
      backend: "Node.js and Express.js REST microservice handling AI consultation endpoints, payload validation, and Nodemailer email dispatch.",
      seo: "React Helmet Async dynamic meta management, Open Graph cards for WhatsApp and LinkedIn sharing, and Schema.org PerfumeStore and ItemList structured data.",
      leadEngine: "Automated 2-way email pipeline triggering owner alerts and customer confirmation receipts."
    },
    keyFeatures: [
      "AI Scent Expert: Interactive AI-driven sommelier powered by Groq Llama 3.1 8B via groq-sdk, delivering near-instantaneous personalized scent recommendations.",
      "Climate-Specific Olfactory Logic: AI specifically programmed to account for Mumbai's tropical and humid climate when recommending long-lasting fragrances with proper projection.",
      "Smart Scent Library: Detailed product catalog educating buyers on the classic Scent Pyramid (Top, Heart, and Base notes) and ideal occasion matching.",
      "Automated Lead & Inquiry Engine: Integrated 2-way contact system with instant owner alerts and formatted user auto-reply receipts via Nodemailer.",
      "Luxury Boutique UI/UX: Custom keyframe animations, rich aesthetic, responsive cards, and zero-framework pure CSS styling.",
      "Comprehensive SEO Suite: Dynamic meta tags via React Helmet Async, Open Graph link previews, and Schema.org PerfumeStore, ItemList, and FAQPage structured data."
    ],
    technicalChallenges: [
      {
        challenge: "Developing an AI fragrance consultant that accurately recommends scents suited to Mumbai's humid climate without hallucinating non-existent catalog items.",
        solution: "Engineered strict system prompts containing Kavya's exact product notes and base oil concentrations, with temperature/humidity heuristic rules instructing Llama 3.1 to prioritize citrus, aquatic, and woody base notes for humid weather."
      },
      {
        challenge: "Achieving instantaneous, conversational AI responses without keeping users waiting on a luxury storefront.",
        solution: "Implemented Groq Cloud LPU inference delivering over 300 tokens per second, cutting round-trip latency to under 500ms compared to traditional cloud LLM endpoints."
      },
      {
        challenge: "Ensuring high search visibility for local perfume searches across Mumbai and Palghar without server-side rendering.",
        solution: "Employed React Helmet Async to dynamically inject unique titles, meta descriptions, self-referential canonicals, and Schema.org PerfumeStore JSON-LD containing geo-coordinates."
      }
    ],
    seoImplementation: "Implemented comprehensive dynamic meta tags, Open Graph previews for rich WhatsApp sharing, and Schema.org PerfumeStore, ItemList, and FAQPage schemas, enhancing local search presence across Mumbai and Palghar.",
    faqs: [
      {
        question: "How does the AI Scent Expert recommend perfumes for Mumbai's climate?",
        answer: "The AI is programmed with climate-aware logic that factors in Mumbai's heat and humidity, recommending fragrances with higher heart and base note concentrations like sandalwood, amber, and musk for maximum longevity."
      },
      {
        question: "What model powers the AI fragrance consultant?",
        answer: "It uses Meta's Llama 3.1 8B hosted on Groq Cloud LPUs, accessed via the official groq-sdk on a Node.js Express backend for ultra-low latency."
      },
      {
        question: "What structured data is implemented for Kavya Fragrances?",
        answer: "The site implements Schema.org PerfumeStore schema with local business coordinates, ItemList schema for product collections, and FAQPage schema for Google rich search results."
      },
      {
        question: "How does the automated lead management work?",
        answer: "Customer inquiries submitted through the contact form immediately trigger two Nodemailer actions: an instant notification to the business owner and a formatted confirmation email to the customer."
      },
      {
        question: "Are API keys exposed to the client browser?",
        answer: "Never. All AI calls route through a secure Node.js backend proxy where the API key is injected from private environment variables."
      },
      {
        question: "What happens if a user submits an unrelated or abusive prompt?",
        answer: "The system prompt enforces strict role adherence, and backend sanitization filters input before it reaches the model."
      }
    ]
  },

  {
    slug: "pixelvault",
    name: "PixelVault — Full Stack E-Commerce Platform",
    shortName: "PixelVault",
    headline: "Full-stack digital e-commerce store engineered with Next.js, Node.js backend, Stripe checkout workflow, and responsive digital asset distribution.",
    category: "E-commerce",
    featured: true,
    badge: "Full Stack & Payments",
    image: "/images/projects/pixelvault.png",
    imageAlt: "PixelVault digital wallpaper and artwork e-commerce store homepage hero showcasing wallpaper packs and instant download checkout",
    githubUrl: "https://github.com/Sohamayer/pixelvault-wallpaper-store",
    liveUrl: null,
    role: "Full Stack Developer",
    timeline: "2024",
    client: "Digital Asset Store",
    techStack: ["Next.js", "React.js", "Node.js", "Express.js", "Stripe API", "MongoDB", "REST APIs", "CSS3"],
    overview: "PixelVault is a modern full-stack e-commerce application developed for high-resolution digital art and wallpaper collections. Built with Next.js and a Node.js backend, PixelVault integrates Stripe payment processing to enable instantaneous digital product checkout, cryptographic webhook verification for automated order fulfillment, and a responsive grid UI optimized for browsing high-resolution visual assets.",
    problem: "Selling digital assets requires instantaneous payment verification, immediate download token generation, and zero friction during checkout. The goal was to build a clean, secure purchasing flow that prevents unauthorized asset downloads while supporting credit card and digital wallet transactions.",
    responsibilities: [
      "Built the responsive Next.js frontend with dynamic category filtering and high-resolution asset previews.",
      "Integrated Stripe Checkout API and Payment Intents with client-side Stripe elements.",
      "Developed Express.js backend endpoints to process Stripe webhooks with cryptographic signature verification.",
      "Designed MongoDB schemas to record order histories, customer receipts, and secure expiring download URLs.",
      "Created responsive mobile layouts with smooth card transitions and instant search."
    ],
    architecture: {
      frontend: "Next.js application featuring responsive masonry grids, asset detail modals, and cart drawer.",
      backend: "Node.js/Express service handling payment sessions, webhook ingestion, and MongoDB persistence.",
      payments: "Stripe API with Payment Intents and signed webhook listener (`stripe-signature`).",
      database: "MongoDB document collection managing products, transaction logs, and customer orders."
    },
    keyFeatures: [
      "Stripe payment integration supporting credit cards, debit cards, and digital wallets.",
      "Cryptographically verified webhook handling for immediate order completion.",
      "High-resolution image preview grid with watermarking protection.",
      "Expiring, secure download tokens generated upon verified payment receipt.",
      "Responsive, clean UI with dark mode visual aesthetics tailored for creatives.",
      "Order confirmation workflow dispatching transactional email receipts."
    ],
    technicalChallenges: [
      {
        challenge: "Handling Stripe webhook deliveries reliably without duplicate order fulfillment.",
        solution: "Implemented idempotent webhook processing in Express by tracking processed Stripe `event.id` values in MongoDB before triggering asset fulfillment."
      },
      {
        challenge: "Preventing unauthorized direct downloads of high-resolution original artwork.",
        solution: "Public previews use compressed watermarked images; full-resolution files are served exclusively through time-limited signed URLs generated post-purchase."
      }
    ],
    seoImplementation: "Configured metadata for digital art collections, Open Graph rich image previews, and structured BreadcrumbList schemas.",
    faqs: [
      {
        question: "How are payments processed securely in PixelVault?",
        answer: "Payments are handled directly via Stripe Checkout and Stripe Elements. Sensitive card details never touch the application server, ensuring full PCI DSS compliance."
      },
      {
        question: "How does the store fulfill digital assets after payment?",
        answer: "Stripe sends a cryptographic webhook upon successful charge. The backend verifies the signature, marks the order complete, and generates a time-limited download link."
      },
      {
        question: "What database is used for storing order records?",
        answer: "MongoDB is used to store product details, customer purchase history, and transaction references."
      },
      {
        question: "Can PixelVault scale to physical goods in the future?",
        answer: "Yes. The modular architecture separates asset fulfillment logic from order processing, allowing shipping calculations and physical inventory to be integrated smoothly."
      }
    ]
  },

  {
    slug: "erpnext-vps-deployment",
    name: "ERPNext v15 Production Infrastructure Deployment",
    shortName: "ERPNext v15 Deployment",
    headline: "Multi-tenant enterprise ERPNext v15 infrastructure deployment on Ubuntu Linux VPS with MariaDB, Redis, Supervisor, and Nginx reverse proxy.",
    category: "DevOps & Infrastructure",
    featured: true,
    badge: "Enterprise DevOps",
    image: "/images/projects/erpnext.webp",
    imageAlt: "ERPNext v15 enterprise platform deployed on Ubuntu Linux with Nginx and MariaDB",
    githubUrl: null,
    liveUrl: null,
    role: "DevOps & Infrastructure Engineer",
    timeline: "2024",
    client: "Enterprise Deployment (Integral Web Solution)",
    techStack: ["Ubuntu Linux 22.04 LTS", "ERPNext v15", "Frappe Bench", "MariaDB", "Redis", "Supervisor", "Nginx", "Reverse Proxy", "SSL / Certbot", "Python / Node.js"],
    overview: "As part of enterprise infrastructure engineering at Integral Web Solution, I planned, deployed, and configured a multi-tenant ERPNext v15 instance on an Ubuntu 22.04 LTS server. ERPNext is a complex enterprise resource planning suite requiring an orchestrated ecosystem: MariaDB for transactional relational data, Redis for cache and background queues, Supervisor for process management, and Nginx for SSL reverse proxying and WebSocket routing.",
    problem: "The client required an enterprise-grade ERP system configured from source on a private Linux VPS to maintain complete data sovereignty, avoid expensive per-user SaaS licenses, and support custom business workflows across inventory, accounting, and HR departments.",
    responsibilities: [
      "Provisioned an Ubuntu 22.04 LTS Linux server and configured non-root administrative users and SSH key authentication.",
      "Configured MariaDB with Barracuda file formats, utf8mb4 character sets, and Frappe-specific buffer tuning.",
      "Installed and orchestrated Frappe Bench, ERPNext v15, and background worker queues using Redis.",
      "Configured Supervisor to manage background queue workers, scheduled tasks, and socketio services.",
      "Set up Nginx as a reverse proxy with Let's Encrypt SSL certificates, HTTP/2 protocol support, and WebSocket proxying.",
      "Diagnosed and resolved production issues including SSL conflicts, 403 Forbidden errors, and memory contention."
    ],
    architecture: {
      os: "Ubuntu 22.04 LTS with UFW firewall hardening (ports 22, 80, 443).",
      database: "MariaDB 10.6 with Barracuda format and optimized innodb_buffer_pool_size.",
      caching: "Redis cache, queue, and socket instances for background job coordination.",
      processManager: "Supervisor managing gunicorn web workers and Frappe background workers.",
      webServer: "Nginx reverse proxy terminating SSL and routing HTTP/WebSocket traffic to internal Frappe ports."
    },
    keyFeatures: [
      "Self-hosted enterprise ERPNext v15 platform with zero vendor lock-in.",
      "High-performance MariaDB configuration tuned for high transaction concurrency.",
      "Supervisor-managed background workers for automated billing, email queues, and reporting.",
      "Nginx reverse proxy with automated SSL renewal via Let's Encrypt Certbot.",
      "Automated database dump scripts scheduled via cron for daily disaster recovery.",
      "Optimized server resource utilization running smoothly within VPS memory constraints."
    ],
    technicalChallenges: [
      {
        challenge: "Resolving 403 Forbidden permission errors and SSL certificate conflicts during multi-tenant domain mapping.",
        solution: "Audited Nginx site blocks, adjusted POSIX permissions for the `frappe` user directory, and reissued isolated Let's Encrypt certificates per domain."
      },
      {
        challenge: "Managing memory consumption during heavy background queue jobs on a fixed-RAM VPS.",
        solution: "Tuned Redis worker concurrency and configured MariaDB buffer pool sizes to prevent out-of-memory (OOM) crashes during peak reporting intervals."
      }
    ],
    seoImplementation: "Secured enterprise login portals with strict HTTPS redirection, robots.txt disallowing private portal indexation, and security headers (HSTS, X-Frame-Options).",
    faqs: [
      {
        question: "What is ERPNext and why deploy it self-hosted?",
        answer: "ERPNext is a comprehensive open-source enterprise resource planning system. Self-hosting on a Linux VPS provides 100% data privacy, eliminates per-seat SaaS subscription fees, and allows deep custom code integration."
      },
      {
        question: "How do MariaDB and Redis interact in this infrastructure?",
        answer: "MariaDB stores all persistent company records (invoices, inventory, employee data), while Redis handles transient caching, session state, and background asynchronous job queues."
      },
      {
        question: "How is uptime and process recovery guaranteed?",
        answer: "Supervisor continuously monitors all Frappe services. If a worker process exits or crashes, Supervisor immediately respawns it, ensuring uninterrupted enterprise operations."
      },
      {
        question: "How are enterprise backups maintained?",
        answer: "Automated shell scripts trigger Frappe database dumps and file backups nightly via cron, compressing archives and storing them in isolated backup directories."
      }
    ]
  }
];
