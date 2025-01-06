import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Calendar, Clock, ExternalLink } from "lucide-react";

import EmptyBlog from "@/components/EmptyBlog";
import { Separator } from "@/components/ui/separator";

import { getArticles, type GetManyParams } from "@/utils/articleUtils";
import getReadingTime from "@/utils/getReadingTime";

export const metadata: Metadata = { title: "Blog" };

const BlogPage = () => {
  const articles: GetManyParams = getArticles();

  return (
    <section className="blog-section">
      <h3>Blog</h3>
      <div className="articles-container">
        {articles.length > 0 ? (
          articles.map((article) => (
            <React.Fragment key={article.slug}>
              <Separator decorative className="articles-separator" />
              <div className="article-container">
                <div className="article-header">
                  <Link href={`/blog/${article.slug}`} className="article-link">
                    <h2 className="article-link-text">{article.metadata.title}</h2>
                    <ExternalLink className="icon-18x18" />
                  </Link>
                  <div className="article-metadata-container">
                    <span className="article-metadata-item">
                      <Calendar className="icon-14x14" />
                      {article.metadata.created_at}
                    </span>
                    <span className="article-metadata-item">
                      <Clock className="icon-14x14" />
                      {getReadingTime(article.metadata.word_count)}
                    </span>
                  </div>
                </div>
                <div className="text-base text-muted-foreground">{article.metadata.preview_content}</div>
                <div className="tags-container">
                  {article.metadata.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <EmptyBlog />
        )}
      </div>{" "}
    </section>
  );
};

export default BlogPage;
