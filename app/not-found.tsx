import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Origami } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Not Found" };

const NotFoundPage = () => {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-contnainer">
        <Origami className="not-found-icon" />
        <div className="not-found-text-container">
          <h3>Oops..</h3>
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
