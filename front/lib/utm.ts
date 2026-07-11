export const outboundUtmSource = "etobo.tech";

export function buildOutboundUrl(baseUrl: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("utm_source", outboundUtmSource);
  return url.toString();
}
