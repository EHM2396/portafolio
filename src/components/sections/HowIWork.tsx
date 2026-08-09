"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { useLocale } from "@/i18n/LocaleContext";

export function HowIWork() {
  const { t } = useLocale();

  return (
    <section id="proceso" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.howIWork.eyebrow} title={t.howIWork.title} />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const stepText = t.howIWork.steps[index];
            return (
              <Reveal key={step.number} delay={Math.min(index * 0.08, 0.24)}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
                  <span className="text-gradient text-3xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                    {stepText.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {stepText.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
