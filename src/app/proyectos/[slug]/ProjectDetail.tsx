"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";
import { useLocale } from "@/i18n/LocaleContext";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  return (
    <article className="relative py-28 sm:py-32">
      <Container className="max-w-4xl">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          {t.projectPage.back}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          {project.ai?.enabled && <Badge tone="info">{t.projects.aiIntegrated}</Badge>}
          {project.isPlanned && (
            <Badge tone="warning">{t.projects.plannedCapabilities}</Badge>
          )}
        </div>

        <p className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-500">
          {project.category[locale]}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {project.shortDescription[locale]}
        </p>

        {project.highlight && (
          <p className="mt-6 border-l-2 border-violet-400/50 pl-4 text-base italic text-slate-700 dark:text-slate-300">
            {project.highlight[locale]}
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.demoUrl && (
            <Button href={project.demoUrl} size="md">
              {t.projectPage.viewDemo}
            </Button>
          )}
          {project.projectUrl && (
            <Button href={project.projectUrl} variant="secondary" size="md">
              {t.projectPage.viewProject}
            </Button>
          )}
          <Button href="/#contacto" variant={project.demoUrl ? "ghost" : "primary"} size="md">
            {t.projectPage.talkAboutProject}
          </Button>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.projectPage.problem}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.problem[locale]}
            </p>
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.projectPage.solution}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.solution[locale]}
            </p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            {project.isPlanned ? t.projectPage.plannedCapabilities : t.projectPage.features}
          </h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {project.features[locale].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-400/70" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {project.ai?.enabled && (
          <section className="mt-8 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-violet-500/10 to-cyan-400/10 p-6">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-cyan-600 dark:text-cyan-300" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                {t.projectPage.aiInThisProject}
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {project.ai.description[locale]}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.ai.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[11px] text-cyan-700 dark:text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.projectPage.technologies}
            </h2>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.isPlanned && (
              <p className="mt-3 text-xs text-slate-500">
                {t.projectPage.plannedTechNote}
              </p>
            )}
          </section>
          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              {t.projectPage.myRole}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {project.myRole[locale]}
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
