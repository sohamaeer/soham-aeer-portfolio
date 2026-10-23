export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, high-performance user interfaces with modern React, Next.js, and clean semantic markup.",
    skills: [
      { name: "JavaScript (ES6+)", slug: "javascript", level: "Advanced", primary: true },
      { name: "React.js", slug: "react-js", level: "Advanced", primary: true },
      { name: "Next.js (App Router)", slug: "next-js", level: "Advanced", primary: true },
      { name: "HTML5 & Semantic Markup", slug: "javascript", level: "Advanced", primary: false },
      { name: "CSS3 & Modern Layouts (Flexbox/Grid)", slug: "javascript", level: "Advanced", primary: false },
      { name: "Responsive Web Design", slug: "react-js", level: "Advanced", primary: false },
      { name: "React Helmet & Head Management", slug: "react-js", level: "Proficient", primary: false }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: "Server",
    description: "Engineering scalable server-side systems, RESTful APIs, and secure email workflows using Node.js and Express.",
    skills: [
      { name: "Node.js", slug: "node-js", level: "Advanced", primary: true },
      { name: "Express.js", slug: "express-js", level: "Advanced", primary: true },
      { name: "REST API Development", slug: "rest-api-development", level: "Advanced", primary: true },
      { name: "API Integrations & Webhooks", slug: "rest-api-development", level: "Advanced", primary: false },
      { name: "Nodemailer & Email Workflows", slug: "node-js", level: "Advanced", primary: false },
      { name: "Authentication & Authorization (OAuth 2.0 / PKCE)", slug: "shopify-headless-commerce", level: "Proficient", primary: false }
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Management",
    icon: "Database",
    description: "Designing relational and document-based data models with optimized query performance and consistency.",
    skills: [
      { name: "MongoDB", slug: "mongodb", level: "Proficient", primary: true },
      { name: "MySQL / MariaDB", slug: "mysql", level: "Proficient", primary: true },
      { name: "Firestore", slug: "mongodb", level: "Proficient", primary: false },
      { name: "Firebase Realtime DB", slug: "mongodb", level: "Proficient", primary: false }
    ]
  },
  {
    id: "devops",
    title: "DevOps & VPS Infrastructure",
    icon: "Terminal",
    description: "Configuring self-hosted Linux servers, reverse proxies, SSL certificates, PM2 process daemons, and DNS administration.",
    skills: [
      { name: "Linux & Ubuntu Server Management", slug: "linux-server-management", level: "Advanced", primary: true },
      { name: "VPS Deployment (Contabo / Cloud)", slug: "vps-deployment", level: "Advanced", primary: true },
      { name: "Nginx Reverse Proxy & Configuration", slug: "nginx-configuration", level: "Advanced", primary: true },
      { name: "Apache Virtual Hosts & Routing", slug: "apache-server-configuration", level: "Advanced", primary: true },
      { name: "SSL Certificates & Certbot Automation", slug: "vps-deployment", level: "Advanced", primary: false },
      { name: "PM2 Process Daemon Management", slug: "vps-deployment", level: "Advanced", primary: false },
      { name: "SSH & Git-Based Server Workflows", slug: "linux-server-management", level: "Advanced", primary: false },
      { name: "Domain, DNS, & Business Email Routing", slug: "vps-deployment", level: "Advanced", primary: false }
    ]
  },
  {
    id: "seo",
    title: "Technical SEO & Search Architecture",
    icon: "Search",
    description: "Architecting search engine crawlability, schema structured data, indexation rules, and performance audits for international reach.",
    skills: [
      { name: "Technical SEO Implementation", slug: "technical-seo", level: "Advanced", primary: true },
      { name: "Schema Markup & JSON-LD", slug: "schema-markup", level: "Advanced", primary: true },
      { name: "XML Sitemaps & Robots.txt Directives", slug: "technical-seo", level: "Advanced", primary: false },
      { name: "301 Redirect Architecture & Migrations", slug: "technical-seo", level: "Advanced", primary: false },
      { name: "On-Page SEO & Content Optimization", slug: "technical-seo", level: "Advanced", primary: false },
      { name: "International SEO (US & Middle East)", slug: "technical-seo", level: "Advanced", primary: false }
    ]
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Headless Architecture",
    icon: "ShoppingBag",
    description: "Integrating modern headless commerce systems, GraphQL APIs, custom checkouts, and payment gateways.",
    skills: [
      { name: "Shopify Headless Commerce", slug: "shopify-headless-commerce", level: "Advanced", primary: true },
      { name: "Shopify Storefront API & GraphQL", slug: "shopify-headless-commerce", level: "Advanced", primary: true },
      { name: "Stripe Payment Gateway Integration", slug: "rest-api-development", level: "Proficient", primary: false },
      { name: "GST-Aware Pricing & Currency Logic", slug: "shopify-headless-commerce", level: "Proficient", primary: false }
    ]
  },
  {
    id: "ai",
    title: "AI & LLM API Integration",
    icon: "Cpu",
    description: "Connecting state-of-the-art open-source LLMs to web applications to create context-aware user experiences.",
    skills: [
      { name: "AI & LLM API Integration", slug: "ai-api-integration", level: "Proficient", primary: true },
      { name: "Groq Cloud & Llama 3.1 Inference", slug: "ai-api-integration", level: "Proficient", primary: true },
      { name: "Prompt Engineering & Response Parsing", slug: "ai-api-integration", level: "Proficient", primary: false },
      { name: "Context Window & Token Handling", slug: "ai-api-integration", level: "Proficient", primary: false }
    ]
  },
  {
    id: "tools",
    title: "Tools & Production Troubleshooting",
    icon: "Wrench",
    description: "Version control, API test suites, server debugging, and diagnostic methodologies for live production outages.",
    skills: [
      { name: "Git & GitHub Collaboration", slug: "linux-server-management", level: "Advanced", primary: false },
      { name: "Postman & REST Verification", slug: "rest-api-development", level: "Advanced", primary: false },
      { name: "SSL Conflict & 403 Troubleshooting", slug: "vps-deployment", level: "Advanced", primary: false },
      { name: "Server Resource Monitoring (top / htop / logs)", slug: "linux-server-management", level: "Advanced", primary: false }
    ]
  }
];

