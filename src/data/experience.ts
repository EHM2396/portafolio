export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  /** Cuando es true, la UI debe mostrar esta entrada como "Próximamente" en vez de datos reales. */
  isPlaceholder?: boolean;
}

// Aún no hay experiencia laboral formal publicable en detalle.
// Se deja un único placeholder explícito en vez de inventar cargos, empresas o periodos.
export const experience: Experience[] = [
  {
    role: "Próximamente",
    company: "Próximamente",
    period: "Próximamente",
    description:
      "Esta sección se actualizará con experiencia profesional verificable. Para proyectos empresariales privados, la información se presenta de forma general: proyecto desarrollado profesionalmente, con detalles, datos y funcionalidades que no se muestran públicamente por razones de confidencialidad.",
    responsibilities: [],
    technologies: [],
    isPlaceholder: true,
  },
];
