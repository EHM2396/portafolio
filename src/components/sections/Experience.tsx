"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLocale } from "@/i18n/LocaleContext";

/** Dónde trabajo: BUILDEV y los dos productos que opera. */
export function Experience() {
  const { t } = useLocale();

  return (
    <section id="buildev" className="scroll-mt-16 py-20 sm:py-28">
      <Container>
        <SectionHeading title={t.buildev.title} description={t.buildev.paragraph} />
        <ul className="mt-10 grid gap-4 lg:ml-[calc(41.6%+2rem)] lg:max-w-[60ch]">
          {t.buildev.items.map((item) => (
            <li key={item} className="border-l-2 border-live pl-4">
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
