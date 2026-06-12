import ArticleItem from "@/components/ArticleItem";
import FooterCTA from "@/components/FooterCTA";
import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { articles } from "@/data/articles";
import { projects } from "@/data/projects";
import {
  getDictionary,
  getPageKeyFromSlug,
  isValidLocale,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
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
    for (const page of ["projects", "articles", "about", "contact"] as const) {
      const slug =
        locale === "en"
          ? { projects: "projects", articles: "articles", about: "about", contact: "contact" }[page]
          : {
              projects: "proyectos",
              articles: "articulos",
              about: "sobre-mi",
              contact: "contacto",
            }[page];
      params.push({ locale, page: slug });
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

  return {
    title: `${meta.title} — Elver Tobo`,
    description: meta.description,
  };
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
                  href={contact.linkedinUrl}
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
