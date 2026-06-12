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

type NavbarProps = {
  locale: Locale;
  dict: Dictionary;
};

const navItems: PageKey[] = [
  "home",
  "projects",
  "articles",
  "about",
  "contact",
];

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLabels: Record<PageKey, string> = {
    home: dict.nav.home,
    projects: dict.nav.projects,
    articles: dict.nav.articles,
    about: dict.nav.about,
    contact: dict.nav.contact,
  };

  return (
    <header className="sticky top-0 isolate z-[100] bg-cream">
      <Container className="relative flex items-center justify-between gap-4 py-4">
        <Link
          href={getLocalizedPath(locale, "home")}
          className="text-xl font-bold text-charcoal"
        >
          ET
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
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

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher locale={locale} />
          <Button href={linkedInMessageUrl} variant="primary" external>
            {dict.nav.cta}
          </Button>
        </div>

        <div className="relative z-[101] flex items-center gap-2 md:hidden">
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
        <nav
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-border bg-cream shadow-soft md:hidden"
          aria-label="Mobile"
        >
          <Container className="py-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((page) => {
              const active = isActive(pathname, locale, page);
              return (
                <li key={page}>
                  <Link
                    href={getLocalizedPath(locale, page)}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
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
                href={linkedInMessageUrl}
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
      )}
    </header>
  );
}
