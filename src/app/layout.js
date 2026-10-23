import "@/styles/globals.css";
import "@/styles/components.css";
import "@/styles/header.css";
import "@/styles/footer.css";

import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { personalInfo } from "@/data/personalInfo";

export const metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: "Soham Aeer | Full Stack Developer | React, Next.js, Node.js & VPS Deployment",
    template: "%s | Soham Aeer"
  },
  description: "Official portfolio of Soham Aeer, Full Stack Developer specializing in React.js, Next.js, Node.js, Linux VPS deployment, Technical SEO across 20+ websites, and AI API integrations.",
  keywords: [
    "Soham Aeer",
    "Full Stack Developer",
    "Next.js Developer",
    "React.js Developer",
    "Node.js Backend Developer",
    "VPS Deployment Specialist",
    "Technical SEO India",
    "Contabo VPS",
    "Shopify Headless Commerce",
    "Mumbai Developer",
    "Full Stack Developer Mumbai"
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: "/favicon.svg"
  },
  authors: [{ name: personalInfo.name, url: personalInfo.siteUrl }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.siteUrl,
    siteName: "Soham Aeer — Full Stack Developer & DevOps",
    title: "Soham Aeer | Full Stack Developer | React, Next.js, Node.js & DevOps",
    description: "Production web applications, self-hosted Linux VPS deployment, Technical SEO across 20+ websites, and AI API integrations.",
    images: [
      {
        url: "/images/soham-aeer-workspace.webp",
        width: 1280,
        height: 960,
        alt: "Soham Aeer - Full Stack Developer and DevOps Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Aeer | Full Stack Developer & DevOps",
    description: "Engineering production web applications with React, Next.js, Node.js, Linux VPS deployment, and Technical SEO.",
    images: ["/images/soham-aeer-workspace.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${personalInfo.siteUrl}/#person`,
    "name": personalInfo.name,
    "jobTitle": "Full Stack Developer",
    "description": personalInfo.shortBio,
    "url": personalInfo.siteUrl,
    "image": `${personalInfo.siteUrl}${personalInfo.profileImage}`,
    "sameAs": [
      personalInfo.github,
      personalInfo.linkedin
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": personalInfo.education.institution,
      "address": personalInfo.education.location
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "worksFor": {
      "@type": "Organization",
      "name": personalInfo.currentRole.company,
      "address": personalInfo.currentRole.location
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${personalInfo.siteUrl}/#website`,
    "url": personalInfo.siteUrl,
    "name": "Soham Aeer — Full Stack Developer Portfolio",
    "publisher": {
      "@id": `${personalInfo.siteUrl}/#person`
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <JsonLd data={personSchema} />
        <JsonLd data={websiteSchema} />
        <ThemeProvider>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
