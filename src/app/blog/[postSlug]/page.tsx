import React from "react";

import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeftIcon } from "lucide-react";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import { Button } from "@/components/base/button";

import { PostLoader } from "@/lib/post-loader";

export async function generateStaticParams() {
  return PostLoader.getAllPostSlugs().map((slug) => ({ postSlug: slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ postSlug: string }> }) {
  const { postSlug: awaitedPostSlug } = await params;

  const post = PostLoader.getPostBySlug(awaitedPostSlug);
  if (!post) {
    notFound();
  }

  const processedPostContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.rawPostContent);

  return (
    <>
      <Button asChild>
        <Link href="/blog">
          <ArrowLeftIcon /> Blog&apos;a geri dön
        </Link>
      </Button>
      <div
        className="markdown [&>*:first-child]:mt-0!"
        dangerouslySetInnerHTML={{ __html: processedPostContent.toString() }}
      />
    </>
  );
}
