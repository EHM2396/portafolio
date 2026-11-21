// Identificadores estables de los servicios. El texto (título, descripción,
// ejemplos) vive en src/i18n/translations.ts para mostrarse en español e inglés.
export interface ServiceMeta {
  id: string;
}

export const services: ServiceMeta[] = [
  { id: "web" },
  { id: "ecommerce" },
  { id: "systems" },
  { id: "automation" },
  { id: "saas" },
  { id: "integrations" },
  { id: "ai" },
];
