import { SiGithub, SiLinkedin } from "react-icons/si";

import { Box, CodeXml, Home } from "lucide-react";

import { coreMetadata } from "@/content/data/metadata";

import type { Data } from "@/types/globals";

export const mainMenuLinks: Data.LinkProps[] = [
  {
    key: "home",
    label: "Home",
    link: "/",
    icon: Home,
  },
  {
    key: "projects",
    label: "Projects",
    link: "/projects",
    icon: Box,
  },
  // {
  //   key: "guides",
  //   label: "Guides",
  //   link: "/guides",
  //   icon: BookMarked,
  // },
  {
    key: "snippets",
    label: "Snippets",
    link: "/snippets",
    icon: CodeXml,
  },
];

export const socialLinks: Data.LinkProps[] = [
  {
    key: "github_profile_link",
    label: "GitHub",
    link: coreMetadata.social_links.github_profile,
    icon: SiGithub,
  },
  {
    key: "linkedin_profile_link",
    label: "LinkedIn",
    link: coreMetadata.social_links.linkedin_profile,
    icon: SiLinkedin,
  },
];
