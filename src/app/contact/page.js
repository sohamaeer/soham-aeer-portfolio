import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/contact.css";

export const metadata = {
  title: "Contact Soham Aeer | Full Stack Developer & DevOps",
  description: "Get in touch with Soham Aeer for full-stack web development projects, Linux VPS server deployment, Technical SEO audits, or full-time opportunities.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <>
      {/* Subpage Hero Banner with Background Image */}
      <section className="page-hero-banner" aria-label="Contact Page Introduction">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <span className="section-eyebrow">Direct Communication</span>
          <h1 className="section-title">
            Get in Touch for Opportunities &amp; Collaborations
          </h1>
          <p className="section-desc">
            I welcome full-time software engineering roles, high-impact contract web applications, Linux VPS infrastructure setups, and Technical SEO audits. 
            Use the secure form below or reach out directly via email or phone.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "80px", paddingTop: "40px" }}>
        <div className="contact-layout">
        {/* Left Information Panel */}
        <div className="contact-info-panel">
          <div className="contact-direct-card">
            <div className="direct-method">
              <div className="direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="direct-details">
                <h4>Direct Email</h4>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
            </div>

            <div className="direct-method">
              <div className="direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="direct-details">
                <h4>Phone / WhatsApp</h4>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneDisplay}</a>
              </div>
            </div>

            <div className="direct-method">
              <div className="direct-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="direct-details">
                <h4>Location</h4>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: "var(--bg-surface-elevated)" }}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "8px" }}>Verified Profiles</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "16px" }}>
              Connect with me on professional developer networks:
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                GitHub Profile ↗
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                LinkedIn Profile ↗
              </a>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="contact-form-panel">
          <ContactForm />
        </div>
      </div>
    </div>
    </>
  );
}
