"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
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
    { href: "/#servicios", label: t.nav.links.servicios },
    { href: "/#proyectos", label: t.nav.links.proyectos },
    { href: "/#ia", label: t.nav.links.ia },
    { href: "/#proceso", label: t.nav.links.proceso },
    { href: "/#contacto", label: t.nav.links.contacto },
  ];

  // defaultTheme="dark": mientras next-themes no haya determinado el tema real
  // (resolvedTheme undefined durante SSR y el primer render en cliente), se
  // asume "dark" para que el ícono coincida entre servidor y cliente y no haya
  // mismatch de hidratación.
  const isDark = resolvedTheme ? resolvedTheme === "dark" : true;

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/95 dark:border-white/10 dark:bg-slate-950/95"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:text-base"
          >
            <span className="text-gradient">{"</>"}</span>{" "}
            {siteConfig.fullName}
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle locale={locale} onChange={setLocale} label={t.nav.languageLabel} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.toLightTheme : t.nav.toDarkTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:text-slate-900 dark:border-white/10 dark:text-slate-300 dark:hover:text-white"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Button href="/#contacto" size="sm">
              {t.nav.cta}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle locale={locale} onChange={setLocale} label={t.nav.languageLabel} />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? t.nav.toLightTheme : t.nav.toDarkTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 dark:border-white/10 dark:text-slate-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 dark:text-slate-200"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-slate-200 bg-white/98 dark:border-white/10 dark:bg-slate-950/98 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button href="/#contacto" className="mt-2 w-full" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
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
  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100/60 p-0.5 text-xs font-semibold dark:border-white/10 dark:bg-white/[0.04]"
    >
      <button
        type="button"
        onClick={() => onChange("es")}
        aria-pressed={locale === "es"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "es"
            ? "bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === "en"
            ? "bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white"
            : "text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        }`}
      >
        EN
      </button>
    </div>
  );
}
