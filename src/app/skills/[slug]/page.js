import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import { skillDetails } from "@/data/skills";
import { projects } from "@/data/projects";
import "@/styles/skills.css";

export function generateStaticParams() {
  return Object.keys(skillDetails).map((slug) => ({
    slug: slug
  }));
}

export function generateMetadata({ params }) {
  const skill = skillDetails[params.slug];
  if (!skill) {
    return {
      title: "Skill Not Found"
    };
  }

  return {
    title: skill.seo.title,
    description: skill.seo.description,
    keywords: skill.seo.keywords,
    alternates: {
      canonical: `/skills/${skill.slug}`
    },
    openGraph: {
      title: skill.seo.title,
      description: skill.seo.description,
      url: `/skills/${skill.slug}`,
      type: "article"
    }
  };
}

export default function SkillDetailPage({ params }) {
  const skill = skillDetails[params.slug];

  if (!skill) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Skills Hub", href: "/skills" },
    { label: skill.name, href: `/skills/${skill.slug}` }
  ];

  const matchingProjects = projects.filter((p) =>
    skill.relatedProjects?.includes(p.slug)
  );

  return (
    <>
      {/* Subpage Hero Banner with Background Image */}
      <section className="page-hero-banner" aria-label="Skill Detail Header">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
            <span className="badge badge-navy" style={{ background: "rgba(37, 99, 235, 0.2)", color: "#38BDF8" }}>
              {skill.category}
            </span>
            <span className="badge badge-navy" style={{ background: "rgba(255, 255, 255, 0.1)", color: "#FFFFFF" }}>
              {skill.badge}
            </span>
          </div>
          <h1 className="section-title">{skill.h1}</h1>
          <p className="section-desc">{skill.summary}</p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "80px" }}>
        <div className="skill-content-layout">
          {/* Main Body Column */}
          <div className="skill-main-body">
            <section className="skill-section">
              <h2 className="skill-section-title">Production Experience &amp; Capabilities</h2>
              <div className="skill-prose">
                <p>{skill.description}</p>
              </div>
            </section>

            <section className="skill-section">
              <h2 className="skill-section-title">How I Apply {skill.name} in Production</h2>
              <ul className="checklist">
                {skill.howIUse.map((item, index) => (
                  <li key={index} className="checklist-item">
                    <span className="checklist-bullet">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="skill-section">
              <h2 className="skill-section-title">Key Architectural Concepts &amp; Implementation Patterns</h2>
              <div className="card" style={{ backgroundColor: "var(--bg-surface-elevated)" }}>
                <ul className="checklist">
                  {skill.implementationConcepts.map((concept, index) => (
                    <li key={index} className="checklist-item">
                      <span className="checklist-bullet" style={{ color: "var(--primary)" }}>▪</span>
                      <span>{concept}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="skill-section">
              <h2 className="skill-section-title">Business &amp; Commercial Problems Solved</h2>
              <div className="callout">
                <div className="callout-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Commercial Impact
                </div>
                <div className="callout-body">
                  {skill.businessValue}
                </div>
              </div>
            </section>

            {/* Exactly 4 FAQs */}
            <section className="skill-section">
              <FAQSection
                faqs={skill.faqs}
                title={`Technical FAQs: ${skill.name}`}
                subtitle="Concrete answers regarding real-world implementation, trade-offs, and best practices."
                includeSchema={true}
              />
            </section>
          </div>

          {/* Sidebar Column */}
          <aside className="skill-sidebar">
            {matchingProjects.length > 0 && (
              <div className="sidebar-widget">
                <h3 className="widget-title">Demonstrated in Projects</h3>
                <ul className="widget-links">
                  {matchingProjects.map((p) => (
                    <li key={p.slug} className="widget-link-item">
                      <Link href={`/projects/${p.slug}`}>
                        <span>{p.shortName || p.name}</span>
                        <span>↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="sidebar-widget">
              <h3 className="widget-title">Related Technologies</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {skill.relatedTech.map((tech) => (
                  <span key={tech} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-widget" style={{ borderTop: "3px solid var(--primary)" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 800, marginBottom: "8px" }}>
                Need {skill.name} Expertise?
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "16px", lineHeight: "1.6" }}>
                I am available for full-stack engineering roles and production web application delivery.
              </p>
              <Link href="/contact" className="btn btn-primary btn-sm btn-block">
                Discuss Your Project ↗
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
