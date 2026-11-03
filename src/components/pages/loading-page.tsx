import { Loader } from "lucide-react";

import { CustomPageContainer } from "@/components/custom-page-partials";
import { Layout } from "@/components/layout";

export function LoadingPage() {
  return (
    <>
      <title>Yükleniyor... - Çağan Seyrek</title>

      <Layout>
        <CustomPageContainer>
          <Loader className="animate-spin" />
        </CustomPageContainer>
      </Layout>
    </>
  );
}
