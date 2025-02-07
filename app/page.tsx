import React from "react";

import { Metadata } from "next";

import HeadingElement from "@/components/HeadingElement";
import IntroSection from "@/components/partial/IntroSection";
import TechstackSection from "@/components/partial/TechstackSection";
import ProjectsList from "@/components/ProjectsList";

export const metadata: Metadata = { title: "About Me" };

const AboutMe = () => {
  return (
    <main>
      <IntroSection />
      <TechstackSection />
      <section className="flex flex-col gap-md w-full">
        <HeadingElement type="section-header">Highlighted Projects</HeadingElement>
        <ProjectsList highlightedOnly />
      </section>
    </main>
  );
};

export default AboutMe;
