import { IconType } from "react-icons";
import {
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
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTurborepo,
  SiTypescript,
  SiZod,
} from "react-icons/si";

interface TechstackListProps {
  key: string;
  label: string;
  list: {
    key: string;
    label: string;
    icon: IconType;
  }[];
}

const techstackList: TechstackListProps[] = [
  {
    key: "technologies",
    label: "Technologies",
    list: [
      { key: "springboot", label: "Spring Boot", icon: SiSpringboot },
      { key: "expressjs", label: "Express.js", icon: SiExpress },
      { key: "aspdotnetcore", label: "ASP.NET Core", icon: SiDotnet },
      { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
      { key: "mongodb", label: "MongoDB", icon: SiMongodb },
      { key: "supabase", label: "Supabase", icon: SiSupabase },
      { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { key: "react", label: "React", icon: SiReact },
      { key: "typescript", label: "TypeScript", icon: SiTypescript },
      { key: "zod", label: "Zod", icon: SiZod },
      { key: "tailwindcss", label: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    key: "devtools",
    label: "Dev Tools",
    list: [
      { key: "gnulinux", label: "GNU/Linux", icon: SiLinux },
      { key: "bash", label: "bash", icon: SiGnubash },
      { key: "git", label: "Git", icon: SiGit },
      { key: "github", label: "GitHub", icon: SiGithub },
      { key: "turbo", label: "Turbo", icon: SiTurborepo },
      { key: "postman", label: "Postman", icon: SiPostman },
      { key: "eslint", label: "ESLint", icon: SiEslint },
      { key: "prettier", label: "Prettier", icon: SiPrettier },
    ],
  },
];

export default techstackList;
