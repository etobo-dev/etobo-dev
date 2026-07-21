import { siteUrl } from "@/lib/site";
import type { MetadataRoute } from "next";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "Googlebot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
