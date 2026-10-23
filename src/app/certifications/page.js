import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { certifications } from "@/data/certifications";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/certifications.css";

export const metadata = {
  title: "Verified Certifications & Credentials | Soham Aeer",
  description: "View verified technical certifications held by Soham Aeer, including CodeSignal Full Stack Web Development, Microsoft Learn Git & GitHub, and NASD Web Development.",
  alternates: {
    canonical: "/certifications"
  }
};

export default function CertificationsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Certifications", href: "/certifications" }
  ];

  return (
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="section-header" style={{ marginBottom: "32px" }}>
        <span className="section-eyebrow">Verified Credentials</span>
        <h1 className="section-title">
          Professional Certifications & Technical Credentials
        </h1>
        <p className="section-desc">
          Official credentials verifying full-stack software development competency, modern JavaScript architecture, web standards, and distributed version control workflows.
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.id} className="cert-card">
            <div className="cert-image-container">
              <Image
                src={cert.image}
                alt={cert.alt}
                fill
                sizes="(max-width: 992px) 100vw, 380px"
                loading="lazy"
              />
            </div>

            <div className="cert-body">
              <span className="cert-issuer-badge">{cert.issuer}</span>
              <h2 className="cert-title">{cert.title}</h2>
              <p className="cert-desc">{cert.description}</p>

              <div className="cert-skills-list">
                {cert.skills.map((skill) => (
                  <span key={skill} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="cta-banner" style={{ marginTop: "64px" }}>
        <div className="cta-banner-content">
          <h2 className="cta-title">Looking for Verified Technical Proficiency?</h2>
          <p className="cta-desc">
            Download my verified resume or explore my hands-on production code repositories on GitHub.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <a href={personalInfo.resumePath} download className="btn btn-primary btn-lg">
              Download Resume (PDF)
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              Explore GitHub Repositories ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
