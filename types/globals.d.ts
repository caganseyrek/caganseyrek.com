import React from "react";
import { IconType } from "react-icons";

export namespace Data {
  export interface CoreMetadataProps {
    site_title: string;
    description: string;
    base_site_url: string;
    social_links: { github_profile: string; linkedin_profile: string };
    preview_image: { absolute_url: string; relative_path: string; alt_text: string };
  }
  export interface LinkProps {
    key: string;
    label: string;
    link: string;
    icon: IconType;
  }
  export type TechstackProps = Omit<LinkProps, "link">;
}

export namespace Components {
  export interface BaseWrapperProps {
    children?: React.ReactNode;
    className?: string;
  }
  export namespace CodeBlock {
    export interface CodeBlockProps {
      language: string;
      code: string;
    }
    export type CopyButtonProps = Pick<CodeBlockProps, "code"> & { className?: string };
  }
  export namespace Partials {
    export interface PageHeaderProps {
      title: string;
      subtitle?: string;
    }
    export interface ProjectTitleProps extends BaseWrapperProps {
      link: string;
    }
    export interface ProjectTechsProps {
      list: string[];
    }
    export type HomepageTechstackProps = BaseWrapperProps & {
      list: Data.TechstackProps[];
    };
  }
}

export namespace Content {
  export interface ProjectProps {
    slug: string;
    title: string;
    description: string;
    repository: string;
    tech: string[];
  }
  export namespace Snippets {
    export type SnippetLanguages = "TypeScript" | "JavaScript" | "Java" | "C#" | "bash" | "JSON";
    export interface SnippetProps {
      key: string;
      label: string;
      description: string;
      language: SnippetLanguages;
      code: string;
    }
  }
  // export namespace Guides {
  //   export interface GuideSectionProps {
  //     key: string;
  //     label: string;
  //     guides: GuideProps[];
  //   }
  //   export interface GuideProps extends Omit<Data.LinkProps, "icon"> {
  //     created_at: Date;
  //     last_edited_at: Date;
  //   }
  // }
}
