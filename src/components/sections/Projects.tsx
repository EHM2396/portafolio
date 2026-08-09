"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge, StatusBadge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";

export function Projects() {
  const { locale, t } = useLocale();

  return (
    <section id="proyectos" className="relative py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.06, 0.24)}>
              <Card className="flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={project.status} />
                  {project.ai?.enabled && (
                    <Badge tone="info">{t.projects.aiIntegrated}</Badge>
                  )}
                  {project.isPlanned && (
                    <Badge tone="warning">{t.projects.plannedCapabilities}</Badge>
                  )}
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {project.category[locale]}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.shortDescription[locale]}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded-full border border-slate-200 bg-slate-100/60 px-2.5 py-1 text-[11px] text-slate-500 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-500">
                      {t.projects.moreTechPrefix}
                      {project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href={`/proyectos/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200"
                >
                  {t.projects.viewCaseStudy}
                  <ArrowUpRight size={16} />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
