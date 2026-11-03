import { FlexBox } from "@/components/base/flexbox";

import type { WrapperProps } from "@/types";
import { cn } from "@/utils";

export function CustomPageContainer({ children, className }: WrapperProps) {
  return (
    <FlexBox className={cn("p-lg h-120 w-200 flex-col justify-center gap-3 pb-60", className)}>{children}</FlexBox>
  );
}

export function CustomPageTitle({ children, className }: WrapperProps) {
  return <h3 className={cn("text-foreground text-xl font-semibold", className)}>{children}</h3>;
}

export function CustomPageDescription({ children, className }: WrapperProps) {
  return <span className={cn("text-foreground-muted", className)}>{children}</span>;
}

export function CustomPageBody({ children, className }: WrapperProps) {
  return (
    <FlexBox asColumn className={cn("justify-center gap-0", className)}>
      {children}
    </FlexBox>
  );
}
