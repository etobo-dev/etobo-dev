import { notFound } from "next/navigation";
import LocaleLang from "@/components/LocaleLang";
import Navbar from "@/components/Navbar";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isValidLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <LocaleLang locale={locale} />
      <Navbar locale={locale} dict={dict} />
      <main>{children}</main>
    </>
  );
}
