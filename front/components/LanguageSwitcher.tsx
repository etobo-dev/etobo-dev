"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
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
  const currentPage = resolveCurrentPage(pathname, locale);
  const isEnglish = locale === "en";

  return (
    <div
      className="relative inline-grid h-11 grid-cols-2 items-center rounded-full border border-border bg-white p-1"
      role="group"
      aria-label="Language"
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-1 w-[calc(50%-4px)] rounded-full bg-terracotta shadow-sm transition-transform duration-200 ease-out ${
          isEnglish ? "translate-x-1" : "translate-x-[calc(100%+4px)]"
        }`}
      />
      <Link
        href={getLocalizedPath("en", currentPage)}
        className={`relative z-10 flex h-9 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-center text-xs font-semibold tracking-wide uppercase transition-colors touch-manipulation ${
          isEnglish ? "text-white" : "text-body hover:text-terracotta"
        }`}
        aria-current={isEnglish ? "true" : undefined}
        aria-label="English"
      >
        EN
      </Link>
      <Link
        href={getLocalizedPath("es", currentPage)}
        className={`relative z-10 flex h-9 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-center text-xs font-semibold tracking-wide uppercase transition-colors touch-manipulation ${
          !isEnglish ? "text-white" : "text-body hover:text-terracotta"
        }`}
        aria-current={!isEnglish ? "true" : undefined}
        aria-label="Español"
      >
        ES
      </Link>
    </div>
  );
}
