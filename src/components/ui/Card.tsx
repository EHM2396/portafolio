import { cn } from "@/lib/utils";

/**
 * Card con borde sutil en gradiente y glow al hacer hover.
 * El "gradiente" del borde se logra con un padding de 1px sobre un fondo en degradado.
 */
export function Card({
  children,
  className,
  glow = true,
}: {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl p-px",
        "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-50 dark:from-white/15 dark:via-white/5 dark:to-white/[0.02]",
        glow && "transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl bg-white p-6 shadow-sm dark:bg-slate-950/90 dark:shadow-none",
          "ring-1 ring-inset ring-slate-900/[0.03] dark:ring-white/[0.04]",
          glow &&
            "transition-colors duration-300 group-hover:bg-slate-50 dark:group-hover:bg-slate-900/80",
        )}
      >
        {glow && (
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"
            style={{
              background:
                "radial-gradient(120px 80px at 20% 0%, rgba(139,92,246,0.6), transparent)",
            }}
          />
        )}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
