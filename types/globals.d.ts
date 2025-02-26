import { IconType } from "react-icons";

export interface BaseWrapperProps {
  children?: React.ReactNode;
  className?: string;
}

export interface TechstackItemProps {
  key: string;
  label: string;
  icon: IconType;
}

export interface ProjectRepositoryProps {
  url: string;
  description: string;
  tags: string[];
}

export interface ProjectDetailProps {
  slug: string;
  title: string;
  repository: ProjectRepositoryProps;
}
