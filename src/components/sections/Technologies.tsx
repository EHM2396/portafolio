"use client";

import { Container } from "@/components/ui/Container";
import { technologies } from "@/data/technologies";
import { useLocale } from "@/i18n/LocaleContext";

export function Technologies() {
  const { t } = useLocale();

  return (
    <section id="tecnologias" className="py-12 sm:py-16">
      <Container>
        <p className="text-pretty max-w-[70ch] text-muted">
          <span className="text-foreground">{t.technologies.eyebrow}: </span>
          {technologies.join(", ")}.
        </p>
      </Container>
    </section>
  );
}
