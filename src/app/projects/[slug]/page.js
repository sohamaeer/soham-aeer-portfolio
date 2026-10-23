import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import JsonLd from "@/components/JsonLd";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personalInfo";
import "@/styles/projects.css";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug
  }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.shortName || project.name} Case Study | Soham Aeer`,
    description: project.headline,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.name} | Case Study by Soham Aeer`,
      description: project.headline,
      url: `/projects/${project.slug}`,
      images: project.image ? [{ url: project.image, alt: project.imageAlt }] : []
    }
  };
}

export default function ProjectCaseStudyPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: project.shortName || project.name, href: `/projects/${project.slug}` }
  ];

  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.name,
    "applicationCategory": project.category,
    "operatingSystem": "Web, Cloud, Linux VPS",
    "author": {
      "@type": "Person",
      "name": personalInfo.name,
      "url": personalInfo.siteUrl
    },
    "description": project.headline,
    "url": project.liveUrl || `${personalInfo.siteUrl}/projects/${project.slug}`
  };

  return (
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <JsonLd data={softwareSchema} />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Case Study Hero */}
      <section className="case-study-hero">
        <span className="badge badge-purple" style={{ marginBottom: "14px" }}>
          {project.badge || project.category}
        </span>
        <h1 className="case-study-title">{project.name}</h1>
        <p className="case-study-tagline">{project.headline}</p>

        {/* Project Meta Bar */}
        <div className="case-meta-bar">
          <div className="case-meta-item">
            <span className="case-meta-label">My Role</span>
            <span className="case-meta-val">{project.role}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Client / Context</span>
            <span className="case-meta-val">{project.client}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Category</span>
            <span className="case-meta-val">{project.category}</span>
          </div>
          <div className="case-meta-item">
            <span className="case-meta-label">Timeline</span>
            <span className="case-meta-val">{project.timeline}</span>
          </div>
        </div>

        {/* Action Links */}
        <div className="case-actions-bar">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Live Application ↗
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View GitHub Repository ↗
            </a>
          )}

          <Link href="/contact" className="btn btn-outline">
            Inquire About Similar Build
          </Link>
        </div>
      </section>

      {/* Hero Screenshot */}
      {project.image && (
        <div className="case-feature-image">
          <Image
            src={project.image}
            alt={project.imageAlt || `${project.name} preview`}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>
      )}

      {/* Main Grid */}
      <div className="case-grid">
        <div className="case-main">
          {/* Overview */}
          <section className="case-block">
            <h2 className="case-block-title">Project Overview</h2>
            <div className="case-prose">
              <p>{project.overview}</p>
            </div>
          </section>

          {/* Problem & Objectives */}
          <section className="case-block">
            <h2 className="case-block-title">The Challenge & Business Requirement</h2>
            <div className="case-prose">
              <p>{project.problem}</p>
            </div>
          </section>

          {/* Architecture Table */}
          {project.architecture && (
            <section className="case-block">
              <h2 className="case-block-title">Technical Architecture & Infrastructure</h2>
              <table className="architecture-table">
                <tbody>
                  {Object.entries(project.architecture).map(([layer, desc]) => (
                    <tr key={layer}>
                      <th style={{ textTransform: "capitalize" }}>
                        {layer.replace(/([A-Z])/g, " $1")}
                      </th>
                      <td>{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {/* Key Features */}
          <section className="case-block">
            <h2 className="case-block-title">Key Engineering Features</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
              {project.keyFeatures?.map((feat, idx) => (
                <div key={idx} className="card" style={{ padding: "18px", backgroundColor: "var(--bg-surface-elevated)" }}>
                  <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent-blue)", fontWeight: "bold" }}>✔</span>
                    <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>{feat}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Responsibilities */}
          <section className="case-block">
            <h2 className="case-block-title">My Engineering Responsibilities</h2>
            <ul className="checklist">
              {project.responsibilities?.map((item, idx) => (
                <li key={idx} className="checklist-item">
                  <span className="checklist-bullet">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Challenges & Solutions */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <section className="case-block">
              <h2 className="case-block-title">Documented Technical Challenges & Solutions</h2>
              {project.technicalChallenges.map((item, idx) => (
                <div key={idx} className="challenge-card">
                  <h3 className="challenge-title">Challenge: {item.challenge}</h3>
                  <h4 className="solution-title">Engineered Solution:</h4>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    {item.solution}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* SEO & Performance Implementation */}
          {project.seoImplementation && (
            <section className="case-block">
              <h2 className="case-block-title">SEO Architecture & Performance Implementation</h2>
              <div className="callout">
                <div className="callout-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  Search Engine & Performance Optimization
                </div>
                <div className="callout-body">
                  {project.seoImplementation}
                </div>
              </div>
            </section>
          )}

          {/* FAQs (Exactly 4 per project) */}
          <section className="case-block">
            <FAQSection
              faqs={project.faqs}
              title={`Frequently Asked Questions: ${project.shortName || project.name}`}
              includeSchema={true}
            />
          </section>
        </div>

        {/* Sidebar */}
        <aside className="skill-sidebar">
          {/* Tech Stack Widget */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Technologies Used</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.techStack?.map((tech) => (
                <span key={tech} className="project-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Related Projects */}
          <div className="sidebar-widget">
            <h3 className="widget-title">More Case Studies</h3>
            <ul className="widget-links">
              {otherProjects.map((op) => (
                <li key={op.slug} className="widget-link-item">
                  <Link href={`/projects/${op.slug}`}>
                    <span>{op.shortName || op.name}</span>
                    <span>↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="sidebar-widget" style={{ background: "linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(59, 130, 246, 0.08))" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "8px" }}>
              Have a Similar Requirement?
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "16px", lineHeight: "1.6" }}>
              Let&apos;s discuss your application architecture, performance goals, and deployment plan.
            </p>
            <Link href="/contact" className="btn btn-primary btn-sm btn-block">
              Get in Touch ↗
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
