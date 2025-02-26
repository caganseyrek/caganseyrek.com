"use client";

import React from "react";

import Link from "next/link";

import { ArrowUpRight, Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base-ui/accordion";
import { Button } from "@/components/base-ui/button";
import { Separator } from "@/components/base-ui/separator";
import TagList from "@/components/base-ui/tag-list";

import { socialLinks } from "@/shared/data/links";
import { metadataBase } from "@/shared/data/metadataBase";
import { projects } from "@/shared/data/projects";
import techstack from "@/shared/data/techstack";

const getNextTheme = (theme?: string): string => {
  // hehe
  if (!theme) {
    return "system";
  } else if (theme === "light") {
    return "dark";
  } else if (theme === "dark") {
    return "system";
  } else if (theme === "system") {
    return "light";
  } else {
    return "system";
  }
};

const RootPage = () => {
  const { theme, setTheme } = useTheme();

  return (
    <main className="w-[650px] m-auto flex flex-col items-center justify-center gap-md p-lg max-[650px]:w-auto">
      <section className="w-full flex flex-col items-start justify-start gap-md">
        <div className="w-full flex flex-row items-center justify-start gap-md">
          <h1 className="text-2xl font-bold tracking-tight">Çağan Seyrek</h1>
          <Button
            size="icon"
            variant="ghost"
            className="w-auto h-auto p-1 mt-xs text-foreground"
            onClick={() => setTheme(getNextTheme(theme))}
            suppressHydrationWarning>
            {theme === "dark" ? <Sun /> : theme === "light" ? <Moon /> : <SunMoon />}
          </Button>
        </div>
        <div className="text-muted-foreground text-pretty">
          Hello there! I&apos;m Çağan, a senior-year computer engineering student from Türkiye.
        </div>
        <div className="text-muted-foreground text-pretty">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="techstack">
              I&apos;m highly interested in{" "}
              <AccordionTrigger className="text-foreground">full-stack development</AccordionTrigger>, software design
              and engineering, and open-source development. I also enjoy exploring different languages, frameworks, and
              architectural patterns.
              <AccordionContent>
                <div className="p-md flex flex-col items-start justify-start gap-md">
                  <div className="flex flex-col items-start justify-start">
                    <span className="text-foreground font-semibold">Technologies and tools I use regularly</span>
                    <span className="text-sm">You can hover to see their names</span>
                  </div>
                  <TagList contents={{ items: techstack, borderRadius: "small" }} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-muted-foreground text-pretty">
          Beyond coding, I have a deep interest in history. I love reading and researching historical events, diving
          into different eras, and exploring significant moments.
        </div>
        <div className="text-muted-foreground text-pretty">
          Here are some highlights from my projects (
          <Link href={metadataBase.links.github + "?tab=repositories"} target="_blank" className="text-foreground">
            See all on GitHub
          </Link>
          )
        </div>
        <div className="w-full flex flex-row items-start justify-start gap-md max-[570px]:flex-col">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="min-w-[calc((100%-15px)/2)] w-[calc((100%-15px)/2)] max-[570px]:min-w-[calc(100%/2)] flex flex-col items-stretch justify-start border dark:border-transparent rounded-md flex-1 bg-accent/80 p-md gap-xs max-[570px]:w-full">
              <Link
                href={project.repository.url}
                target="_blank"
                className="font-semibold flex flex-row items-center justify-start gap-sm">
                {project.title}
                <ArrowUpRight className="w-4 h-4 min-w-4 min-h-4" />
              </Link>
              <span className="text-muted-foreground flex flex-1 text-sm">{project.repository.description}</span>
            </div>
          ))}
        </div>
        <Separator decorative className="rounded-lg" />
        <div className="flex flex-row items-center justify-center gap-sm">
          {socialLinks.map((item) => (
            <Link key={item.label} href={item.link}>
              <Button>
                <item.icon /> {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default RootPage;
