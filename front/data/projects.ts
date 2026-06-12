import type { Locale } from "@/lib/i18n";
import { Database, ImageIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  icon: LucideIcon;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  techStack: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "rag-kb-saas",
    icon: Database,
    title: {
      en: "RAG KB SaaS",
      es: "RAG KB SaaS",
    },
    description: {
      en: "Multi-tenant knowledge base with retrieval-augmented generation, document ingestion, and semantic search APIs.",
      es: "Base de conocimiento multi-tenant con generación aumentada por recuperación, ingesta de documentos y APIs de búsqueda semántica.",
    },
    techStack: ["Python", "FastAPI", "PostgreSQL", "OpenAI"],
    href: "https://github.com/elvertobo",
    featured: true,
  },
  {
    id: "serverless-image-pipeline",
    icon: ImageIcon,
    title: {
      en: "Serverless Image Pipeline",
      es: "Pipeline de imágenes serverless",
    },
    description: {
      en: "Event-driven image processing with resizing, optimization, and CDN delivery at scale.",
      es: "Procesamiento de imágenes orientado a eventos con redimensionado, optimización y entrega CDN a escala.",
    },
    techStack: ["AWS Lambda", "S3", "Sharp", "SQS"],
    href: "https://github.com/elvertobo",
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
