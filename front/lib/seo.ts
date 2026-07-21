import type { Metadata } from "next";
import {
  getAlternateLocale,
  getLocalizedPath,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { seoKeywords, siteName, siteUrl, socialLinks } from "@/lib/site";

type PageMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  page?: PageKey;
};

export function buildPageMetadata({
  locale,
  title,
  description,
  page = "home",
}: PageMetaInput): Metadata {
  const canonicalPath = getLocalizedPath(locale, page);
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const alternateLocale = getAlternateLocale(locale);
  const alternatePath = getLocalizedPath(alternateLocale, page);
  const fullTitle =
    page === "home" ? title : `${title} — ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...seoKeywords[locale]],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}${getLocalizedPath("en", page)}`,
        es: `${siteUrl}${getLocalizedPath("es", page)}`,
        "x-default": `${siteUrl}${getLocalizedPath("en", page)}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CO"],
      url: canonicalUrl,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: "/profile.png",
          width: 512,
          height: 512,
          alt: `${siteName} — Software Engineer`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@_etobo_",
      creator: "@_etobo_",
      title: fullTitle,
      description,
      images: ["/profile.png"],
    },
    other: {
      "profile:first_name": "Elver",
      "profile:last_name": "Tobo",
    },
  };
}

export function buildPersonJsonLd(locale: Locale) {
  const description =
    locale === "es"
      ? "Ingeniero de software especializado en IA, RAG, agentes y AWS. Creador de Knowforge y NotiCrypt."
      : "Software engineer specializing in AI, RAG, agents, and AWS. Builder of Knowforge and NotiCrypt.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteName,
        url: siteUrl,
        email: socialLinks.email,
        jobTitle:
          locale === "es"
            ? "Ingeniero de Software"
            : "Software Engineer",
        description,
        image: `${siteUrl}/profile.png`,
        sameAs: [
          socialLinks.github,
          socialLinks.gitlab,
          socialLinks.linkedin,
          socialLinks.medium,
          socialLinks.x,
          socialLinks.credly,
        ],
        knowsAbout: [
          "AWS",
          "Artificial Intelligence",
          "Retrieval-Augmented Generation",
          "Python",
          "TypeScript",
          "Terraform",
          "Knowforge",
          "NotiCrypt",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Independent",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${siteName} — Portfolio`,
        description,
        inLanguage: ["en", "es"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "SoftwareApplication",
        name: "Knowforge",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://github.com/etobo-tech/knowforge",
        description:
          "Multi-tenant SaaS knowledge base powered by RAG for startups.",
        author: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "SoftwareApplication",
        name: "NotiCrypt",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: "https://noticrypt.tech",
        description:
          "Cryptocurrency market monitoring with event detection and alerts.",
        author: { "@id": `${siteUrl}/#person` },
      },
    ],
  };
}
