import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";
import type { Dictionary, Locale } from "@/lib/i18n";

type ArticleItemProps = {
  article: Article;
  locale: Locale;
  dict: Dictionary;
};

export default function ArticleItem({
  article,
  locale,
  dict,
}: ArticleItemProps) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 gap-4 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-soft"
    >
      <div
        className={`h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br ${article.gradient}`}
        aria-hidden="true"
      />

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 break-words text-sm font-bold leading-snug text-charcoal sm:text-base">
            {article.title[locale]}
          </h3>
          <ArrowRight
            size={16}
            className="mt-0.5 shrink-0 text-terracotta transition-transform group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-body">
          {article.snippet[locale]}
        </p>
        <p className="mt-2 text-xs text-body-muted">
          {article.date[locale]} • {article.readingTime} {dict.articles.minRead}
        </p>
      </div>
    </a>
  );
}
