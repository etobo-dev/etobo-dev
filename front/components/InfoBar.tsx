import Image from "next/image";
import { Mail } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import Container from "@/components/Container";
import type { Dictionary } from "@/lib/i18n";

type InfoBarProps = {
  dict: Dictionary;
};

const links = [
  {
    key: "email" as const,
    href: "mailto:contact@etobo.tech",
    labelKey: "email" as const,
    brand: null,
  },
  {
    key: "github" as const,
    href: "https://github.com/etobo-dev",
    labelKey: "github" as const,
    brand: "github" as const,
  },
  {
    key: "medium" as const,
    href: "https://medium.com/aws-articles",
    labelKey: "medium" as const,
    brand: "medium" as const,
  },
  {
    key: "linkedin" as const,
    href: "https://www.linkedin.com/in/elver-tobo/",
    labelKey: "linkedin" as const,
    brand: "linkedin" as const,
  },
] as const;

function ContactLink({
  link,
  label,
}: {
  link: (typeof links)[number];
  label: string;
}) {
  return (
    <a
      href={link.href}
      target={link.key === "email" ? undefined : "_blank"}
      rel={link.key === "email" ? undefined : "noopener noreferrer"}
      className="flex min-w-0 items-center gap-2 overflow-hidden text-sm text-charcoal transition-colors hover:text-terracotta"
    >
      {link.brand ? (
        <BrandIcon brand={link.brand} className="shrink-0 text-charcoal" />
      ) : (
        <Mail size={16} className="shrink-0 text-charcoal" />
      )}
      <span className="min-w-0 truncate">{label}</span>
    </a>
  );
}

export default function InfoBar({ dict }: InfoBarProps) {
  return (
    <Container as="section">
      <div className="overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6">
        <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt={dict.profile.name}
                fill
                sizes="56px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-charcoal">
                {dict.profile.name}
              </h2>
              <p className="text-xs font-medium leading-snug text-terracotta sm:text-sm">
                {dict.profile.title}
              </p>
            </div>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {links.map((link) => (
              <ContactLink
                key={link.key}
                link={link}
                label={dict.profile[link.labelKey]}
              />
            ))}
          </div>

          <div className="hidden min-w-0 lg:flex lg:items-center">
            {links.map((link, index) => (
              <div key={link.key} className="flex min-w-0 items-center">
                {index > 0 && (
                  <span
                    className="mx-5 h-8 w-px shrink-0 bg-border"
                    aria-hidden="true"
                  />
                )}
                <ContactLink
                  link={link}
                  label={dict.profile[link.labelKey]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
