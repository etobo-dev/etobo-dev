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

export default function Hero({ locale, dict }: HeroProps) {
  return (
    <section className="relative min-h-[32rem] py-12 sm:min-h-[34rem] sm:py-16 lg:min-h-[32rem] lg:py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src="/mobile-banner.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none object-contain object-right-bottom lg:hidden"
        />
        <Image
          src="/laptop-banner.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="pointer-events-none hidden object-contain object-left-bottom lg:block"
        />
      </div>

      <Container className="relative z-0 !px-4 sm:!px-8 lg:!px-10">
        <div className="max-w-[72%] sm:max-w-md lg:max-w-[50%]">
          <p className="mb-3 text-[0.6875rem] font-semibold tracking-[0.18em] text-terracotta uppercase lg:hidden">
            {dict.hero.label}
          </p>

          <h1 className="text-[1.625rem] leading-[1.25] font-bold text-charcoal sm:text-3xl sm:leading-tight lg:text-5xl">
            {dict.hero.headlineBefore}
            <span className="text-terracotta">{dict.hero.headlineHighlight}</span>
            {dict.hero.headlineAfter}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-body sm:mt-5 sm:max-w-xl sm:text-base lg:text-lg">
            {dict.hero.subtext}
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 lg:max-w-[50%] lg:flex-row lg:items-center lg:justify-start">
          <Button
            href={getLocalizedPath(locale, "projects")}
            variant="primary"
            icon={<ArrowUpRight size={16} />}
            className="w-full max-w-[17rem] lg:w-auto lg:max-w-none"
          >
            {dict.hero.viewProjects}
          </Button>
          <Button
            href={getLocalizedPath(locale, "articles")}
            variant="secondary"
            icon={<BookOpen size={16} />}
            className="w-full max-w-[17rem] lg:w-auto lg:max-w-none"
          >
            {dict.hero.readArticles}
          </Button>
        </div>
      </Container>
    </section>
  );
}
