import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Button } from "@/components/base/button";
import { FlexBox } from "@/components/base/flexbox";
import { Separator } from "@/components/base/separator";

import { highlightedProjects } from "@/data/highlighted-projects";
import { coreMetadata } from "@/data/metadata";

import { cn } from "@/lib/utils";

export default async function RootPage() {
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
          <h1 className="text-foreground w-full text-2xl font-semibold tracking-tight">Selam, Ben Çağan!</h1>
          <p>Bilgisayar mühendisi ve full-stack yazılım geliştiricisiyim.</p>
          <p>
            Ölçeklenebilir yazılım sistemleri geliştiriyor ve açık kaynak projeler üretiyorum. Yeni teknolojileri takip
            ederek ve farklı yazılım mimarisi yaklaşımlarını deneyerek kendimi sürekli geliştirmeye önem veriyorum.
          </p>
          <p>Yazılımın dışında, tarih araştırmaya ve tarihsel haritaları incelemeye büyük ilgi duyuyorum.</p>
          <FlexBox className="gap-1.5">
            <Button className="w-full" asChild>
              <Link href={coreMetadata.socialLinks.githubProfile} target="_blank" rel="noopener noreferrer nofollow">
                <SiGithub /> GitHub
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href={coreMetadata.socialLinks.linkedinProfile} target="_blank" rel="noopener noreferrer nofollow">
                <SiLinkedin /> LinkedIn
              </Link>
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <Separator decorative />
      <FlexBox className="w-full flex-wrap items-start gap-3">
        <FlexBox className="w-full justify-between gap-2 max-[475px]:flex-col">
          <span className="text-foreground-muted text-foreground! w-full text-lg font-medium tracking-tight max-[475px]:text-center">
            Öne Çıkan Projeler
          </span>
          <Button variant="ghost" asChild className="max-[475px]:w-full">
            <Link
              href={coreMetadata.socialLinks.githubProfile + "?tab=repositories"}
              target="_blank"
              rel="noopener noreferrer nofollow">
              GitHub’da Tüm Projeleri Gör <ExternalLink className="size-4 shrink-0" />
            </Link>
          </Button>
        </FlexBox>
        <div className="grid w-full flex-1 grid-cols-3 grid-rows-1 gap-1.5 max-[700px]:grid-cols-2 max-[700px]:grid-rows-3 max-[475px]:grid-cols-1 max-[475px]:grid-rows-3">
          {highlightedProjects.map((project) => (
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
                    <Link href={project.links.repository} target="_blank" rel="noopener noreferrer nofollow ">
                      Kaynak <ExternalLink className="size-4 shrink-0" />
                    </Link>
                  </Button>
                )}
                {project.links.website && (
                  <Button
                    variant="containerButton"
                    className={cn(project.links.repository ? "w-[calc((100%-6px)/2)]" : "w-full")}
                    asChild>
                    <Link href={project.links.website} target="_blank" rel="noopener noreferrer nofollow ">
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
