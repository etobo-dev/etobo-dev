import Image from "next/image";
import { BadgeCheck, Mail } from "lucide-react";
import BrandIcon from "@/components/BrandIcon";
import Container from "@/components/Container";
import type { Dictionary } from "@/lib/i18n";
import { socialLinks } from "@/lib/site";
import { buildOutboundUrl } from "@/lib/utm";

type InfoBarProps = {
  dict: Dictionary;
};

const links = [
  {
    key: "email" as const,
    href: `mailto:${socialLinks.email}`,
    labelKey: "email" as const,
    brand: null,
  },
  {
    key: "github" as const,
    href: socialLinks.github,
    labelKey: "github" as const,
    brand: "github" as const,
  },
  {
    key: "medium" as const,
    href: socialLinks.medium,
    labelKey: "medium" as const,
    brand: "medium" as const,
  },
  {
    key: "linkedin" as const,
    href: socialLinks.linkedin,
    labelKey: "linkedin" as const,
    brand: "linkedin" as const,
  },
  {
    key: "x" as const,
    href: socialLinks.x,
    labelKey: "x" as const,
    brand: "x" as const,
  },
  {
    key: "credly" as const,
    href: socialLinks.credly,
    labelKey: "credly" as const,
    brand: null,
  },
] as const;

function ContactLink({
  link,
  label,
}: {
  link: (typeof links)[number];
  label: string;
}) {
  const href =
    link.key === "email" ? link.href : buildOutboundUrl(link.href);

  return (
    <a
      href={href}
      target={link.key === "email" ? undefined : "_blank"}
      rel={link.key === "email" ? undefined : "noopener noreferrer"}
      title={label}
      className="flex min-w-0 items-center gap-2 text-xs text-charcoal transition-colors hover:text-terracotta sm:text-sm"
    >
      {link.brand ? (
        <BrandIcon brand={link.brand} className="shrink-0 text-charcoal" />
      ) : link.key === "credly" ? (
        <BadgeCheck size={16} className="shrink-0 text-charcoal" />
      ) : (
        <Mail size={16} className="shrink-0 text-charcoal" />
      )}
      <span className="min-w-0 break-all leading-snug">{label}</span>
    </a>
  );
}

export default function InfoBar({ dict }: InfoBarProps) {
  return (
    <Container as="section">
      <div className="overflow-hidden rounded-2xl border border-border bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          <div className="flex min-w-0 shrink-0 items-center gap-4 lg:max-w-sm xl:max-w-md">
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

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {links.map((link) => (
              <ContactLink
                key={link.key}
                link={link}
                label={dict.profile[link.labelKey]}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
