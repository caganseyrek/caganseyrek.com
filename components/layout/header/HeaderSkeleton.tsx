import React from "react";

import { Separator } from "@/components/base-ui/separator";
import { Skeleton } from "@/components/base-ui/skeleton";

import { HeaderContainer, HeaderMain, HeaderNavigation, HeaderTitle } from "../partials/HeaderPartials";

const HeaderSkeleton = () => {
  return (
    <HeaderContainer>
      <HeaderMain>
        <HeaderTitle />
        <HeaderNavigation>
          <Skeleton className="w-[103.95px] h-[36px]" />
          <Skeleton className="w-[108.1px] h-[36px]" />
          <Skeleton className="w-[118.55px] h-[36px]" />
          <Separator decorative orientation="vertical" className="h-6 mx-sm" />
          <Skeleton className="w-[36px] h-[36px]" />
          <Skeleton className="w-[36px] h-[36px]" />
          <Skeleton className="w-[36px] h-[36px]" />
        </HeaderNavigation>
      </HeaderMain>
    </HeaderContainer>
  );
};

export default HeaderSkeleton;
