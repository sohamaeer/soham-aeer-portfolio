"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectCategories, projects } from "@/data/projects";

export default function ProjectsDirectory() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category Filter Bar */}
      <div className="filter-bar" role="tablist" aria-label="Filter projects by category">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={{ textAlign: "center", padding: "48px", color: "var(--text-muted)" }}>
          No projects found in this category.
        </div>
      )}
    </>
  );
}
