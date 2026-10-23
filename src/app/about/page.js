import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/about.css";

export const metadata = {
  title: "About Soham Aeer | Full Stack Developer & DevOps Engineer",
  description: "Learn about Soham Aeer, Full Stack Developer at Integral Web Solution. Discover his background in React, Next.js, Linux VPS deployment, Technical SEO, and system architecture.",
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
    <div className="container" style={{ paddingBottom: "80px" }}>
      <div style={{ paddingTop: "32px" }}>
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-grid">
          {/* Authentic Personal Photograph */}
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
              <span>Based in Virar, Maharashtra, India</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.15 }}>
              The Full-Stack Engineer Behind the Infrastructure.
            </h1>

            <p className="about-bio-lead">
              I am <strong>Soham Aeer</strong>, a Full Stack Developer currently building, optimizing, and deploying web applications at <strong>Integral Web Solution</strong>.
            </p>

            <p>
              My path into software engineering began with a passion for understanding the entire web delivery lifecycle. I didn&apos;t want to just build interfaces that stop at the browser window; I wanted to know how packets travel to a Linux server, how reverse proxies route incoming traffic across multiple domains, how processes are kept alive under load, and how search engines crawl and evaluate content.
            </p>

            <p>
              Today, I deliver end-to-end web products: from responsive React and Next.js user interfaces with pure CSS to resilient Node.js and Express backends, Contabo Linux VPS configurations, automated SSL certs, Technical SEO execution across 20+ websites, and modern AI API integrations using Groq and Meta&apos;s Llama 3.1.
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
      <section style={{ marginTop: "64px" }}>
        <div className="section-header">
          <span className="section-eyebrow">Professional Philosophy</span>
          <h2 className="section-title">What Defines My Engineering Approach</h2>
          <p className="section-desc">
            Production software requires more than visual polish. Here is how I approach software design, reliability, and business impact.
          </p>
        </div>

        <div className="about-details-grid">
          <div className="about-pillar-card">
            <h3 className="about-pillar-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-purple-light)" }}>
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              Full-Stack System Thinking
            </h3>
            <p className="about-pillar-desc">
              I view every feature through the entire stack. When designing a database schema or API endpoint, I anticipate how the React component will render it, how cache headers will behave at the reverse proxy layer, and how search engine bots will interpret it.
            </p>
          </div>

          <div className="about-pillar-card">
            <h3 className="about-pillar-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-blue-light)" }}>
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              DevOps & Infrastructure Autonomy
            </h3>
            <p className="about-pillar-desc">
              I don&apos;t depend on DevOps engineers to launch my code. I provision self-hosted Linux VPS environments (Ubuntu), set up Apache Virtual Hosts and Nginx reverse proxies, configure PM2 process daemons, and manage Let&apos;s Encrypt SSL certificates independently.
            </p>
          </div>

          <div className="about-pillar-card">
            <h3 className="about-pillar-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent-cyan)" }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              Organic Search & Technical SEO
            </h3>
            <p className="about-pillar-desc">
              A high-performing website is ineffective if prospective customers cannot find it. Having optimized 20+ websites for international search markets (US & Middle East), I build search crawlability, JSON-LD schemas, and 301 redirect maps directly into application code.
            </p>
          </div>

          <div className="about-pillar-card">
            <h3 className="about-pillar-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#34D399" }}>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Zero-Bloat Engineering
            </h3>
            <p className="about-pillar-desc">
              I avoid loading 2MB of UI framework bloat for interactions that can be achieved with 50 lines of clean vanilla CSS. This yields faster mobile Core Web Vitals, lower bounce rates, and cleaner, maintainable codebases.
            </p>
          </div>
        </div>
      </section>

      {/* Production Troubleshooting & Unfamiliar Technologies */}
      <section style={{ marginTop: "64px" }} className="card">
        <h3 style={{ fontSize: "1.4rem", marginBottom: "14px", color: "var(--text-primary)" }}>
          How I Handle Production Troubleshooting & New Technologies
        </h3>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "16px" }}>
          In production environments at Integral Web Solution, things don&apos;t always go as planned. I have diagnosed and resolved live server issues ranging from Apache port conflicts and Let&apos;s Encrypt certificate renewal failures to 403 Forbidden directory permissions and PM2 memory leaks under heavy background queues.
        </p>
        <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: "1.8", marginBottom: "16px" }}>
          When encountering unfamiliar systems—such as configuring Frappe Bench, MariaDB buffer pools, Redis queues, and Supervisor workers for our ERPNext v15 deployment—I follow a disciplined methodology: inspect official architectural documentation, isolate components in staging environments, audit system logs (`journalctl`, web server error logs), and execute iterative, testable deployments.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
          <span className="badge badge-purple">Log Inspection (syslog / nginx / apache)</span>
          <span className="badge badge-blue">Process Monitoring (htop / PM2)</span>
          <span className="badge badge-cyan">Network Sockets (lsof / ss)</span>
          <span className="badge badge-emerald">Disaster Recovery Backups</span>
        </div>
      </section>

      {/* Education & Academic Background */}
      <section style={{ marginTop: "64px" }}>
        <div className="section-header">
          <span className="section-eyebrow">Academic Foundation</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
            <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>
              {personalInfo.education.degree}
            </h3>
            <span className="badge badge-blue">{personalInfo.education.period}</span>
          </div>
          <div style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>
            {personalInfo.education.institution}, {personalInfo.education.location}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "8px" }}>
            Comprehensive degree coursework covering software engineering methodologies, relational database management systems, data structures and algorithms, operating systems, and computer network protocols.
          </p>
        </div>
      </section>
    </div>
  );
}
