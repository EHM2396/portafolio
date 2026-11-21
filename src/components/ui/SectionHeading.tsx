import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  description,
  className,
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-[1fr_1.4fr] lg:gap-16", className)}>
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-pretty max-w-[60ch] text-lg text-muted lg:pt-1.5">{description}</p>
      )}
    </div>
  );
}
