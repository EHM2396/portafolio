"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleContext";

const groupOrder = ["web", "ecommerce", "systems", "saas"] as const;

export function AiSection() {
  const { t } = useLocale();

  return (
    <section id="ia" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.ai.title} description={t.ai.paragraph} />

        <dl className="mt-14 grid gap-x-16 gap-y-10 border-t border-foreground/80 pt-8 sm:grid-cols-2">
          {groupOrder.map((id) => {
            const group = t.ai.groups[id];
            return (
              <div key={id}>
                <dt className="font-display text-lg font-semibold">{group.title}</dt>
                <dd className="mt-2 max-w-[48ch] text-muted">
                  {group.items.join(", ")}.
                  {"example" in group && group.example && (
                    <span className="mt-3 block text-foreground">{group.example}</span>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>

        <div className="mt-14 border-l-2 border-accent pl-6">
          <p className="text-pretty max-w-[60ch] text-lg">{t.ai.ctaParagraph}</p>
          <p className="font-display mt-3 text-lg font-semibold">{t.ai.ctaBold}</p>
        </div>
      </Container>
    </section>
  );
}
