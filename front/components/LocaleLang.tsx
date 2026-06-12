"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

type LocaleLangProps = {
  locale: Locale;
};

export default function LocaleLang({ locale }: LocaleLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
