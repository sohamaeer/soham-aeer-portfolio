import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { skillCategories } from "@/data/skills";
import "@/styles/skills.css";

export const metadata = {
  title: "Technical Skills Directory & Engineering Capabilities | Soham Aeer",
  description: "Comprehensive technical skills directory of Soham Aeer. Explore categorized capabilities across React, Next.js, Node.js, Linux VPS deployment, Technical SEO, and AI integrations.",
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
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="section-header" style={{ marginBottom: "32px" }}>
        <span className="section-eyebrow">Skills Architecture</span>
        <h1 className="section-title">
          Technical Skills & Production Engineering Competencies
        </h1>
        <p className="section-desc">
          This is an indexable, production-validated skills directory—not a row of decorative technology badges. 
          Every major capability below links to a comprehensive technical detail page explaining how I apply it in production, relevant implementation concepts, and practical FAQs.
        </p>
      </div>

      <div className="skills-hub-grid">
        {skillCategories.map((category) => (
          <section key={category.id} className="skill-category-card" aria-labelledby={`cat-${category.id}`}>
            <div className="category-header">
              <div className="category-title-group">
                <span className="badge badge-purple" style={{ textTransform: "none", fontSize: "0.8rem" }}>
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

      <div className="cta-banner" style={{ marginTop: "64px" }}>
        <div className="cta-banner-content">
          <h2 className="cta-title">Looking for a Specific Technology Stack?</h2>
          <p className="cta-desc">
            I build custom full-stack solutions tailored to your infrastructure requirements. View my production projects or get in touch directly.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
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
  );
}
