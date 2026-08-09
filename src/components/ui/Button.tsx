import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  target?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-violet-500 to-cyan-400 text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] hover:brightness-110 active:brightness-95",
  secondary:
    "border border-slate-200 bg-slate-100/60 text-slate-800 hover:bg-slate-200/60 hover:border-slate-300 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-100 dark:hover:bg-white/[0.08] dark:hover:border-white/25",
  ghost:
    "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/[0.06]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm sm:text-base",
  lg: "px-7 py-3.5 text-base",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isInternal = props.href.startsWith("/");
    const isAnchor = props.href.startsWith("#");

    if (isInternal) {
      return (
        <Link href={props.href} onClick={props.onClick} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <a
        href={props.href}
        onClick={props.onClick}
        target={isAnchor ? undefined : props.target ?? "_blank"}
        rel={isAnchor ? undefined : "noreferrer noopener"}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButton;

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
