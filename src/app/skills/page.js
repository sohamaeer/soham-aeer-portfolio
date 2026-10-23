import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { skillCategories } from "@/data/skills";
import "@/styles/skills.css";

export const metadata = {
  title: "Technical Skills Directory | Soham Aeer | Full Stack Developer",
  description: "Comprehensive technical skills directory of Soham Aeer. Full-stack development capabilities in React, Next.js, Node.js, Express, Linux VPS deployment, and Technical SEO.",
  alternates: {
    canonical: "/skills"
  }
};

export default function SkillsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Skills Directory", href: "/skills" }
  ];

  return (
    <>
      {/* Subpage Hero Banner with Background Image */}
      <section className="page-hero-banner" aria-label="Skills Hub Introduction">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <span className="section-eyebrow">Technical Competencies</span>
          <h1 className="section-title">
            Full Stack Developer Skills &amp; Engineering Matrix
          </h1>
          <p className="section-desc">
            Primary focus on full-stack web engineering with React, Next.js, Node.js, and Express, backed by hands-on self-hosted Linux VPS deployment, Technical SEO, and AI API integrations.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "80px" }}>
        <div className="skills-hub-grid">
          {skillCategories.map((category) => (
            <section key={category.id} className="skill-category-card" aria-labelledby={`cat-${category.id}`}>
              <div className="category-header">
                <div className="category-title-group">
                  <span className="badge badge-navy" style={{ textTransform: "none", fontSize: "0.8rem" }}>
                    {category.skills.length} Competencies
                  </span>
                  <h2 id={`cat-${category.id}`} className="category-title">
                    {category.title}
                  </h2>
                </div>
                <p className="category-desc">{category.description}</p>
              </div>

              <div className="skills-pills-wrap">
                {category.skills.map((skill) => (
                  <Link
                    key={skill.name}
                    href={`/skills/${skill.slug}`}
                    className={`skill-nav-pill ${skill.primary ? "primary-skill" : ""}`}
                  >
                    <span>{skill.name}</span>
                    <span className="pill-arrow">→</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="cta-banner" style={{ marginTop: "60px" }}>
          <div className="cta-banner-content">
            <h2 className="cta-title">Looking for a Specific Technology Stack?</h2>
            <p className="cta-desc">
              I build custom full-stack solutions tailored to your application and infrastructure requirements.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px" }}>
              <Link href="/projects" className="btn btn-primary btn-lg">
                Explore Projects ↗
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
