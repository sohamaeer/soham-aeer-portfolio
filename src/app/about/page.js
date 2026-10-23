import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/about.css";

export const metadata = {
  title: "About Soham Aeer | Full Stack Developer",
  description: "Learn about Soham Aeer, Full Stack Developer at Integral Web Solution. Discover his background in React, Next.js, Node.js, Linux VPS deployment, and Technical SEO.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About Soham", href: "/about" }
  ];

  return (
    <>
      {/* Subpage Hero Banner with Background Image */}
      <section className="page-hero-banner" aria-label="About Page Introduction">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <span className="section-eyebrow">Professional Profile</span>
          <h1 className="section-title">The Full-Stack Developer Behind the Code</h1>
          <p className="section-desc">
            Full Stack Developer based in Mumbai, engineering scalable applications with React, Next.js, and Node.js, supported by self-hosted Linux VPS deployment and search engine optimization.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "80px" }}>
        {/* Main Content Grid */}
        <section className="about-hero">
          <div className="about-grid">
            <div className="about-image-card">
              <Image
                src={personalInfo.workspaceImage}
                alt="Soham Aeer working on full stack application development"
                fill
                sizes="(max-width: 992px) 100vw, 480px"
                priority
              />
            </div>

            <div className="about-bio-text">
              <div className="status-pill" style={{ width: "fit-content" }}>
                <span className="status-dot"></span>
                <span>Based in {personalInfo.location}</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
                Full-Stack Application Development with Systems-Level Understanding.
              </h2>

              <p className="about-bio-lead">
                I am <strong>Soham Aeer</strong>, a Full Stack Developer currently building, optimizing, and deploying web applications at <strong>Integral Web Solution</strong> in Mumbai.
              </p>

              <p>
                My primary focus is <strong>Full Stack Web Development</strong>. I design and code modular frontend user interfaces using modern React.js and Next.js App Router, while architecting clean, secure backend services in Node.js and Express.js.
              </p>

              <p>
                What sets my engineering approach apart is that I do not stop at local development. I have hands-on experience provisioning self-hosted <strong>Contabo Linux VPS servers</strong>, managing domain DNS records (A, CNAME, MX, TXT, Cloudflare), configuring Apache Virtual Hosts and Nginx reverse proxies, managing background PM2 daemons, and executing <strong>Technical &amp; AI-assisted On-Page SEO</strong> across 20+ production websites targeting US and Middle East search markets.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "12px" }}>
                <Link href="/projects" className="btn btn-primary">
                  View My Projects ↗
                </Link>
                <a href={personalInfo.resumePath} download className="btn btn-secondary">
                  Download Resume (PDF)
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Engineering Pillars */}
        <section style={{ marginTop: "60px" }}>
          <div className="section-header">
            <span className="section-eyebrow">Engineering Methodology</span>
            <h2 className="section-title">What Defines My Engineering Approach</h2>
            <p className="section-desc">
              Production software requires more than visual polish. Here is how I approach full-stack software design, server reliability, and commercial impact.
            </p>
          </div>

          <div className="about-details-grid">
            <div className="about-pillar-card">
              <h3 className="about-pillar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                1. Full-Stack End-to-End Ownership
              </h3>
              <p className="about-pillar-desc">
                I view features through the entire stack. When designing a database schema or API endpoint, I anticipate how the React component will render it, how cache headers will behave at the reverse proxy layer, and how search engine bots will interpret it.
              </p>
            </div>

            <div className="about-pillar-card">
              <h3 className="about-pillar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
                2. DevOps, VPS &amp; DNS Management
              </h3>
              <p className="about-pillar-desc">
                I don&apos;t depend on external DevOps engineers to launch my code. I provision self-hosted Linux VPS environments (Ubuntu), configure domain DNS records (A, CNAME, MX, TXT, Cloudflare), set up Apache Virtual Hosts and Nginx reverse proxies, configure PM2 process daemons, and manage Let&apos;s Encrypt SSL certificates independently.
              </p>
            </div>

            <div className="about-pillar-card">
              <h3 className="about-pillar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                3. Technical &amp; AI-Powered On-Page SEO
              </h3>
              <p className="about-pillar-desc">
                Having optimized 20+ websites for international search markets (US &amp; Middle East), I architect search crawlability, JSON-LD schemas, and 301 redirect maps. Additionally, I utilize AI tools to generate high-intent on-page content calibrated in a natural, human tone that strictly satisfies every on-page SEO parameter.
              </p>
            </div>

            <div className="about-pillar-card">
              <h3 className="about-pillar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                4. Zero-Bloat Engineering
              </h3>
              <p className="about-pillar-desc">
                I avoid loading 2MB of UI framework bloat for interactions that can be achieved with clean, semantic CSS. This yields faster mobile Core Web Vitals, lower bounce rates, and cleaner, maintainable codebases.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Academic Background */}
        <section style={{ marginTop: "60px" }}>
          <div className="section-header">
            <span className="section-eyebrow">Academic Foundation</span>
            <h2 className="section-title">Education</h2>
          </div>

          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>
                {personalInfo.education.degree}
              </h3>
              <span className="badge badge-navy">{personalInfo.education.period}</span>
            </div>
            <div style={{ color: "var(--primary)", fontWeight: 700 }}>
              {personalInfo.education.institution}, {personalInfo.education.location}
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: "1.6", marginTop: "6px" }}>
              Comprehensive degree coursework covering software engineering methodologies, relational database management systems, data structures and algorithms, operating systems, and computer network protocols.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
