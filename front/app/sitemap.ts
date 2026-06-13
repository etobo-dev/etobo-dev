import { locales, localizedPaths, type Locale, type PageKey } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

const pages: PageKey[] = ["home", "projects", "articles", "about", "contact"];

function getPath(locale: Locale, page: PageKey): string {
  const segment = localizedPaths[page][locale];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteUrl}${getPath(locale, page)}`,
        lastModified: new Date(),
        changeFrequency: page === "home" ? "weekly" : "monthly",
        priority: page === "home" ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((alt) => [alt, `${siteUrl}${getPath(alt, page)}`])
          ),
        },
      });
    }
  }

  return entries;
}
