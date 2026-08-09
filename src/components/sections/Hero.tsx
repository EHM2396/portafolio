"use client";

import { motion } from "framer-motion";
import { Sparkles, Workflow, Cpu, Braces } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/i18n/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  const floatingChips = [
    { icon: Workflow, label: t.hero.chips.automation, className: "left-[-1rem] top-8 sm:left-2", delay: 0 },
    { icon: Braces, label: t.hero.chips.apis, className: "right-[-0.5rem] top-1/3 sm:right-4", delay: 0.6 },
    { icon: Cpu, label: t.hero.chips.ai, className: "left-2 bottom-6 sm:left-8", delay: 1.1 },
  ];

  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100/60 px-4 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
            <Sparkles size={14} className="text-violet-500 dark:text-violet-300" />
            {t.hero.badge}
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t.hero.titleBefore}
            <span className="text-gradient">{t.hero.titleHighlight}</span>
            {t.hero.titleAfter}
          </h1>

          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400">
            {t.hero.paragraph}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="#proyectos" size="lg">
              {t.hero.ctaProjects}
            </Button>
            <Button href="#contacto" variant="secondary" size="lg">
              {t.hero.ctaContact}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-2xl dark:shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-4 py-3 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-3 font-mono text-xs text-slate-500">
                sistema.ts
              </span>
            </div>
            <div className="space-y-2.5 px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
              <p className="text-slate-500">{t.hero.code.comment}</p>
              <p>
                <span className="text-violet-600 dark:text-violet-300">const</span>{" "}
                <span className="text-cyan-600 dark:text-cyan-300">{t.hero.code.varName}</span> = {"{"}
              </p>
              <p className="pl-4 text-slate-700 dark:text-slate-300">
                {t.hero.code.manualLabel}: <span className="text-amber-600 dark:text-amber-300">true</span>,
              </p>
              <p className="pl-4 text-slate-700 dark:text-slate-300">
                {t.hero.code.repetitiveLabel}: <span className="text-amber-600 dark:text-amber-300">true</span>,
              </p>
              <p>{"};"}</p>
              <p className="pt-1">
                <span className="text-violet-600 dark:text-violet-300">function</span>{" "}
                <span className="text-cyan-600 dark:text-cyan-300">{t.hero.code.fnName}</span>
                ({t.hero.code.paramName}) {"{"}
              </p>
              <p className="pl-4 text-slate-700 dark:text-slate-300">
                <span className="text-violet-600 dark:text-violet-300">return</span> {t.hero.code.sysName}
                <span className="text-slate-500">.</span>
                <span className="text-cyan-600 dark:text-cyan-300">{t.hero.code.methodName}</span>
                ({t.hero.code.paramName});
              </p>
              <p>{"}"}</p>
            </div>
          </div>

          {floatingChips.map(({ icon: Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 + delay },
                scale: { duration: 0.5, delay: 0.5 + delay },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
              }}
              className={`absolute hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-lg dark:border-white/10 dark:bg-slate-900 dark:text-slate-200 sm:flex ${className}`}
            >
              <Icon size={14} className="text-violet-500 dark:text-violet-300" />
              {label}
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
