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
    <section>
      <h3 className="text-xl font-bold tracking-tight m-0 p-0 pb-[15px] text-center">Blog</h3>
      <div className="flex flex-row flex-wrap gap-[10px]">
        {articles.length > 0 ? (
          articles.map((article) => (
            <React.Fragment key={article.slug}>
              <Separator decorative className="mb-[15px] [&:not(:first-child)]:mt-[15px]" />
              <div className="flex flex-col gap-y-[10px]">
                <div className="flex flex-col gap-y-[5px]">
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
                </div>
                <div className="text-base text-muted-foreground">{article.metadata.preview_content}</div>
                <div className="flex flex-row gap-x-[5px] gap-y-[5px]">
                  {article.metadata.tags.map((tag) => (
                    <span key={tag} className="border bg-accent rounded-sm px-[7px] py-[3px] text-sm font-medium">
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
