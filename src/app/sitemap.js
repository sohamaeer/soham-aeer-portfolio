import { personalInfo } from "@/data/personalInfo";
import { skillDetails } from "@/data/skills";
import { projects } from "@/data/projects";

export default function sitemap() {
  const baseUrl = personalInfo.siteUrl;
  const lastModified = new Date();

  // Core static pages
  const corePages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/about`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/projects`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/skills`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/experience`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/certifications`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/resume`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" }
  ].map((p) => ({
    ...p,
    lastModified
  }));

  // Skill detail pages
  const skillPages = Object.keys(skillDetails).map((slug) => ({
    url: `${baseUrl}/skills/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  // Project case study pages
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  return [...corePages, ...projectPages, ...skillPages];
}
