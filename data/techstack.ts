import { IconType } from "react-icons";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiDocker,
  SiDotnet,
  SiEslint,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGnubash,
  SiI18Next,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiReactquery,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
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
      { key: "fastapi", label: "FastAPI", icon: SiFastapi },
      { key: "postgresql", label: "PostgreSQL", icon: SiPostgresql },
      { key: "mongodb", label: "MongoDB", icon: SiMongodb },
      { key: "react", label: "React", icon: SiReact },
      { key: "nextjs", label: "Next.js", icon: SiNextdotjs },
      { key: "reactquery", label: "React-Query", icon: SiReactquery },
      { key: "eslint", label: "ESLint", icon: SiEslint },
      { key: "typescript", label: "TypeScript", icon: SiTypescript },
      { key: "tailwindcss", label: "TailwindCSS", icon: SiTailwindcss },
      { key: "i18next", label: "I18Next", icon: SiI18Next },
    ],
  },
  {
    key: "devtools",
    label: "Dev Tools",
    list: [
      { key: "gnulinux", label: "GNU/Linux", icon: SiLinux },
      { key: "bash", label: "Bash", icon: SiGnubash },
      { key: "git", label: "Git", icon: SiGit },
      { key: "github", label: "GitHub", icon: SiGithub },
      { key: "docker", label: "Docker", icon: SiDocker },
      { key: "postman", label: "Postman", icon: SiPostman },
      { key: "visualstudiocode", label: "Visual Studio Code", icon: BiLogoVisualStudio },
    ],
  },
];

export default techstackList;
