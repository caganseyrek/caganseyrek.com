import React from "react";

import { SiGithub, SiLinkedin, SiNpm } from "@icons-pack/react-simple-icons";

import LinkedButton from "@/components/LinkedButton";
import SharedImages from "@/components/SharedImages";

import HeaderElement from "../HeaderElement";
import { links } from "@/data/metadata";

const IntroSection = () => {
  return (
    <div className="flex flex-row items-start justify-center gap-md max-[630px]:flex-col-reverse max-[630px]:items-center">
      <div className="flex flex-col items-start justify-start gap-md max-[630px]:justify-center max-[630px]:items-center">
        <HeaderElement type="intro">Hey, I&apos;m Çağan</HeaderElement>
        <span className="text-muted-foreground max-[630px]:text-center">
          I&apos;m a senior-year computer engineering student passionate about full-stack development, software
          engineering, and the open-source way of collaborating to improve technology for everyone. I enjoy working with
          various languages and frameworks to create diverse projects.
        </span>
        <div className="flex flex-row items-center justify-start gap-sm">
          <LinkedButton href={links.GITHUB} isExternal>
            <SiGithub /> GitHub
          </LinkedButton>
          <LinkedButton href={links.NPM} isExternal>
            <SiNpm /> NPM
          </LinkedButton>
          <LinkedButton href={links.LINKEDIN} isExternal>
            <SiLinkedin /> LinkedIn
          </LinkedButton>
        </div>
      </div>
      <SharedImages image="general_cat" />
    </div>
  );
};

export default IntroSection;
