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
      <section className="about-me-section">
        <div>
          <h1>{ABOUT_ME_TEXTS.TITLE}</h1>
          <p>{ABOUT_ME_TEXTS.DESC}</p>
          <div>
            <Link href={links.GITHUB} target="_blank">
              <SiGithub className="icon-20x20" />
            </Link>
            <Link href={links.NPM} target="_blank">
              <SiNpm className="icon-20x20" />
            </Link>
            <Link href={links.LINKEDIN} target="_blank">
              <SiLinkedin className="icon-20x20" />
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
