import { Link } from "react-router";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/base/button";
import { FlexBox } from "@/components/base/flexbox";

import { projects } from "@/data/projects";

import { cn } from "@/utils";

export function Projects() {
  return (
    <FlexBox className="w-full flex-wrap items-start gap-3">
      <FlexBox className="w-full justify-between gap-2 max-[475px]:flex-col">
        <span className="text-foreground-muted text-foreground! w-full text-lg font-medium tracking-tight max-[475px]:text-center">
          Öne Çıkan Projeler
        </span>

        <Button variant="ghost" asChild className="max-[475px]:w-full">
          <Link to="https://github.com/caganseyrek?tab=repositories" target="_blank" rel="noopener noreferrer nofollow">
            GitHub’da Tüm Projeleri Gör <ExternalLink className="size-4 shrink-0" />
          </Link>
        </Button>
      </FlexBox>
      <div className="grid w-full flex-1 grid-cols-3 grid-rows-1 gap-1.5 max-[700px]:grid-cols-2 max-[700px]:grid-rows-3 max-[475px]:grid-cols-1 max-[475px]:grid-rows-3">
        {projects.map((project) => (
          <FlexBox
            key={project.key}
            className="bg-gray-1 border-gray-2 flex-1 flex-col items-start gap-2 rounded-lg border p-3">
            <span className="text-foreground! flex flex-row items-center justify-start gap-2 font-medium tracking-tight">
              {project.title}
            </span>

            <div className="flex-1 pb-1 text-sm">{project.description}</div>

            <FlexBox className="w-full">
              {project.links.repository && (
                <Button
                  variant="containerButton"
                  className={cn(project.links.website ? "w-[calc((100%-6px)/2)]" : "w-full")}
                  asChild>
                  <Link to={project.links.repository} target="_blank" rel="noopener noreferrer nofollow ">
                    Kaynak <ExternalLink className="size-4 shrink-0" />
                  </Link>
                </Button>
              )}

              {project.links.website && (
                <Button
                  variant="containerButton"
                  className={cn(project.links.repository ? "w-[calc((100%-6px)/2)]" : "w-full")}
                  asChild>
                  <Link to={project.links.website} target="_blank" rel="noopener noreferrer nofollow ">
                    Website <ExternalLink className="size-4 shrink-0" />
                  </Link>
                </Button>
              )}
            </FlexBox>
          </FlexBox>
        ))}
      </div>
    </FlexBox>
  );
}
