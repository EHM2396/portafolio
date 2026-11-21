"use client";

import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/i18n/LocaleContext";

export function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();
  const link =
    "inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-foreground";

  return (
    <footer className="border-t py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display font-semibold">{siteConfig.fullName}</p>
          <p className="mt-1 text-sm text-muted">
            {t.footer.tagline}, {siteConfig.location}. © {year}. {t.footer.rights}
          </p>
        </div>

        <div className="flex items-center">
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub" className={link}>
            <GithubIcon size={20} />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className={link}>
            <LinkedinIcon size={20} />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email" className={link}>
            <Mail size={20} />
          </a>
        </div>
      </Container>
    </footer>
  );
}
