import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  getLocalizedPath,
  getPageKeyFromAnySlug,
  isValidLocale,
  type Locale,
} from "@/lib/i18n";

const LOCALE_COOKIE = "NEXT_LOCALE";
const RETIRED_SLUGS = new Set(["cv", "hoja-de-vida"]);

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isValidLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage?.toLowerCase().startsWith("es")) return "es";

  return defaultLocale;
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/" });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/icon" ||
    pathname.startsWith("/icon/") ||
    pathname === "/apple-icon" ||
    pathname.startsWith("/apple-icon/") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const pathnameLocale = segments[0];

  if (isValidLocale(pathnameLocale)) {
    const slug = segments[1] ?? "";

    if (RETIRED_SLUGS.has(slug)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${pathnameLocale}`;
      return withLocaleCookie(NextResponse.redirect(url), pathnameLocale);
    }

    const pageKey = getPageKeyFromAnySlug(slug);
    const canonicalPath = pageKey
      ? getLocalizedPath(pathnameLocale, pageKey)
      : `/${pathnameLocale}${slug ? `/${slug}` : ""}`;

    if (pathname !== canonicalPath && pathname !== `${canonicalPath}/`) {
      const url = request.nextUrl.clone();
      url.pathname = canonicalPath;
      return withLocaleCookie(NextResponse.redirect(url), pathnameLocale);
    }

    return withLocaleCookie(NextResponse.next(), pathnameLocale);
  }

  const locale = getPreferredLocale(request);
  const slug = segments[0] ?? "";

  if (RETIRED_SLUGS.has(slug)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return withLocaleCookie(NextResponse.redirect(url), locale);
  }

  const pageKey = getPageKeyFromAnySlug(slug);
  const url = request.nextUrl.clone();
  url.pathname = pageKey
    ? getLocalizedPath(locale, pageKey)
    : `/${locale}${pathname === "/" ? "" : pathname}`;

  return withLocaleCookie(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon|apple-icon).*)"],
};
