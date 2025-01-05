import React from "react";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import allProjectsArray from "@/data/projects";

const HighlightedProjects = () => {
  return (
    <section>
      <h3 className="text-lg font-bold tracking-tight m-0 p-0 pb-[10px] text-center">Highlighted Projects</h3>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {allProjectsArray.map((project) => (
          <div key={project.key} className="bg-accent w-[385px] p-[15px] border rounded-lg flex flex-col gap-y-[10px]">
            <Link
              href={project.urls.repository_path}
              target="_blank"
              className="text-md font-semibold flex flex-row gap-x-[7px]">
              {project.title}
              <ExternalLink className="h-[18px] w-[18px]" />
            </Link>
            <div className="text-muted-foreground">{project.description}</div>
            <div className="flex flex-row gap-[5px]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="py-[5px] px-[7px] inline-block bg-background border rounded-sm text-sm font-medium text-muted-foreground">
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
