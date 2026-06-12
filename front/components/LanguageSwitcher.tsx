"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getAlternateLocale,
  getLocalizedPath,
  getPageKeyFromSlug,
  type Locale,
  type PageKey,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

function resolveCurrentPage(pathname: string, locale: Locale): PageKey {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "home";

  const slug = segments[1];
  return getPageKeyFromSlug(locale, slug) ?? "home";
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const alternate = getAlternateLocale(locale);
  const currentPage = resolveCurrentPage(pathname, locale);
  const href = getLocalizedPath(alternate, currentPage);

  return (
    <Link
      href={href}
      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold tracking-wide text-body uppercase transition-colors hover:border-terracotta hover:text-terracotta"
      aria-label={alternate === "en" ? "Switch to English" : "Cambiar a español"}
    >
      {alternate}
    </Link>
  );
}
