"use client";

import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/i18n/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 py-10 dark:border-white/10">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-slate-900 dark:text-white">
            <span className="text-gradient">{"</>"}</span> {siteConfig.fullName}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            {t.footer.tagline} · {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Mail size={20} />
          </a>
        </div>
      </Container>

      <Container className="mt-8 border-t border-slate-200 pt-6 dark:border-white/5">
        <p className="text-center text-xs text-slate-500 dark:text-slate-600">
          © {year} {siteConfig.fullName}. {t.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
