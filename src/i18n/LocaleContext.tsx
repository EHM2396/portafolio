"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import type { Locale } from "@/types/project";
import { translations, type TranslationDict } from "@/i18n/translations";

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "es";

type Listener = () => void;

// Store externo minimalista (patrón useSyncExternalStore) para leer/escribir el
// idioma en localStorage sin disparar setState dentro de un efecto: React
// gestiona la sincronización servidor/cliente automáticamente, usando
// `getServerSnapshot` durante la hidratación y `getSnapshot` después, evitando
// el mismatch de hidratación sin necesidad de un useEffect propio.
const listeners = new Set<Listener>();
let cachedLocale: Locale | null = null;

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "es" || stored === "en") return stored;
  } catch {
    // localStorage no disponible (modo privado, etc.): se mantiene el valor por defecto.
  }
  return DEFAULT_LOCALE;
}

function getSnapshot(): Locale {
  if (cachedLocale === null) {
    cachedLocale = readStoredLocale();
  }
  return cachedLocale;
}

function getServerSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function writeLocale(next: Locale) {
  cachedLocale = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Ignorar si localStorage no está disponible.
  }
  listeners.forEach((listener) => listener());
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationDict;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  // Arranca en "es" tanto en servidor como en el primer render del cliente
  // (getServerSnapshot) para evitar un mismatch de hidratación; después de
  // hidratar, React vuelve a leer con getSnapshot (localStorage real).
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    writeLocale(next);
  }, []);

  const toggleLocale = useCallback(() => {
    writeLocale(getSnapshot() === "es" ? "en" : "es");
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: translations[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale debe usarse dentro de un LocaleProvider.");
  }
  return context;
}
