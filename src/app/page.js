import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo } from "@/data/personalInfo";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import "@/styles/home.css";

export const metadata = {
  title: "Soham Aeer | Full Stack Developer | React, Next.js, Node.js & VPS Deployment",
  description: "Official portfolio of Soham Aeer. Full-stack developer with real-world production experience in React, Next.js, Node.js, Linux VPS deployment, Technical SEO across 20+ websites, and AI API integrations.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ===================================================================
          1. HERO SECTION
          =================================================================== */}
      <section className="hero-section" aria-label="Introduction">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="status-pill">
                <span className="status-dot"></span>
                <span>Full-Stack Engineer & DevOps Practitioner</span>
              </div>

              <h1 className="hero-title">
                Engineering <span className="hero-title-accent">Production Web Apps</span> & Resilient Cloud Infrastructure.
              </h1>

              <p className="hero-bio">
                I am <strong>{personalInfo.name}</strong>, a Full Stack Developer based in Virar, Maharashtra. 
                I bridge modern frontend engineering in <strong>React & Next.js</strong> with scalable <strong>Node.js</strong> backends, 
                hands-on <strong>Linux VPS server deployment</strong> (Apache/Nginx, PM2, SSL), <strong>Technical SEO</strong> across 20+ production websites, and real-time <strong>AI API integrations</strong>.
              </p>

              <div className="hero-actions">
                <Link href="/projects" className="btn btn-primary btn-lg">
                  View My Projects
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <a
                  href={personalInfo.resumePath}
                  download
                  className="btn btn-secondary btn-lg"
                  aria-label="Download Soham Aeer's verified Resume (PDF)"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume (PDF)
                </a>

                <Link href="/contact" className="btn btn-outline btn-lg">
                  Contact Me
                </Link>
              </div>

              <div className="hero-meta">
                <div className="hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 14 14"></polyline>
                  </svg>
                  <span>Integral Web Solution (Full-Stack Dev)</span>
                </div>
                <div className="hero-meta-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Composition with Real Photograph & Technical Overlay */}
            <div className="hero-visual">
              <div className="hero-image-wrapper">
                <Image
                  src={personalInfo.profileImage}
                  alt="Soham Aeer, Full Stack Developer and DevOps Engineer"
                  fill
                  sizes="(max-width: 992px) 100vw, 450px"
                  priority
                />
              </div>

              <div className="hero-floating-card">
                <div>
                  <div className="floating-stat-value">20+ Sites</div>
                  <div className="floating-stat-label">SEO Optimized (US & Middle East)</div>
                </div>
                <div style={{ height: "36px", width: "1px", background: "var(--border-subtle)" }} />
                <div>
                  <div className="floating-stat-value">Linux VPS</div>
                  <div className="floating-stat-label">Apache / Nginx / PM2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. METRICS & CORE IMPACT
          =================================================================== */}
      <section className="metrics-section" aria-label="Core Technical Metrics">
        <div className="container">
          <div className="metrics-grid">
            {personalInfo.metrics.map((metric, i) => (
              <div key={i} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. SELECTED PROJECTS SHOWCASE
          =================================================================== */}
      <section className="section-py" aria-labelledby="featured-projects-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Proven Engineering</span>
            <h2 id="featured-projects-title" className="section-title">
              Selected Real-World Production Projects
            </h2>
            <p className="section-desc">
              Every project below represents hands-on full-stack development, real technical problem-solving, 
              and verified architectural decisions—from headless Shopify stores to enterprise B2B calculators.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/projects" className="btn btn-secondary btn-lg">
              View All Production Projects & Case Studies (6) ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. FULL-STACK & DEVOPS CAPABILITIES
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="capabilities-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">End-to-End Delivery</span>
            <h2 id="capabilities-title" className="section-title">
              Beyond Frontend: Complete Web Lifecycle Capabilities
            </h2>
            <p className="section-desc">
              Recruiters and companies choose me because I eliminate handoff friction between design, frontend, backend API, server deployment, and search engine discovery.
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="capability-title">Next.js & React UI Architecture</h3>
              <p className="capability-desc">
                High-performance user interfaces using Next.js App Router, React Server Components, clean component hierarchies, custom hooks, and pure responsive CSS with zero framework bloat.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="capability-title">Node.js & Express REST APIs</h3>
              <p className="capability-desc">
                Scalable server-side routing, automated transactional email workflows with Nodemailer, input sanitization, rate limiting, and secure authentication (OAuth 2.0 PKCE).
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <h3 className="capability-title">Linux VPS & Reverse Proxying</h3>
              <p className="capability-desc">
                Hands-on Contabo VPS provisioning on Ubuntu, Apache Virtual Hosts, Nginx reverse proxying, Let&apos;s Encrypt SSL automation, PM2 process daemons, and DNS administration.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="capability-title">Technical SEO & Schema Markup</h3>
              <p className="capability-desc">
                Optimized 20+ production sites for international search markets (US & Middle East). Dynamic XML sitemaps, robots.txt, canonical tags, 50+ 301 redirects, and JSON-LD schemas.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3 className="capability-title">Shopify Headless & GraphQL</h3>
              <p className="capability-desc">
                Decoupled modern e-commerce stores using Shopify Storefront API over GraphQL, localized GST calculations, cart synchronization, and customer authentication.
              </p>
            </div>

            <div className="capability-card">
              <div className="capability-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="capability-title">AI & LLM API Integration</h3>
              <p className="capability-desc">
                Ultra-low latency inference using Groq Cloud running Meta&apos;s Llama 3.1, structured prompt engineering, and context-aware recommendation workflows in commercial web apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. DEVELOPMENT WORKFLOW & TECHNICAL PHILOSOPHY
          =================================================================== */}
      <section className="section-py" aria-labelledby="philosophy-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Engineering Methodology</span>
            <h2 id="philosophy-title" className="section-title">
              How I Build Web Applications for Production
            </h2>
            <p className="section-desc">
              Writing code is only 30% of engineering. The remaining 70% is security, performance, server stability, search discovery, and long-term maintainability.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            <div className="card">
              <span className="badge badge-purple" style={{ marginBottom: "12px" }}>Phase 1</span>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Zero-Bloat Architecture</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                I write semantic HTML and pure CSS without loading heavy UI frameworks that slow down mobile Core Web Vitals.
              </p>
            </div>

            <div className="card">
              <span className="badge badge-blue" style={{ marginBottom: "12px" }}>Phase 2</span>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Defensive Backend APIs</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Every incoming API payload is validated on the server, sanitized against injection, rate-limited, and logged cleanly.
              </p>
            </div>

            <div className="card">
              <span className="badge badge-cyan" style={{ marginBottom: "12px" }}>Phase 3</span>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Infrastructure Hardening</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Whether on Vercel or a Linux VPS, services run under process supervisors (PM2/Supervisor), firewalls (UFW), and automated SSL certs.
              </p>
            </div>

            <div className="card">
              <span className="badge badge-emerald" style={{ marginBottom: "12px" }}>Phase 4</span>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Search Discovery Ready</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                Technical SEO is built into the codebase from day one: canonical tags, JSON-LD entities, XML sitemaps, and clean redirect maps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. SKILLS DIRECTORY PREVIEW
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="skills-preview-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Technical Competencies</span>
            <h2 id="skills-preview-title" className="section-title">
              Explore My Technical Skills Directory
            </h2>
            <p className="section-desc">
              Every skill listed below has a dedicated, indexable detail page documenting how I apply it in production, architectural trade-offs, and practical FAQs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
            {skillCategories.slice(0, 4).map((cat) => (
              <div key={cat.id} className="card">
                <h3 style={{ fontSize: "1.2rem", marginBottom: "6px" }}>{cat.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
                  {cat.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.skills.slice(0, 4).map((skill) => (
                    <Link
                      key={skill.name}
                      href={`/skills/${skill.slug}`}
                      className="skill-nav-pill"
                      style={{ padding: "6px 12px", fontSize: "0.85rem" }}
                    >
                      {skill.name} <span className="pill-arrow">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/skills" className="btn btn-secondary btn-lg">
              Explore Full Skills Hub (8 Categories & 16 Detail Pages) ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. SELECTED CERTIFICATIONS
          =================================================================== */}
      <section className="section-py" aria-labelledby="certifications-preview-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Verified Credentials</span>
            <h2 id="certifications-preview-title" className="section-title">
              Professional Certifications
            </h2>
            <p className="section-desc">
              Verified certifications evaluating full-stack software development competency and distributed version control.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {certifications.map((cert) => (
              <div key={cert.id} className="card card-hover" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "180px", marginBottom: "16px", borderRadius: "8px", overflow: "hidden", background: "var(--bg-surface-elevated)" }}>
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain", padding: "8px" }}
                  />
                </div>
                <span className="badge badge-cyan" style={{ width: "fit-content", marginBottom: "8px" }}>
                  {cert.issuer}
                </span>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>{cert.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", flex: 1, lineHeight: "1.6" }}>
                  {cert.description}
                </p>
                <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                  <Link href="/certifications" className="btn btn-outline btn-sm">
                    View Verification ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. CALL TO ACTION BANNER
          =================================================================== */}
      <section className="section-py" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-purple" style={{ marginBottom: "16px" }}>
                Open for Opportunities
              </span>
              <h2 className="cta-title">
                Ready to Build, Deploy, or Scale Your Next Production Application?
              </h2>
              <p className="cta-desc">
                Whether you need a full-stack Next.js developer, a Linux VPS deployment engineer, or a technical SEO overhaul, let&apos;s discuss how I can create immediate value.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Start a Conversation ↗
                </Link>
                <a href={personalInfo.resumePath} download className="btn btn-secondary btn-lg">
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
