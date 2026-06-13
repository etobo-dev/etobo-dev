import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/data/articles";
import type { Dictionary } from "@/lib/i18n";

type ArticleItemProps = {
  article: Article;
  dict: Dictionary;
};

export default function ArticleItem({ article, dict }: ArticleItemProps) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-w-0 gap-4 rounded-2xl border border-border bg-white p-4 transition-shadow hover:shadow-soft"
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-beige">
        <Image
          src={article.imageUrl}
          alt=""
          fill
          sizes="64px"
          className="object-cover"
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
