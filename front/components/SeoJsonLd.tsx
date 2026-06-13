import { buildPersonJsonLd } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";

type SeoJsonLdProps = {
  locale: Locale;
};

export default function SeoJsonLd({ locale }: SeoJsonLdProps) {
  const jsonLd = buildPersonJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
