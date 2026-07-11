import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";
import type { Dictionary } from "@/lib/i18n";
import { buildOutboundUrl } from "@/lib/utm";

type ArticleItemProps = {
  article: Article;
  dict: Dictionary;
};

export default function ArticleItem({ article, dict }: ArticleItemProps) {
  const href = buildOutboundUrl(article.href);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 gap-4 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-soft"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-dusty-rose">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          sizes="64px"
          className="media-harmonize-image object-cover"
        />
        <div
          className="media-harmonize-overlay pointer-events-none absolute inset-0"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 break-words text-sm font-bold leading-snug text-charcoal sm:text-base">
            {article.title}
          </h3>
          <ArrowRight
            size={16}
            className="mt-0.5 shrink-0 text-terracotta transition-transform group-hover:translate-x-0.5"
          />
        </div>
        <p className="mt-1 line-clamp-2 text-sm text-body">{article.snippet}</p>
        <p className="mt-2 text-xs text-body-muted">
          {article.date} • {article.readingTime} {dict.articles.minRead}
        </p>
      </div>
    </a>
  );
}
