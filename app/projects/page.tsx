import React from "react";

import { Metadata } from "next";

import HeaderElement from "@/components/HeaderElement";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = { title: "Projects" };

const ProjectsPage = () => {
  return (
    <main>
      <div className="flex items-center justify-center flex-col gap-sm">
        <HeaderElement type="page-header">Projects</HeaderElement>
        <span className="text-muted-foreground">Open-source projects I&apos;ve developed over the years.</span>
      </div>
      <ProjectsList />
    </main>
  );
};

export default ProjectsPage;
