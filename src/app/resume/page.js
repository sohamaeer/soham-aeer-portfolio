import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { personalInfo } from "@/data/personalInfo";
import { experienceData, educationData } from "@/data/experience";
import { projects } from "@/data/projects";
import { certifications } from "@/data/certifications";
import "@/styles/resume.css";

export const metadata = {
  title: "Resume & Curriculum Vitae | Soham Aeer | Full Stack Developer",
  description: "Official online resume of Soham Aeer. Full Stack Developer with React, Next.js, Node.js, Linux VPS deployment, Technical SEO, and AI integration experience. Download PDF resume.",
  alternates: {
    canonical: "/resume"
  }
};

export default function ResumePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Curriculum Vitae", href: "/resume" }
  ];

  return (
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header Action Bar */}
      <div className="resume-header-bar">
        <div>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "4px" }}>
            Curriculum Vitae & Credentials
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
            Verified technical resume for recruitment and engineering leadership review.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
          <a
            href={personalInfo.resumePath}
            download
            className="btn btn-primary"
            aria-label="Download Soham Aeer's verified PDF resume"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume (PDF)
          </a>

          <a
            href={personalInfo.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Open PDF in Tab ↗
          </a>
        </div>
      </div>

      {/* Resume Document Paper */}
      <article className="resume-paper" aria-label="Soham Aeer Resume Document">
        {/* Document Header */}
        <header className="resume-sheet-header">
          <h2 className="resume-name">{personalInfo.name}</h2>
          <div className="resume-headline">{personalInfo.headline}</div>

          <div className="resume-contact-inline">
            <span>{personalInfo.location}</span>
            <span>•</span>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <span>•</span>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneDisplay}</a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section">
          <h3 className="resume-section-title">Professional Summary</h3>
          <p className="resume-body-text">
            Full Stack Developer with hands-on experience building and deploying production web applications using 
            <strong> React.js, Next.js, Node.js, and Express.js</strong>. Experienced in <strong>VPS deployment, Apache/Nginx, Reverse Proxy, SSL, PM2, domain and DNS management</strong>, and business email administration. Skilled in implementing 
            <strong> Technical SEO</strong>, including schema markup, XML sitemaps, metadata optimization, and search-focused website improvements. Experienced in integrating 
            <strong> AI/LLM APIs</strong> (Groq Llama 3.1) and third-party services to build functional, scalable web solutions. Strong exposure to client projects, production troubleshooting, and end-to-end web application deployment.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h3 className="resume-section-title">Technical Skills</h3>
          <div className="resume-skills-grid">
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Languages:</span>
              <span className="resume-skill-items">JavaScript (ES6+), HTML5, CSS3</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Frontend:</span>
              <span className="resume-skill-items">React.js, Next.js, Responsive Web Design, React Helmet</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Backend:</span>
              <span className="resume-skill-items">Node.js, Express.js, REST APIs, Firebase</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Databases:</span>
              <span className="resume-skill-items">MySQL, MongoDB, Firestore</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">DevOps & Infra:</span>
              <span className="resume-skill-items">Apache, Nginx, VPS Hosting, Reverse Proxy, SSH, Ubuntu Linux, PM2</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Technical SEO:</span>
              <span className="resume-skill-items">Technical SEO, Schema Markup, XML Sitemap, Robots.txt, Keyword Research, Content Optimization, ON Page SEO, Backlink Strategy</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">AI / Gen AI:</span>
              <span className="resume-skill-items">AI API Integration, Prompt Engineering, LLM Integration (Groq Llama 3.1)</span>
            </div>
            <div className="resume-skill-row">
              <span className="resume-skill-cat">Tools & Services:</span>
              <span className="resume-skill-items">Git, GitHub, Nodemailer, Stripe API, EmailJS</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="resume-section">
          <h3 className="resume-section-title">Professional Experience</h3>
          {experienceData.map((job, idx) => (
            <div key={idx} className="resume-job">
              <div className="resume-job-header">
                <div>
                  <span className="resume-job-title">{job.role}</span> — <span className="resume-job-company">{job.company}</span>
                </div>
                <div className="resume-job-date">{job.period} | {job.location}</div>
              </div>

              <ul className="resume-bullet-list">
                <li>Developed and deployed multiple full-stack production applications using React.js, Next.js, Node.js, and Express.js.</li>
                <li>Built and deployed client websites including corporate platforms, portals, and e-commerce systems.</li>
                <li>Integrated third-party services including Stripe payments, EmailJS, Nodemailer, and AI APIs.</li>
                <li>Configured Linux VPS servers (Contabo) with Apache Virtual Hosts and Reverse Proxy routing for multiple live domains.</li>
                <li>Managed business email setup using Google Workspace and Microsoft Services including domain-based email creation, user account provisioning, Gmail configuration, and client email administration.</li>
                <li>Managed domain and DNS records, mail server configuration, and migrated existing webmail data to newly provisioned Google Workspace accounts while maintaining email continuity.</li>
                <li>Implemented Technical SEO strategies including React Helmet, schema markup, XML sitemaps, and Open Graph optimization.</li>
                <li>Performed SEO optimization for 20+ websites, including keyword research, content optimization, and backlink strategies to improve search rankings.</li>
                <li>Successfully contributed to ranking websites in US search regions and all Middle East countries search regions, improving visibility and organic traffic.</li>
                <li>Deployed ERPNext v15 on Ubuntu with MariaDB, Redis, Supervisor, and Nginx configuration.</li>
                <li>Diagnosed and resolved production issues including SSL conflicts, 403 errors, and server misconfigurations.</li>
                <li>Built secure backend services and automated email workflows using Node.js and Nodemailer.</li>
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h3 className="resume-section-title">Production Projects</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {projects.slice(0, 5).map((project) => (
              <div key={project.slug}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "6px" }}>
                  <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                    {project.name}
                  </span>
                  <div style={{ display: "flex", gap: "8px", fontSize: "0.82rem" }}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)" }}>
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-cyan)" }}>
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", marginTop: "4px", lineHeight: "1.5" }}>
                  {project.headline}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <h3 className="resume-section-title">Certifications</h3>
          <ul className="resume-bullet-list">
            {certifications.map((cert) => (
              <li key={cert.id}>
                <strong>{cert.title}</strong> — {cert.issuer}
              </li>
            ))}
          </ul>
        </section>

        {/* Education */}
        <section className="resume-section" style={{ marginBottom: 0 }}>
          <h3 className="resume-section-title">Education</h3>
          {educationData.map((edu, idx) => (
            <div key={idx}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{edu.degree}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.88rem", fontFamily: "var(--font-mono)" }}>{edu.period}</span>
              </div>
              <div style={{ color: "var(--accent-blue)", fontSize: "0.92rem", marginTop: "2px" }}>
                {edu.institution}, {edu.location}
              </div>
            </div>
          ))}
        </section>
      </article>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="/contact" className="btn btn-primary btn-lg">
          Discuss Hiring & Opportunities ↗
        </Link>
      </div>
    </div>
  );
}
