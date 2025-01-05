import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Not Found" };

const NotFoundPage = () => {
  return (
    <div className="w-[100%] flex items-center justify-center">
      <div className="py-[30px] w-fit text-muted-foreground flex flex-col items-center justify-center gap-y-[15px]">
        <Origami className="text-foreground w-[34px] h-[34px]" />
        <div className="flex flex-col items-center justify-center gap-y-[5px]">
          <h3 className="text-xl font-semibold text-foreground">Oops..</h3>
          Looks like you&apos;ve reached an empty space.
        </div>
        <Button variant="outline" className="bg-accent">
          <Link href="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
