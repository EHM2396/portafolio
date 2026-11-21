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
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:brightness-110 active:brightness-95",
  secondary:
    "border border-foreground/25 text-foreground hover:border-foreground/60 hover:bg-foreground/[0.04]",
  ghost: "text-muted underline-offset-4 hover:text-foreground hover:underline",
};

const sizes: Record<Size, string> = {
  sm: "px-3.5 py-2 text-sm",
  md: "px-5 py-2.5 text-sm sm:text-base",
  lg: "px-6 py-3 text-base",
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
        target={isAnchor ? undefined : (props.target ?? "_blank")}
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
