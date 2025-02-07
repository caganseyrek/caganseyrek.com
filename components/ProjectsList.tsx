import React from "react";
import { SiGithub } from "react-icons/si";

import { ScrollText } from "lucide-react";

import LinkedButton from "./LinkedButton";
import TagList from "./tag/TagList";
import { ProjectDetailsProps, projectMetadata } from "@/data/projects/projectsMetadata";

interface ProjectPreviewProps {
  highlightedOnly?: boolean;
}

const ProjectsList = ({ highlightedOnly = false }: ProjectPreviewProps) => {
  const projects: ProjectDetailsProps[] = projectMetadata; // this line is for if i decide to use a db or something in the future

  return (
    <div className="flex flex-row flex-wrap gap-md max-[570px]:flex-col">
      {projects.map((project) => {
        if (highlightedOnly && !project.is_highlighted) {
          return null;
        }
        const hasArticle: boolean = project.links.article_page_path !== null;
        return (
          <div
            key={project.slug}
            className="w-[calc((100%-15px)/2)] flex flex-col items-start justify-start max-[570px]:w-full">
            <div className="bg-accent border border-b-0 p-md w-full rounded-t-lg flex flex-col gap-sm flex-1">
              <h3 className="text-xl tracking-tight font-semibold">{project.title}</h3>
              <div className="text-muted-foreground flex-1">{project.preview_text}</div>
              <TagList tags={String(project.tags).split(",")} />
            </div>
            <div className="flex flex-row items-center justify-start w-full">
              <LinkedButton
                href={project.links.repository}
                isExternal
                className={`w-full rounded-none ${!hasArticle ? "rounded-b-lg" : "rounded-bl-lg border-r-0"}`}
                linkClassName={!hasArticle ? "w-full" : "w-[calc(100%/2)]"}>
                <SiGithub /> Source
              </LinkedButton>
              {project.links.article_page_path && (
                <LinkedButton
                  href={project.links.article_page_path}
                  className="w-full rounded-none rounded-br-lg"
                  linkClassName="w-[calc(100%/2)]">
                  <ScrollText /> Article
                </LinkedButton>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
