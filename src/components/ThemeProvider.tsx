"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

// Fuente de verdad: la clase `dark` en <html>, que ya fija el script de arranque
// del layout antes de pintar (sin parpadeo).
function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// En el servidor (y durante la hidratación) siempre es "dark", el tema por defecto:
// así el HTML del servidor y el del cliente coinciden y no hay error de hidratación.
function getServerSnapshot(): Theme {
  return "dark";
}

interface ThemeContextValue {
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const resolvedTheme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((theme: Theme) => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Sin almacenamiento (modo privado): el tema solo dura esta visita.
    }
    listeners.forEach((listener) => listener());
  }, []);

  const value = useMemo(() => ({ resolvedTheme, setTheme }), [resolvedTheme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de ThemeProvider");
  return ctx;
}

/** Script que corre antes de pintar: deja `dark` por defecto y respeta la preferencia guardada. */
export const themeInitScript = `try{if(localStorage.getItem("${STORAGE_KEY}")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;
