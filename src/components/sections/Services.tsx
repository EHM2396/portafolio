"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { useLocale } from "@/i18n/LocaleContext";

export function Services() {
  const { t } = useLocale();

  return (
    <section id="servicios" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const text =
              t.services.items[service.id as keyof typeof t.services.items];
            return (
              <Reveal key={service.id} delay={Math.min(index * 0.06, 0.3)}>
                <Card className="h-full">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {text.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {text.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {text.examples.slice(0, 5).map((example) => (
                      <li
                        key={example}
                        className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
