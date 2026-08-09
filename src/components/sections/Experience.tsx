"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";
import { experience } from "@/data/experience";
import { useLocale } from "@/i18n/LocaleContext";

export function Experience() {
  const { t } = useLocale();

  return (
    <section id="experiencia" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-5">
          {experience.map((item, index) => (
            <Reveal key={`${item.role}-${index}`} delay={Math.min(index * 0.08, 0.24)}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
                {item.isPlaceholder ? (
                  <div className="flex flex-col items-start gap-3">
                    <Badge tone="neutral">{t.experience.placeholderBadge}</Badge>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {t.experience.placeholderDescription}
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {item.role} · {item.company}
                      </h3>
                      <span className="text-sm text-slate-500">{item.period}</span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.description}
                    </p>
                    {item.responsibilities.length > 0 && (
                      <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        {item.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                    )}
                    {item.technologies.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
