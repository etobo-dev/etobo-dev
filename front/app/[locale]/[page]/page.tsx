import ArticleItem from "@/components/ArticleItem";
import CredentialCard from "@/components/CredentialCard";
import FooterCTA from "@/components/FooterCTA";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { articles } from "@/data/articles";
import { credentials } from "@/data/credentials";
import { projects } from "@/data/projects";
import {
  getDictionary,
  getPageKeyFromSlug,
  isValidLocale,
  localizedPaths,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { socialLinks } from "@/lib/site";
import { buildOutboundUrl } from "@/lib/utm";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type DynamicPageProps = {
  params: Promise<{ locale: string; page: string }>;
};

function getPageMeta(dict: Awaited<ReturnType<typeof getDictionary>>, page: PageKey) {
  return dict.pages[page as Exclude<PageKey, "home">];
}

export async function generateStaticParams() {
  const params: { locale: Locale; page: string }[] = [];

  for (const locale of ["en", "es"] as const) {
    for (const page of [
      "projects",
      "articles",
      "credentials",
      "about",
      "contact",
    ] as const) {
      params.push({ locale, page: localizedPaths[page][locale] });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { locale: localeParam, page: slug } = await params;
  if (!isValidLocale(localeParam)) return {};

  const locale = localeParam as Locale;
  const pageKey = getPageKeyFromSlug(locale, slug);
  if (!pageKey || pageKey === "home") return {};

  const dict = await getDictionary(locale);
  const meta = getPageMeta(dict, pageKey);

  return buildPageMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    page: pageKey,
  });
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { locale: localeParam, page: slug } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const pageKey = getPageKeyFromSlug(locale, slug);

  if (!pageKey || pageKey === "home") {
    notFound();
  }

  const dict = await getDictionary(locale);
  const meta = getPageMeta(dict, pageKey);

  if (pageKey === "projects") {
    return (
      <>
        <PageShell title={meta.title} description={meta.description}>
          <div className="mt-8 flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                dict={dict}
              />
            ))}
          </div>
        </PageShell>
        <FooterCTA locale={locale} dict={dict} />
      </>
    );
  }

  if (pageKey === "articles") {
    return (
      <>
        <PageShell title={meta.title} description={meta.description}>
          <div className="mt-8 flex flex-col gap-4">
            {articles.map((article) => (
              <ArticleItem
                key={article.id}
                article={article}
                dict={dict}
              />
            ))}
          </div>
        </PageShell>
        <FooterCTA locale={locale} dict={dict} />
      </>
    );
  }

  if (pageKey === "credentials") {
    return (
      <>
        <PageShell title={meta.title} description={meta.description}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:max-w-4xl">
            {credentials.map((credential) => (
              <CredentialCard
                key={credential.id}
                credential={credential}
                dict={dict}
              />
            ))}
          </div>
        </PageShell>
        <FooterCTA locale={locale} dict={dict} />
      </>
    );
  }

  if (pageKey === "about") {
    const body = dict.pages.about.body;
    const paragraphs = body.split("\n\n");
    return (
      <>
        <PageShell title={meta.title} description={meta.description}>
          <div className="space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </PageShell>
        <FooterCTA locale={locale} dict={dict} />
      </>
    );
  }

  if (pageKey === "contact") {
    const contact = dict.pages.contact;
    return (
      <>
        <PageShell title={meta.title} description={meta.description}>
          <div className="space-y-6">
            <p>{contact.body}</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-terracotta transition-colors hover:text-terracotta-dark"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={buildOutboundUrl(socialLinks.linkedin)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-terracotta transition-colors hover:text-terracotta-dark"
                >
                  {contact.linkedinLabel}
                </a>
              </li>
            </ul>
          </div>
        </PageShell>
        <FooterCTA locale={locale} dict={dict} />
      </>
    );
  }

  notFound();
}
