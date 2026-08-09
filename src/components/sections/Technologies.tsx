"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { technologies } from "@/data/technologies";
import { useLocale } from "@/i18n/LocaleContext";

export function Technologies() {
  const { t } = useLocale();

  return (
    <section id="tecnologias" className="relative py-16 sm:py-20">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {t.technologies.eyebrow}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100/60 px-4 py-2 text-sm text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
