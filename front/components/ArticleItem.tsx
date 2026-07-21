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
      className="group block rounded-xl border border-border bg-white p-2.5 transition-shadow hover:shadow-soft sm:rounded-2xl sm:p-3.5"
    >
      <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-dusty-rose sm:h-14 sm:w-14 sm:rounded-lg">
          <Image
            src={article.imageUrl}
            alt=""
            fill
            sizes="56px"
            className="object-cover object-center"
          />
        </div>

        <div className="flex min-w-0 flex-1 items-start gap-1.5">
          <h3 className="min-w-0 flex-1 break-words text-[0.8125rem] font-bold leading-snug text-charcoal sm:text-sm">
            {article.title}
          </h3>
          <ArrowRight
            size={14}
            className="mt-0.5 shrink-0 text-terracotta transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-xs leading-snug text-body sm:text-sm">
        {article.snippet}
      </p>
      <p className="mt-1 text-[0.6875rem] leading-none text-body-muted">
        {article.date} • {article.readingTime} {dict.articles.minRead}
      </p>
    </a>
  );
}
