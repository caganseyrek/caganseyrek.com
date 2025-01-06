import React from "react";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import allProjectsArray from "@/data/projects";

const HighlightedProjects = () => {
  return (
    <section>
      <h3 className="highlighted-section-title">Highlighted Projects</h3>
      <div className="highlighted-projects-grid">
        {allProjectsArray.map((project) => (
          <div key={project.key} className="highlighted-project-container">
            <Link href={project.urls.repository_path} target="_blank" className="highlighted-project-title">
              {project.title}
              <ExternalLink className="icon-18x18" />
            </Link>
            <div className="text-muted-foreground flex-1">{project.description}</div>
            <div className="tags-container">
              {project.tags.map((tag) => (
                <span key={tag} className="highlighted-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightedProjects;
