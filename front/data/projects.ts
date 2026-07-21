import type { Locale } from "@/lib/i18n";
import { Database, LineChart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  techStack: string[];
  href: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "knowforge",
    icon: Database,
    iconColor: "text-indigo-600",
    iconBackground: "bg-indigo-100",
    title: {
      en: "Knowforge",
      es: "Knowforge",
    },
    description: {
      en: "Multi-tenant SaaS that turns company documents into RAG-powered knowledge bases — upload files, semantic search, and chat with your docs in secure workspaces.",
      es: "SaaS multi-tenant que convierte documentos empresariales en bases de conocimiento con RAG: carga archivos, búsqueda semántica y chat con tu documentación en espacios seguros.",
    },
    techStack: [
      "Python",
      "TypeScript",
      "RAG",
      "AWS",
      "Terraform",
      "LlamaIndex",
      "OpenAI",
      "Supabase",
      "Next.js",
      "Vercel",
    ],
    href: "https://github.com/etobo-tech/knowforge",
    featured: true,
  },
  {
    id: "noticrypt",
    icon: LineChart,
    iconColor: "text-emerald-600",
    iconBackground: "bg-emerald-100",
    title: {
      en: "NotiCrypt",
      es: "NotiCrypt",
    },
    description: {
      en: "Monitors the cryptocurrency market and detects events that could move asset prices — built for timely alerts and market awareness.",
      es: "Monitorea el mercado de criptomonedas y detecta eventualidades que pueden afectar el precio de los activos, con alertas oportunas.",
    },
    techStack: [
      "Python",
      "TypeScript",
      "React",
      "Vite",
      "FastAPI",
      "Aiogram",
      "SQLAlchemy",
      "LangGraph",
      "LangChain",
      "OpenAI",
      "LangSmith",
      "Lambda",
      "EC2",
      "DynamoDB",
      "S3",
      "SNS",
      "PostgreSQL",
      "Terraform",
      "GitLab CI/CD",
      "Bugsnag",
      "uv",
    ],
    href: "https://noticrypt.tech",
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
