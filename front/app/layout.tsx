import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elver Tobo — Software Engineer | AI Agents | Python | 2× AWS Certified",
  description:
    "End-to-end products with AI, RAG, agents, and AWS cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full overflow-x-hidden bg-cream font-sans text-body">
        {children}
      </body>
    </html>
  );
}
