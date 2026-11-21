"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const { locale, t } = useLocale();
  const root = useRef<HTMLElement>(null);

  // Movimiento discreto: cada proyecto aparece una vez al llegar a la vista y las
  // capturas se desplazan apenas a distinta velocidad al hacer scroll.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-project]").forEach((el) => {
          gsap.from(el, {
            y: 12,
            opacity: 0,
            duration: 1.1,
            ease: "sine.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = Number(el.dataset.speed);
          gsap.fromTo(
            el,
            { yPercent: speed },
            {
              yPercent: -speed,
              ease: "none",
              scrollTrigger: {
                trigger: el.closest("[data-project]"),
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            },
          );
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="proyectos" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.projects.title} description={t.projects.description} />

        <div className="mt-14 border-t border-foreground/80">
          {projects.map((project) => {
            const shots = project.images.slice(0, 3);
            return (
              <article
                key={project.slug}
                data-project
                className="grid gap-8 border-b py-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
              >
                <div className="flex flex-col items-start">
                  <StatusBadge status={project.status} />
                  <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-muted">{project.category[locale]}</p>
                  <p className="text-pretty mt-5 max-w-[56ch] text-base">
                    {project.shortDescription[locale]}
                  </p>

                  <p className="mt-5 max-w-[56ch] text-sm text-muted">
                    {project.technologies.join(", ")}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
                    <Link
                      href={`/proyectos/${project.slug}`}
                      className="inline-flex items-center gap-1 text-accent underline-offset-4 hover:underline"
                    >
                      {t.projects.viewCaseStudy}
                      <ArrowUpRight size={16} />
                    </Link>
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-muted underline-offset-4 hover:text-foreground hover:underline"
                      >
                        {t.hero.play}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    {(project.projectUrl ?? project.demoUrl) && (
                      <a
                        href={(project.projectUrl ?? project.demoUrl) as string}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 text-muted underline-offset-4 hover:text-foreground hover:underline"
                      >
                        {t.projectPage.viewProject}
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  {shots.length > 0 && (
                    <div className="mb-8 grid grid-cols-3 gap-3 sm:gap-5">
                      {shots.map((src, i) => (
                        <div key={src} data-speed={[1, 2, 3][i]} className={i === 1 ? "mt-8" : ""}>
                          <Image
                            src={src}
                            alt={`${project.title}, pantalla ${i + 1}`}
                            width={1080}
                            height={1920}
                            sizes="(min-width: 1024px) 18vw, 30vw"
                            className="h-auto w-full rounded-xl border shadow-sm"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-pretty max-w-[56ch] text-base text-muted">
                    {project.myRole[locale]}
                  </p>
                  {project.operator && (
                    <p className="mt-2 text-sm text-muted">
                      {t.projects.operatedBy} {project.operator}.
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
