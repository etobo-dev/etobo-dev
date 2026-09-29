import type { Metadata } from "next";
import {
  getLocalizedPath,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import {
  seoKeywords,
  seoKnowsAbout,
  siteName,
  siteUrl,
  socialLinks,
} from "@/lib/site";

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
  const fullTitle =
    page === "home" ? title : `${title} — ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: [...seoKeywords[locale]],
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "technology",
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
      type: page === "home" || page === "about" || page === "contact" ? "profile" : "website",
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
          alt: `${siteName} — Cloud Architect | AWS | AI | Security`,
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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      "profile:first_name": "Elver",
      "profile:last_name": "Tobo",
      "profile:username": "etobo",
    },
  };
}

export function buildPersonJsonLd(locale: Locale) {
  const description =
    locale === "es"
      ? "Cloud Architect con más de cuatro años de experiencia en arquitectura AWS e inteligencia artificial, con un fuerte enfoque en seguridad. Creador de NotiCrypt y Knowforge. Abierto a roles remotos y colaboraciones."
      : "Cloud Architect with more than four years of experience, focused on AWS architecture and artificial intelligence, with a security-first mindset. Builder of NotiCrypt and Knowforge. Open to remote roles and collaborations.";

  const jobTitle = "Cloud Architect";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteName,
        givenName: "Elver",
        familyName: "Tobo",
        url: siteUrl,
        email: socialLinks.email,
        jobTitle,
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
        knowsAbout: [...seoKnowsAbout],
        knowsLanguage: [
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
        ],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "AWS Certified Cloud Practitioner",
            credentialCategory: "certification",
            recognizedBy: {
              "@type": "Organization",
              name: "Amazon Web Services",
            },
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "AWS Certified AI Practitioner",
            credentialCategory: "certification",
            recognizedBy: {
              "@type": "Organization",
              name: "Amazon Web Services",
            },
          },
        ],
        worksFor: {
          "@type": "Organization",
          name: "Fluid Attacks",
          url: "https://fluidattacks.com",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: `${siteName} — Portfolio`,
        alternateName: ["etobo.tech", "Elver Tobo portfolio"],
        description,
        inLanguage: ["en", "es"],
        publisher: { "@id": `${siteUrl}/#person` },
        about: { "@id": `${siteUrl}/#person` },
        keywords: seoKeywords[locale].join(", "),
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: `${siteName} — ${jobTitle}`,
        description,
        mainEntity: { "@id": `${siteUrl}/#person` },
        inLanguage: ["en", "es"],
      },
      {
        "@type": "SoftwareApplication",
        name: "NotiCrypt",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: "https://noticrypt.tech",
        description:
          "Cryptocurrency market monitoring with event detection and alerts. Built with Python, FastAPI, AWS, and LangGraph.",
        author: { "@id": `${siteUrl}/#person` },
        sameAs: ["https://gitlab.com/elverytr/noticrypt"],
      },
      {
        "@type": "SoftwareApplication",
        name: "Knowforge",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://knowforge.etobo.tech",
        description:
          "Multi-tenant SaaS knowledge base powered by RAG for startups. Built with Python, AWS, and LlamaIndex.",
        author: { "@id": `${siteUrl}/#person` },
        sameAs: ["https://github.com/etobo-tech/knowforge"],
      },
    ],
  };
}
