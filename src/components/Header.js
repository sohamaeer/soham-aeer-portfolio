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
                <span>Call / WhatsApp:</span>
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phoneDisplay}</a>
              </div>

              <div className="top-header-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email:</span>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>

              <div className="top-header-item">
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
                <span>Available for Full-Stack Roles</span>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#E2E8F0", fontSize: "0.8rem", fontWeight: 600 }}
                  aria-label="GitHub Profile"
                >
                  GitHub ↗
                </a>
                <span style={{ color: "#475569" }}>|</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#E2E8F0", fontSize: "0.8rem", fontWeight: 600 }}
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn ↗
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
                className="btn btn-secondary btn-sm"
              >
                Resume PDF
              </a>

              <Link href="/contact" className="btn btn-primary btn-sm">
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
