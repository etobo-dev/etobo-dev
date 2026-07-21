import Image from "next/image";
import type { Credential } from "@/data/credentials";
import type { Dictionary } from "@/lib/i18n";

type CredentialCardProps = {
  credential: Credential;
  dict: Dictionary;
};

export default function CredentialCard({
  credential,
  dict,
}: CredentialCardProps) {
  const isCertification = credential.type === "certification";
  const typeLabel = isCertification
    ? dict.credentials.certification
    : dict.credentials.course;

  return (
    <a
      href={credential.href}
      target="_blank"
      rel="noopener noreferrer"
      title={credential.title}
      className="group relative flex min-h-[11rem] flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white via-dusty-rose/35 to-beige/60 p-4 text-center transition-all hover:-translate-y-0.5 hover:border-terracotta/30 hover:shadow-soft sm:aspect-square sm:min-h-0"
    >
      <span className="shrink-0 text-[0.625rem] font-bold tracking-[0.14em] text-terracotta uppercase">
        {typeLabel}
      </span>

      <div className="flex flex-1 flex-col items-center justify-center py-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl sm:h-16 sm:w-16">
          {credential.imageUrl.endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={credential.imageUrl}
              alt=""
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              src={credential.imageUrl}
              alt=""
              fill
              sizes="64px"
              className="object-contain"
            />
          )}
        </div>
      </div>

      <div className="shrink-0 space-y-1">
        <h3 className="line-clamp-3 text-xs font-bold leading-snug text-charcoal sm:text-sm">
          {credential.title}
        </h3>
        <p className="line-clamp-1 text-[0.6875rem] text-body-muted">
          {credential.issuer}
        </p>
        <p className="text-[0.6875rem] font-semibold text-terracotta">
          {credential.date}
        </p>
      </div>

      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-terracotta/70 via-terracotta to-terracotta/70 opacity-80" />
    </a>
  );
}
