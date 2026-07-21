export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localizedPaths = {
  home: { en: "", es: "" },
  projects: { en: "projects", es: "proyectos" },
  articles: { en: "articles", es: "articulos" },
  credentials: { en: "credentials", es: "certificaciones" },
  about: { en: "about", es: "sobre-mi" },
  contact: { en: "contact", es: "contacto" },
  cv: { en: "cv", es: "hoja-de-vida" },
} as const;

export type PageKey = keyof typeof localizedPaths;

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    projects: string;
    articles: string;
    credentials: string;
    about: string;
    contact: string;
    cta: string;
    downloadCv: string;
    viewCv: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    label: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    subtext: string;
    viewProjects: string;
    readArticles: string;
  };
  profile: {
    name: string;
    title: string;
    email: string;
    github: string;
    gitlab: string;
    medium: string;
    linkedin: string;
    x: string;
    credly: string;
  };
  sections: {
    featuredProjects: string;
    latestWriting: string;
    viewAllProjects: string;
    viewAllArticles: string;
  };
  projects: {
    viewProject: string;
    viewSite: string;
    viewRepo: string;
    githubProfile: string;
    gitlabProfile: string;
  };
  articles: {
    minRead: string;
    viewAll: string;
  };
  credentials: {
    certification: string;
    course: string;
    viewCredential: string;
  };
  footerCta: {
    title: string;
    subtitle: string;
    button: string;
  };
  pages: {
    projects: {
      title: string;
      description: string;
    };
    articles: {
      title: string;
      description: string;
    };
    credentials: {
      title: string;
      description: string;
    };
    about: {
      title: string;
      description: string;
      body: string;
    };
    contact: {
      title: string;
      description: string;
      body: string;
      email: string;
      linkedinUrl: string;
      linkedinLabel: string;
    };
    cv: {
      title: string;
      description: string;
      downloadEn: string;
      downloadEs: string;
      openPdf: string;
    };
  };
};

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en.json").then((m) => m.default),
  es: () => import("@/dictionaries/es.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export function getLocalizedPath(locale: Locale, page: PageKey): string {
  const segment = localizedPaths[page][locale];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getPageKeyFromSlug(
  locale: Locale,
  slug: string
): PageKey | null {
  for (const [key, paths] of Object.entries(localizedPaths) as [
    PageKey,
    (typeof localizedPaths)[PageKey],
  ][]) {
    if (paths[locale] === slug) return key;
  }
  return null;
}

/** Resolve a page from either language slug (e.g. "cv" or "hoja-de-vida"). */
export function getPageKeyFromAnySlug(slug: string): PageKey | null {
  if (!slug) return "home";

  for (const [key, paths] of Object.entries(localizedPaths) as [
    PageKey,
    (typeof localizedPaths)[PageKey],
  ][]) {
    if (paths.en === slug || paths.es === slug) return key;
  }

  return null;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function switchLocalePath(
  currentLocale: Locale,
  targetLocale: Locale,
  page: PageKey
): string {
  return getLocalizedPath(targetLocale, page);
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