export const skillDetails = {
  "javascript": {
    slug: "javascript",
    name: "JavaScript (ES6+)",
    category: "Frontend & Backend Core",
    badge: "Core Language",
    h1: "JavaScript (ES6+) Engineering for Robust Full-Stack Applications",
    summary: "Modern JavaScript architecture spanning asynchronous execution, event loop mechanics, modular ES modules, and DOM optimization across frontend and backend environments.",
    description: "JavaScript serves as the core foundation across my entire development stack. Rather than relying on heavyweight abstractions or uncontrolled utility libraries, I write clean, modern ES6+ code that leverages native language features: async/await, Promises, destructuring, optional chaining, functional array pipelines, and proper closure scope. I understand how JavaScript executes in both browser runtimes (V8, WebKit) and server runtimes (Node.js event loop, libuv thread pool), ensuring zero memory leaks and predictable concurrency.",
    howIUse: [
      "Building high-performance client-side interactivity without relying on unnecessary external DOM packages.",
      "Writing robust asynchronous orchestration logic for REST APIs, database queries, and external API gateways.",
      "Handling edge cases in data parsing, serialization, and defensive validation across client and server boundaries.",
      "Structuring modular codebases following clean architecture principles, ES module standards, and strict error propagation."
    ],
    implementationConcepts: [
      "Event Loop, microtask queues (Promises) vs macrotask queues (setTimeout, I/O)",
      "Deep immutability patterns, structuredClone, and memoization techniques",
      "Asynchronous error handling with try/catch/finally and custom error subclasses",
      "Module pattern, tree-shakable exports, and dynamic imports for bundle size reduction"
    ],
    relatedTech: ["Node.js", "React.js", "Next.js", "Express.js", "REST APIs"],
    relatedProjects: ["integral-web-solution", "shreeji-sales-corporation", "fitcart", "pixelvault"],
    businessValue: "Clean, idiomatic JavaScript reduces application bundle size, speeds up initial page load, minimizes client crashes, and lowers long-term maintenance overhead for production teams.",
    faqs: [
      {
        question: "How do you ensure JavaScript code quality without a heavy compile step?",
        answer: "By strictly utilizing ES6+ standards, linting rules, defensive type-checking at network boundaries, modular function design, and comprehensive manual testing in real browser environments."
      },
      {
        question: "How do you handle complex asynchronous flows in Node.js and the browser?",
        answer: "I structure async workflows using clean async/await syntax, Promise.allSettled for parallel non-blocking execution, and proper timeout/abort controllers (AbortController) to prevent hanging server connections."
      },
      {
        question: "Do you write vanilla JavaScript when frameworks are not necessary?",
        answer: "Yes. For lightweight utilities, DOM manipulations, calculations (such as CFM formulas), and custom event listeners, vanilla JavaScript ensures zero dependencies and lightning-fast execution."
      },
      {
        question: "How do you prevent memory leaks and event listener accumulation?",
        answer: "I ensure all event listeners are systematically detached upon component unmount, avoid global scope pollution, leverage WeakMaps/WeakSets for transient references, and inspect heap snapshots during load testing."
      }
    ],
    seo: {
      title: "JavaScript (ES6+) Developer | Soham Aeer Portfolio",
      description: "Explore Soham Aeer's JavaScript (ES6+) engineering capabilities, asynchronous patterns, and full-stack development experience across React and Node.js.",
      keywords: ["JavaScript developer", "ES6+ engineer", "modern JavaScript", "asynchronous JavaScript", "full stack JavaScript India"]
    }
  },

  "react-js": {
    slug: "react-js",
    name: "React.js",
    category: "Frontend Development",
    badge: "Core Frontend Library",
    h1: "React.js Component Architecture & State Management",
    summary: "Architecting modular, accessible, and high-performance user interfaces using React functional components, custom hooks, and optimized rendering lifecycles.",
    description: "My approach to React.js is centered around clarity, reusability, and rendering efficiency. Having built production platforms like the Integral Web Solution corporate portal and the Shreeji Sales Corporation platform, I design declarative components with clear separation between container logic and presentational UI. I avoid excessive re-renders by utilizing clean state colocation, useMemo, useCallback, and custom hooks for shared domain logic.",
    howIUse: [
      "Developing component systems with composable layouts, controlled forms, and accessible modal dialogs.",
      "Authoring custom React hooks to isolate complex logic like media query detection, local storage sync, and debounce timing.",
      "Optimizing rendering cycles to eliminate jank during user interactions and data-heavy table rendering.",
      "Integrating client-side metadata management and SEO tags using React Helmet in single-page applications."
    ],
    implementationConcepts: [
      "Custom Hooks for business logic isolation and state synchronization",
      "Controlled vs uncontrolled inputs with robust validation and accessibility states",
      "Virtual DOM reconciliation, key prop best practices, and memoization strategies",
      "Context API for scoped theme and global user preference states without bloat"
    ],
    relatedTech: ["Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "React Helmet"],
    relatedProjects: ["integral-web-solution", "shreeji-sales-corporation", "fitcart"],
    businessValue: "Modular React components enable rapid feature development, consistent brand design systems across platforms, and snappy user interfaces that drive higher conversion and retention.",
    faqs: [
      {
        question: "What state management approach do you prefer in React applications?",
        answer: "I prioritize colocating state as close to the consuming component as possible. For application-wide settings like theme toggling, React Context is ideal; for form states, controlled components with localized state minimize unnecessary re-renders."
      },
      {
        question: "How do you prevent unnecessary re-renders in complex React interfaces?",
        answer: "By keeping component boundaries tight, passing primitive props when possible, stabilizing callback references with useCallback, memoizing expensive computational tasks with useMemo, and avoiding inline object literals in render props."
      },
      {
        question: "How do you handle SEO in pure React Single Page Applications (SPAs)?",
        answer: "In pure React SPAs, I implement React Helmet for dynamic document titles, Open Graph tags, and canonical links. For search-critical client applications, I migrate or architect the project on Next.js for server-rendered HTML."
      },
      {
        question: "How do you test and debug React components during development?",
        answer: "I utilize React Developer Tools to inspect component trees, verify prop changes, profile render performance, and validate network calls in browser developer panels."
      }
    ],
    seo: {
      title: "React.js Developer | Soham Aeer Portfolio",
      description: "Discover Soham Aeer's React.js expertise, custom hook design, UI component architecture, and production frontend engineering skills.",
      keywords: ["React.js developer", "React developer India", "frontend React engineer", "custom React hooks", "React UI development"]
    }
  },

  "next-js": {
    slug: "next-js",
    name: "Next.js (App Router)",
    category: "Full-Stack Framework",
    badge: "Production Framework",
    h1: "Next.js Full-Stack Engineering, App Router & Server Components",
    summary: "Building production-grade, SEO-optimized web applications with Next.js App Router, React Server Components, serverless Route Handlers, and Edge caching.",
    description: "Next.js is my primary framework for production full-stack development. I leverage the App Router paradigm to achieve optimal performance through React Server Components (RSC), delivering zero-bundle-size server rendering alongside interactive client components only where strictly necessary. I utilize Next.js nested layouts, dynamic route parameters, server actions/route handlers, metadata generation APIs, and image optimization pipelines.",
    howIUse: [
      "Engineering full-stack web applications with server-side rendered (SSR) and static site generated (SSG) pages.",
      "Implementing serverless Route Handlers (`/api/*`) for form submissions, automated email routing, and webhook ingestion.",
      "Generating dynamic, search-engine-ready metadata, Open Graph cards, and JSON-LD schema using Next.js Metadata API.",
      "Deploying and optimizing Next.js applications seamlessly on Vercel and VPS Linux environments."
    ],
    implementationConcepts: [
      "React Server Components (RSC) vs Client Components ('use client') boundary discipline",
      "Dynamic Route Handlers (`route.js`) with request validation and JSON streaming",
      "Next.js Metadata API (`generateMetadata`) and dynamic sitemap generation (`sitemap.js`)",
      "Next.js `<Image>` optimization with modern WebP conversion and responsive `sizes` attributes"
    ],
    relatedTech: ["React.js", "Node.js", "Technical SEO", "Shopify Storefront API", "Vercel"],
    relatedProjects: ["fitcart", "shreeji-sales-corporation", "pixelvault"],
    businessValue: "Next.js provides out-of-the-box Core Web Vitals optimization, flawless search engine indexability, reduced server infrastructure costs, and instant global deployments.",
    faqs: [
      {
        question: "When do you use Server Components versus Client Components in Next.js?",
        answer: "I default to Server Components for data fetching, static content rendering, and SEO metadata to ship zero JavaScript to the client. I only introduce 'use client' when user interaction, state hooks (useState/useEffect), or browser APIs are required."
      },
      {
        question: "How do you manage Technical SEO and dynamic metadata in Next.js?",
        answer: "I utilize the native Next.js `metadata` object and `generateMetadata` function. This produces clean title templates, canonical URLs, robots directives, and Open Graph previews directly in the server-rendered HTML."
      },
      {
        question: "Can Next.js applications be deployed on self-hosted Linux VPS servers?",
        answer: "Yes. While Next.js deploys effortlessly on Vercel, I have also configured Next.js standalone builds on Ubuntu VPS environments using PM2 for process monitoring and Nginx/Apache as a reverse proxy."
      },
      {
        question: "How does Next.js handle API endpoints without a separate Express server?",
        answer: "Through Route Handlers (`app/api/.../route.js`). These export standard HTTP verbs (GET, POST, etc.) and run on Vercel's serverless runtime, allowing full backend tasks like Nodemailer email delivery without maintaining a separate VM."
      }
    ],
    seo: {
      title: "Next.js Full-Stack Developer | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer develops scalable full-stack applications with Next.js App Router, Server Components, SEO optimization, and API route handlers.",
      keywords: ["Next.js developer", "Next.js App Router", "React Server Components", "Next.js SEO", "full stack Next.js developer"]
    }
  },

  "node-js": {
    slug: "node-js",
    name: "Node.js",
    category: "Backend Development",
    badge: "Server Runtime",
    h1: "Node.js Server Architecture, Async Processing & Backend Services",
    summary: "Developing non-blocking, event-driven server applications, custom middleware, automated email delivery pipelines, and production REST APIs on Node.js.",
    description: "Node.js is the backbone of my server-side development. I utilize its asynchronous, single-threaded event loop to build responsive backends that handle concurrent I/O operations with minimal memory consumption. From building custom email dispatch engines using Nodemailer to crafting secure authentication middleware, I write resilient server-side code with clean error handling, environment security, and graceful shutdown lifecycles.",
    howIUse: [
      "Architecting modular RESTful micro-services and backend endpoints for web applications.",
      "Building transactional email systems with Nodemailer, HTML email templates, and delivery logging.",
      "Managing server processes and daemon lifecycles with PM2 on Ubuntu Linux servers.",
      "Implementing server-side input sanitization, rate limiting, and CORS security policies."
    ],
    implementationConcepts: [
      "Non-blocking I/O and asynchronous event emitter architecture",
      "Process management, environment configuration via dotenv, and zero-downtime reloads",
      "Stream processing and buffer management for file handling and network requests",
      "Graceful degradation and centralized error handling middleware"
    ],
    relatedTech: ["Express.js", "JavaScript (ES6+)", "Nodemailer", "Linux", "PM2"],
    relatedProjects: ["integral-web-solution", "shreeji-sales-corporation", "pixelvault"],
    businessValue: "Node.js ensures rapid API response times, shared language semantics between frontend and backend, and low server resource overhead on production VPS hosting.",
    faqs: [
      {
        question: "How do you ensure Node.js server stability under unexpected runtime errors?",
        answer: "I structure applications with centralized error handling middleware, handle unhandledRejection and uncaughtException events defensively, and run production instances under PM2 to automatically restart faulted workers."
      },
      {
        question: "How do you handle sensitive configuration in Node.js applications?",
        answer: "All secrets, SMTP credentials, and API tokens are loaded strictly via environment variables, validated at server startup, and excluded from version control via rigorous .gitignore rules."
      },
      {
        question: "What is your approach to email dispatch in Node.js?",
        answer: "I use Nodemailer configured with secure SMTP transports (TLS/SSL). I implement server-side validation, rate limiting, dual-email workflows (admin alert + client confirmation), and sanitized HTML templates."
      },
      {
        question: "How do you deploy and monitor Node.js applications on Linux VPS servers?",
        answer: "I set up Ubuntu VPS environments, configure PM2 with an ecosystem file for clustering and memory limits, and route web traffic through an Nginx or Apache reverse proxy with SSL certificates."
      }
    ],
    seo: {
      title: "Node.js Backend Developer | Soham Aeer Portfolio",
      description: "Explore Soham Aeer's Node.js backend engineering expertise, server architecture, automated email workflows, and PM2 production deployment.",
      keywords: ["Node.js developer", "Node.js backend engineer", "Node.js REST API", "Nodemailer developer", "Node.js VPS deployment"]
    }
  },

  "express-js": {
    slug: "express-js",
    name: "Express.js",
    category: "Backend Development",
    badge: "Web Framework",
    h1: "Express.js RESTful API Design & Custom Middleware",
    summary: "Designing structured, secure, and maintainable REST APIs with Express.js routing, custom middleware pipelines, CORS protection, and request validation.",
    description: "Express.js is my preferred minimalist backend framework when building standalone Node.js services. I design clean API architectures using modular routers, controller-service patterns, and composable middleware functions. From enforcing CORS origins and rate limits to validating JSON payloads before reaching business logic, I build Express APIs that are robust against malicious or malformed requests.",
    howIUse: [
      "Constructing RESTful endpoints for corporate portals, lead capture systems, and admin CMS backends.",
      "Writing custom middleware for authentication checks, payload verification, and request logging.",
      "Configuring CORS policies and security headers to protect APIs from unauthorized origins.",
      "Integrating third-party webhooks (such as Stripe payments) with raw body parsing."
    ],
    implementationConcepts: [
      "Router modularization separating route definitions from controller business logic",
      "Middleware chaining and pipeline execution sequence (logger -> auth -> validator -> handler)",
      "Secure header configuration using helmet and custom CSP directives",
      "JSON payload size limits and honeypot spam protection"
    ],
    relatedTech: ["Node.js", "REST APIs", "Nodemailer", "MySQL", "MongoDB"],
    relatedProjects: ["integral-web-solution", "shreeji-sales-corporation", "pixelvault"],
    businessValue: "Express provides a lightweight, battle-tested framework with zero runtime bloat, allowing customized API routing and effortless integration with existing enterprise systems.",
    faqs: [
      {
        question: "How do you organize the file structure of an Express.js application?",
        answer: "I separate concerns into controllers, routes, middleware, services, and config directories. This ensures business logic remains testable and decoupled from HTTP routing."
      },
      {
        question: "How do you secure Express APIs against common vulnerabilities?",
        answer: "By enforcing strict CORS origins, rate limiting brute-force endpoints, sanitizing request parameters to prevent injection, enforcing HTTPS, and never exposing stack traces in production error responses."
      },
      {
        question: "How does Express integrate with Next.js in production?",
        answer: "Express can serve as an independent microservice backend accessed via REST endpoints, or Next.js Route Handlers can replicate Express functionality directly inside Vercel's serverless environment."
      },
      {
        question: "How do you handle file uploads or heavy payloads in Express?",
        answer: "By setting appropriate payload limits on `express.json()` and utilizing streaming multipart parsers with strict MIME-type and size validation."
      }
    ],
    seo: {
      title: "Express.js Backend Developer | Soham Aeer Portfolio",
      description: "Discover Soham Aeer's Express.js API development experience, custom middleware pipelines, security best practices, and Node.js backend integration.",
      keywords: ["Express.js developer", "Express REST API", "Node Express developer", "backend API design", "Express middleware"]
    }
  },

  "rest-api-development": {
    slug: "rest-api-development",
    name: "REST API Development",
    category: "Backend & Integration",
    badge: "Architecture & Integration",
    h1: "REST API Architecture, Third-Party Integrations & Webhooks",
    summary: "Architecting predictable, resource-oriented RESTful web APIs with consistent status codes, pagination, authentication, and third-party service integrations.",
    description: "I design and consume REST APIs built on clean architectural standards. I adhere to semantic HTTP methods (GET, POST, PUT, PATCH, DELETE), clear resource naming conventions, standardized JSON response envelopes, and descriptive HTTP status codes. My experience includes integrating third-party APIs such as Stripe payment processing, Groq AI inference, Shopify Storefront endpoints, and custom email dispatch gateways.",
    howIUse: [
      "Designing clean API contracts with documented endpoints, query parameters, and JSON payloads.",
      "Integrating Stripe checkout workflows and payment intent verification.",
      "Connecting AI inference endpoints (Groq Cloud) with streaming or synchronous responses.",
      "Consuming GraphQL and REST services from headless e-commerce platforms."
    ],
    implementationConcepts: [
      "Idempotency patterns for payment and critical creation operations",
      "Standardized error response formats with machine-readable error codes",
      "Rate limiting, pagination (cursor/offset), and filtering parameters",
      "Webhook signature verification (e.g., Stripe cryptographic webhook verification)"
    ],
    relatedTech: ["Node.js", "Express.js", "Next.js", "Stripe API", "GraphQL"],
    relatedProjects: ["shreeji-sales-corporation", "pixelvault", "fitcart", "kavya-fragrances"],
    businessValue: "Clean, well-documented REST APIs streamline communication between frontend apps, mobile clients, and third-party services, reducing integration friction and debugging time.",
    faqs: [
      {
        question: "What HTTP status codes do you use for API error conditions?",
        answer: "I use 400 for bad requests, 401 for unauthenticated calls, 403 for forbidden access, 404 for missing resources, 422 for unprocessable entities (validation errors), 429 for rate limiting, and 500 for internal server errors."
      },
      {
        question: "How do you handle API security and token validation?",
        answer: "I validate authentication headers using Bearer tokens, enforce HTTPS for all transit, and hash sensitive payloads before transmission."
      },
      {
        question: "How do you test REST APIs before production release?",
        answer: "I test endpoints with Postman and automated cURL scripts, verifying happy paths, validation failures, edge cases, and rate limit thresholds."
      },
      {
        question: "What is your approach to third-party webhook handling?",
        answer: "I verify cryptographic webhook signatures using the raw request body before processing, acknowledge receipt with immediate 200 OK responses, and dispatch tasks asynchronously to prevent timeout."
      }
    ],
    seo: {
      title: "REST API Developer & Integrator | Soham Aeer Portfolio",
      description: "Explore Soham Aeer's REST API architecture, third-party payment and AI integrations, webhook processing, and backend service design.",
      keywords: ["REST API developer", "API integration engineer", "Stripe integration developer", "Node.js API development", "webhook development"]
    }
  },

  "mongodb": {
    slug: "mongodb",
    name: "MongoDB",
    category: "Databases & Data",
    badge: "Document Database",
    h1: "MongoDB Document Modeling, Indexing & Data Persistence",
    summary: "Designing flexible, high-throughput document schemas in MongoDB with index optimization, aggregation pipelines, and reliable connection pooling.",
    description: "I utilize MongoDB for data-driven applications that require flexible schema evolution, nested document structures, or fast write throughput. I design document models that balance embedding versus referencing depending on data read/write patterns. By defining compound indexes and optimizing aggregation pipelines, I ensure low-latency data access even as data volume scales.",
    howIUse: [
      "Modeling product catalogs, user profiles, content management records, and application logs.",
      "Constructing aggregation pipelines for real-time reporting, filtering, and faceted search.",
      "Configuring MongoDB connection pools in Node.js server environments to prevent connection exhaustion.",
      "Implementing schema validation and indexing strategies to ensure data consistency."
    ],
    implementationConcepts: [
      "Document embedding vs referencing trade-offs based on 1:N and N:M cardinality",
      "Index strategy: single field, compound, unique, and text search indexes",
      "Aggregation framework stages: `$match`, `$group`, `$lookup`, `$project`, `$sort`",
      "Connection pooling and disconnection resilience in containerized and serverless environments"
    ],
    relatedTech: ["Node.js", "Express.js", "MySQL", "Firestore", "REST APIs"],
    relatedProjects: ["integral-web-solution", "pixelvault", "shreeji-sales-corporation"],
    businessValue: "MongoDB allows agile feature iterations with schema flexibility while delivering high-speed document retrieval and rich aggregation for modern web applications.",
    faqs: [
      {
        question: "When do you choose MongoDB over a relational database like MySQL?",
        answer: "I choose MongoDB when the data structure is inherently hierarchical or polymorphic (e.g., dynamic product attributes, JSON payloads), when rapid schema evolution is needed, or for high-write logging scenarios."
      },
      {
        question: "How do you prevent MongoDB performance degradation?",
        answer: "By creating proper compound indexes matching frequent query predicates, avoiding large unindexed scans (`COLLSCAN`), projecting only required fields, and keeping document sizes well below the 16MB limit."
      },
      {
        question: "How do you handle transactions in MongoDB?",
        answer: "For multi-document updates that require strict atomicity, I use MongoDB multi-document ACID transactions with session management."
      },
      {
        question: "How do you manage database connections in serverless environments?",
        answer: "In serverless environments like Next.js Route Handlers, I cache the database client across invocation contexts to avoid repeatedly opening new TCP sockets on each request."
      }
    ],
    seo: {
      title: "MongoDB Developer | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer designs MongoDB document schemas, manages indexes, builds aggregation queries, and connects Node.js backend services.",
      keywords: ["MongoDB developer", "NoSQL database developer", "MongoDB schema design", "Node.js MongoDB", "MongoDB aggregation"]
    }
  },

  "mysql": {
    slug: "mysql",
    name: "MySQL / MariaDB",
    category: "Databases & Data",
    badge: "Relational Database",
    h1: "MySQL & MariaDB Relational Architecture & Production Deployment",
    summary: "Designing normalized relational schemas, foreign key constraints, ACID-compliant transactions, and optimizing MariaDB on Linux VPS servers.",
    description: "MySQL and MariaDB are foundational relational databases in my engineering toolkit. In my production work at Integral Web Solution—including deploying multi-tenant enterprise ERPNext v15 instances—I have configured, tuned, and maintained MariaDB on Ubuntu servers. I focus on normalized schema design, indexing primary and foreign keys, executing safe schema migrations, and managing secure database users.",
    howIUse: [
      "Configuring MariaDB server instances on Ubuntu VPS with strict character sets (utf8mb4) and buffer sizing.",
      "Designing relational schemas for order management, lead generation, and customer accounts.",
      "Managing database backups, dump automation, and restoration procedures.",
      "Optimizing SQL queries to eliminate slow queries and index locks."
    ],
    implementationConcepts: [
      "Relational schema normalization (3NF) and foreign key referential integrity",
      "InnoDB storage engine tuning, `innodb_buffer_pool_size`, and connection limits",
      "Automated cron-based mysqldump backups and offsite sync",
      "Parameterized SQL statements to completely prevent SQL injection vulnerabilities"
    ],
    relatedTech: ["Linux & Ubuntu", "MariaDB", "Node.js", "ERPNext v15", "VPS Deployment"],
    relatedProjects: ["erpnext-vps-deployment", "shreeji-sales-corporation"],
    businessValue: "Relational integrity guarantees that critical financial, customer, and enterprise data remains perfectly consistent without anomalies or orphaned records.",
    faqs: [
      {
        question: "What was your role with MariaDB in the ERPNext v15 deployment?",
        answer: "I configured MariaDB on Ubuntu 22.04 LTS, setting up custom `my.cnf` configurations for Frappe Bench requirements, tuning buffer pool memory, configuring Barracuda file formats, and securing database access."
      },
      {
        question: "How do you prevent SQL injection attacks in production applications?",
        answer: "I exclusively use parameterized queries and prepared statements, ensuring user input is never concatenated directly into raw SQL strings."
      },
      {
        question: "How do you schedule automated database backups on a VPS?",
        answer: "I set up automated shell scripts triggered by cron jobs that run `mysqldump` with gzip compression, retain rotating timestamped archives, and verify backup file integrity."
      },
      {
        question: "How do you identify and fix slow database queries?",
        answer: "I enable the MySQL slow query log (`slow_query_log=1`), set an execution time threshold, and analyze queries using `EXPLAIN` to identify missing indexes or inefficient table scans."
      }
    ],
    seo: {
      title: "MySQL & MariaDB Database Specialist | Soham Aeer Portfolio",
      description: "Explore Soham Aeer's MySQL and MariaDB relational database design, query optimization, and enterprise ERPNext server administration skills.",
      keywords: ["MySQL developer", "MariaDB administrator", "relational database engineer", "ERPNext MariaDB", "SQL optimization"]
    }
  },

  "vps-deployment": {
    slug: "vps-deployment",
    name: "VPS Deployment (Contabo / Linux)",
    category: "DevOps & Infrastructure",
    badge: "Production DevOps",
    h1: "Linux VPS Deployment, Multi-Domain Hosting & PM2 Management",
    summary: "Deploying and managing production web applications on self-hosted Linux VPS environments (Contabo, Ubuntu) with SSL, reverse proxies, and zero downtime.",
    description: "VPS hosting and infrastructure management is one of my strongest differentiators as a full-stack engineer. Rather than relying exclusively on managed PaaS platforms, I have hands-on experience provisioning, configuring, and securing Linux Virtual Private Servers (such as Contabo VPS). I configure reverse proxies, set up Virtual Hosts for multiple live domains, automate SSL provisioning with Certbot, and manage background Node.js processes using PM2.",
    howIUse: [
      "Provisioning clean Ubuntu server installations, setting up non-root sudo users, and SSH key pairs.",
      "Configuring Apache and Nginx reverse proxies to route multiple live domains to different internal port daemons.",
      "Managing Node.js applications with PM2, including cluster mode, startup scripts, and memory restart thresholds.",
      "Configuring DNS A records, CNAME records, SPF, DKIM, and DMARC for company domains."
    ],
    implementationConcepts: [
      "Reverse proxy forwarding from external port 80/443 to internal application ports (3000, 5000, 8000)",
      "Automated Let's Encrypt SSL/TLS certificates via Certbot with automatic cron renewal",
      "UFW (Uncomplicated Firewall) setup allowing only ports 22, 80, and 443",
      "Zero-downtime application deployments via Git hooks and PM2 reload"
    ],
    relatedTech: ["Linux & Ubuntu", "Nginx", "Apache", "PM2", "SSL / Certbot"],
    relatedProjects: ["integral-web-solution", "erpnext-vps-deployment"],
    businessValue: "Self-hosted VPS environments reduce ongoing cloud hosting costs by up to 80% while providing complete control over server hardware, security policies, and application topology.",
    faqs: [
      {
        question: "What VPS providers have you worked with in production?",
        answer: "I have extensive hands-on experience with Contabo VPS hosting on Ubuntu Linux, as well as cloud-hosted virtual machines, configuring multi-tenant domains and high-memory workloads."
      },
      {
        question: "How do you manage multiple client websites on a single VPS server?",
        answer: "By configuring Virtual Hosts in Apache or server blocks in Nginx. Each domain matches its ServerName/server_name and acts as a reverse proxy forwarding requests to specific internal application ports managed by PM2."
      },
      {
        question: "How do you keep Node.js applications running continuously on a server?",
        answer: "I use PM2 (`pm2 start`, `pm2 save`, `pm2 startup`). PM2 ensures that if an unexpected exception occurs or the physical server reboots, the application automatically restarts without manual intervention."
      },
      {
        question: "How do you secure a newly provisioned Linux VPS?",
        answer: "I disable root SSH login, disable password-based authentication in favor of SSH keys, configure UFW firewall to restrict all ports except 22, 80, and 443, and set up fail2ban to mitigate brute-force attempts."
      }
    ],
    seo: {
      title: "VPS Deployment & DevOps Specialist | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer deploys and maintains production web applications on Linux VPS servers with reverse proxies, SSL certificates, and PM2 process management.",
      keywords: ["VPS deployment", "Linux VPS engineer", "Contabo VPS setup", "PM2 process manager", "reverse proxy configuration"]
    }
  },

  "linux-server-management": {
    slug: "linux-server-management",
    name: "Linux & Ubuntu Server Management",
    category: "DevOps & Infrastructure",
    badge: "SysAdmin & DevOps",
    h1: "Ubuntu Linux Server Administration, Shell Scripting & Troubleshooting",
    summary: "System administration for Ubuntu Linux environments: package management, user permissions, process diagnostics, firewall hardening, and server troubleshooting.",
    description: "I manage Linux servers directly through the command line using secure SSH sessions. I am proficient with Ubuntu server environments (20.04 and 22.04 LTS), managing system packages via `apt`, inspecting system services with `systemctl`, analyzing resource bottlenecks using `top`, `htop`, and `df`, and diagnosing production server failures like 403 Forbidden permissions, port collisions, and SSL certificate misconfigurations.",
    howIUse: [
      "Administering Ubuntu Linux servers via SSH for application hosting and enterprise platforms.",
      "Configuring systemd service units, cron jobs, and background maintenance workers.",
      "Resolving permission conflicts, ownership issues (`chown`, `chmod`), and directory write locks.",
      "Auditing server logs (`/var/log/syslog`, `/var/log/nginx`, `/var/log/apache2`) to isolate production issues."
    ],
    implementationConcepts: [
      "POSIX file permissions, user group isolation, and secure execution rights",
      "Systemd service creation, enabling, status monitoring, and journalctl log inspection",
      "Network socket analysis (`netstat`, `ss`, `lsof -i`) to diagnose port conflicts",
      "Shell automation scripts for periodic backups, log rotation, and server health checks"
    ],
    relatedTech: ["VPS Deployment", "Nginx", "Apache", "SSH", "PM2"],
    relatedProjects: ["erpnext-vps-deployment", "integral-web-solution"],
    businessValue: "Direct Linux system administration capability ensures fast resolution of production infrastructure outages without depending on external managed services.",
    faqs: [
      {
        question: "How do you troubleshoot a 403 Forbidden error on a Linux web server?",
        answer: "I check web server error logs, verify file and directory permissions (`chmod 755` for directories, `644` for files), verify web server user ownership (`www-data`), and ensure index files or directory indexing directives are correctly configured."
      },
      {
        question: "How do you resolve port conflicts when starting multiple Node services?",
        answer: "I use `sudo lsof -i :<port>` or `ss -tulpn | grep :<port>` to identify the PID occupying the port, evaluate whether it is an orphan process or another active daemon, and reassign or terminate accordingly."
      },
      {
        question: "What is your experience with Linux package management and repositories?",
        answer: "I regularly install, update, and manage dependencies via `apt`, configure custom PPA repositories (e.g., NodeSource, Ondřej Surý PHP), and clean up obsolete packages with `apt autoremove`."
      },
      {
        question: "How do you monitor server memory and CPU utilization?",
        answer: "I monitor resource usage interactively with `htop` and `top`, check disk space with `df -h`, and configure PM2 memory limits to automatically restart processes before memory exhaustion occurs."
      }
    ],
    seo: {
      title: "Linux & Ubuntu Server Administrator | Soham Aeer Portfolio",
      description: "Discover Soham Aeer's Ubuntu Linux server administration, shell scripting, systemd service management, and production troubleshooting capabilities.",
      keywords: ["Linux server administration", "Ubuntu sysadmin", "server troubleshooting", "systemd configuration", "Linux DevOps India"]
    }
  },

  "nginx-configuration": {
    slug: "nginx-configuration",
    name: "Nginx Reverse Proxy & Configuration",
    category: "DevOps & Infrastructure",
    badge: "Web Server & Proxy",
    h1: "Nginx Server Block Architecture, Reverse Proxy & SSL Termination",
    summary: "Configuring high-performance Nginx server blocks, reverse proxy pass-through, SSL termination, gzip compression, and static asset caching.",
    description: "Nginx is my preferred high-concurrency web server and reverse proxy. I have configured Nginx in complex enterprise setups, including routing traffic for ERPNext v15 with MariaDB, Redis, and WebSocket workers. I write clean `nginx.conf` configurations with optimized worker processes, upstream proxy directives, Gzip/Brotli compression, and custom error pages.",
    howIUse: [
      "Configuring reverse proxies to forward HTTP/HTTPS traffic to internal Node.js and Python web applications.",
      "Setting up SSL termination with Let's Encrypt, HTTP/2 protocol support, and automatic HTTPS redirection.",
      "Optimizing static asset delivery with long-term cache-control headers and gzip compression.",
      "Configuring WebSocket proxy pass headers (`Upgrade` and `Connection`) for real-time applications."
    ],
    implementationConcepts: [
      "`proxy_pass`, `proxy_set_header Host $host`, `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for`",
      "SSL modern ciphers, TLS 1.2/1.3 enforcement, and OCSP stapling",
      "Upstream load-balancing blocks with failover timeouts",
      "Custom rate limiting zones (`limit_req_zone`) to mitigate DDoS and brute-force traffic"
    ],
    relatedTech: ["Linux & Ubuntu", "VPS Deployment", "Apache", "SSL / Certbot", "ERPNext v15"],
    relatedProjects: ["erpnext-vps-deployment"],
    businessValue: "Nginx handles thousands of concurrent connections with minimal memory footprint, securing backend applications behind a hardened reverse proxy layer.",
    faqs: [
      {
        question: "How does Nginx act as a reverse proxy for Node.js applications?",
        answer: "Nginx listens on public ports 80 and 443, handles SSL termination, and proxies incoming requests to `http://127.0.0.1:3000` while passing original host headers and client IP addresses."
      },
      {
        question: "How do you configure WebSocket support in Nginx?",
        answer: "By including `proxy_http_version 1.1;` and setting headers `Upgrade $http_upgrade;` and `Connection 'upgrade';` within the target location block."
      },
      {
        question: "How do you test Nginx configuration before reloading production services?",
        answer: "I always execute `sudo nginx -t` to validate syntax and directive integrity. Only when the configuration test returns successful do I run `sudo systemctl reload nginx`."
      },
      {
        question: "How does Nginx improve Core Web Vitals and page speed?",
        answer: "By serving static CSS/JS/images directly from disk, applying gzip compression to text payloads, and setting aggressive `Cache-Control` headers for immutable assets."
      }
    ],
    seo: {
      title: "Nginx Reverse Proxy Specialist | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer configures Nginx server blocks, SSL termination, reverse proxy routing, and performance caching on Linux servers.",
      keywords: ["Nginx reverse proxy", "Nginx configuration", "Nginx SSL setup", "web server optimization", "Nginx DevOps"]
    }
  },

  "apache-server-configuration": {
    slug: "apache-server-configuration",
    name: "Apache Virtual Hosts & Routing",
    category: "DevOps & Infrastructure",
    badge: "Web Server & Routing",
    h1: "Apache HTTP Server Virtual Hosts, Reverse Proxy & Mod_Rewrite",
    summary: "Configuring Apache Virtual Hosts, mod_proxy reverse proxy routing, mod_rewrite redirect rules, and multi-domain hosting on production VPS environments.",
    description: "At Integral Web Solution, I have configured and maintained Apache HTTP Server on Contabo Linux VPS to host multiple production websites. I configure Virtual Hosts (`<VirtualHost *:80>` and `<VirtualHost *:443>`), set up `mod_proxy` and `mod_proxy_http` to route traffic to internal application daemons, and write `.htaccess` / `mod_rewrite` rules for clean URL redirects and SEO preservation.",
    howIUse: [
      "Setting up Apache Virtual Host configuration files in `/etc/apache2/sites-available/` and enabling with `a2ensite`.",
      "Configuring `ProxyPass` and `ProxyPassReverse` directives to forward external requests to internal Node.js servers.",
      "Implementing 301 redirect maps using `mod_rewrite` to preserve legacy URL equity during website redesigns.",
      "Managing SSL certificates with Certbot for Apache (`python3-certbot-apache`)."
    ],
    implementationConcepts: [
      "VirtualHost multi-domain routing on a single public IP address",
      "`mod_proxy` and `mod_proxy_http` integration with PM2-managed Node applications",
      "`RewriteEngine On`, `RewriteRule`, and 301 permanent redirect architecture",
      "Apache security hardening: disabling directory listing (`Options -Indexes`) and hiding version banners"
    ],
    relatedTech: ["Linux & Ubuntu", "VPS Deployment", "Nginx", "Technical SEO", "PM2"],
    relatedProjects: ["integral-web-solution", "shreeji-sales-corporation"],
    businessValue: "Robust Apache configuration enables reliable multi-domain hosting, seamless URL migrations with zero SEO rank loss, and enterprise proxy routing.",
    faqs: [
      {
        question: "How do you route multiple domains to different ports using Apache?",
        answer: "Each domain has its own VirtualHost file with a unique `ServerName`. Inside the VirtualHost block, `ProxyPass / http://localhost:PORT/` and `ProxyPassReverse / http://localhost:PORT/` route the traffic cleanly."
      },
      {
        question: "How do you implement 50+ legacy 301 redirects in Apache?",
        answer: "Using `RewriteRule` or `Redirect 301` directives within the site configuration or `.htaccess`. This passes search engine link equity permanently to new URL structures."
      },
      {
        question: "How do you enable Apache modules in Ubuntu?",
        answer: "I use `sudo a2enmod <module_name>` (such as `proxy`, `proxy_http`, `rewrite`, `ssl`, `headers`) followed by `sudo systemctl restart apache2`."
      },
      {
        question: "What is the difference in your usage between Apache and Nginx?",
        answer: "I use Apache when flexible `.htaccess` rewrite rules and traditional multi-domain VirtualHost modules are preferred; I use Nginx when high-concurrency event-driven reverse proxying and lightweight static serving are paramount."
      }
    ],
    seo: {
      title: "Apache Server & Virtual Hosts Specialist | Soham Aeer Portfolio",
      description: "Explore Soham Aeer's Apache HTTP server configuration, Virtual Hosts routing, mod_proxy reverse proxy setups, and 301 redirect management.",
      keywords: ["Apache Virtual Hosts", "Apache reverse proxy", "mod_rewrite redirects", "Apache Contabo VPS", "Apache web server engineer"]
    }
  },

  "technical-seo": {
    slug: "technical-seo",
    name: "Technical SEO & Search Architecture",
    category: "Search Engine Optimization",
    badge: "Search Specialist",
    h1: "Technical SEO Audits, Search Architecture & 20+ Production Optimizations",
    summary: "Comprehensive technical SEO: crawlability, XML sitemaps, robots.txt, canonical tag strategy, 301 redirect migrations, and international ranking optimizations.",
    description: "Technical SEO is a core pillar of my engineering approach. Having executed search engine optimizations across 20+ client websites at Integral Web Solution—successfully targeting competitive search markets in the United States and Middle East countries—I build websites that search engines can effortlessly crawl, parse, and index. I eliminate crawl budget waste, prevent duplicate content through canonicalization, and structure site hierarchy for high organic relevance.",
    howIUse: [
      "Performing comprehensive technical SEO audits inspecting indexation, status codes, and crawl traps.",
      "Structuring dynamic XML sitemaps with accurate `<lastmod>` timestamps and clean robots.txt directives.",
      "Implementing 301 redirect maps during website redesigns to protect existing rankings and organic backlinks.",
      "Optimizing on-page headings, semantic metadata, Open Graph cards, and image alt text for targeted keywords."
    ],
    implementationConcepts: [
      "Canonical URL architecture preventing duplicate content across protocols, query strings, and subdomains",
      "Crawl budget optimization via selective robots.txt disallow rules and header directives",
      "Status code precision (200, 301, 404, 410) and eliminating redirect chains",
      "Core Web Vitals alignment: LCP, CLS, and INP metrics directly impacting search rankings"
    ],
    relatedTech: ["Schema Markup", "Next.js", "React Helmet", "Google Search Console", "Apache"],
    relatedProjects: ["shreeji-sales-corporation", "integral-web-solution", "kavya-fragrances"],
    businessValue: "Technical SEO ensures that high-quality web applications are discoverable, attract organic commercial leads without ongoing ad spend, and rank sustainably across international markets.",
    faqs: [
      {
        question: "What was your approach to optimizing 20+ websites for international search?",
        answer: "I conducted comprehensive audits identifying crawl errors, missing metadata, and thin content. I targeted regional search intents (US and Middle East regions), optimized metadata and headings, fixed 301 redirects, and verified indexing via Google Search Console."
      },
      {
        question: "How do you prevent duplicate content penalties across dynamic pages?",
        answer: "By implementing absolute, self-referential canonical tags (`<link rel='canonical' href='...' />`) on every indexable page and ensuring parameter-based filtering URLs point to primary canonical representations."
      },
      {
        question: "How do you configure an XML sitemap and robots.txt in Next.js?",
        answer: "I use Next.js `sitemap.js` to dynamically generate XML entries with change frequencies and last-modified dates, and `robots.js` to define crawl rules, disallow private API routes, and point crawlers to the sitemap URL."
      },
      {
        question: "What steps do you take in Google Search Console post-deployment?",
        answer: "I verify property ownership, submit the XML sitemap, inspect primary URLs for indexability, check for mobile usability issues, and monitor the Performance report for keyword impressions and click trends."
      }
    ],
    seo: {
      title: "Technical SEO Specialist | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer implements technical SEO audits, XML sitemaps, 301 redirect architectures, and international search ranking strategies.",
      keywords: ["Technical SEO specialist", "SEO developer India", "website migration SEO", "XML sitemap robots.txt", "international SEO developer"]
    }
  },

  "schema-markup": {
    slug: "schema-markup",
    name: "Schema Markup & JSON-LD",
    category: "Search Engine Optimization",
    badge: "Semantic Data",
    h1: "Structured Data Engineering with JSON-LD & Schema.org",
    summary: "Implementing semantic JSON-LD structured data: Person, Organization, WebSite, BreadcrumbList, Product, and FAQPage according to Google guidelines.",
    description: "Structured data bridges the gap between human-readable web pages and machine-comprehensible search engine indices. I engineer clean, valid JSON-LD schemas embedded directly into the HTML document head. I strictly adhere to Google Search Central documentation and Schema.org specifications, avoiding synthetic spam markup while providing search engines with verified entities, breadcrumb hierarchies, and content relationships.",
    howIUse: [
      "Implementing `Person` and `ProfilePage` structured data to establish author and developer credibility.",
      "Building dynamic `BreadcrumbList` schemas reflecting site hierarchy on nested portfolio and category routes.",
      "Structuring `FAQPage` schemas only where eligible and directly matching visible on-page content.",
      "Creating `SoftwareApplication` and `CreativeWork` schemas for detailed project case studies."
    ],
    implementationConcepts: [
      "Embedded `<script type='application/ld+json'>` tags matching Google's preferred JSON-LD format",
      "Entity graph linking using `@id` references between Person, WebSite, and WebPage objects",
      "Strict data type compliance (ISO 8601 timestamps, absolute URL strings, boolean flags)",
      "Automated validation against Google Rich Results Test and Schema.org Validator"
    ],
    relatedTech: ["Technical SEO", "Next.js", "React.js", "HTML5", "Google Search Console"],
    relatedProjects: ["shreeji-sales-corporation", "integral-web-solution"],
    businessValue: "Valid structured data enhances search engine understanding, establishes entity authority in Google Knowledge Graphs, and qualifies pages for prominent rich result treatments.",
    faqs: [
      {
        question: "Why do you use JSON-LD instead of Microdata or RDFa?",
        answer: "Google explicitly recommends JSON-LD because it is decoupled from the visual DOM, easier to maintain, dynamically generated via server templates, and less prone to breaking during UI redesigns."
      },
      {
        question: "What are Google's current guidelines regarding FAQPage schema?",
        answer: "Google has restricted FAQ rich results primarily to well-known authoritative government and health resources. However, valid on-page FAQ schema remains valuable for semantic entity parsing and voice search indexing."
      },
      {
        question: "How do you avoid structured data penalties from search engines?",
        answer: "I never fabricate reviews, ratings, prices, or claims not visible to the user. Every property in the JSON-LD schema exactly mirrors real, visible content on the webpage."
      },
      {
        question: "How do you test and validate JSON-LD structured data?",
        answer: "I test every schema using Google's Rich Results Test tool and Schema.org's Validator to ensure zero syntax errors, missing required properties, or warnings."
      }
    ],
    seo: {
      title: "Schema Markup & JSON-LD Specialist | Soham Aeer Portfolio",
      description: "Discover how Soham Aeer implements valid JSON-LD schema markup, BreadcrumbList, Person entity graphs, and SEO structured data.",
      keywords: ["Schema markup developer", "JSON-LD structured data", "SEO schema engineer", "Google rich results", "Schema.org developer"]
    }
  },

  "shopify-headless-commerce": {
    slug: "shopify-headless-commerce",
    name: "Shopify Headless Commerce & GraphQL",
    category: "E-Commerce & Integrations",
    badge: "Headless Architecture",
    h1: "Headless Shopify Commerce, Storefront API & GraphQL Engineering",
    summary: "Architecting headless e-commerce stores with Next.js, Shopify Storefront API, GraphQL queries, customer OAuth 2.0 PKCE authentication, and checkout workflows.",
    description: "In my FitCart production project, I built a headless fitness e-commerce platform using Next.js and Shopify's headless architecture. By decoupling the frontend presentation from Shopify's traditional Liquid theme layer, I achieved lightning-fast page transitions, customized UI design, and direct integration with Shopify's Storefront GraphQL API. I also implemented customer account authentication using Shopify Customer Account API with OAuth 2.0 and PKCE.",
    howIUse: [
      "Querying live product collections, variants, pricing, and inventory via Shopify Storefront GraphQL API.",
      "Building client-side cart management with persistent local state synchronized to Shopify web checkouts.",
      "Implementing customer authentication via OAuth 2.0 and PKCE for saved addresses and order history.",
      "Handling localized Indian currency formatting and GST-inclusive pricing logic."
    ],
    implementationConcepts: [
      "GraphQL query optimization: fetching exact fields, avoiding over-fetching, and handling pagination",
      "Shopify Cart API mutations: `cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, `cartLinesRemove`",
      "OAuth 2.0 authorization code flow with Proof Key for Code Exchange (PKCE)",
      "Secure redirection to Shopify-hosted checkout preserving conversion tracking"
    ],
    relatedTech: ["Next.js", "React.js", "GraphQL", "REST APIs", "Vercel"],
    relatedProjects: ["fitcart", "pixelvault"],
    businessValue: "Headless Shopify provides unparalleled frontend design freedom, near-instant page load times for higher mobile conversions, and global CDN scalability.",
    faqs: [
      {
        question: "Why build a headless Shopify store instead of using a standard Liquid theme?",
        answer: "Headless architecture provides complete control over frontend performance, allows modern React/Next.js component libraries, enables custom interactive features (like dynamic calculators), and avoids Liquid theme bloat."
      },
      {
        question: "How does authentication work in headless Shopify with Customer Account API?",
        answer: "I implemented OAuth 2.0 with PKCE (Proof Key for Code Exchange). Users authenticate securely through Shopify's identity provider, returning session tokens to access customer profiles, addresses, and past orders."
      },
      {
        question: "How is the final checkout handled in headless Shopify?",
        answer: "Items added to the cart generate a unique Shopify Cart ID. When the customer clicks checkout, the application redirects seamlessly to Shopify's PCI-compliant checkout URL containing all line items and customer information."
      },
      {
        question: "How do you handle product inventory and variant selection?",
        answer: "I query product variants via GraphQL, maintain selected variant options in component state, reflect real-time availability, and update the cart mutation with the exact `merchandiseId`."
      }
    ],
    seo: {
      title: "Shopify Headless Commerce Developer | Soham Aeer Portfolio",
      description: "Learn how Soham Aeer builds headless Shopify stores with Next.js, Storefront GraphQL API, OAuth 2.0 PKCE authentication, and custom cart systems.",
      keywords: ["Shopify headless developer", "Shopify Storefront API", "Next.js Shopify", "GraphQL e-commerce", "headless commerce India"]
    }
  },

  "ai-api-integration": {
    slug: "ai-api-integration",
    name: "AI & LLM API Integration",
    category: "AI & Emerging Tech",
    badge: "LLM Engineering",
    h1: "AI & LLM API Integration with Groq Cloud & Llama 3.1",
    summary: "Integrating high-speed LLM inference (Groq Cloud, Llama 3.1), structured prompt engineering, and context-aware recommendation workflows into production websites.",
    description: "In my Kavya Fragrances project, I integrated state-of-the-art open-source Large Language Models into a real commercial web application. Utilizing the ultra-low latency Groq Cloud inference platform running Meta's Llama 3.1 model, I built an interactive scent consultation engine. I design system prompts with few-shot guidance, enforce structured JSON outputs, sanitize inputs against prompt injection, and gracefully handle fallback responses.",
    howIUse: [
      "Integrating Groq Cloud API for ultra-low latency Llama 3.1 inference in web applications.",
      "Designing structured system prompts that produce predictable, domain-specific recommendations.",
      "Parsing and validating LLM responses before presenting them to the client interface.",
      "Implementing server-side rate limiting and error boundaries to maintain uptime during API provider outages."
    ],
    implementationConcepts: [
      "System prompt engineering: role specification, formatting constraints, few-shot examples",
      "Temperature, top_p, and max_tokens tuning for deterministic commercial outputs",
      "Input sanitization preventing prompt jailbreaking and sensitive data leakage",
      "Asynchronous server-side API proxying to keep API keys secure from client inspection"
    ],
    relatedTech: ["Node.js", "Express.js", "Next.js", "REST APIs", "JavaScript"],
    relatedProjects: ["kavya-fragrances"],
    businessValue: "AI integrations transform static product catalogs into interactive, personalized sales advisors, dramatically boosting user engagement and commercial conversions.",
    faqs: [
      {
        question: "Why did you choose Groq Cloud with Llama 3.1 for Kavya Fragrances?",
        answer: "Groq's LPU (Language Processing Unit) architecture delivers near-instantaneous token generation speeds (hundreds of tokens/sec), ensuring users receive personalized recommendations without waiting seconds for typical cloud LLMs."
      },
      {
        question: "How do you keep LLM API keys secure in web applications?",
        answer: "API keys are stored exclusively in server-side environment variables (`GROQ_API_KEY`) and accessed solely via server route handlers. The frontend client never has access to or visibility of the private key."
      },
      {
        question: "How do you ensure the LLM returns consistent, structured data?",
        answer: "By setting low temperature (e.g., 0.2 to 0.4), strictly instructing the model in the system prompt to respond in valid JSON format with specified schema keys, and parsing the response with defensive validation."
      },
      {
        question: "How do you handle rate limits or API downtime from AI providers?",
        answer: "I implement exponential backoff retry logic, cache frequent recommendation patterns, and provide graceful fallback UI states so user navigation is never blocked."
      }
    ],
    seo: {
      title: "AI & LLM API Integration Developer | Soham Aeer Portfolio",
      description: "Discover Soham Aeer's AI integration capabilities: Groq Cloud, Llama 3.1 inference, prompt engineering, and intelligent web application features.",
      keywords: ["AI API integration", "Groq Llama 3.1 developer", "LLM web integration", "AI developer India", "prompt engineering developer"]
    }
  }
};
