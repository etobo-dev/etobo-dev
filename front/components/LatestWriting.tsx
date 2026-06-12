import ArticleItem from "@/components/ArticleItem";
import SectionHeader from "@/components/SectionHeader";
import { getLatestArticles } from "@/data/articles";
import type { Dictionary, Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";

type LatestWritingProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function LatestWriting({ locale, dict }: LatestWritingProps) {
  const articles = getLatestArticles();

  return (
    <section id="articles" className="scroll-mt-24">
      <SectionHeader
        title={dict.sections.latestWriting}
        linkLabel={dict.sections.viewAllArticles}
        linkHref={getLocalizedPath(locale, "articles")}
      />
      <div className="flex flex-col gap-4">
        {articles.map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
            locale={locale}
            dict={dict}
          />
        ))}
      </div>
    </section>
  );
}
