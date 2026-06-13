import Container from "@/components/Container";
import FeaturedProjects from "@/components/FeaturedProjects";
import FooterCTA from "@/components/FooterCTA";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import LatestWriting from "@/components/LatestWriting";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) return {};

  const dict = await getDictionary(localeParam);
  return buildPageMetadata({
    locale: localeParam,
    title: dict.meta.title,
    description: dict.meta.description,
    page: "home",
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <div className="mt-6 sm:mt-8">
        <InfoBar dict={dict} />
      </div>

      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <FeaturedProjects locale={locale} dict={dict} />
          <LatestWriting locale={locale} dict={dict} />
        </div>
      </Container>

      <FooterCTA locale={locale} dict={dict} />
    </>
  );
}
