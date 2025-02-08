import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { Metadata } from "next";

import ProjectsList from "@/components/project/ProjectsList";
import LinkedButton from "@/components/shared/LinkedButton";
import MainPageWrapper from "@/components/shared/MainPageWrapper";
import SiteImages from "@/components/shared/SiteImages";
import Techstack from "@/components/techstack/Techstack";

import { links } from "@/data/metadata";

export const metadata: Metadata = { title: "About Me - Çağan Seyrek" };

const AboutMe = () => {
  return (
    <MainPageWrapper>
      <section className="flex flex-row items-start justify-start gap-md">
        <div className="flex flex-col items-start justify-start gap-md">
          <h1 className="text-2xl tracking-tight font-bold leading-tight">Hey, I&apos;m Çağan</h1>
          <span className="text-muted-foreground text-pretty">
            I&apos;m a senior-year computer engineering student with a strong passion for full-stack development and
            software engineering. I am a supporter of open-source as a way to improve technology for everyone.
          </span>
          <span className="text-muted-foreground text-pretty">
            I enjoy building scalable and efficient applications while exploring different languages, frameworks, and
            architectural patterns.
          </span>
          <div className="flex flex-row items-center justify-start gap-sm">
            <LinkedButton href={links.GITHUB} isExternal>
              <SiGithub /> GitHub
            </LinkedButton>
            <LinkedButton href={links.LINKEDIN} isExternal>
              <SiLinkedin /> LinkedIn
            </LinkedButton>
          </div>
        </div>
        <SiteImages image="general_cat" />
      </section>
      <Techstack />
      <section className="flex flex-col gap-md w-full">
        <h2 className="text-xl tracking-tight font-semibold text-center">Highligted Projects</h2>
        <ProjectsList highlightedOnly />
      </section>
    </MainPageWrapper>
  );
};

export default AboutMe;
