import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Bio Column */}
          <div className="footer-brand">
            <Link href="/" aria-label="Soham Aeer Home" style={{ display: "inline-block", marginBottom: "4px" }}>
              <svg viewBox="0 0 240 44" width="220" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ftr-logo-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                  <linearGradient id="ftr-logo-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#0369A1" />
                  </linearGradient>
                  <linearGradient id="ftr-logo-top" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
                <g transform="translate(2, 2)">
                  <polygon points="20,2 38,12 20,22 2,12" fill="url(#ftr-logo-top)" />
                  <polygon points="2,12 20,22 20,38 2,28" fill="url(#ftr-logo-left)" />
                  <polygon points="20,22 38,12 38,28 20,38" fill="url(#ftr-logo-right)" />
                  <polyline points="10,18 20,24 20,32" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="30,18 20,12 10,18" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  <circle cx="20" cy="22" r="3" fill="#FFFFFF" />
                </g>
                <g transform="translate(54, 8)">
                  <text x="0" y="18" fill="#FFFFFF" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="18" fontWeight="800" letterSpacing="0.04em">SOHAM AEER</text>
                  <circle cx="132" cy="13" r="3" fill="#38BDF8" />
                  <text x="0" y="31" fill="#38BDF8" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.14em">FULL STACK DEVELOPER</text>
                </g>
              </svg>
            </Link>
            <p className="footer-brand-desc">
              Full Stack Developer specializing in production-grade React.js, Next.js, and Node.js web applications, backed by Linux VPS &amp; domain DNS administration, Technical &amp; AI-assisted On-Page SEO across 20+ websites, and high-performance AI API integrations.
            </p>
            <div className="status-pill" style={{ width: "fit-content" }}>
              <span className="status-dot"></span>
              <span>Available for Full-Time Roles &amp; Contracts</span>
            </div>

            <div className="footer-contact-list" style={{ marginTop: "8px" }}>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneDisplay}</a>
              </div>
              <div className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Skills Column */}
          <div>
            <h4 className="footer-col-title">Engineering Skills</h4>
            <ul className="footer-nav-list">
              {footerLinks.skills.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects & Profiles Column */}
          <div>
            <h4 className="footer-col-title">Connect & Case Studies</h4>
            <ul className="footer-nav-list">
              {footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="footer-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Soham Aeer GitHub Profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub Profile</span>
                  <span style={{ fontSize: "0.8rem", marginLeft: "auto" }}>↗</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Soham Aeer LinkedIn Profile"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn Profile</span>
                  <span style={{ fontSize: "0.8rem", marginLeft: "auto" }}>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.name}. All verified rights reserved.</p>
          <div className="footer-tech-stack">
            Built with Next.js App Router • Vanilla JS & CSS • Node.js
          </div>
        </div>
      </div>
    </footer>
  );
}
