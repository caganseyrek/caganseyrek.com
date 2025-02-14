import React from "react";

import { ProjectDetailProps, projectList } from "@/shared/data/projectsList";

import ProjectListItem from "./ui-base/project-item";

interface ProjectPreviewProps {
  highlightedOnly?: boolean;
}

const Projects = ({ highlightedOnly = false }: ProjectPreviewProps) => {
  const projects: ProjectDetailProps[] = projectList; // this is for if i use a db in the future

  return (
    <div className="w-full flex flex-row flex-wrap gap-md max-[570px]:flex-col">
      {projects.map((project) =>
        highlightedOnly && !project.is_highlighted ? null : <ProjectListItem project={project} key={project.slug} />,
      )}
    </div>
  );
};

export default Projects;
