import { IconType } from "react-icons";
import { DiDotnet } from "react-icons/di";
import {
  SiDiagramsdotnet,
  SiDotnet,
  SiEslint,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiReact,
  SiReactquery,
  SiSpringboot,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiZod,
} from "react-icons/si";

import { TechstackItemProps } from "@/types/globals";

const techstack: TechstackItemProps[] = [
  { key: "aspdotnetcore", label: "ASP.NET Core", icon: DiDotnet },
  { key: "springboot", label: "Spring Boot", icon: SiSpringboot },
  { key: "expressjs", label: "Express.js", icon: SiExpress },
  { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
  { key: "mongodb", label: "MongoDB", icon: SiMongodb },
  { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
  { key: "react", label: "React", icon: SiReact },
  { key: "typescript", label: "TypeScript", icon: SiTypescript },
  { key: "zod", label: "Zod", icon: SiZod },
  { key: "tanstackquery", label: "Tanstack Query", icon: SiReactquery },
  { key: "tailwindcss", label: "Tailwind CSS", icon: SiTailwindcss },
  { key: "gnulinux", label: "GNU/Linux", icon: SiLinux },
  { key: "bash", label: "bash", icon: SiGnubash },
  { key: "git", label: "Git", icon: SiGit },
  { key: "github", label: "GitHub", icon: SiGithub },
  { key: "postman", label: "Postman", icon: SiPostman },
  { key: "turbo", label: "Turbo", icon: SiTurborepo },
  { key: "eslint", label: "ESLint", icon: SiEslint },
  { key: "prettier", label: "Prettier", icon: SiPrettier },
];

export default techstack;
