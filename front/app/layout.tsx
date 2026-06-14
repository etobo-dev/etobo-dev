import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { pirschCode, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elver Tobo — Software Engineer | AI Agents | Python | 2× AWS Certified",
    template: `%s — ${siteName}`,
  },
  description:
    "End-to-end products with AI, RAG, agents, and AWS cloud.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          id="pianjs"
          src="https://api.pirsch.io/pa.js"
          data-code={pirschCode}
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full overflow-x-hidden bg-cream font-sans text-body">
        {children}
      </body>
    </html>
  );
}
