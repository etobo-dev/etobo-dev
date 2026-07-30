import { siteUrl } from "@/lib/site";

export const cvPdfUrls = {
  en: "https://etobocv.s3.us-east-1.amazonaws.com/Elver+Tobo+-+Software+Engineer%2C+back%2C+AWS.pdf",
  es: "https://etobocv.s3.us-east-1.amazonaws.com/Elver+Tobo+-+Ingeniero+de+Software%2C+back%2C+AWS.pdf",
} as const;

/** Canonical share URL for QR codes and short links. */
export const cvShareUrl = `${siteUrl}/cv`;
