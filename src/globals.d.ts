import React from "react";

import type { LucideProps } from "lucide-react";

interface WrapperProps {
  children?: React.ReactNode;
  className?: string;
}

type IconType = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

interface PostMetadataProps {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  lastUpdatedAt: string;
  keywords: string[];
}

type PostsByYearProps = Record<string, PostMetadataProps[]>;

export type { WrapperProps, IconType, PostMetadataProps, PostsByYearProps };
