import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { experienceData, educationData } from "@/data/experience";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/experience.css";

export const metadata = {
  title: "Professional Experience | Soham Aeer | Full Stack & DevOps",
  description: "Review Soham Aeer's professional career at Integral Web Solution. Full-stack development, Contabo Linux VPS deployment, Technical SEO across 20+ websites, and business email infrastructure.",
  alternates: {
    canonical: "/experience"
  }
};

export default function ExperiencePage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Professional Experience", href: "/experience" }
  ];

  return (
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="section-header" style={{ marginBottom: "32px" }}>
        <span className="section-eyebrow">Career & Production History</span>
        <h1 className="section-title">
          Professional Experience & Engineering Impact
        </h1>
        <p className="section-desc">
          Documented hands-on commercial experience at Integral Web Solution, connecting full-stack web development with self-hosted Linux VPS deployment, international Technical SEO, and business email administration.
        </p>
      </div>

      <div className="experience-timeline">
        {experienceData.map((job, idx) => (
          <article key={idx} className="experience-card">
            <div className="exp-header">
              <div>
                <h2 className="exp-role-title">{job.role}</h2>
                <div className="exp-company">
                  {job.company} — <span style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{job.location}</span>
                </div>
              </div>
              <div className="exp-period-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>{job.period}</span>
              </div>
            </div>

            <p className="exp-summary-text">{job.summary}</p>

            <div className="exp-breakdown-grid">
              {job.responsibilities.map((cat, cIdx) => (
                <div key={cIdx} className="exp-category-block">
                  <h3 className="exp-category-title">
                    <span style={{ color: "var(--accent-blue)" }}>▪</span>
                    {cat.category}
                  </h3>
                  <ul className="exp-bullet-list">
                    {cat.items.map((bullet, bIdx) => (
                      <li key={bIdx} className="exp-bullet-item">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="exp-tech-stack-wrap">
              <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--text-primary)", display: "flex", alignItems: "center" }}>
                Production Technologies:
              </span>
              {job.techUsed.map((tech) => (
                <span key={tech} className="exp-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Education Timeline */}
      <section style={{ marginTop: "64px" }}>
        <div className="section-header">
          <span className="section-eyebrow">Education History</span>
          <h2 className="section-title">Academic Background</h2>
        </div>

        {educationData.map((edu, idx) => (
          <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>{edu.degree}</h3>
              <span className="badge badge-cyan">{edu.period}</span>
            </div>
            <div style={{ color: "var(--accent-blue)", fontWeight: 600 }}>
              {edu.institution} — <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{edu.location}</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6", marginTop: "6px" }}>
              {edu.focus}
            </p>
          </div>
        ))}
      </section>

      {/* Action Bar */}
      <div style={{ marginTop: "48px", textAlign: "center", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
        <a href={personalInfo.resumePath} download className="btn btn-primary btn-lg">
          Download Complete Resume (PDF)
        </a>
        <Link href="/contact" className="btn btn-secondary btn-lg">
          Contact Regarding Opportunities
        </Link>
      </div>
    </div>
  );
}
