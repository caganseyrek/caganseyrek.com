import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface ProjectArticleProps {
  slug: string;
  title: string;
  preview_image: string;
  content_md: string;
  is_published: boolean;
  is_draft: boolean;
}

const parseFrontMatter = (loadedProjectArticle: string): ProjectArticleProps => {
  const { content: articleContent, data: frontMatterData } = matter(loadedProjectArticle);
  return { ...frontMatterData, content_md: articleContent } as ProjectArticleProps;
};

const readProjectArticlesFolder = (dir: string): string[] => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
};

const readProjectArticleFile = (filePath: string): ProjectArticleProps => {
  const loadedProjectArticle = fs.readFileSync(filePath, "utf-8");
  return parseFrontMatter(loadedProjectArticle);
};

const getProjectArticleData = (dir: string): ProjectArticleProps[] => {
  const projectArticles = readProjectArticlesFolder(dir);
  return projectArticles.map((file) => {
    return {
      ...readProjectArticleFile(path.join(dir, file)),
      slug: path.basename(file, path.extname(file)),
    };
  });
};

export const getProjectArticles = (): ProjectArticleProps[] => {
  return getProjectArticleData(path.join(process.cwd(), "data", "projects", "articles"));
};

export const getProjectArticleBySlug = (slug: string): ProjectArticleProps | null => {
  const projectArticles: ProjectArticleProps[] = getProjectArticles().filter((article) => article.slug === slug);
  return projectArticles.length === 1 ? projectArticles[0] : null;
};
