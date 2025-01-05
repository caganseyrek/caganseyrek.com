import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { SiGithub, SiLinkedin, SiNpm } from "@icons-pack/react-simple-icons";

import HighlightedArticles from "@/components/HighlightedArticles";
import HighlightedProjects from "@/components/HighlightedProjects";
import ProfilePicture from "@/components/ProfilePicture";
import Techstack from "@/components/Techstack";

import links from "@/data/links";

export const metadata: Metadata = { title: "About Me" };

const ABOUT_ME_TEXTS = {
  TITLE: "Hey, I'm Çağan",
  DESC: "I'm a senior year computer engineering student passionate about software development, and open-source way of collaborating and improving tech together for everyone. I enjoy working with various languages and frameworks to create all sorts of projects.",
};

const AboutMe = () => {
  return (
    <>
      <section className="flex items-center justify-between flex-row">
        <div className="flex flex-col gap-y-[15px]">
          <h1 className="text-2xl font-bold tracking-tight m-0 p-0">{ABOUT_ME_TEXTS.TITLE}</h1>
          <p className=" w-[566px] p-0 m-0 text-muted-foreground">{ABOUT_ME_TEXTS.DESC}</p>
          <div className="w-[566px] flex items-center justify-start gap-x-[7px]">
            <Link href={links.GITHUB} target="_blank">
              <SiGithub className="w-[20px] h-[20px]" />
            </Link>
            <Link href={links.NPM} target="_blank">
              <SiNpm className="w-[20px] h-[20px]" />
            </Link>
            <Link href={links.LINKEDIN} target="_blank">
              <SiLinkedin className="w-[20px] h-[20px]" />
            </Link>
          </div>
        </div>
        <ProfilePicture />
      </section>
      <Techstack />
      <HighlightedProjects />
      <HighlightedArticles />
    </>
  );
};

export default AboutMe;
