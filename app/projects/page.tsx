import React from "react";

import { Metadata } from "next";

import { ContentSection } from "@/components/layout/Content";
import { MainPageHeader } from "@/components/layout/partials/PagePartials";
import {
  ProjectContainer,
  ProjectDescription,
  ProjectHeader,
  ProjectTechs,
  ProjectTitle,
} from "@/components/layout/partials/ProjectPartials";

import { projects } from "@/shared/content/projects";
import { headMetadata } from "@/shared/data/metadata";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Projects",
  description: "Some open-source projects from my GitHub profile",
};

const ProjectsPage = () => {
  return (
    <>
      <MainPageHeader title="Project Highlights" subtitle="Some open-source projects from my GitHub profile" />
      <ContentSection className="gap-y-sm gap-x-sm flex-row flex-wrap items-stretch max-xs:flex-col">
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
    </>
  );
};

export default ProjectsPage;
