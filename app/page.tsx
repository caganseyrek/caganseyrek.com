import React from "react";

import { Metadata } from "next";

import { Separator } from "@/components/base/separator";
import { ContentSection, ContentWrapper } from "@/components/partials/ContentPartials";
import {
  HomepageContainer,
  HomepageImage,
  HomepageParagraph,
  HomepagePrimaryTitle,
  HomepageTechstack,
} from "@/components/partials/HomepagePartials";

import { headMetadata } from "@/resources/data/metadata";
import techstack from "@/resources/data/techstack";

export const metadata: Metadata = {
  ...headMetadata,
  title: "Çağan Seyrek",
};

const RootPage = () => {
  return (
    <ContentWrapper>
      <ContentSection className="flex-row max-sm:flex-col max-sm:items-center max-sm:text-center">
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
      <ContentSection className="flex-row">
        <HomepageContainer>
          <HomepageParagraph>Here are the technologies and tools I use for development</HomepageParagraph>
          <HomepageTechstack list={techstack} />
        </HomepageContainer>
      </ContentSection>
    </ContentWrapper>
  );
};

export default RootPage;
