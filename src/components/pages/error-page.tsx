import { Link } from "react-router";

import { Puzzle } from "lucide-react";

import { Button } from "@/components/base/button";

import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/custom-page-partials";
import { Layout } from "@/components/layout";

export function ErrorPage() {
  return (
    <>
      <title>Hata... - Çağan Seyrek</title>

      <Layout>
        <CustomPageContainer>
          <Puzzle className="text-foreground h-9.5 w-8.5" />
          <CustomPageBody>
            <CustomPageTitle>Hmmm...</CustomPageTitle>
            <CustomPageDescription>Bir hata olmuş gibi görünüyor. Çok üzgünüm.</CustomPageDescription>
          </CustomPageBody>
          <Button asChild>
            <Link to="/">Ana sayfaya dön</Link>
          </Button>
        </CustomPageContainer>
      </Layout>
    </>
  );
}
