"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/** Envuelve next-themes con la estrategia "class" (agrega/quita `dark` en <html>). */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}
