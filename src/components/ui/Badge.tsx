"use client";

import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/project";
import { useLocale } from "@/i18n/LocaleContext";

type Tone = "neutral" | "success" | "warning" | "info";

const tones: Record<Tone, string> = {
  neutral:
    "bg-slate-100 text-slate-600 border-slate-200 dark:bg-white/[0.06] dark:text-slate-300 dark:border-white/10",
  success:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-300 dark:border-emerald-400/20",
  warning:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-400/10 dark:text-amber-300 dark:border-amber-400/20",
  info: "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-400/10 dark:text-cyan-300 dark:border-cyan-400/20",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

const statusTone: Record<ProjectStatus, Tone> = {
  Disponible: "success",
  "En desarrollo": "warning",
  "Proyecto privado": "neutral",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const { t } = useLocale();

  return (
    <Badge tone={statusTone[status]}>
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "Disponible" && "bg-emerald-500 dark:bg-emerald-400",
          status === "En desarrollo" && "bg-amber-500 dark:bg-amber-400",
          status === "Proyecto privado" && "bg-slate-500 dark:bg-slate-400",
        )}
      />
      {t.projectStatus[status]}
    </Badge>
  );
}
