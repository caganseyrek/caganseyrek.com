import React from "react";

import { Metadata } from "next";

import HeadingElement from "@/components/HeadingElement";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = { title: "Projects" };

const ProjectsPage = () => {
  return (
    <main>
      <div className="flex items-center justify-center flex-col gap-sm">
        <HeadingElement type="page-header">Projects</HeadingElement>
        <span className="text-muted-foreground">Open-source projects I&apos;ve developed over the years.</span>
      </div>
      <ProjectsList />
    </main>
  );
};

export default ProjectsPage;
