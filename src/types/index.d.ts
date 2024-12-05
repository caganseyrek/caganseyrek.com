declare module "*.css";

declare interface CustomSEOProps {
  title: string;
  description: string;
  url: string;
  imagePath?: string;
  metaThemeColor?: string;
}

interface LinkElementProps {
  to: string;
  contents?: ReactNode;
  children?: ReactNode;
  isExternal?: boolean;
  ariaLabel?: string;
  className?: string;
  id?: string;
  onClick?: () => void;
}

declare interface TechstackListItemProps {
  key: string;
  label: string;
  icon: ReactNode;
}

declare interface TechstackListProps {
  key: string;
  label: string;
  list: TechstackListItemProps[];
}

declare interface ProjectsHighlightsListProps {
  key: string | number;
  title: string;
  description: string;
  source_url: string;
  tags: string[];
}

declare interface FileDetailsProps {
  doesFileExists: boolean;
  fileName: string;
  fileContents: string;
  isFileLoading: boolean;
  isFileSelected: boolean;
}

declare interface BlogPostsListProps {
  key: string | number;
  title: string;
  published: string;
  queryString: string;
}

declare interface BlogPostsListByYearProps {
  selectedYear: number;
  posts: BlogPostsListProps[];
}

declare interface BlogPageProps {
  isDarkMode: boolean;
}
