import React from "react";
import { SiLinkedin } from "react-icons/si";

import { Metadata } from "next";
import Link from "next/link";

import ProfilePicture from "@/components/ProfilePicture";
import { Button } from "@/components/ui/button";

import links from "@/data/links";

export const metadata: Metadata = { title: "Collaborate" };

const CollaboratePage = () => {
  return (
    <section className="collaborate-section">
      <ProfilePicture />
      <h1>Want to Collaborate?</h1>
      <div>
        I specialize in crafting responsive, user-focused web applications with expertise in front-end, back-end, and
        database development to bring your ideas to life. If you’re looking for someone to collaborate on a project, I’d
        love to talk about it!
      </div>
      <div>
        You can see some highlights of my work on the{" "}
        <Link href="/" target="_blank" className="collaborate-link">
          About page
        </Link>
        , or on{" "}
        <Link href={links.GITHUB} target="_blank" className="collaborate-link">
          my GitHub page
        </Link>
        .
      </div>
      <Button variant="outline" className="bg-accent hover:bg-border">
        <Link
          href="https://www.linkedin.com/services/page/4548aa324845553b6b/"
          target="_blank"
          className="collaborate-button-text">
          Contact Me on <SiLinkedin />
        </Link>
      </Button>
    </section>
  );
};

export default CollaboratePage;
