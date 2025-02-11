import React from "react";
import { SiLinkedin } from "react-icons/si";

import { Metadata } from "next";
import Link from "next/link";

import LinkedButton from "@/components/shared/LinkedButton";
import MainPageWrapper from "@/components/shared/MainPageWrapper";
import PageTitle from "@/components/shared/PageTitle";
import SiteImages from "@/components/shared/SiteImages";

import { links } from "@/data/metadata";

export const metadata: Metadata = { title: "Collaborate" };

const CollaboratePage = () => {
  return (
    <MainPageWrapper className="items-center justify-start">
      <SiteImages image="general_cat" />
      <PageTitle title="Want to Collaborate?" />
      <div className="w-[640px] text-center text-muted-foreground text-pretty max-[670px]:w-auto">
        I specialize in crafting responsive, user-focused web applications with expertise in front-end, back-end, and
        database development to bring your ideas to life. If you’re looking for someone to collaborate on a project, I’d
        love to talk about it!
      </div>
      <div className="w-[640px] text-center text-muted-foreground text-pretty max-[670px]:w-auto">
        You can see some highlights of my work on the{" "}
        <Link href="/" target="_blank" className="hover:text-foreground transition-colors">
          About page
        </Link>
        , or on{" "}
        <Link href={links.GITHUB} target="_blank" className="hover:text-foreground transition-colors">
          my GitHub page
        </Link>
        .
      </div>
      <LinkedButton href={links.LINKEDIN_SERVICE} isExternal>
        Contact me on <SiLinkedin />
      </LinkedButton>
    </MainPageWrapper>
  );
};

export default CollaboratePage;
