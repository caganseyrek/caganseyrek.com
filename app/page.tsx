import React from "react";

import { Metadata } from "next";

import HeaderElement from "@/components/HeaderElement";
import ProjectsList from "@/components/ProjectsList";
import IntroSection from "@/components/section/IntroSection";
import TechstackSection from "@/components/section/TechstackSection";

export const metadata: Metadata = { title: "About Me" };

const AboutMe = () => {
  return (
    <main>
      <IntroSection />
      <TechstackSection />
      <section className="flex flex-col gap-md w-full">
        <HeaderElement type="section-header">Highlighted Projects</HeaderElement>
        <ProjectsList highlightedOnly />
      </section>
    </main>
  );
};

export default AboutMe;
