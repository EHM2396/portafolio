"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { useLocale } from "@/i18n/LocaleContext";

type Status = "idle" | "submitting" | "sent" | "error";

export function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // El evento nativo pierde `currentTarget` en cuanto cruza un `await`,
    // así que guardamos la referencia del formulario antes de la llamada async.
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || t.contact.genericError);
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t.contact.genericError);
    }
  }

  return (
    <section id="contacto" className="scroll-mt-16 border-t py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h2 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="text-pretty mt-4 max-w-[48ch] text-lg text-muted">
              {t.contact.paragraph}
            </p>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <Mail size={16} />
              <span>
                {t.contact.writeDirectly}{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground underline underline-offset-4 hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </span>
            </p>
          </div>

          <div>
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="text-live" size={40} />
                <h3 className="font-display text-xl font-semibold">{t.contact.sentTitle}</h3>
                <p className="max-w-sm text-sm text-muted">
                  {t.contact.sentParagraph}
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setStatus("idle")}
                >
                  {t.contact.sendAnother}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label={t.contact.fields.name} htmlFor="name" className="sm:col-span-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={t.contact.fields.namePlaceholder}
                    className={inputClass}
                  />
                </Field>

                <Field label={t.contact.fields.email} htmlFor="email" className="sm:col-span-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={t.contact.fields.emailPlaceholder}
                    className={inputClass}
                  />
                </Field>

                <Field label={t.contact.fields.company} htmlFor="company" className="sm:col-span-1">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder={t.contact.fields.companyPlaceholder}
                    className={inputClass}
                  />
                </Field>

                <Field
                  label={t.contact.fields.projectType}
                  htmlFor="projectType"
                  className="sm:col-span-1"
                >
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      {t.contact.fields.projectTypePlaceholder}
                    </option>
                    {t.contact.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  label={t.contact.fields.budget}
                  htmlFor="budget"
                  className="sm:col-span-2"
                >
                  <input
                    id="budget"
                    name="budget"
                    type="text"
                    placeholder={t.contact.fields.budgetPlaceholder}
                    className={inputClass}
                  />
                </Field>

                <Field
                  label={t.contact.fields.description}
                  htmlFor="description"
                  className="sm:col-span-2"
                >
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={5}
                    placeholder={t.contact.fields.descriptionPlaceholder}
                    className={inputClass}
                  />
                </Field>

                <div className="sm:col-span-2">
                  {status === "error" && (
                    <p role="alert" className="mb-4 text-sm text-red-600 dark:text-red-400">
                      {errorMessage}
                    </p>
                  )}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? t.contact.submitting : t.contact.submit}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-md border border-foreground/25 bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent focus-visible:outline-2 focus-visible:outline-accent";

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
