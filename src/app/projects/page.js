import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsDirectory from "@/components/ProjectsDirectory";
import "@/styles/projects.css";

export const metadata = {
  title: "Production Projects & Case Studies | Soham Aeer | Full Stack Developer",
  description: "Explore real-world web applications and production deployments engineered by Soham Aeer. Includes Next.js applications, headless Shopify, Linux VPS deployments, and AI integrations.",
  alternates: {
    canonical: "/projects"
  }
};

export default function ProjectsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects Portfolio", href: "/projects" }
  ];

  return (
    <>
      {/* Subpage Hero Banner with Background Image */}
      <section className="page-hero-banner" aria-label="Projects Hub Introduction">
        <div className="container">
          <Breadcrumbs items={breadcrumbItems} />
          <span className="section-eyebrow">Engineering Deliverables</span>
          <h1 className="section-title">
            Production Web Applications &amp; Case Studies
          </h1>
          <p className="section-desc">
            Verified production systems engineered with React, Next.js, and Node.js. Explore the technical architecture, problem-solving, and deployment pipelines behind each case study.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: "80px" }}>
        <ProjectsDirectory />
      </div>
    </>
  );
}
