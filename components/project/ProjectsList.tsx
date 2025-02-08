import React from "react";

import ProjectListItem from "./ProjectListItem";
import { ProjectDetailProps, projectList } from "@/data/projects/projectsList";

interface ProjectPreviewProps {
  highlightedOnly?: boolean;
}

const ProjectsList = ({ highlightedOnly = false }: ProjectPreviewProps) => {
  const projects: ProjectDetailProps[] = projectList; // this is for if i use a db in the future

  return (
    <div className="w-full flex flex-row flex-wrap gap-md max-[570px]:flex-col">
      {projects.map((project) =>
        highlightedOnly && !project.is_highlighted ? null : <ProjectListItem project={project} key={project.slug} />,
      )}
    </div>
  );
};

export default ProjectsList;
