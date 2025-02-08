import React from "react";

import { Metadata } from "next";

import ProjectsList from "@/components/project/ProjectsList";
import MainPageWrapper from "@/components/shared/MainPageWrapper";
import PageTitle from "@/components/shared/PageTitle";

export const metadata: Metadata = { title: "Projects" };

const ProjectsPage = () => {
  return (
    <MainPageWrapper>
      <PageTitle title="Projects" subtitle="Open-source projects I've developed over the years." />
      <ProjectsList />
    </MainPageWrapper>
  );
};

export default ProjectsPage;
