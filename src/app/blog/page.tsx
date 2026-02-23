import React from "react";

import { BlogPostsList } from "@/components/blog-posts-list";

import { PostLoader } from "@/lib/post-loader";

export default async function BlogPage() {
  const allPostMetadatasByYear = PostLoader.getAllPostMetadatasByYear();

  return <BlogPostsList allPostMetadatasByYear={allPostMetadatasByYear} />;
}
