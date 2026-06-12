"use client";

import { useParams } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { isValidLocale } from "@/lib/i18n";

export function useLocale(): Locale {
  const params = useParams();
  const locale = params?.locale;

  if (typeof locale === "string" && isValidLocale(locale)) {
    return locale;
  }

  return "en";
}
