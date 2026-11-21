"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { useLocale } from "@/i18n/LocaleContext";

export function HowIWork() {
  const { t } = useLocale();

  return (
    <section id="proceso" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.howIWork.title} />

        {/* Es una secuencia real (hablar, definir, desarrollar, entregar): por eso va numerada. */}
        <ol className="mt-12 grid gap-x-8 gap-y-8 border-t border-foreground/80 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const stepText = t.howIWork.steps[index];
            return (
              <li key={step.number}>
                <span className="font-display text-sm text-muted">{step.number}</span>
                <h3 className="font-display mt-1 text-xl font-semibold">{stepText.title}</h3>
                <p className="mt-2 text-muted">{stepText.description}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
