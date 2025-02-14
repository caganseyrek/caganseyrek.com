import React from "react";
import { SiGithub } from "react-icons/si";

import Link from "next/link";

import { BookText } from "lucide-react";

import { ProjectDetailProps, ProjectDocsProps, ProjectRepositoryProps } from "@/shared/data/projectsList";

import { TagList, TagListItem } from "./tag-list";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface ProjectHeaderProps {
  title: string;
  repository: ProjectRepositoryProps;
  docs: ProjectDocsProps | null;
}

interface ProjectListItemProps {
  project: ProjectDetailProps;
}

const ProjectHeader = ({ title, repository, docs }: ProjectHeaderProps) => {
  return (
    <div className="bg-accent rounded-t-[7px] flex flex-1 flex-col items-start justify-start w-full p-md gap-sm">
      <div className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-start gap-sm">
          <span className="font-semibold inline-block">{title}</span>
          <div className="flex flex-row items-center justify-start gap-sm">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={repository.url} target="_blank">
                    <SiGithub className="w-4 h-4 min-w-4 min-h-4" /> <span className="sr-only">Repository</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>{title}&apos;s Repository</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {docs && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={docs.path}>
                      <BookText className="w-4 h-4 min-w-4 min-h-4" /> <span className="sr-only">Docs</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{title}&apos;s Docs</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
        <span className="text-muted-foreground flex-1 text-sm">{repository.description}</span>
      </div>
    </div>
  );
};

const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <div className="min-w-[calc((100%-15px)/2)] w-[calc((100%-15px)/2)] max-[570px]:min-w-[calc(100%/2)] flex flex-col items-start justify-start border rounded-lg flex-1 max-[570px]:w-full">
      <ProjectHeader title={project.title} repository={project.repository} docs={project.docs} />
      <div className="w-full flex flex-row items-start justify-start gap-sm p-md bg-background rounded-b-lg border-t">
        <TagList>
          {project.repository.tags.map((tag) => (
            <TagListItem key={tag} variant="white" radius="small">
              {tag}
            </TagListItem>
          ))}
        </TagList>
      </div>
    </div>
  );
};

export default ProjectListItem;
