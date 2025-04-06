import React from "react";

import { Metadata } from "next";

import { ContentSection, ContentTitle, ContentWrapper } from "@/components/partials/ContentPartials";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectHeader,
  ProjectTechs,
  ProjectTitle,
} from "@/components/partials/ProjectPartials";

import { projects } from "@/contents/data/projects";
import { headMetadata } from "@/contents/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Projects",
  description: "Some open-source projects from my GitHub profile",
};

const ProjectsPage = () => {
  return (
    <ContentWrapper>
      <ContentTitle title="Project Highlights" subtitle="Some open-source projects from my GitHub profile" />
      <ContentSection className="gap-y-sm gap-x-sm flex-row flex-wrap items-stretch max-sm:flex-col">
        {projects.map((project) => (
          <ProjectContainer key={project.slug}>
            <ProjectHeader>
              <ProjectTitle link={project.repository}>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectHeader>
            <ProjectTechs list={project.tech} />
          </ProjectContainer>
        ))}
      </ContentSection>
    </ContentWrapper>
  );
};

export default ProjectsPage;
