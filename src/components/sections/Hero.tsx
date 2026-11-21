"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";

export function Hero() {
  const { locale, t } = useLocale();
  const root = useRef<HTMLElement>(null);

  // Una sola entrada, corta y suave: texto primero, lista de proyectos después.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline({ defaults: { ease: "sine.out" } })
          .from("[data-hero='in']", { y: 10, opacity: 0, duration: 1.1, stagger: 0.14 })
          .from("[data-hero='row']", { y: 6, opacity: 0, duration: 0.9, stagger: 0.1 }, 0.5);
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className="pt-32 pb-16 sm:pt-40 sm:pb-24">
      <Container className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <h1
            data-hero="in"
            className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {t.hero.title}
          </h1>
          <p data-hero="in" className="text-pretty mt-6 max-w-[56ch] text-lg text-muted">
            {t.hero.paragraph}
          </p>
          <div data-hero="in" className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#proyectos" size="lg">
              {t.hero.ctaProjects}
            </Button>
            <Button href="#contacto" variant="secondary" size="lg">
              {t.hero.ctaContact}
            </Button>
          </div>
        </div>

        {/* El elemento memorable: lo que ya existe, con su estado real. */}
        <div className="self-end">
          <h2 className="font-display text-lg font-semibold">{t.hero.indexTitle}</h2>
          <ul className="mt-4 border-t border-foreground/80">
            {projects.map((project) => (
              <li key={project.slug} data-hero="row" className="border-b">
                <Link
                  href={`/proyectos/${project.slug}`}
                  className="group flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="min-w-0">
                    <span className="font-display block text-xl font-semibold group-hover:text-accent">
                      {project.title}
                    </span>
                    <span className="block truncate text-sm text-muted">
                      {project.category[locale]}
                    </span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <StatusBadge status={project.status} />
                    <ArrowUpRight
                      size={16}
                      className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
