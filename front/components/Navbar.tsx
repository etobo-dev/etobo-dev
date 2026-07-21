"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { linkedInMessageUrl } from "@/lib/links";
import {
  getLocalizedPath,
  type Dictionary,
  type Locale,
  type PageKey,
} from "@/lib/i18n";
import { buildOutboundUrl } from "@/lib/utm";

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems = [
  "home",
  "projects",
  "articles",
  "credentials",
  "about",
  "contact",
] as const satisfies readonly PageKey[];

function isActive(pathname: string, locale: Locale, page: PageKey): boolean {
  const href = getLocalizedPath(locale, page);
  if (page === "home") {
    return pathname === href || pathname === `${href}/`;
  }
  return pathname.startsWith(href);
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const linkedInHref = buildOutboundUrl(linkedInMessageUrl);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLabels: Record<(typeof navItems)[number], string> = {
    home: dict.nav.home,
    projects: dict.nav.projects,
    articles: dict.nav.articles,
    credentials: dict.nav.credentials,
    about: dict.nav.about,
    contact: dict.nav.contact,
  };

  return (
    <header className="sticky top-0 isolate z-[100] border-b border-border/80 bg-cream/95 pt-[env(safe-area-inset-top)] backdrop-blur-sm">
      <Container className="relative flex items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4">
        <Link
          href={getLocalizedPath(locale, "home")}
          className="flex min-h-11 items-center text-xl font-bold text-charcoal"
        >
          ET
        </Link>

        <nav className="hidden items-center gap-6 lg:flex lg:gap-8" aria-label="Main">
          {navItems.map((page) => {
            const active = isActive(pathname, locale, page);
            return (
              <Link
                key={page}
                href={getLocalizedPath(locale, page)}
                className={`text-sm font-medium transition-colors hover:text-terracotta ${
                  active
                    ? "text-charcoal underline decoration-terracotta decoration-2 underline-offset-8"
                    : "text-body"
                }`}
              >
                {navLabels[page]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button href={linkedInHref} variant="primary" external>
            {dict.nav.cta}
          </Button>
        </div>

        <div className="relative z-[101] flex items-center gap-2 lg:hidden">
          <LanguageSwitcher locale={locale} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg text-charcoal hover:bg-beige/50 touch-manipulation"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? dict.nav.menuClose : dict.nav.menuOpen}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {open && (
        <>
          <button
            type="button"
            aria-label={dict.nav.menuClose}
            className="fixed inset-0 top-[calc(env(safe-area-inset-top)+3.75rem)] z-[99] bg-charcoal/20 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <nav
            id="mobile-nav"
            className="absolute inset-x-0 top-full z-[100] max-h-[min(70dvh,calc(100dvh-5rem))] overflow-y-auto border-t border-border bg-cream shadow-soft lg:hidden"
            aria-label="Mobile"
          >
            <Container className="py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <ul className="flex flex-col gap-1">
                {navItems.map((page) => {
                  const active = isActive(pathname, locale, page);
                  return (
                    <li key={page}>
                      <Link
                        href={getLocalizedPath(locale, page)}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-medium touch-manipulation ${
                          active
                            ? "bg-terracotta/10 text-terracotta"
                            : "text-body hover:bg-beige/40"
                        }`}
                      >
                        {navLabels[page]}
                      </Link>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <Button
                    href={linkedInHref}
                    variant="primary"
                    className="w-full"
                    external
                  >
                    {dict.nav.cta}
                  </Button>
                </li>
              </ul>
            </Container>
          </nav>
        </>
      )}
    </header>
  );
}
