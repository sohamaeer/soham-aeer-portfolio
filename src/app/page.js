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
          1. CORPORATE HERO BANNER
          =================================================================== */}
      <section className="hero-section" aria-label="Professional Introduction">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                ★ Full Stack Developer &bull; DevOps &bull; Technical SEO
              </div>

              <h1 className="hero-title">
                Engineering <span>Production Web Applications</span> &amp; Self-Hosted Linux Infrastructure.
              </h1>

              <p className="hero-bio">
                I am <strong>{personalInfo.name}</strong>, a Full Stack Developer at <strong>Integral Web Solution</strong>. 
                I deliver complete web platforms from responsive <strong>React &amp; Next.js</strong> frontends with zero framework bloat 
                to scalable <strong>Node.js</strong> backends, <strong>Contabo Linux VPS hosting</strong> (Apache, Nginx, PM2, SSL), 
                <strong>Technical SEO</strong> across 20+ international websites, and high-speed <strong>AI API integrations</strong>.
              </p>

              {/* Concrete Capabilities Checkpoints */}
              <div className="hero-checkpoints">
                <div className="hero-checkpoint-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Full-Stack Engineering: React.js, Next.js App Router, Node.js &amp; Express</span>
                </div>
                <div className="hero-checkpoint-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Linux VPS Hosting: Contabo VPS, Ubuntu, Apache Virtual Hosts, Nginx &amp; PM2</span>
                </div>
                <div className="hero-checkpoint-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Technical SEO: 20+ Websites Ranked in US &amp; Middle East Search Markets</span>
                </div>
                <div className="hero-checkpoint-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Modern Integrations: Headless Shopify, GraphQL, OAuth 2.0 PKCE &amp; Groq Llama 3.1</span>
                </div>
              </div>

              {/* High-Impact Actions */}
              <div className="hero-actions">
                <Link href="/projects" className="btn btn-accent btn-lg">
                  Explore Production Projects ↗
                </Link>

                <a
                  href={personalInfo.resumePath}
                  download
                  className="btn btn-secondary btn-lg"
                  aria-label="Download Soham Aeer's verified Resume (PDF)"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Resume (PDF)
                </a>

                <a href={`tel:${personalInfo.phone}`} className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.3)", color: "#FFFFFF" }}>
                  Call Direct: {personalInfo.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Profile & Live Server Metrics Card */}
            <div className="hero-profile-card">
              <div className="hero-photo-wrap">
                <Image
                  src={personalInfo.profileImage}
                  alt="Soham Aeer, Full Stack Developer and DevOps Engineer"
                  fill
                  sizes="(max-width: 992px) 100vw, 420px"
                  priority
                />
              </div>

              <div className="hero-card-meta">
                <div className="hero-card-name">{personalInfo.name}</div>
                <div className="hero-card-role">Full Stack Developer &bull; Integral Web Solution</div>
              </div>

              <div className="hero-infra-box">
                <div className="hero-infra-row">
                  <span className="hero-infra-label">Active Role</span>
                  <span className="hero-infra-val" style={{ color: "#F3F4F6" }}>Full Stack Developer</span>
                </div>
                <div className="hero-infra-row">
                  <span className="hero-infra-label">VPS Hosting</span>
                  <span className="hero-infra-val">Contabo Ubuntu Linux</span>
                </div>
                <div className="hero-infra-row">
                  <span className="hero-infra-label">Web Servers</span>
                  <span className="hero-infra-val">Apache &amp; Nginx Reverse Proxy</span>
                </div>
                <div className="hero-infra-row">
                  <span className="hero-infra-label">Process Daemons</span>
                  <span className="hero-infra-val">PM2 Cluster Active</span>
                </div>
                <div className="hero-infra-row">
                  <span className="hero-infra-label">SEO Track Record</span>
                  <span className="hero-infra-val">20+ Sites (US &amp; Middle East)</span>
                </div>
                <div className="hero-infra-row">
                  <span className="hero-infra-label">Availability</span>
                  <span className="hero-infra-val">Full-Time &amp; High-Impact Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. CORPORATE STATS RIBBON
          =================================================================== */}
      <section className="stats-ribbon" aria-label="Key Production Statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-number">6+</div>
              <div className="stat-text">Production Web Platforms Deployed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">20+</div>
              <div className="stat-text">Websites SEO-Optimized (US &amp; Middle East)</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-text">Self-Hosted VPS &amp; Server Independence</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">99.9%</div>
              <div className="stat-text">Focus on Production Uptime &amp; Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. CORPORATE BRIEFING: ABOUT SOHAM AEER
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="about-brief-title">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
              <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-medium)", boxShadow: "var(--shadow-md)" }}>
                <Image
                  src={personalInfo.workspaceImage}
                  alt="Soham Aeer in development workspace"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <span className="section-eyebrow">Professional Profile</span>
                <h2 id="about-brief-title" className="section-title">
                  Bridging Application Development with Infrastructure Management
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: "1.7", marginBottom: "16px" }}>
                  Most web developers stop once the code runs on their local machine. At <strong>Integral Web Solution</strong>, my responsibilities extend across the entire production lifecycle: writing clean React and Next.js applications, building resilient Node.js backends, provisioning Contabo Linux VPS servers, setting up Apache and Nginx reverse proxies, automating Let&apos;s Encrypt SSL certificates, configuring domain DNS and business email systems, and resolving critical server errors.
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                  Holding a B.Sc. in Information Technology from Viva College (2022–2025) and verified certifications from CodeSignal and Microsoft Learn, I bring an engineering mindset focused on measurable business outcomes, speed, and reliability.
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                  <Link href="/about" className="btn btn-primary">
                    Read Full Profile &amp; Workflow ↗
                  </Link>
                  <Link href="/experience" className="btn btn-secondary">
                    View Integral Web Solution Timeline
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. FEATURED PRODUCTION PROJECTS (CATALOG STYLE)
          =================================================================== */}
      <section className="section-py" aria-labelledby="featured-projects-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Production Portfolio</span>
            <h2 id="featured-projects-title" className="section-title">
              Featured Web Applications &amp; Infrastructure Case Studies
            </h2>
            <p className="section-desc">
              Real projects engineered for production: verified source code repositories, actual live deployments, and documented technical problem-solving.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/projects" className="btn btn-secondary btn-lg">
              Explore All 6 Production Case Studies ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. "WHY CHOOSE SOHAM AEER" (Modeled after Nikam Scientific & Mahadev Plastic)
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="why-choose-title">
        <div className="container">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">The Engineering Difference</span>
            <h2 id="why-choose-title" className="section-title">
              Why Companies &amp; Engineering Teams Hire Me
            </h2>
            <p className="section-desc">
              I eliminate the friction between frontend UI design, backend API engineering, self-hosted Linux server deployment, and search engine discovery.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="why-title">1. End-to-End Technical Ownership</h3>
              <p className="why-desc">
                From initial component architecture in Next.js to database modeling, Nodemailer email workflows, and production server setup, I take complete responsibility for delivering functioning systems.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <h3 className="why-title">2. Self-Hosted VPS Independence</h3>
              <p className="why-desc">
                Proven hands-on experience provisioning Contabo Linux VPS servers, configuring Apache Virtual Hosts, setting up Nginx reverse proxies, and maintaining 24/7 uptime via PM2 process daemons.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="why-title">3. Proven International SEO Results</h3>
              <p className="why-desc">
                Successfully contributed to ranking 20+ production websites in competitive search markets across the United States and Middle East countries via schema markup, XML sitemaps, and 301 redirects.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
              </div>
              <h3 className="why-title">4. Headless Commerce &amp; Integrations</h3>
              <p className="why-desc">
                Deep experience decoupling storefronts using Shopify Storefront API over GraphQL, building customer accounts via OAuth 2.0 PKCE, Stripe checkouts, and custom calculation engines.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <h3 className="why-title">5. High-Speed AI &amp; LLM Integrations</h3>
              <p className="why-desc">
                Integrating Groq Cloud LPU inference running Meta&apos;s Llama 3.1 to build sub-second personalized consultation engines, structured system prompt engineering, and input sanitization.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="why-title">6. Production Troubleshooting &amp; Uptime</h3>
              <p className="why-desc">
                Direct experience resolving live production outages, diagnosing SSL certificate conflicts, fixing 403 Forbidden permission errors, and recovering server resources under heavy load.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. SKILLS DIRECTORY PREVIEW
          =================================================================== */}
      <section className="section-py" aria-labelledby="skills-preview-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Technical Competencies</span>
            <h2 id="skills-preview-title" className="section-title">
              Explore the Technical Skills Directory
            </h2>
            <p className="section-desc">
              Every skill below links to an indexable, production-validated detail page with implementation notes and concrete FAQs.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {skillCategories.map((cat) => (
              <div key={cat.id} className="card" style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "6px" }}>{cat.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginBottom: "14px", lineHeight: "1.5" }}>
                  {cat.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cat.skills.slice(0, 3).map((skill) => (
                    <Link
                      key={skill.name}
                      href={`/skills/${skill.slug}`}
                      className="badge badge-navy"
                      style={{ textDecoration: "none", fontSize: "0.78rem", padding: "4px 8px" }}
                    >
                      {skill.name} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link href="/skills" className="btn btn-secondary">
              View Complete Skills Hub &amp; Detail Pages ↗
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. SELECTED CERTIFICATIONS
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="certifications-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Verified Credentials</span>
            <h2 id="certifications-title" className="section-title">
              Professional Certifications
            </h2>
            <p className="section-desc">
              Industry-recognized credentials verifying full-stack software development competency and distributed version control.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {certifications.map((cert) => (
              <div key={cert.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: "180px", marginBottom: "14px", borderRadius: "var(--radius-sm)", overflow: "hidden", background: "#FFFFFF", border: "1px solid var(--border-subtle)" }}>
                  <Image
                    src={cert.image}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "contain", padding: "8px" }}
                  />
                </div>
                <span className="badge badge-gold" style={{ width: "fit-content", marginBottom: "8px" }}>
                  {cert.issuer}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>{cert.title}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", flex: 1, lineHeight: "1.6" }}>
                  {cert.description}
                </p>
                <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                  <Link href="/certifications" className="btn btn-outline btn-sm">
                    View Verification Details ↗
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          8. CORPORATE CALL TO ACTION BANNER
          =================================================================== */}
      <section className="section-py" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-content">
              <span className="badge badge-gold" style={{ marginBottom: "16px", background: "rgba(245, 158, 11, 0.2)", color: "#FCD34D" }}>
                Available for Immediate Opportunities
              </span>
              <h2 className="cta-title">
                Need an Experienced Full-Stack Developer &amp; DevOps Specialist?
              </h2>
              <p className="cta-desc">
                Whether you need a full-stack Next.js developer, self-hosted Linux VPS deployment, or an international Technical SEO overhaul, let&apos;s discuss how I can create immediate value for your business.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
                <Link href="/contact" className="btn btn-accent btn-lg">
                  Get in Touch Today ↗
                </Link>
                <a href={personalInfo.resumePath} download className="btn btn-secondary btn-lg" style={{ color: "#00072A" }}>
                  Download Resume (PDF)
                </a>
                <a href={`tel:${personalInfo.phone}`} className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}>
                  Direct Call: {personalInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
