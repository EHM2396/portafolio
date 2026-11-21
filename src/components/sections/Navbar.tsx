"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/i18n/LocaleContext";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { href: "/#proyectos", label: t.nav.links.proyectos },
    { href: "/#servicios", label: t.nav.links.servicios },
    { href: "/#ia", label: t.nav.links.ia },
    { href: "/#proceso", label: t.nav.links.proceso },
    { href: "/#contacto", label: t.nav.links.contacto },
  ];

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  const iconButton =
    "inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-muted transition-colors hover:text-foreground";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open ? "bg-background" : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.fullName}
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <LanguageToggle locale={locale} onChange={setLocale} label={t.nav.languageLabel} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.toLightTheme : t.nav.toDarkTheme}
              className={iconButton}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Button href="/#contacto" size="sm">
              {t.nav.cta}
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <LanguageToggle locale={locale} onChange={setLocale} label={t.nav.languageLabel} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.toLightTheme : t.nav.toDarkTheme}
              className={iconButton}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className={iconButton}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-b bg-background md:hidden">
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b py-3.5 text-lg last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <Button href="/#contacto" className="my-3 w-full" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  locale,
  onChange,
  label,
}: {
  locale: "es" | "en";
  onChange: (locale: "es" | "en") => void;
  label: string;
}) {
  const item = (value: "es" | "en") =>
    `cursor-pointer px-2 py-1.5 text-sm transition-colors ${
      locale === value ? "font-semibold text-foreground underline underline-offset-4" : "text-muted hover:text-foreground"
    }`;

  return (
    <div role="group" aria-label={label} className="inline-flex items-center">
      <button type="button" onClick={() => onChange("es")} aria-pressed={locale === "es"} className={item("es")}>
        ES
      </button>
      <button type="button" onClick={() => onChange("en")} aria-pressed={locale === "en"} className={item("en")}>
        EN
      </button>
    </div>
  );
}
