"use client";

import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/base/button";
import { Separator } from "@/components/base/separator";

import { FlexBox } from "@/components/flexbox";

import { coreMetadata } from "@/data/metadata";
import { projectHighlights } from "@/data/project-highlights";

import { cn } from "@/lib/utils";

export default function RootPage() {
  return (
    <>
      <FlexBox className="flex w-full flex-row items-start justify-start gap-5 max-[550px]:flex-col max-[550px]:items-center">
        <div className="bg-gray-1 border-gray-2 size-37.5 min-w-37.5 rounded-md border">
          <img
            src="/images/portrait_drawing.png"
            className="size-37.5 rounded-lg select-none"
            alt="My profile picture"
            title="My profile picture"
            aria-label="My profile picture"
            style={{
              filter:
                "drop-shadow(0 0 0 white) drop-shadow(1.5px 0 0 white) drop-shadow(-1.5px 0 0 white) drop-shadow(0 1.5px 0 white) drop-shadow(0 -2px 0 white)",
            }}
          />
        </div>
        <FlexBox className="flex-col items-start gap-2.5 max-[550px]:items-center max-[550px]:text-center">
          <h1 className="text-foreground w-full text-2xl font-semibold tracking-tight">Hey, I&apos;m Çağan!</h1>
          <p>I&apos;m a computer engineering and software developer from Türkiye.</p>
          <p>
            I do full-stack development and create open-source projects. I also enjoy exploring different languages,
            frameworks, and software architecture patterns.
          </p>
          <p>
            Beyond coding, I have a deep interest in researching history, I enjoy looking at historical maps, and
            I&apos;m (kinda) learning bass guitar!
          </p>
          <FlexBox className="gap-1.5">
            <Button className="w-full" asChild>
              <Link href={coreMetadata.social_links.github_profile} target="_blank">
                <SiGithub /> GitHub
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href={coreMetadata.social_links.linkedin_profile} target="_blank">
                <SiLinkedin /> LinkedIn
              </Link>
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <Separator decorative />
      <FlexBox className="w-full flex-wrap items-start gap-3">
        <FlexBox className="w-full justify-between gap-2">
          <span className="text-foreground-muted text-foreground! w-full text-lg font-medium tracking-tight">
            Project Highlights
          </span>
          <Button variant="ghost" asChild>
            <Link href={coreMetadata.social_links.github_profile + "?tab=repositories"} target="_blank">
              See more on GitHub <ExternalLink className="size-4 shrink-0" />
            </Link>
          </Button>
        </FlexBox>
        <div className="grid w-full flex-1 grid-cols-3 grid-rows-1 gap-1.5 max-[700px]:grid-cols-2 max-[700px]:grid-rows-3 max-[475px]:grid-cols-1 max-[475px]:grid-rows-6">
          {projectHighlights.map((project) => (
            <FlexBox
              key={project.id}
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
                    <Link href={project.links.repository} target="_blank">
                      Source <ExternalLink className="size-4 shrink-0" />
                    </Link>
                  </Button>
                )}
                {project.links.website && (
                  <Button
                    variant="containerButton"
                    className={cn(project.links.repository ? "w-[calc((100%-6px)/2)]" : "w-full")}
                    asChild>
                    <Link href={project.links.website} target="_blank">
                      Website <ExternalLink className="size-4 shrink-0" />
                    </Link>
                  </Button>
                )}
              </FlexBox>
            </FlexBox>
          ))}
        </div>
      </FlexBox>
    </>
  );
}
