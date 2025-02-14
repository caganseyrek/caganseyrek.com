import React from "react";

import { Metadata } from "next";

import Projects from "@/components/Projects";
import Techstack from "@/components/Techstack";
import { PageWrapper } from "@/components/ui-base/page-wrapper";

export const metadata: Metadata = { title: "About Me - Çağan Seyrek" };

const AboutMe = () => {
  return (
    <PageWrapper className="max-[650px]:gap-lg">
      <section className="flex flex-row items-start justify-start gap-lg max-[650px]:flex-col max-[650px]:items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/general_cat.webp"
          width="160"
          height="160"
          alt="My Profile Picture"
          title="My Profile Picture"
          className="bg-cover rounded-lg select-none"
        />
        <div className="flex flex-col items-start justify-start gap-md">
          <h1 className="text-2xl tracking-tight font-bold leading-tight max-[650px]:m-auto">Hey, I&apos;m Çağan</h1>
          <span className="text-muted-foreground text-pretty max-[650px]:text-center">
            I&apos;m a senior-year computer engineering student with a strong passion for full-stack development,
            software engineering, open-source way of improving technology for everyone. I enjoy exploring different
            languages, frameworks, and architectural patterns.
          </span>
          <span className="text-muted-foreground text-pretty max-[650px]:text-center">
            Beyond coding, I have a deep interest in history. I love reading and researching historical events, diving
            into different eras, and exploring significant moments.
          </span>
        </div>
      </section>
      <Techstack />
      <section className="flex flex-col gap-md w-full">
        <h2 className="text-xl tracking-tight font-semibold text-center">Highligted Projects</h2>
        <Projects highlightedOnly />
      </section>
    </PageWrapper>
  );
};

export default AboutMe;
