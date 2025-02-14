import React from "react";
import { IconType } from "react-icons";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { Computer, HomeIcon, LucideProps } from "lucide-react";

import { metadataBase } from "./metadataBase";

interface LinkProps {
  label: string;
  link: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | IconType;
}

export const navLinks: LinkProps[] = [
  {
    label: "About Me",
    link: "/",
    icon: HomeIcon,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: Computer,
  },
];

export const socialLinks: LinkProps[] = [
  {
    label: "GitHub",
    link: metadataBase.links.github,
    icon: SiGithub,
  },
  {
    label: "LinkedIn",
    link: metadataBase.links.linkedin,
    icon: SiLinkedin,
  },
];
