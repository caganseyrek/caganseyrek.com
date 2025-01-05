import React from "react";

import Link from "next/link";

import { Calendar, Clock, ExternalLink } from "lucide-react";

import { getArticles, type GetManyParams } from "@/utils/articleUtils";
import getReadingTime from "@/utils/getReadingTime";
import { stringifyTag } from "@/utils/tagUtils";

const HighlightedArticles = () => {
  const articles: GetManyParams = getArticles();

  return (
    <>
      {articles.length > 0 && (
        <section>
          <h3 className="text-lg font-bold tracking-tight m-0 p-0 pb-[10px] text-center">Highlighted Articles</h3>
          <div className="flex flex-row flex-wrap gap-[10px]">
            {articles.length > 0 &&
              articles.map(
                (article) =>
                  article.metadata.is_highlighted && (
                    <React.Fragment key={article.slug}>
                      <div className="flex flex-col gap-y-[10px] border bg-accent p-[15px] rounded-lg w-[100%]">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="flex flex-row items-center justify-start w-fit gap-x-[10px]">
                          <h2 className="text-md font-semibold tracking-tight m-0 p-0">{article.metadata.title}</h2>
                          <ExternalLink className="h-[18px] w-[18px]" />
                        </Link>
                        <div className="flex flex-row gap-x-[15px] text-muted-foreground text-sm">
                          <span className="flex flex-row items-center justify-center gap-x-[5px]">
                            <Calendar className="h-[14px] w-[14px]" />
                            {article.metadata.created_at}
                          </span>
                          <span className="flex flex-row items-center justify-center gap-x-[5px]">
                            <Clock className="h-[14px] w-[14px]" />
                            {getReadingTime(article.metadata.word_count)}
                          </span>
                        </div>
                        <div className="text-base">{article.metadata.preview_content}</div>
                        <div className="flex flex-row gap-x-[5px] gap-y-[5px]">
                          {article.metadata.tags.map((tag) => (
                            <Link
                              key={tag}
                              href={`/blog/tag/${stringifyTag(tag)}`}
                              className="border bg-background text-muted-foreground rounded-sm px-[7px] py-[3px] text-sm font-medium">
                              {tag}
                            </Link>
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
