import React from "react";

import TagList from "../tag/TagList";
import TagListItem from "../tag/TagListItem";
import ProjectBody from "./base/ProjectBody";
import ProjectContainer from "./base/ProjectContainer";
import ProjectHeader from "./base/ProjectHeader";
import { ProjectDetailProps } from "@/data/projects/projectsList";

interface ProjectListItemProps {
  project: ProjectDetailProps;
}

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <ProjectContainer key={project.slug}>
      <ProjectHeader
        title={project.title}
        description={project.description}
        repositoryLink={project.links.repository}
      />
      <ProjectBody>
        <TagList>
          {project.tags.map((tag) => (
            <TagListItem key={tag}>{tag}</TagListItem>
          ))}
        </TagList>
      </ProjectBody>
    </ProjectContainer>
  );
};

export default ProjectListItem;
