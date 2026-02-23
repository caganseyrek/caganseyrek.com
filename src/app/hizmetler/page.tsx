import React from "react";

import type { Metadata } from "next";
import Link from "next/link";

import { FlexBox } from "@/components/base/flexbox";

import { coreMetadata, headMetadata } from "@/data/metadata";
import { services } from "@/data/services";

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...headMetadata,
    title: "Hizmetler",
  };
}
export default async function ServicesPage() {
  return (
    <>
      <FlexBox className="w-full justify-between">
        <div className="text-foreground text-2xl font-medium tracking-tighter">Hizmetler</div>
      </FlexBox>

      <FlexBox asColumn className="w-full flex-1">
        {services.map((service) => (
          <FlexBox
            key={service.key}
            className="bg-gray-1 border-gray-2 flex-1 items-start gap-3 rounded-lg border p-3 max-[450px]:flex-col">
            <div className="bg-gray-2 border-gray-3! rounded-sm border p-2">
              <service.icon className="size-6 text-white" />
            </div>
            <FlexBox asColumn className="items-start justify-start">
              <span className="text-foreground! text-lg font-medium tracking-tight">{service.title}</span>
              <div className="flex-1 pb-1.5 text-sm">{service.description}</div>
              <FlexBox className="flex-wrap gap-1">
                {service.technologies.map((tech) => (
                  <FlexBox
                    key={tech.label}
                    className="bg-gray-2 border-gray-3! rounded-sm border px-1.5 py-0.5 text-xs text-nowrap">
                    <tech.icon className="shrink-0" /> {tech.label}
                  </FlexBox>
                ))}
              </FlexBox>
            </FlexBox>
          </FlexBox>
        ))}
      </FlexBox>

      <FlexBox asColumn className="w-full items-center justify-center gap-0.5 text-center text-sm">
        <div className="text-foreground! flex flex-row items-center justify-start gap-2 text-lg font-medium tracking-tight">
          Birlikte çalışmak ister misiniz?
        </div>
        <div>
          Projeniz hakkında görüşmek için benimle{" "}
          <Link
            href={coreMetadata.socialLinks.linkedinProfile}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-white">
            LinkedIn
          </Link>{" "}
          üzerinden iletişime geçebilirsiniz.
        </div>
      </FlexBox>
    </>
  );
}
