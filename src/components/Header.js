"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personalInfo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-header">
        <div className="container">
          <div className="top-header-inner">
            <div className="top-header-contacts">
              <div className="top-header-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="top-header-label">Call / WhatsApp:</span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneDisplay}</a>
              </div>

              <div className="top-header-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="top-header-label">Email:</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>

              <div className="top-header-item top-header-location">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="top-header-right">
              <div className="top-header-status">
                <span className="top-status-dot"></span>
                <span className="top-status-text">Available for Full-Stack Roles</span>
              </div>

              <div className="top-header-socials">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="top-social-btn"
                  aria-label="Soham Aeer GitHub Profile"
                  title="GitHub Profile"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="top-social-btn"
                  aria-label="Soham Aeer LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header with Logo Emblem */}
      <header className="site-header">
        <div className="container">
          <div className="main-header-inner">
            {/* Brand Logo - High Precision Corporate Vector Mark */}
            <Link href="/" className="brand-link" aria-label="Soham Aeer - Full Stack Developer">
              <svg className="site-logo-svg" viewBox="0 0 240 44" width="220" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="hdr-logo-left" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1D4ED8" />
                  </linearGradient>
                  <linearGradient id="hdr-logo-right" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0284C7" />
                    <stop offset="100%" stopColor="#0369A1" />
                  </linearGradient>
                  <linearGradient id="hdr-logo-top" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
                <g transform="translate(2, 2)">
                  <polygon points="20,2 38,12 20,22 2,12" fill="url(#hdr-logo-top)" />
                  <polygon points="2,12 20,22 20,38 2,28" fill="url(#hdr-logo-left)" />
                  <polygon points="20,22 38,12 38,28 20,38" fill="url(#hdr-logo-right)" />
                  <polyline points="10,18 20,24 20,32" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="30,18 20,12 10,18" stroke="#0F172A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
                  <circle cx="20" cy="22" r="3" fill="#FFFFFF" />
                </g>
                <g transform="translate(54, 8)">
                  <text x="0" y="18" className="logo-text-title" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="18" fontWeight="800" letterSpacing="0.04em">SOHAM AEER</text>
                  <circle cx="132" cy="13" r="3" fill="#0052CC" />
                  <text x="0" y="31" className="logo-text-sub" fontFamily="'Plus Jakarta Sans', system-ui, sans-serif" fontSize="9.5" fontWeight="700" letterSpacing="0.14em">FULL STACK DEVELOPER</text>
                </g>
              </svg>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                if (item.hasDropdown) {
                  if (item.isMegaMenu) {
                    return (
                      <div key={item.label} className="nav-item-dropdown nav-item-mega">
                        <Link
                          href={item.href}
                          className={`nav-link ${isActive ? "active" : ""}`}
                          aria-haspopup="true"
                        >
                          {item.label}
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </Link>

                        <div className="dropdown-menu mega-menu" role="menu">
                          <div className="mega-menu-grid">
                            {item.megaMenuColumns.map((col, idx) => (
                              <div key={idx} className="mega-menu-col">
                                <span className="mega-col-heading">{col.title}</span>
                                {col.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className="mega-item-link"
                                    role="menuitem"
                                  >
                                    <span className="mega-item-title">
                                      {subItem.name}
                                      <span className="mega-item-arrow">↗</span>
                                    </span>
                                    <span className="mega-item-desc">{subItem.desc}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>

                          <div className="mega-menu-footer">
                            <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                              Looking for complete proficiency verification?
                            </span>
                            <Link href="/skills" className="mega-footer-link">
                              Explore All 16 Verified Technical Skills &amp; FAQs ↗
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={item.label} className="nav-item-dropdown">
                      <Link
                        href={item.href}
                        className={`nav-link ${isActive ? "active" : ""}`}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </Link>

                      <div className="dropdown-menu" role="menu">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="dropdown-item"
                            role="menuitem"
                          >
                            <span className="dropdown-item-title">{subItem.name}</span>
                            <span className="dropdown-item-desc">{subItem.desc}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div className="header-actions">
              <ThemeToggle />

              <a
                href={personalInfo.resumePath}
                download
                className="btn btn-secondary btn-sm header-cta-btn header-resume-btn"
              >
                Resume PDF
              </a>

              <Link href="/contact" className="btn btn-primary btn-sm header-cta-btn header-contact-btn">
                Get In Touch ↗
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Backdrop */}
        <div
          className={`mobile-nav-backdrop ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-nav-header">
            <div className="brand-text">
              <span className="brand-name">{personalInfo.name}</span>
              <span className="brand-role">Full Stack Developer</span>
            </div>
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <nav className="mobile-nav-links">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              if (item.hasDropdown) {
                const isSectionOpen = openDropdown === item.label;
                return (
                  <div key={item.label} className="mobile-dropdown-group">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Link
                        href={item.href}
                        className={`mobile-nav-item ${isActive ? "active" : ""}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobileDropdown(item.label)}
                        style={{ padding: "8px 14px", color: "var(--text-muted)" }}
                        aria-label={`Toggle ${item.label} sub-links`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isSectionOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 200ms ease"
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>

                    {isSectionOpen && (
                      <div className="mobile-dropdown-section">
                        {item.dropdownItems.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="mobile-dropdown-link"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-item ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link
              href="/contact"
              className="btn btn-primary btn-block"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Soham ↗
            </Link>
            <a
              href={personalInfo.resumePath}
              download
              className="btn btn-secondary btn-block"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
