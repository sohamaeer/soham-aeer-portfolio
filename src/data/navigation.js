export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Skills",
    href: "/skills",
    hasDropdown: true,
    isMegaMenu: true,
    megaMenuColumns: [
      {
        title: "Full-Stack Frontend",
        items: [
          { name: "React.js Architecture", href: "/skills/react-js", desc: "Component architecture & state hooks" },
          { name: "Next.js App Router", href: "/skills/next-js", desc: "Server Components & dynamic SSR" },
          { name: "JavaScript (ES6+)", href: "/skills/javascript", desc: "Async patterns, closures & DOM API" },
          { name: "CSS3 & Modern Styling", href: "/skills/css3", desc: "Zero-bloat responsive design" }
        ]
      },
      {
        title: "Backend & Infrastructure",
        items: [
          { name: "Node.js Services", href: "/skills/node-js", desc: "Backend runtime & microservices" },
          { name: "Express.js REST APIs", href: "/skills/express-js", desc: "Routing, middleware & validation" },
          { name: "Contabo Linux VPS", href: "/skills/vps-deployment", desc: "Ubuntu server management & SSH" },
          { name: "Nginx Reverse Proxy", href: "/skills/nginx-configuration", desc: "Virtual hosts & Let's Encrypt SSL" },
          { name: "PM2 Process Cluster", href: "/skills/pm2-process-management", desc: "Zero-downtime 24/7 uptime daemons" }
        ]
      },
      {
        title: "Growth & Specialized",
        items: [
          { name: "Technical SEO (20+ Sites)", href: "/skills/technical-seo", desc: "JSON-LD schema & 301 redirect maps" },
          { name: "Shopify Headless", href: "/skills/shopify-headless-commerce", desc: "Storefront API, GraphQL & OAuth PKCE" },
          { name: "AI & Groq Integration", href: "/skills/ai-api-integration", desc: "Meta Llama 3.1 sub-second inference" },
          { name: "ERPNext v15 Deployments", href: "/skills/erpnext-deployment", desc: "Frappe bench, MariaDB & Redis" }
        ]
      }
    ],
    dropdownItems: [
      { name: "All Skills Hub", href: "/skills", desc: "Complete categorized directory" },
      { name: "React.js Architecture", href: "/skills/react-js", desc: "Component architecture & custom hooks" },
      { name: "Next.js App Router", href: "/skills/next-js", desc: "Server Components & dynamic SSR" },
      { name: "Node.js & Express.js", href: "/skills/node-js", desc: "Backend runtime & REST APIs" },
      { name: "Linux VPS Deployment", href: "/skills/vps-deployment", desc: "Ubuntu, Apache & Nginx" },
      { name: "Technical SEO Audits", href: "/skills/technical-seo", desc: "JSON-LD across 20+ websites" },
      { name: "Shopify Headless", href: "/skills/shopify-headless-commerce", desc: "Storefront API & GraphQL" },
      { name: "AI & Groq API", href: "/skills/ai-api-integration", desc: "Llama 3.1 inference engine" }
    ]
  },
  {
    label: "Projects",
    href: "/projects",
    hasDropdown: true,
    dropdownItems: [
      { name: "All Projects", href: "/projects", desc: "Complete portfolio archive" },
      { name: "FitCart (Shopify Headless)", href: "/projects/fitcart", desc: "Next.js + Shopify Storefront GraphQL" },
      { name: "Mahadev Plastic Website", href: "/projects/mahadev-plastic", desc: "Next.js 14 + Express + SEO Blog CMS" },
      { name: "SIMPOVENT® B2B Platform", href: "/projects/shreeji-sales-corporation", desc: "Next.js + CFM calculator + SEO" },
      { name: "Kavya Fragrances", href: "/projects/kavya-fragrances", desc: "AI scent engine with Groq Llama 3.1" },
      { name: "PixelVault E-Commerce", href: "/projects/pixelvault", desc: "Digital wallpapers + Stripe checkout" },
      { name: "ERPNext v15 Infrastructure", href: "/projects/erpnext-vps-deployment", desc: "Ubuntu + MariaDB + Redis + Nginx" }
    ]
  },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" }
];

export const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About Soham", href: "/about" },
    { label: "Skills Hub", href: "/skills" },
    { label: "Project Portfolio", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Certifications", href: "/certifications" },
    { label: "Resume & Credentials", href: "/resume" },
    { label: "Contact Me", href: "/contact" }
  ],
  skills: [
    { label: "Next.js App Router", href: "/skills/next-js" },
    { label: "React.js Architecture", href: "/skills/react-js" },
    { label: "Node.js & Express", href: "/skills/node-js" },
    { label: "VPS & Linux Deployment", href: "/skills/vps-deployment" },
    { label: "Technical SEO & Schema", href: "/skills/technical-seo" },
    { label: "Shopify Headless", href: "/skills/shopify-headless-commerce" },
    { label: "AI & Groq Integration", href: "/skills/ai-api-integration" },
    { label: "Nginx & Reverse Proxies", href: "/skills/nginx-configuration" }
  ],
  projects: [
    { label: "FitCart Headless Store", href: "/projects/fitcart" },
    { label: "Mahadev Plastic Website", href: "/projects/mahadev-plastic" },
    { label: "SIMPOVENT® B2B Platform", href: "/projects/shreeji-sales-corporation" },
    { label: "Kavya Fragrances AI", href: "/projects/kavya-fragrances" },
    { label: "PixelVault Wallpaper Store", href: "/projects/pixelvault" },
    { label: "ERPNext v15 Infrastructure", href: "/projects/erpnext-vps-deployment" }
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/sohamaeer/", icon: "github", external: true },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/soham-aeer/", icon: "linkedin", external: true },
    { label: "Email", href: "mailto:sohamayer516@gmail.com", icon: "email", external: false },
    { label: "Phone", href: "tel:+919322577858", icon: "phone", external: false }
  ]
};
