import Image from "next/image";
import Container from "@/components/Container";
import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageShell({
  title,
  description,
  children,
}: PageShellProps) {
  return (
    <Container className="py-12 sm:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_min(40%,26rem)] lg:gap-12 xl:grid-cols-[1fr_min(38%,30rem)] xl:gap-16">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold text-charcoal sm:text-4xl">{title}</h1>
          <p className="mt-3 text-lg text-body">{description}</p>
          {children && (
            <div className="mt-8 text-base leading-relaxed text-body">{children}</div>
          )}
        </div>

        <div
          aria-hidden
          className="relative hidden aspect-square w-full lg:sticky lg:top-24 lg:block"
        >
          <Image
            src="/secondary-banner.png"
            alt=""
            width={1254}
            height={1254}
            unoptimized
            sizes="(max-width: 1024px) 0vw, 40vw"
            className="pointer-events-none h-auto w-full object-contain"
          />
        </div>
      </div>
    </Container>
  );
}
