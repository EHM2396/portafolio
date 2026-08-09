"use client";

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/i18n/LocaleContext";

const groupIcons: Record<string, string> = {
  web: "🌐",
  ecommerce: "🛒",
  systems: "⚙️",
  saas: "🚀",
};

const groupOrder = ["web", "ecommerce", "systems", "saas"] as const;

export function AiSection() {
  const { t } = useLocale();

  return (
    <section id="ia" className="relative py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {t.ai.label}{" "}
            <span className="text-gradient font-semibold">{t.ai.labelHighlight}</span>.
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {t.ai.title}
          </h2>
          <p className="text-balance text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            {t.ai.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {groupOrder.map((id, index) => {
            const group = t.ai.groups[id];
            return (
              <Reveal key={id} delay={Math.min(index * 0.08, 0.24)}>
                <Card className="h-full" glow={false}>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{groupIcons[id]}</span>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"example" in group && group.example && (
                    <p className="mt-4 text-sm italic text-slate-500">
                      {group.example}
                    </p>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-8 text-center dark:border-white/10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
              {t.ai.ctaEyebrow}
            </p>
            <p className="mt-4 text-balance text-lg text-slate-700 dark:text-slate-200">
              {t.ai.ctaParagraph}
            </p>
            <p className="mt-5 font-medium text-slate-900 dark:text-white">
              {t.ai.ctaBold}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
