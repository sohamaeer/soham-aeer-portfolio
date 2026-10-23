import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectsDirectory from "@/components/ProjectsDirectory";
import "@/styles/projects.css";

export const metadata = {
  title: "Featured Projects & Production Case Studies | Soham Aeer",
  description: "Explore production web applications and infrastructure case studies engineered by Soham Aeer. Includes headless Shopify, React/Node VPS deployments, B2B platforms, and AI integrations.",
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
    <div className="container" style={{ paddingBottom: "80px", paddingTop: "32px" }}>
      <Breadcrumbs items={breadcrumbItems} />

      <div className="section-header" style={{ marginBottom: "32px" }}>
        <span className="section-eyebrow">Production Portfolio</span>
        <h1 className="section-title">
          Real-World Web Applications & Production Deployments
        </h1>
        <p className="section-desc">
          Every project below is backed by real source repositories, verified client deliverables, or live production deployments. 
          Explore the architecture, technical problem-solving, and deployment pipelines behind each case study.
        </p>
      </div>

      <ProjectsDirectory />
    </div>
  );
}
