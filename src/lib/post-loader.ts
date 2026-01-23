import fs from "fs";
import matter from "gray-matter";
import path from "path";

import type { PostMetadataProps, PostsByYearProps } from "@/globals";

class PostLoader {
  private static POSTS_DIR = path.join(process.cwd(), "src/posts");

  static getAllPostSlugs(): string[] {
    return fs
      .readdirSync(this.POSTS_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  }

  static getPostBySlug(slug: string): { postMetadata: PostMetadataProps; rawPostContent: string } | null {
    const fullPath = path.join(this.POSTS_DIR, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const file = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(file);
    return { postMetadata: data as PostMetadataProps, rawPostContent: content };
  }

  static getAllPostMetadatas(): PostMetadataProps[] {
    return this.getAllPostSlugs()
      .map((slug) => {
        const post = this.getPostBySlug(slug);
        if (!post) return null;
        return post.postMetadata as PostMetadataProps;
      })
      .filter((post) => post !== null);
  }

  static getAllPostMetadatasByYear(): PostsByYearProps {
    const posts = this.getAllPostSlugs()
      .map((slug) => {
        const post = this.getPostBySlug(slug);
        if (!post) return null;
        return post.postMetadata as PostMetadataProps;
      })
      .filter((post) => post !== null);

    const grouped = posts.reduce<PostsByYearProps>((acc, post) => {
      const year = new Date(post.publishedAt).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    }, {});

    Object.values(grouped).forEach((yearPosts) => {
      yearPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    });
    return Object.fromEntries(Object.entries(grouped).sort(([a], [b]) => Number(b) - Number(a)));
  }
}

export { PostLoader };
