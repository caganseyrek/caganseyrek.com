import React from "react";

import { Metadata } from "next";

import { Separator } from "@/components/base-ui/separator";
import { ContentSection } from "@/components/layout/Content";
import {
  HomepageContainer,
  HomepageImage,
  HomepageParagraph,
  HomepagePrimaryTitle,
  HomepageSecondaryTitle,
} from "@/components/layout/partials/HomepagePartials";
import TechLabel from "@/components/TechLabel";

import { headMetadata } from "@/shared/data/metadata";
import techstack from "@/shared/data/techstack";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Çağan Seyrek",
};

const RootPage = () => {
  return (
    <>
      <ContentSection className="flex-row max-base:flex-col max-base:items-center">
        <HomepageImage />
        <HomepageContainer>
          <HomepagePrimaryTitle>Hey, I&apos;m Çağan!</HomepagePrimaryTitle>
          <HomepageParagraph>
            I&apos;m a computer engineering student and software developer from Türkiye.
          </HomepageParagraph>
          <HomepageParagraph>
            I do full-stack development and create open-source projects. I also enjoy exploring different languages,
            frameworks, and software architecture patterns.
          </HomepageParagraph>
          <HomepageParagraph>
            Beyond coding, I have a <span className="font-semibold tracking-tight">deep</span> interest in researching
            history, I enjoy looking at historical maps, and I&apos;m (kinda) learning bass guitar right now!
          </HomepageParagraph>
        </HomepageContainer>
      </ContentSection>
      <Separator decorative />
      <ContentSection className="flex-row max-base:flex-col max-base:items-center">
        <HomepageContainer>
          <HomepageSecondaryTitle>What I Work With</HomepageSecondaryTitle>
          <HomepageParagraph>Here is my techstack. My main dev environment is WSL with Ubuntu.</HomepageParagraph>
          <div className="flex flex-row flex-wrap items-start justify-start gap-xs max-base:justify-center">
            {techstack.map((item) => (
              <TechLabel key={item.key}>
                <item.icon /> {item.label}
              </TechLabel>
            ))}
          </div>
        </HomepageContainer>
      </ContentSection>
    </>
  );
};

// On the backend, I frequently use{" "}
//             <TechLabel>
//               <SiDotnet className="min-w-4 min-h-4" />
//               ASP.NET Core
//             </TechLabel>
//             ,
//             <TechLabel>
//               <SiSpringboot className="min-w-4 min-h-4" />
//               Spring Boot
//             </TechLabel>
//             , and Express.js. For the frontend, I mostly work with React and Next.js in TypeScript (because that sweet,
//             sweet type safety).
//           </HomepageParagraph>
//           <HomepageParagraph>
//             For databases, I use SQL Server and PostgreSQL. My main dev environment is WSL Ubuntu, I rely on Postman for
//             API testing, and of course, Git and GitHub to keep track of my work.

export default RootPage;
