"use client";

import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";
import { useLocale } from "@/i18n/LocaleContext";

/** Etiqueta de texto simple (sin píldora decorativa). */
export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-sm", className)}>
      {children}
    </span>
  );
}

/** Solo "En producción" lleva el punto cian con pulso; el resto es un punto quieto. */
export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLocale();
  const live = status === "En producción";

  return (
    <Badge className={live ? "font-medium text-foreground" : "text-muted"}>
      <span
        aria-hidden
        className={cn(
          "h-2 w-2 rounded-full",
          live && "live-dot bg-live",
          status === "Disponible" && "bg-foreground/50",
          status === "En desarrollo" && "border border-foreground/50",
          status === "Proyecto privado" && "bg-foreground/25",
        )}
      />
      {t.projectStatus[status]}
    </Badge>
  );
}
