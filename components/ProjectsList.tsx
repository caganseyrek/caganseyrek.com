import React from "react";
import { SiGithub } from "react-icons/si";

import { Package, ScrollText } from "lucide-react";

import LinkedButton from "./LinkedButton";
import TagListElement from "./TagListElement";
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
        const has: { article: boolean; package: boolean } = {
          article: project.links.article_page_path !== null,
          package: project.links.package_page !== null,
        };
        return (
          <div
            key={project.slug}
            className="w-[calc((100%-15px)/2)] flex flex-col items-start justify-start gap-[3px] max-[570px]:w-full">
            <div className="bg-accent border p-md w-full rounded-t-lg flex flex-col gap-sm flex-1">
              <h3 className="text-xl tracking-tight font-semibold">{project.title}</h3>
              <div className="text-muted-foreground flex-1">{project.preview_text}</div>
              <TagListElement tags={String(project.tags).split(",")} />
            </div>
            <div className="flex flex-row items-center justify-start gap-[3px] w-full">
              <LinkedButton
                href={project.links.repository}
                isExternal
                className={`w-full rounded-none ${!has.article && !has.package ? "rounded-b-lg" : "rounded-bl-lg"}`}
                linkClassName={!has.article && !has.package ? "w-full" : "w-[calc((100%-3px)/2)]"}>
                <SiGithub /> Source
              </LinkedButton>
              {project.links.article_page_path && (
                <LinkedButton
                  href={project.links.article_page_path}
                  className="w-full rounded-none rounded-br-lg"
                  linkClassName="w-[calc((100%-3px)/2)]">
                  <ScrollText /> Article
                </LinkedButton>
              )}
              {project.links.package_page && (
                <LinkedButton
                  href={project.links.package_page}
                  isExternal
                  className="w-full rounded-none rounded-br-lg"
                  linkClassName="w-[calc((100%-3px)/2)]">
                  <Package /> Package
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
