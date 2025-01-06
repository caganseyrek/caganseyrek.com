import fs from "fs";
import matter from "gray-matter";
import path from "path";

import { stringifyTag } from "./tagUtils";

interface FrontMatterProps {
  title: string;
  tags: string[];
  word_count: number;
  preview_content: string;
  image_path: string;
  created_at: string;
  last_updated_at: string;
  is_highlighted: boolean;
}

interface LoadArticleResponse {
  metadata: FrontMatterProps;
  content: string;
}

export type GetOneParams = LoadArticleResponse & { slug: string };
export type GetManyParams = Array<GetOneParams>;

const parseFrontMatter = (loadedArticle: string): LoadArticleResponse => {
  const { content: articleContent, data: frontMatterData } = matter(loadedArticle);

  return {
    metadata: frontMatterData as FrontMatterProps,
    content: articleContent,
  };
};

const getArticleFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
};

const readArticleFile = (filePath: string) => {
  const loadedArticle = fs.readFileSync(filePath, "utf-8");
  return parseFrontMatter(loadedArticle);
};

const getArticleData = (dir: string) => {
  const articles = getArticleFiles(dir);
  return articles.map((file) => {
    return {
      ...readArticleFile(path.join(dir, file)),
      slug: path.basename(file, path.extname(file)),
    };
  });
};

export const getArticles = (): GetManyParams => {
  return getArticleData(path.join(process.cwd(), "articles"));
};

export const getArticleBySlug = (slug: string): GetOneParams => {
  const articles: GetManyParams = getArticles().filter((post) => post.slug === slug);
  if (articles.length === 1) {
    return articles[0];
  } else {
    return {
      metadata: {
        title: "",
        tags: [],
        word_count: 0,
        preview_content: "",
        image_path: "",
        created_at: "",
        last_updated_at: "",
        is_highlighted: false,
      },
      content: "",
      slug: "",
    };
  }
};

export const getArticlesByTag = (tag: string): GetManyParams => {
  return getArticles().filter((post) => post.metadata.tags.some((tagFromArray) => stringifyTag(tagFromArray) === tag));
};
