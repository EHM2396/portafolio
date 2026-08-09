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
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
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
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t.contact.genericError);
    }
  }

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300/80">
              {t.contact.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-slate-600 dark:text-slate-400 sm:text-lg">
              {t.contact.paragraph}
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02] sm:p-8">
            {status === "sent" ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="text-emerald-500 dark:text-emerald-400" size={40} />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {t.contact.sentTitle}
                </h3>
                <p className="max-w-sm text-sm text-slate-600 dark:text-slate-400">
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
                    <p className="mb-4 text-sm text-rose-600 dark:text-rose-400">{errorMessage}</p>
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

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
            <Mail size={16} />
            <span>
              {t.contact.writeDirectly}{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
              >
                {siteConfig.email}
              </a>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-violet-400/60 focus:ring-2 focus:ring-violet-400/20 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-violet-400/50";

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
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
}
