import React from "react";
import { SiLinkedin } from "react-icons/si";

import { Metadata } from "next";
import Link from "next/link";

import ProfilePicture from "@/components/ProfilePicture";
import { Button } from "@/components/ui/button";

import links from "@/data/links";

export const metadata: Metadata = {
  title: "Collaborate - Çağan Seyrek",
};

const CollaboratePage = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-y-[15px]">
      <ProfilePicture />
      <h1 className="text-2xl font-bold tracking-tight m-0 p-0">Want to Collaborate?</h1>
      <div className="w-[640px] text-center text-muted-foreground">
        I specialize in crafting responsive, user-focused web applications with expertise in front-end, back-end, and
        database development to bring your ideas to life. If you’re looking for someone to collaborate on a project, I’d
        love to talk about it!
      </div>
      <div className="w-[640px] text-center text-muted-foreground">
        You can see some highlights of my work on the{" "}
        <Link href="/" className="hover:text-foreground transition-colors">
          About page
        </Link>
        , or on{" "}
        <Link href={links.GITHUB} className="hover:text-foreground transition-colors">
          my GitHub page
        </Link>
        .
      </div>
      <Button variant="outline" className="bg-accent hover:bg-border">
        <Link
          href="https://www.linkedin.com/services/page/4548aa324845553b6b/"
          target="_blank"
          className="flex flex-row items-center justify-center gap-x-[7px]">
          Contact Me on <SiLinkedin />
        </Link>
      </Button>
    </div>
  );
};

export default CollaboratePage;
