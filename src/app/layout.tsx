import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BackgroundDecor } from "@/components/ui/BackgroundDecor";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/i18n/LocaleContext";
import { siteConfig } from "@/data/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${siteConfig.fullName} · ${siteConfig.role} freelance`;
const description =
  "Desarrollo web, desarrollo de software y automatización empresarial a medida: páginas web, e-commerce, sistemas, SaaS e integraciones, con inteligencia artificial cuando aporta valor real. Programador freelance en Colombia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: title,
    template: `%s · ${siteConfig.fullName}`,
  },
  description,
  keywords: [
    "desarrollo web",
    "desarrollador full stack",
    "desarrollo de aplicaciones web",
    "desarrollo de software",
    "automatización empresarial",
    "desarrollo SaaS",
    "desarrollo web Colombia",
    "programador freelance",
  ],
  authors: [{ name: siteConfig.fullName }],
  creator: siteConfig.fullName,
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.domain,
    title,
    description,
    siteName: siteConfig.fullName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LocaleProvider>
            <BackgroundDecor />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
