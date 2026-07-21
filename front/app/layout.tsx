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
    default:
      "Elver Tobo — Backend Software Engineer | Python | AWS | Security | AI",
    template: `%s — ${siteName}`,
  },
  description:
    "Hire Elver Tobo — backend software engineer specializing in Python, FastAPI, AWS serverless, security, and practical AI. Open to remote roles.",
  applicationName: siteName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      <body className="min-h-full bg-cream font-sans text-body">
        {children}
      </body>
    </html>
  );
}
