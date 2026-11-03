import { Link } from "react-router";

import { Origami } from "lucide-react";

import { Button } from "@/components/base/button";

import {
  CustomPageBody,
  CustomPageContainer,
  CustomPageDescription,
  CustomPageTitle,
} from "@/components/custom-page-partials";
import { Layout } from "@/components/layout";

export function NotFoundPage() {
  return (
    <>
      <title>Sayfa Bulunamadı... - Çağan Seyrek</title>

      <Layout>
        <CustomPageContainer>
          <Origami className="text-foreground h-9.5 w-8.5" />
          <CustomPageBody>
            <CustomPageTitle>404</CustomPageTitle>
            <CustomPageDescription>Sitede yer almayan bir yere ulaştık.</CustomPageDescription>
          </CustomPageBody>
          <Button asChild>
            <Link to="/">Ana sayfaya dön</Link>
          </Button>
        </CustomPageContainer>
      </Layout>
    </>
  );
}
