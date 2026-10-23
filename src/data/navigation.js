export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Skills",
    href: "/skills",
    hasDropdown: true,
    dropdownItems: [
      { name: "All Skills Hub", href: "/skills", desc: "Complete categorized directory" },
      { name: "JavaScript (ES6+)", href: "/skills/javascript", desc: "Core language & async patterns" },
      { name: "React.js", href: "/skills/react-js", desc: "Component architecture & custom hooks" },
      { name: "Next.js", href: "/skills/next-js", desc: "App Router & Server Components" },
      { name: "Node.js", href: "/skills/node-js", desc: "Backend runtime & services" },
      { name: "Express.js", href: "/skills/express-js", desc: "REST APIs & middleware" },
      { name: "VPS Deployment", href: "/skills/vps-deployment", desc: "Linux servers, PM2 & reverse proxies" },
      { name: "Technical SEO", href: "/skills/technical-seo", desc: "Audits, schema & rankings across 20+ sites" },
      { name: "Shopify Headless", href: "/skills/shopify-headless-commerce", desc: "Storefront API, GraphQL & OAuth PKCE" },
      { name: "AI API Integration", href: "/skills/ai-api-integration", desc: "Groq Cloud & Llama 3.1" }
    ]
  },
  {
    label: "Projects",
    href: "/projects",
    hasDropdown: true,
    dropdownItems: [
      { name: "All Projects", href: "/projects", desc: "Complete portfolio archive" },
      { name: "FitCart (Shopify Headless)", href: "/projects/fitcart", desc: "Next.js + Shopify Storefront GraphQL" },
      { name: "Integral Web Solution", href: "/projects/integral-web-solution", desc: "React + Node.js VPS deployment" },
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
    { label: "Integral Web Solution", href: "/projects/integral-web-solution" },
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
