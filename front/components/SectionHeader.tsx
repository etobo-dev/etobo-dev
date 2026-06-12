import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  linkLabel?: string;
  linkHref?: string;
};

export default function SectionHeader({
  title,
  linkLabel,
  linkHref,
}: SectionHeaderProps) {
  return (
    <div className="mb-5 flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <h2 className="shrink-0 text-xs font-bold tracking-[0.15em] text-terracotta uppercase">
        {title}
      </h2>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className="min-w-0 truncate text-sm font-medium text-terracotta transition-colors hover:text-terracotta-dark sm:shrink-0 sm:text-right"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
