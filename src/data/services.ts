// Datos estructurales de las tarjetas de servicios (icono + identificador estable).
// El texto (título, descripción, ejemplos) vive en src/i18n/translations.ts para
// poder mostrarse en español e inglés sin duplicar la estructura aquí.
export interface ServiceMeta {
  id: string;
  icon: string;
}

export const services: ServiceMeta[] = [
  { id: "web", icon: "🌐" },
  { id: "ecommerce", icon: "🛒" },
  { id: "systems", icon: "⚙️" },
  { id: "automation", icon: "🤖" },
  { id: "saas", icon: "🚀" },
  { id: "integrations", icon: "🔌" },
  { id: "ai", icon: "🤖" },
];
