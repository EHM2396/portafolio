// Datos estructurales de los pasos de "Cómo trabajo" (solo el número/identificador).
// El texto (título, descripción) vive en src/i18n/translations.ts.
export interface ProcessStepMeta {
  number: string;
}

export const processSteps: ProcessStepMeta[] = [
  { number: "01" },
  { number: "02" },
  { number: "03" },
  { number: "04" },
];
