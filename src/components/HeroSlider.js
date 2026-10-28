"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personalInfo";

const slides = [
  {
    id: 1,
    bgImage: "/images/heroes/hero-fullstack.jpg",
    badge: "Core Specialization • Full Stack Developer",
    title: "Engineering Production Web Applications with Next.js, React & Node",
    subtitle: "Full Stack Developer focused on building clean, high-performance web applications using React.js, Next.js App Router, Node.js, and Express.js. Designed for sub-second page transitions, modular component architecture, and zero-bloat CSS.",
    tags: ["React.js", "Next.js App Router", "Node.js", "Express.js", "REST APIs", "Modern JavaScript"],
    primaryCta: { label: "Explore Full-Stack Projects ↗", href: "/projects" },
    secondaryCta: { label: "Download Resume (PDF)", href: personalInfo.resumePath, download: true }
  },
  {
    id: 2,
    bgImage: "/images/heroes/hero-devops.jpg",
    badge: "DevOps & Server Deployment • Force Multiplier",
    title: "Self-Hosted Linux VPS Infrastructure & Domain DNS Management",
    subtitle: "Hands-on experience provisioning Contabo Linux VPS environments, configuring domain DNS records (A, CNAME, MX, TXT, Cloudflare), Apache Virtual Hosts, Nginx reverse proxies, SSL automation, and PM2 process daemons.",
    tags: ["Ubuntu Linux", "Domain DNS Admin", "Contabo VPS", "Apache Virtual Hosts", "Nginx Reverse Proxy", "Certbot SSL"],
    primaryCta: { label: "View Full-Stack B2B Build ↗", href: "/projects/mahadev-plastic" },
    secondaryCta: { label: "Explore DevOps Skills", href: "/skills/vps-deployment" }
  },
  {
    id: 3,
    bgImage: "/images/heroes/hero-seo.jpg",
    badge: "Technical & On-Page SEO • International Search Growth",
    title: "Technical & AI-Assisted On-Page SEO Across 20+ Production Websites",
    subtitle: "Proven track record ranking in US and Middle East markets. Combining JSON-LD schema, sitemaps, and 301 redirects with AI-crafted on-page content written in natural human tone satisfying all on-page parameters.",
    tags: ["Technical SEO", "AI On-Page SEO (Human Tone)", "All On-Page Parameters", "20+ Sites Optimized", "JSON-LD Schema"],
    primaryCta: { label: "Read B2B SEO Case Study ↗", href: "/projects/shreeji-sales-corporation" },
    secondaryCta: { label: "View SEO Architecture", href: "/skills/technical-seo" }
  },
  {
    id: 4,
    bgImage: "/images/heroes/hero-ai.jpg",
    badge: "Modern Commerce & Artificial Intelligence",
    title: "Shopify Headless Commerce & Groq Llama 3.1 AI Integration",
    subtitle: "Decoupled headless storefronts powered by Next.js and Shopify Storefront GraphQL, secure OAuth 2.0 PKCE customer authentication, and sub-second AI recommendation engines using Groq Cloud inference.",
    tags: ["Shopify Storefront API", "GraphQL", "OAuth 2.0 PKCE", "Groq Llama 3.1", "Stripe Checkout"],
    primaryCta: { label: "View FitCart Store Case Study ↗", href: "/projects/fitcart" },
    secondaryCta: { label: "Discuss Opportunities", href: "/contact" }
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      className="hero-slider-section"
      aria-label="Highlighted Specializations"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            aria-hidden={!isActive}
          >
            <div className="hero-slide-overlay" />
            <div className="container hero-slide-container">
              <div className="hero-slide-content">
                <div className="hero-slide-badge">
                  <span className="badge-pulse" />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="hero-slide-title">
                  {slide.title}
                </h1>

                <p className="hero-slide-subtitle">
                  {slide.subtitle}
                </p>

                <div className="hero-slide-tags">
                  {slide.tags.map((tag) => (
                    <span key={tag} className="hero-slide-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="hero-slide-actions">
                  <Link href={slide.primaryCta.href} className="btn btn-primary btn-lg btn-mobile-full">
                    {slide.primaryCta.label}
                  </Link>

                  {slide.secondaryCta.download ? (
                    <a
                      href={slide.secondaryCta.href}
                      download
                      className="btn btn-secondary btn-lg btn-mobile-full"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      {slide.secondaryCta.label}
                    </a>
                  ) : (
                    <Link href={slide.secondaryCta.href} className="btn btn-secondary btn-lg btn-mobile-full">
                      {slide.secondaryCta.label}
                    </Link>
                  )}

                  <a href={`tel:${personalInfo.phone}`} className="hero-direct-call">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span>{personalInfo.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slider Controls Bar */}
      <div className="container hero-slider-controls">
        <div className="slider-nav-arrows">
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="slider-arrow-btn"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="slider-indicators">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`slider-dot-btn ${idx === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
            >
              <span className="dot-index">0{idx + 1}</span>
              <span className="dot-bar" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
