import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const {
    slug,
    name,
    headline,
    category,
    badge,
    image,
    imageAlt,
    githubUrl,
    liveUrl,
    techStack
  } = project;

  return (
    <article className="project-card">
      <div className="project-card-image">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || `${name} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-surface-elevated)" }}>
            <span style={{ color: "var(--text-muted)", fontStyle: "italic" }}>No Screenshot Provided</span>
          </div>
        )}
      </div>

      <div className="project-card-body">
        <div className="project-card-header">
          <span className="badge badge-purple">{badge || category}</span>
          {liveUrl && (
            <span className="badge badge-emerald" style={{ textTransform: "none" }}>
              ● Live Demo
            </span>
          )}
        </div>

        <h3 className="project-card-title">{name}</h3>
        <p className="project-card-desc">{headline}</p>

        <div className="project-card-tags">
          {techStack?.slice(0, 4).map((tech) => (
            <span key={tech} className="project-tag">
              {tech}
            </span>
          ))}
          {techStack?.length > 4 && (
            <span className="project-tag">+{techStack.length - 4}</span>
          )}
        </div>

        <div className="project-card-footer">
          <Link href={`/projects/${slug}`} className="btn btn-secondary btn-sm">
            Read Case Study ↗
          </Link>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                aria-label={`GitHub repository for ${name}`}
                title="View GitHub Repository"
              >
                Code ↗
              </a>
            )}

            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                aria-label={`Live demo for ${name}`}
                title="Visit Live Application"
              >
                Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
