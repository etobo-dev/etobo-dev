import type { Locale } from "@/lib/i18n";

export type Article = {
  id: string;
  title: Record<Locale, string>;
  snippet: Record<Locale, string>;
  date: Record<Locale, string>;
  readingTime: number;
  href: string;
  gradient: string;
};

export const articles: Article[] = [
  {
    id: "api-maintainability",
    title: {
      en: "Designing APIs for Long-Term Maintainability",
      es: "Diseñar APIs para mantenibilidad a largo plazo",
    },
    snippet: {
      en: "Practical patterns for versioning, error contracts, and documentation that keep APIs healthy over years.",
      es: "Patrones prácticos de versionado, contratos de error y documentación para APIs que perduran.",
    },
    date: {
      en: "May 12, 2024",
      es: "12 may 2024",
    },
    readingTime: 6,
    href: "https://elvertobo.medium.com",
    gradient: "from-terracotta/40 via-dusty-rose to-beige",
  },
  {
    id: "ai-tools-people-use",
    title: {
      en: "Building AI Tools People Actually Use",
      es: "Construir herramientas de IA que la gente realmente usa",
    },
    snippet: {
      en: "Lessons from shipping internal AI assistants — latency, trust, and workflow fit matter more than model size.",
      es: "Lecciones al lanzar asistentes de IA internos — latencia, confianza y encaje en el flujo importan más que el tamaño del modelo.",
    },
    date: {
      en: "Apr 3, 2024",
      es: "3 abr 2024",
    },
    readingTime: 8,
    href: "https://elvertobo.medium.com",
    gradient: "from-charcoal/30 via-tan to-dusty-rose",
  },
];

export function getLatestArticles(limit = 2): Article[] {
  return articles.slice(0, limit);
}
