import type { Locale } from "@/lib/i18n";

const cvByLocale = {
  en: {
    href: "/documents/elver-tobo-cv-en.pdf",
    downloadName: "Elver-Tobo-CV.pdf",
  },
  es: {
    href: "/documents/elver-tobo-cv-es.pdf",
    downloadName: "Elver-Tobo-Hoja-de-Vida.pdf",
  },
} as const;

export function getCv(locale: Locale) {
  return cvByLocale[locale];
}
