"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import type { Project } from "@/types/project";
import { useLocale } from "@/i18n/LocaleContext";

export function ProjectDetail({ project }: { project: Project }) {
  const { locale, t } = useLocale();

  const block = (title: string, children: React.ReactNode) => (
    <section className="grid gap-3 border-t py-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="max-w-[64ch]">{children}</div>
    </section>
  );

  return (
    <article className="pt-28 pb-20 sm:pt-32">
      <Container>
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} />
          {t.projectPage.back}
        </Link>

        <header className="mt-8 max-w-3xl">
          <StatusBadge status={project.status} />
          <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 text-muted">{project.category[locale]}</p>
          <p className="text-pretty mt-6 max-w-[56ch] text-lg">
            {project.shortDescription[locale]}
          </p>
          {project.highlight && (
            <p className="mt-5 max-w-[56ch] border-l-2 border-accent pl-4">
              {project.highlight[locale]}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.playStoreUrl && (
              <Button href={project.playStoreUrl}>{t.projectPage.viewOnPlay}</Button>
            )}
            {project.projectUrl && (
              <Button
                href={project.projectUrl}
                variant={project.playStoreUrl ? "secondary" : "primary"}
              >
                {t.projectPage.viewProject}
              </Button>
            )}
            {project.demoUrl && <Button href={project.demoUrl}>{t.projectPage.viewDemo}</Button>}
            <Button href="/#contacto" variant="ghost">
              {t.projectPage.talkAboutProject}
            </Button>
          </div>
          {project.demoUrl && project.demoNote && (
            <p className="mt-3 max-w-[56ch] text-sm text-muted">{project.demoNote[locale]}</p>
          )}
        </header>

        {project.images.length > 0 && (
          <div
            role="group"
            aria-label={t.projectPage.screens}
            className="-mx-5 mt-14 flex gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible"
          >
            {project.images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`${project.title} — ${i + 1}`}
                width={1080}
                height={1920}
                priority={i === 0}
                sizes="(min-width: 1024px) 22vw, 60vw"
                className="h-auto w-[60vw] max-w-[260px] shrink-0 rounded-xl border shadow-sm lg:w-full lg:max-w-none"
              />
            ))}
          </div>
        )}

        <div className="mt-14">
          {block(t.projectPage.problem, <p className="text-pretty">{project.problem[locale]}</p>)}
          {block(t.projectPage.solution, <p className="text-pretty">{project.solution[locale]}</p>)}
          {block(
            t.projectPage.features,
            <ul className="space-y-2.5">
              {project.features[locale].map((feature) => (
                <li key={feature} className="border-l-2 border-line pl-4">
                  {feature}
                </li>
              ))}
            </ul>,
          )}
          {project.ai?.enabled &&
            block(
              t.projectPage.aiInThisProject,
              <>
                <p className="text-pretty">{project.ai.description[locale]}</p>
                <p className="mt-3 text-sm text-muted">{project.ai.technologies.join(", ")}</p>
              </>,
            )}
          {block(
            t.projectPage.technologies,
            <p className="text-muted">{project.technologies.join(", ")}</p>,
          )}
          {block(
            t.projectPage.myRole,
            <>
              <p className="text-pretty">{project.myRole[locale]}</p>
              {project.operator && (
                <p className="mt-2 text-sm text-muted">
                  {t.projects.operatedBy} {project.operator}.
                </p>
              )}
            </>,
          )}
        </div>
      </Container>
    </article>
  );
}
