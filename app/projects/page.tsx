import React from "react";

import { Metadata } from "next";

import Projects from "@/components/Projects";
import PageTitle from "@/components/ui-base/page-title";
import { PageWrapper } from "@/components/ui-base/page-wrapper";

export const metadata: Metadata = { title: "Projects" };

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <PageTitle title="Projects" subtitle="Open-source hobby projects that I've developed" />
      <Projects />
    </PageWrapper>
  );
};

export default ProjectsPage;
