"use client";

import React from "react";

import Link from "next/link";

import { CircleOffIcon } from "lucide-react";

import { FlexBox } from "@/components/flexbox";

import { PostsByYearProps } from "@/globals";

interface BlogPostsListProps {
  allPostMetadatasByYear: PostsByYearProps;
}

function BlogPostsList({ allPostMetadatasByYear }: BlogPostsListProps) {
  const [query, setQuery] = React.useState("");

  function filterPostsByQuery(postsByYear: PostsByYearProps, query: string): PostsByYearProps {
    if (!query.trim()) return postsByYear;
    const q = query.toLowerCase();
    return Object.fromEntries(
      Object.entries(postsByYear)
        .map(([year, posts]) => {
          const filteredPosts = posts.filter(
            (post) =>
              post.title.toLowerCase().includes(q) ||
              post.summary.toLowerCase().includes(q) ||
              post.keywords.some((k) => k.toLowerCase().includes(q)),
          );
          return [year, filteredPosts];
        })
        .filter(([, posts]) => posts.length > 0), // drop empty years
    );
  }

  const filteredPostMetadatasByYear = React.useMemo(
    () => filterPostsByQuery(allPostMetadatasByYear, query),
    [allPostMetadatasByYear, query],
  );

  return (
    <>
      <FlexBox className="w-full justify-between">
        <div className="text-foreground text-2xl font-medium tracking-tighter">Blog</div>{" "}
        <input
          type="search"
          className="border-gray-2 bg-gray-1 text-foreground-darker h-8.5 min-h-8.5 gap-2 rounded-lg border px-2.5 py-1.5 text-sm"
          placeholder="Search posts..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </FlexBox>

      {Object.entries(filteredPostMetadatasByYear).length > 0 ? (
        Object.entries(filteredPostMetadatasByYear).map(([year, posts]) => (
          <FlexBox key={year} className="w-full items-start max-[500px]:flex-col">
            <FlexBox className="h-9 min-w-35 items-center text-xl font-medium tracking-tighter text-white">
              {year}
            </FlexBox>
            <FlexBox asColumn className="w-[calc(100%-146px)] items-start gap-px max-[500px]:w-full">
              {posts.map((post) => {
                const publishedAtDate = new Date(post.publishedAt);
                return (
                  <FlexBox key={post.slug} asChild className="w-full justify-between">
                    <Link href={"/blog/" + post.slug} className="hover:bg-gray-1 w-full gap-12 rounded-lg px-3 py-1.5">
                      <span className="max-w-125 truncate">{post.title}</span>
                      <span className="text-nowrap">
                        {publishedAtDate.getDate().toString().padStart(2, "0")}{" "}
                        {publishedAtDate.toLocaleString("en-US", { month: "short" })}
                      </span>
                    </Link>
                  </FlexBox>
                );
              })}
            </FlexBox>
          </FlexBox>
        ))
      ) : query ? (
        <FlexBox asColumn className="h-50 w-full justify-center gap-3">
          <CircleOffIcon className="size-8" />
          <div className="w-60 text-center leading-5">We couldn’t find any posts matching your search</div>
        </FlexBox>
      ) : (
        <FlexBox asColumn className="h-50 w-full justify-center gap-3">
          <CircleOffIcon className="size-8" />
          <div className="w-60 text-center leading-5">No posts here yet</div>
        </FlexBox>
      )}
    </>
  );
}

export { BlogPostsList };
