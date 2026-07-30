import QRCode from "qrcode";
import { Download } from "lucide-react";
import Button from "@/components/Button";
import { cvPdfUrls, cvShareUrl } from "@/lib/cv";
import type { Dictionary } from "@/lib/i18n";

type CvContentProps = {
  dict: Dictionary;
};

export default async function CvContent({ dict }: CvContentProps) {
  const copy = dict.pages.cv;
  const qrSvg = await QRCode.toString(cvShareUrl, {
    type: "svg",
    margin: 1,
    width: 220,
    color: {
      dark: "#2D1B14",
      light: "#FFFFFF",
    },
    errorCorrectionLevel: "M",
  });

  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          href={cvPdfUrls.en}
          variant="primary"
          icon={<Download size={16} />}
          external
          className="w-full sm:w-auto"
        >
          {copy.downloadEn}
        </Button>
        <Button
          href={cvPdfUrls.es}
          variant="secondary"
          icon={<Download size={16} />}
          external
          className="w-full sm:w-auto"
        >
          {copy.downloadEs}
        </Button>
      </div>

      <div className="max-w-sm">
        <h2 className="text-lg font-bold text-charcoal sm:text-xl">
          {copy.qrTitle}
        </h2>
        <p className="mt-1 text-sm leading-snug text-body sm:text-base">
          {copy.qrHint}
        </p>
        <div className="mt-4 inline-flex rounded-2xl border border-border bg-white p-3 shadow-soft">
          <div
            className="size-[220px] [&_svg]:block [&_svg]:size-full"
            role="img"
            aria-label={`${copy.qrTitle}: ${cvShareUrl}`}
            dangerouslySetInnerHTML={{ __html: qrSvg }}
          />
        </div>
        <p className="mt-3 text-sm font-medium text-terracotta">{cvShareUrl}</p>
      </div>
    </div>
  );
}
