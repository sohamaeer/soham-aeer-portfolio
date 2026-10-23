import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import ProjectCard from "@/components/ProjectCard";
import { personalInfo } from "@/data/personalInfo";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { certifications } from "@/data/certifications";
import "@/styles/home.css";

export const metadata = {
  title: "Soham Aeer | Full Stack Developer | React, Next.js, Node.js & Express.js",
  description: "Official portfolio of Soham Aeer, Full Stack Developer specializing in React.js, Next.js, Node.js, and Express.js, with hands-on Linux VPS deployment, Technical SEO, and AI integrations.",
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ===================================================================
          1. HERO SLIDER WITH DYNAMIC BACKGROUND IMAGES
          =================================================================== */}
      <HeroSlider />

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
              <div className="stat-text">Full-Stack Lifecycle Delivery (UI to Server)</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">99.9%</div>
              <div className="stat-text">Focus on Production Uptime &amp; Reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. FULL STACK DEVELOPER PROFILE & BRIEFING
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="about-brief-title">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid var(--border-medium)", boxShadow: "var(--shadow-md)" }}>
              <Image
                src={personalInfo.workspaceImage}
                alt="Soham Aeer in development workspace"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <span className="section-eyebrow">Full Stack Specialization</span>
              <h2 id="about-brief-title" className="section-title">
                Full Stack Developer Delivering Resilient Web Systems
              </h2>
              <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "16px" }}>
                My core expertise is <strong>Full Stack Web Development</strong> using <strong>React.js, Next.js App Router, Node.js, and Express.js</strong>. 
                At <strong>Integral Web Solution</strong> in Mumbai, I engineer scalable client platforms, custom portals, and modern e-commerce stores with sub-second responsiveness and clean component architecture.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "24px" }}>
                As powerful force multipliers, I manage self-hosted <strong>Contabo Linux VPS servers</strong> (domain DNS records management, Apache Virtual Hosts, Nginx reverse proxy, Let&apos;s Encrypt SSL, PM2), execute <strong>Technical &amp; AI-assisted On-Page SEO</strong> (natural human tone, all on-page parameters) across 20+ websites targeting US and Middle East search regions, and integrate modern <strong>AI/LLM APIs</strong> (Groq Cloud Llama 3.1).
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link href="/about" className="btn btn-primary">
                  Read Full Developer Bio ↗
                </Link>
                <Link href="/experience" className="btn btn-secondary">
                  View Professional Experience
                </Link>
                <Link href="/skills" className="btn btn-outline">
                  Browse Skills Directory
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. FEATURED PRODUCTION PROJECTS
          =================================================================== */}
      <section className="section-py" aria-labelledby="featured-projects-title">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Production Portfolio</span>
            <h2 id="featured-projects-title" className="section-title">
              Featured Web Applications &amp; Case Studies
            </h2>
            <p className="section-desc">
              Every project below represents hands-on full-stack engineering, verified code repositories, and real architectural problem-solving.
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
          5. "WHY HIRE SOHAM AEER"
          =================================================================== */}
      <section className="section-py" style={{ backgroundColor: "var(--bg-surface-elevated)" }} aria-labelledby="why-choose-title">
        <div className="container">
          <div className="section-header section-header-center">
            <span className="section-eyebrow">The Engineering Advantage</span>
            <h2 id="why-choose-title" className="section-title">
              Why Engineering Teams Hire Me for Full Stack Roles
            </h2>
            <p className="section-desc">
              I eliminate the traditional handoff friction between UI design, backend services, self-hosted server deployment, and search engine indexation.
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
              <h3 className="why-title">1. Full-Stack End-to-End Ownership</h3>
              <p className="why-desc">
                From initial responsive UI architecture in Next.js to database design, Nodemailer transactional workflows, and server deployment, I take complete responsibility for delivering production features.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              </div>
              <h3 className="why-title">2. Self-Hosted VPS &amp; DevOps</h3>
              <p className="why-desc">
                Hands-on experience provisioning Contabo Linux VPS servers, configuring Apache Virtual Hosts and Nginx reverse proxies, automating SSL certificates, and keeping daemons alive with PM2.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <h3 className="why-title">3. Proven International SEO Track Record</h3>
              <p className="why-desc">
                Contributed to ranking 20+ production websites in US and Middle East search regions via dynamic schema markup, self-referential canonical tags, XML sitemaps, and clean 301 redirects.
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
                Experience decoupling storefronts using Shopify Storefront API over GraphQL, OAuth 2.0 PKCE customer accounts, localized GST tax logic, and Stripe payment gateway checkouts.
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
                Connecting Groq Cloud LPU inference running Meta&apos;s Llama 3.1 to web apps, structured prompt engineering, and context-aware recommendation workflows in commercial web applications.
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
                Direct experience diagnosing live server conflicts, Let&apos;s Encrypt certificate renewal issues, 403 Forbidden directory permissions, and memory bottlenecks under heavy worker load.
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
              View Complete Skills Hub (16 Detail Pages) ↗
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
                <span className="badge badge-navy" style={{ width: "fit-content", marginBottom: "8px" }}>
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
              <span className="badge badge-navy" style={{ marginBottom: "16px", color: "#38BDF8", background: "rgba(37, 99, 235, 0.2)" }}>
                Available for Full Stack Opportunities
              </span>
              <h2 className="cta-title">
                Looking for a Reliable Full Stack Developer?
              </h2>
              <p className="cta-desc">
                Whether you need a Next.js/React full-stack engineer, self-hosted Linux VPS deployment, or international Technical SEO optimization, let&apos;s discuss how I can add immediate value to your engineering team.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get in Touch Today ↗
                </Link>
                <a href={personalInfo.resumePath} download className="btn btn-secondary btn-lg">
                  Download Resume (PDF)
                </a>
                <a href={`tel:${personalInfo.phone}`} className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#FFFFFF" }}>
                  Call Direct: {personalInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
