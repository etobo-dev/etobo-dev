"use client";

import dynamic from "next/dynamic";
import { Download, ExternalLink } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { getCv } from "@/lib/cv";
import type { Dictionary, Locale } from "@/lib/i18n";

const CvPdfDocument = dynamic(() => import("@/components/CvPdfDocument"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-48 items-center justify-center rounded-2xl border border-border bg-white px-4 py-10 text-sm text-body-muted shadow-soft">
      Loading…
    </div>
  ),
});

type CvViewerProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function CvViewer({ locale, dict }: CvViewerProps) {
  const cv = getCv(locale);
  const cvEn = getCv("en");
  const cvEs = getCv("es");
  const page = dict.pages.cv;

  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto flex w-full max-w-5xl min-w-0 flex-col gap-6">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-charcoal sm:text-4xl">
              {page.title}
            </h1>
            <p className="mt-3 text-lg text-body">{page.description}</p>
          </div>

          <div className="flex shrink-0 flex-row flex-wrap gap-3">
            <Button
              href={cvEn.href}
              variant={locale === "en" ? "primary" : "secondary"}
              icon={<Download size={16} />}
              download={cvEn.downloadName}
            >
              {page.downloadEn}
            </Button>
            <Button
              href={cvEs.href}
              variant={locale === "es" ? "primary" : "secondary"}
              icon={<Download size={16} />}
              download={cvEs.downloadName}
            >
              {page.downloadEs}
            </Button>
            <Button
              href={cv.href}
              variant="secondary"
              icon={<ExternalLink size={16} />}
              external
            >
              {page.openPdf}
            </Button>
          </div>
        </div>

        <CvPdfDocument src={cv.href} title={page.title} />
      </div>
    </Container>
  );
}
