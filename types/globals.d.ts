import React from "react";
import { IconType } from "react-icons";

import { LucideProps } from "lucide-react";

export namespace Data {
  export interface CoreMetadataProps {
    title: string;
    desc: string;
    url: string;
    links: {
      github: string;
      linkedin: string;
      npm: string;
    };
    image: {
      url: string;
      relative_path: string;
      alt_text: string;
    };
  }
  export interface LinkProps {
    label: string;
    link: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | IconType;
  }
}

export namespace Components {
  export interface BaseWrapperProps {
    children?: React.ReactNode;
    className?: string;
  }
  export interface HeaderMenuProps {
    items: Data.LinkProps[];
  }
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
  export interface CodeBlockProps {
    language: string;
    code: string;
  }
}

export namespace Content {
  export type SnippetLanguages = "TypeScript" | "JavaScript" | "Java" | "CSharp" | "bash" | "JSON";
  interface GuideSectionProps {
    key: string;
    title: string;
    anchor: string;
    paragraphs: React.ReactNode[];
  }
  export interface ProjectDetailProps {
    slug: string;
    title: string;
    description: string;
    repository: string;
    tech: string[];
  }
  interface SnippetProps {
    key: string;
    label: string;
    description: string;
    language: SnippetLanguages;
    code: string;
  }
  interface LanguageDetailsProps {
    [key: string]: {
      name: string;
      bg_color: string;
    };
  }
  export interface TocProps {
    key: string;
    label: string;
    anchor: string;
    sublist: TocProps[];
  }
}
