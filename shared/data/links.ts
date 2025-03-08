import { SiGithub, SiLinkedin } from "react-icons/si";

import { Box, CodeXml, Home } from "lucide-react";

import { Data } from "@/types/globals";

import { coreMetadata } from "./metadata";

export const navLinks: Data.LinkProps[] = [
  {
    label: "Home",
    link: "/",
    icon: Home,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: Box,
  },
  {
    label: "Snippets",
    link: "/snippets",
    icon: CodeXml,
  },
];

export const socialLinks: Data.LinkProps[] = [
  {
    label: "GitHub",
    link: coreMetadata.links.github,
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    link: coreMetadata.links.linkedin,
    icon: SiLinkedin,
  },
];
