import React from "react";
import { SiLinkedin } from "react-icons/si";

import { Metadata } from "next";
import Link from "next/link";

import LinkedButton from "@/components/LinkedButton";
import SharedImages from "@/components/SharedImages";

import { links } from "@/data/metadata";

export const metadata: Metadata = { title: "Collaborate" };

const CollaboratePage = () => {
  return (
    <main className="flex flex-col items-center justify-start gap-md">
      <SharedImages image="general_cat" />
      <h1 className="text-2xl font-bold tracking-tight m-0 p-0">Want to Collaborate?</h1>
      <div className="w-[640px] text-center text-muted-foreground max-[670px]:w-auto max-[670px]:p-md">
        I specialize in crafting responsive, user-focused web applications with expertise in front-end, back-end, and
        database development to bring your ideas to life. If you’re looking for someone to collaborate on a project, I’d
        love to talk about it!
      </div>
      <div className="w-[640px] text-center text-muted-foreground max-[670px]:w-auto max-[670px]:p-md">
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
    </main>
  );
};

export default CollaboratePage;
