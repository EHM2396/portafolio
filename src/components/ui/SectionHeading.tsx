import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300/80">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-balance text-base text-slate-600 dark:text-slate-400 sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
