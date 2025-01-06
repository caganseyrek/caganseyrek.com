import React from "react";

import Link from "next/link";

import { Calendar, Clock, ExternalLink } from "lucide-react";

import { getArticles, type GetManyParams } from "@/utils/articleUtils";
import getReadingTime from "@/utils/getReadingTime";

const HighlightedArticles = () => {
  const articles: GetManyParams = getArticles();

  return (
    <>
      {articles.length > 0 && (
        <section>
          <h3 className="highlighted-section-title">Highlighted Articles</h3>
          <div className="highlighted-articles-grid">
            {articles.length > 0 &&
              articles.map(
                (article) =>
                  article.metadata.is_highlighted && (
                    <React.Fragment key={article.slug}>
                      <div className="highlighted-article-container">
                        <div className="article-header">
                          <Link href={`/blog/${article.slug}`} className="article-link">
                            <h2 className="article-link-text ">{article.metadata.title}</h2>
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
                        <div className="text-muted-foreground">{article.metadata.preview_content}</div>
                        <div className="tags-container">
                          {article.metadata.tags.map((tag) => (
                            <span key={tag} className="highlighted-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </React.Fragment>
                  ),
              )}
          </div>
        </section>
      )}
    </>
  );
};

export default HighlightedArticles;
