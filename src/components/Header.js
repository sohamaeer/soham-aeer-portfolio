"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/data/navigation";
import { personalInfo } from "@/data/personalInfo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
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
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Link */}
        <Link href="/" className="brand-link" aria-label="Soham Aeer - Home">
          <div className="brand-avatar">
            <Image
              src={personalInfo.profileImage}
              alt="Soham Aeer portrait"
              fill
              sizes="38px"
              priority
            />
          </div>
          <div className="brand-text">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role">Full Stack & DevOps</span>
          </div>
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

          <Link href="/contact" className="btn btn-primary btn-sm" style={{ display: "none" }}>
            Get In Touch
          </Link>

          {/* Mobile Menu Toggle Button */}
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
            <span className="brand-role">Navigation Menu</span>
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

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link
            href="/contact"
            className="btn btn-primary btn-block"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Soham
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
  );
}
