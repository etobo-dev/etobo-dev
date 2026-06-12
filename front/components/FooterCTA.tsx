import { Send } from "lucide-react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import { linkedInMessageUrl } from "@/lib/links";
import type { Dictionary, Locale } from "@/lib/i18n";

type FooterCTAProps = {
  locale: Locale;
  dict: Dictionary;
};

export default function FooterCTA({ locale, dict }: FooterCTAProps) {
  return (
    <Container as="section" className="py-10 sm:py-14">
      <div className="flex min-w-0 flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl bg-terracotta px-6 py-8 text-white sm:flex-row sm:items-center sm:px-8 sm:py-10">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15">
            <Send size={20} className="text-white" />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-bold sm:text-xl">{dict.footerCta.title}</h2>
            <p className="mt-1 break-words text-sm text-white/80 sm:text-base">
              {dict.footerCta.subtitle}
            </p>
          </div>
        </div>

        <Button
          href={linkedInMessageUrl}
          variant="outline-white"
          className="w-full shrink-0 sm:w-auto"
          external
        >
          {dict.footerCta.button}
        </Button>
      </div>
    </Container>
  );
}
