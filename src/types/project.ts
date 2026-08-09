export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;
export type LocalizedTextList = Record<Locale, string[]>;

export type ProjectStatus = "Disponible" | "En desarrollo" | "Proyecto privado";

export interface ProjectAi {
  enabled: boolean;
  description: LocalizedText;
  technologies: string[];
}

export interface Project {
  title: string;
  slug: string;
  category: LocalizedText;
  shortDescription: LocalizedText;
  /** Marca "Próximamente" cuando aún no hay información real que mostrar. */
  problem: LocalizedText;
  solution: LocalizedText;
  features: LocalizedTextList;
  technologies: string[];
  /** Puede ir vacío mientras no existan capturas reales. */
  images: string[];
  demoUrl?: string;
  projectUrl?: string;
  status: ProjectStatus;
  myRole: LocalizedText;
  ai?: ProjectAi;
  /** Texto conceptual adicional para la vista de detalle (no una feature). */
  highlight?: LocalizedText;
  /** Marca proyectos cuyas tecnologías/features son un plan previsto, no algo ya implementado. */
  isPlanned?: boolean;
}
