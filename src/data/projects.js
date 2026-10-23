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
    slug: "integral-web-solution",
    name: "Integral Web Solution — Full Stack Production Website",
    shortName: "Integral Web Solution",
    headline: "Corporate full-stack web application featuring React frontend, Node.js backend, automated Nodemailer lead workflows, and Contabo Linux VPS deployment.",
    category: "Full Stack Applications",
    featured: true,
    badge: "Full Stack & DevOps",
    image: "/images/soham-aeer-workspace.webp",
    imageAlt: "Integral Web Solution production application development and Linux VPS server management",
    githubUrl: "https://github.com/Sohamayer/integral-web-solution",
    liveUrl: null,
    role: "Full Stack Developer & DevOps Engineer",
    timeline: "Nov 2025 – Present",
    client: "Integral Web Solution",
    techStack: ["React.js", "Node.js", "Express.js", "Nodemailer", "Ubuntu Linux", "Contabo VPS", "Apache", "Reverse Proxy", "PM2", "SSL / Certbot", "Technical SEO"],
    overview: "Integral Web Solution is a comprehensive corporate web application built to represent the company's full digital agency offerings, client portfolio, and lead-generation channels. Beyond frontend development in React, I built a secure Node.js backend to handle client inquiries, automated transactional notifications via Nodemailer, configured a self-hosted Contabo Linux VPS with Apache Virtual Hosts and reverse proxy routing, secured the domain with Let's Encrypt SSL, and managed daemon uptime via PM2.",
    problem: "The company required an authoritative, high-performance web platform capable of capturing corporate leads, delivering instant email confirmations to prospective clients, and running reliably on self-hosted VPS infrastructure alongside several other client staging sites without server conflicts or performance degradation.",
    responsibilities: [
      "Engineered the responsive React.js frontend interface with clean navigation and interactive service showcases.",
      "Built the Node.js/Express backend service to process lead submissions and automate two-way Nodemailer workflows.",
      "Provisioned and configured a Contabo Ubuntu Linux VPS with Apache Virtual Hosts, reverse proxy routing, and PM2 process management.",
      "Installed and automated Let's Encrypt SSL certificates with Certbot.",
      "Configured Google Workspace and Microsoft business email DNS records (MX, SPF, DKIM, DMARC) for seamless communication.",
      "Implemented on-page SEO, metadata, Open Graph cards, and XML sitemaps to drive corporate organic search visibility."
    ],
    architecture: {
      frontend: "React.js single-page application with modular component architecture and responsive CSS.",
      backend: "Node.js and Express.js REST server handling inquiry validation, rate limiting, and email dispatch.",
      mail: "Nodemailer transport integrated with company SMTP server delivering instant admin alerts and client receipts.",
      server: "Contabo Linux VPS (Ubuntu) running Apache with mod_proxy forwarding external traffic to PM2-managed Node daemon.",
      security: "UFW firewall configuration, SSL/TLS certificates via Certbot, and CORS origin restrictions."
    },
    keyFeatures: [
      "Responsive service showcase with interactive feature sections.",
      "Automated dual-email inquiry pipeline (instant company notification + branded user confirmation).",
      "Contabo Linux VPS hosting configured with Apache Virtual Hosts and reverse proxy.",
      "PM2 process daemon ensuring continuous 24/7 uptime and automated restart on system boot.",
      "Google Workspace & Microsoft 365 business email administration and DNS configuration.",
      "Comprehensive Technical SEO implementation targeting agency keywords."
    ],
    technicalChallenges: [
      {
        challenge: "Hosting multiple client domains on a single Contabo VPS without port conflicts or SSL collisions.",
        solution: "Configured individual Apache VirtualHost blocks for each domain, binding public ports 80/443 to internal application ports using `ProxyPass` and `ProxyPassReverse`, combined with domain-specific Certbot certificates."
      },
      {
        challenge: "Ensuring high transactional email deliverability and preventing spam folder classification.",
        solution: "Configured authentic SPF, DKIM, and DMARC TXT records in domain DNS and implemented sanitized HTML email templates with plain-text fallback alternatives."
      }
    ],
    seoImplementation: "Implemented targeted agency metadata, Open Graph preview tags, XML sitemap generation, and clean URL structure, contributing to visibility in corporate agency search results.",
    faqs: [
      {
        question: "What was your exact role on the Integral Web Solution project?",
        answer: "I served as the full-stack developer and infrastructure engineer: writing the React frontend, coding the Node.js backend, configuring the Contabo VPS, setting up Apache reverse proxies, and managing business email administration."
      },
      {
        question: "How is the Node.js backend managed on the Contabo VPS?",
        answer: "The Node.js backend runs under PM2 in cluster mode. Apache acts as the reverse proxy, terminating SSL and routing incoming requests to localhost:PORT."
      },
      {
        question: "How does the email notification system work?",
        answer: "When a lead fills out the contact form, the Node.js service validates the input and uses Nodemailer to dispatch an alert to the internal team and a confirmation receipt to the lead."
      },
      {
        question: "How were business emails configured for this project?",
        answer: "I managed business email setup via Google Workspace and Microsoft services, configuring MX, SPF, DKIM, and DMARC DNS records to ensure zero downtime and high inbox deliverability."
      }
    ]
  },

  {
    slug: "shreeji-sales-corporation",
    name: "Shreeji Sales Corporation — SIMPOVENT® B2B Web Platform",
    shortName: "SIMPOVENT® B2B",
    headline: "Enterprise B2B industrial platform built with Next.js, interactive CFM ventilation calculator, dynamic product catalog, and 50+ legacy 301 redirects.",
    category: "Business Websites",
    featured: true,
    badge: "B2B & Technical SEO",
    image: "/images/soham-aeer-profile.webp",
    imageAlt: "Shreeji Sales Corporation SIMPOVENT B2B industrial web platform",
    githubUrl: "https://github.com/Sohamayer/shreeji-wind-ventilator",
    liveUrl: null,
    role: "Full Stack Engineer & Technical SEO Specialist",
    timeline: "2024",
    client: "Shreeji Sales Corporation (SIMPOVENT®)",
    techStack: ["Next.js", "React.js", "Express.js", "Node.js", "Nodemailer", "Technical SEO", "301 Redirects", "JSON-LD Schema", "CFM Formula Engine"],
    overview: "Shreeji Sales Corporation is a prominent manufacturer of industrial wind ventilators under the SIMPOVENT® brand. I engineered their enterprise B2B web platform to drive industrial procurement leads across India and export markets. The platform includes an interactive CFM (Cubic Feet per Minute) air-exchange calculator allowing plant engineers to calculate ventilation requirements, dynamic product catalog pages, an administrative CMS workflow, and an advanced Technical SEO architecture featuring 50+ legacy 301 redirects to preserve historical search equity.",
    problem: "The client possessed an outdated legacy website that ranked for valuable industrial keywords but suffered from high bounce rates, lack of mobile responsiveness, and zero interactive tools for factory architects. The challenge was to rebuild the entire platform on Next.js while executing a flawless URL migration without losing historical Google rankings.",
    responsibilities: [
      "Developed the Next.js and React frontend featuring responsive product showcases and technical specifications.",
      "Created the interactive CFM ventilation calculator allowing industrial clients to determine exact roof ventilator units needed based on factory dimensions and air-change rates.",
      "Engineered the Express.js backend with automated quotation request routing via Nodemailer.",
      "Mapped and deployed 50+ legacy 301 permanent redirects to preserve backlink juice and search equity.",
      "Implemented comprehensive B2B Technical SEO: JSON-LD Product schema, canonical URLs, XML sitemaps, and optimized product metadata."
    ],
    architecture: {
      frontend: "Next.js with React Server Components for indexed product pages and client components for the CFM calculator tool.",
      calculator: "Custom JavaScript mathematical formula engine computing building volume, air changes per hour (ACH), and recommended ventilator quantities.",
      backend: "Express.js API endpoint handling quote submissions and technical inquiry logging.",
      seo: "Server-side metadata generation, Product and Organization JSON-LD schemas, and 50+ 301 redirect map."
    },
    keyFeatures: [
      "Custom CFM Ventilation Calculator tool tailored for industrial facility managers.",
      "Dynamic product specification tables and technical downloadable documentation.",
      "Lead generation forms connected to automated Nodemailer dispatch.",
      "50+ permanent 301 redirect mapping preventing crawl errors and 404 drops.",
      "Structured data implementation including Product, Organization, and BreadcrumbList schemas.",
      "High-contrast, responsive industrial design built for mobile and desktop screens."
    ],
    technicalChallenges: [
      {
        challenge: "Migrating over 50 legacy URLs with varying query strings and path patterns without causing ranking drops.",
        solution: "Conducted a complete URL inventory, mapped every legacy path to its modern Next.js equivalent, and deployed 301 permanent redirect rules at the server configuration level."
      },
      {
        challenge: "Developing an accurate CFM ventilation calculator that industrial engineers can trust.",
        solution: "Collaborated with the client's engineering team to codify standard ASHRAE air change formulas into an intuitive interactive calculator with instant visual feedback."
      }
    ],
    seoImplementation: "Achieved zero 404 crawl errors during migration, preserved backlink authority across 50+ URLs, and elevated targeted B2B keywords in industrial ventilation search queries.",
    faqs: [
      {
        question: "What makes the CFM calculator unique on this platform?",
        answer: "It allows factory owners to enter building dimensions (length, width, height) and industry type (foundry, warehouse, chemical plant) to calculate exact airflow requirements and ventilator unit counts automatically."
      },
      {
        question: "How did you manage 50+ redirects without slowing down the site?",
        answer: "Redirects were configured directly in the server layer using exact path matching, resolving within milliseconds before application execution."
      },
      {
        question: "What structured data was implemented for Shreeji Sales?",
        answer: "Organization schema for company credentials, Product schema with specifications for wind ventilators, and BreadcrumbList for multi-level navigation."
      },
      {
        question: "Is this platform optimized for mobile factory managers?",
        answer: "Yes. The entire user interface, including the CFM calculator and quotation forms, is fully responsive with large touch targets and rapid mobile load times."
      }
    ]
  },

  {
    slug: "kavya-fragrances",
    name: "Kavya Fragrances — AI-Powered Website",
    shortName: "Kavya Fragrances",
    headline: "Luxury fragrance web platform featuring an AI scent consultation engine powered by Groq Llama 3.1, automated inquiries, and search optimization.",
    category: "AI Integration",
    featured: true,
    badge: "AI & GenAI",
    image: "/images/projects/kavya-fragrances.webp",
    imageAlt: "Kavya Fragrances luxury website with Groq Llama 3.1 AI scent recommendation engine",
    githubUrl: "https://github.com/Sohamayer/kavya-fragrances",
    liveUrl: null,
    role: "Full Stack Developer & AI Integration Engineer",
    timeline: "2024",
    client: "Kavya Fragrances",
    techStack: ["React.js", "Node.js", "Express.js", "Groq Cloud API", "Llama 3.1", "Prompt Engineering", "Nodemailer", "Technical SEO"],
    overview: "Kavya Fragrances is a luxury perfume brand website designed to bridge artisan perfumery with modern artificial intelligence. The centerpiece of the application is an interactive AI Scent Consultation Assistant powered by Groq Cloud's ultra-fast LPU inference running Meta's Llama 3.1 model. Visitors describe their personal mood, preferred occasions, or favorite notes, and the AI delivers nuanced, personalized fragrance recommendations matched to the brand's catalog.",
    problem: "Choosing fragrances online is notoriously difficult because consumers cannot smell products through screens. The client needed an innovative digital experience that replicates an expert in-store fragrance sommelier, guiding shoppers to suitable scent profiles and converting casual visitors into qualified customer inquiries.",
    responsibilities: [
      "Engineered the luxury frontend UI with elegant typography, dark aesthetics, and smooth transitions.",
      "Integrated the Groq Cloud API running Llama 3.1 with tailored system prompts and few-shot perfume terminology.",
      "Built a secure Node.js backend proxy to protect API credentials and enforce rate limiting.",
      "Implemented an automated sample-request and custom fragrance order workflow using Nodemailer.",
      "Executed on-page SEO optimization for fragrance notes, artisan perfumery terms, and gifting keywords."
    ],
    architecture: {
      frontend: "React.js interactive application with chat-based AI recommendation modal and product showcase.",
      aiInference: "Groq Cloud API running Llama 3.1 with near-instantaneous token generation and custom olfactory system prompt.",
      backend: "Node.js/Express service proxying AI requests, validating input length, and dispatching Nodemailer notifications.",
      seo: "Product note schema, semantic HTML5 structure, and Open Graph visual tags."
    },
    keyFeatures: [
      "Interactive AI Scent Consultation Assistant powered by Groq Llama 3.1.",
      "Sub-second AI response generation using Groq's high-throughput LPU inference.",
      "Curated product catalog showcasing fragrance pyramid (top, heart, and base notes).",
      "Automated sample request pipeline connected to email dispatch.",
      "Input sanitization and prompt injection safeguards protecting the AI system.",
      "Responsive luxury UI designed for smartphone and desktop luxury shoppers."
    ],
    technicalChallenges: [
      {
        challenge: "Preventing hallucinations and keeping the LLM focused strictly on the brand's fragrance catalog.",
        solution: "Engineered a strict system prompt with few-shot examples and output constraints, instructing Llama 3.1 to act as an olfactory sommelier and gracefully decline unrelated queries."
      },
      {
        challenge: "Minimizing AI latency to maintain a snappy, conversational user experience.",
        solution: "Selected Groq Cloud for hardware-accelerated LPU inference, achieving response latencies under 600ms."
      }
    ],
    seoImplementation: "Implemented targeted fragrance metadata, structured product note hierarchies, and descriptive alt attributes, improving search visibility for artisan fragrance queries.",
    faqs: [
      {
        question: "Why was Groq Llama 3.1 chosen over OpenAI models?",
        answer: "Groq's LPU infrastructure provides dramatically faster inference speeds (hundreds of tokens per second) at lower cost, delivering an instantaneous consultation experience for shoppers."
      },
      {
        question: "How does the AI recommend fragrances without smelling them?",
        answer: "The AI maps user preferences (e.g., fresh, woody, evening, summer) against the fragrance pyramid data (top, middle, and base notes) embedded in the structured system prompt."
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
    image: "/images/soham-aeer-profile.webp",
    imageAlt: "PixelVault digital wallpaper and artwork e-commerce store",
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
