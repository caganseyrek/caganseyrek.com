"use client";

import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/base-ui/button";
import { Separator } from "@/components/base-ui/separator";
import { FlexBox } from "@/components/flexbox";

import { coreMetadata } from "@/data/metadata";
import { projects } from "@/data/projects";

export default function RootPage() {
  return (
    <main className="flex flex-row items-start justify-center">
      <FlexBox className="flex w-[800px] flex-col items-start justify-start gap-5 py-5">
        <FlexBox className="flex w-full flex-row items-start justify-start gap-5">
          <img
            src="/images/portrait_drawing.png"
            className="h-[150px] w-[150px] rounded-md"
            alt="My profile picture"
            title="My profile picture"
            aria-label="My profile picture"
          />
          <FlexBox className="flex-col items-start gap-2.5">
            <h1 className="text-foreground w-full text-2xl font-semibold tracking-tight">Hey, I&apos;m Çağan!</h1>
            <p>I&apos;m a computer engineering and software developer from Türkiye.</p>
            <p>
              I do full-stack development and create open-source projects. I also enjoy exploring different languages,
              frameworks, and software architecture patterns.
            </p>
            <p>
              Beyond coding, I have a <span className="font-bold tracking-tight">deep</span> interest in researching
              history, I enjoy looking at historical maps, and I&apos;m (kinda) learning bass guitar right now!
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
        <FlexBox className="w-full flex-wrap items-start gap-2">
          <FlexBox className="w-full justify-between gap-2">
            <span className="text-foreground-muted text-foreground! w-full text-lg font-medium tracking-tight">
              Some highlights from my projects
            </span>
            <Button variant="ghost" asChild>
              <Link href={coreMetadata.social_links.github_profile + "?tab=repositories"} target="_blank">
                See all on GitHub <ExternalLink className="size-4 shrink-0" />
              </Link>
            </Button>
          </FlexBox>
          <FlexBox className="w-full flex-1 items-stretch gap-1.5">
            {projects.map((project) => (
              <FlexBox
                key={project.id}
                className="bg-container-bg w-[calc((100%-12px)/3)] flex-1 flex-col items-start gap-1.5 rounded-md border p-3">
                <Link
                  href={project.repository}
                  target="_blank"
                  className="text-foreground! flex flex-row items-center justify-start gap-2 font-medium tracking-tight">
                  {project.title} <ExternalLink className="size-4 shrink-0" />
                </Link>
                <div className="flex-1 text-sm">{project.description}</div>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </main>
  );
}
