export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://etobo.tech";

export const siteName = "Elver Tobo";

export const socialLinks = {
  email: "contact@etobo.tech",
  github: "https://github.com/etobo-dev",
  linkedin: "https://www.linkedin.com/in/elver-tobo/",
  medium: "https://medium.com/aws-articles",
  x: "https://x.com/_etobo_",
} as const;

export const seoKeywords = {
  en: [
    "Elver Tobo",
    "software engineer",
    "AWS certified",
    "AI agents",
    "RAG",
    "LangChain",
    "LlamaIndex",
    "Python developer",
    "Knowforge",
    "NotiCrypt",
    "cloud architecture",
    "Terraform",
  ],
  es: [
    "Elver Tobo",
    "ingeniero de software",
    "certificado AWS",
    "agentes IA",
    "RAG",
    "LangChain",
    "LlamaIndex",
    "desarrollador Python",
    "Knowforge",
    "NotiCrypt",
    "arquitectura cloud",
    "Terraform",
  ],
} as const;
