import { statSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowUpRight, BookOpen } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import type { Dictionary, Locale } from "@/lib/i18n";
import { getLocalizedPath } from "@/lib/i18n";

type HeroProps = {
  locale: Locale;
  dict: Dictionary;
};

function assetVersion(filename: string): number {
  try {
    return Math.floor(
      statSync(path.join(process.cwd(), "public", filename)).mtimeMs,
    );
  } catch {
    return Date.now();
  }
}

export default function Hero({ locale, dict }: HeroProps) {
  const mobileBannerSrc = `/mobile-banner.png?v=${assetVersion("mobile-banner.png")}`;
  const laptopBannerSrc = `/laptop-banner.png?v=${assetVersion("laptop-banner.png")}`;

  return (
    <section className="relative overflow-hidden py-6 sm:min-h-[30rem] sm:py-14 lg:min-h-[32rem] lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={mobileBannerSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-contain object-right-bottom opacity-70 lg:hidden"
        />
        <Image
          src={laptopBannerSrc}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none hidden object-contain object-left-bottom lg:block"
        />
      </div>

      <Container className="relative z-0">
        <div className="max-w-[88%] sm:max-w-md lg:max-w-[50%]">
          <p className="mb-2 text-[0.6875rem] font-semibold tracking-[0.18em] text-terracotta uppercase lg:hidden">
            {dict.hero.label}
          </p>

          <h1 className="text-[1.375rem] leading-[1.2] font-bold text-charcoal sm:text-3xl sm:leading-tight lg:text-5xl">
            {dict.hero.headlineBefore}
            <span className="text-terracotta">{dict.hero.headlineHighlight}</span>
            {dict.hero.headlineAfter}
          </h1>

          <p className="mt-2.5 max-w-[18rem] rounded-lg bg-cream/55 px-2 py-1.5 text-sm leading-snug text-body sm:mt-5 sm:max-w-xl sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sm:leading-relaxed lg:text-lg">
            {dict.hero.subtext}
          </p>

          <div className="mt-4 flex flex-row flex-wrap gap-2 sm:mt-8 lg:items-center">
            <Button
              href={getLocalizedPath(locale, "projects")}
              variant="primary"
              icon={<ArrowUpRight size={14} />}
              className="min-h-9 px-3.5 py-1.5 text-xs sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {dict.hero.viewProjects}
            </Button>
            <Button
              href={getLocalizedPath(locale, "articles")}
              variant="secondary"
              icon={<BookOpen size={14} />}
              className="min-h-9 px-3.5 py-1.5 text-xs sm:min-h-11 sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {dict.hero.readArticles}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
