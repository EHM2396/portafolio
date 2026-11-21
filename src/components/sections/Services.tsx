"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { useLocale } from "@/i18n/LocaleContext";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicios" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.services.title} description={t.services.description} />

        <dl className="mt-14 border-t border-foreground/80">
          {services.map((service) => {
            const text = t.services.items[service.id as keyof typeof t.services.items];
            return (
              <div
                key={service.id}
                className="grid gap-2 border-b py-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
              >
                <dt className="font-display text-xl font-semibold">{text.title}</dt>
                <dd>
                  <p className="text-pretty max-w-[60ch]">{text.description}</p>
                  <p className="mt-2 max-w-[60ch] text-sm text-muted">
                    {text.examples.slice(0, 5).join(", ")}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </section>
  );
}
