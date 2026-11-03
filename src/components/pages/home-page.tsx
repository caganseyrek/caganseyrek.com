import { FlexBox } from "@/components/base/flexbox";
import { Separator } from "@/components/base/separator";

import { Layout } from "@/components/layout";
import { Projects } from "@/components/projects";

export function HomePage() {
  return (
    <>
      <title>Çağan Seyrek</title>

      <Layout>
        <FlexBox className="flex w-full flex-row items-start justify-start gap-5 max-[550px]:flex-col max-[550px]:items-center">
          <div className="bg-gray-1 border-gray-2 size-37.5 min-w-37.5 rounded-md border">
            <img
              src="/images/portrait_drawing.png"
              className="size-37.5 rounded-lg select-none"
              alt="My profile picture"
              title="My profile picture"
              aria-label="My profile picture"
              style={{
                filter:
                  "drop-shadow(0 0 0 white) drop-shadow(1.5px 0 0 white) drop-shadow(-1.5px 0 0 white) drop-shadow(0 1.5px 0 white) drop-shadow(0 -2px 0 white)",
              }}
            />
          </div>

          <FlexBox className="flex-col items-start gap-2.5 max-[550px]:items-center max-[550px]:text-center">
            <h1 className="text-foreground w-full text-2xl font-semibold tracking-tight">Selam, Ben Çağan!</h1>
            <p>Bilgisayar mühendisi ve full-stack yazılım geliştiricisiyim.</p>
            <p>
              Ölçeklenebilir yazılım sistemleri geliştiriyor ve açık kaynak projeler üretiyorum. Yeni teknolojileri
              takip ederek ve farklı yazılım mimarisi yaklaşımlarını deneyerek kendimi sürekli geliştirmeye önem
              veriyorum.
            </p>
            <p>Yazılımın dışında, tarih araştırmaya ve tarihsel haritaları incelemeye büyük ilgi duyuyorum.</p>
          </FlexBox>
        </FlexBox>

        <Separator decorative />

        <Projects />
      </Layout>
    </>
  );
}
