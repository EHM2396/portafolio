import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Ciolix",
    slug: "ciolix",
    category: {
      es: "Automatización empresarial / SaaS",
      en: "Business automation / SaaS",
    },
    shortDescription: {
      es: "Plataforma orientada a automatizar procesos de causación que tradicionalmente requieren trabajo manual y repetitivo.",
      en: "Platform focused on automating accounting entry processes that traditionally require manual, repetitive work.",
    },
    problem: {
      es: "Las empresas invierten tiempo considerable causando facturas electrónicas manualmente: mapear cuentas contables, aplicar impuestos y retenciones, y validar que cada comprobante cuadre antes de importarlo a su software contable.",
      en: "Companies spend considerable time posting electronic invoices manually: mapping accounting accounts, applying taxes and withholdings, and validating that each voucher balances before importing it into their accounting software.",
    },
    solution: {
      es: "Ciolix procesa facturas electrónicas (formato DIAN) y genera automáticamente el archivo de importación contable, aplicando reglas de negocio, aprendizaje de mapeos anteriores y sugerencias asistidas por IA, validando la partida doble antes de entregar el resultado.",
      en: "Ciolix processes electronic invoices (DIAN format) and automatically generates the accounting import file, applying business rules, learning from previous mappings and AI-assisted suggestions, validating double-entry bookkeeping before delivering the result.",
    },
    features: {
      es: [
        "Carga de facturas electrónicas en lote",
        "Mapeo automático de cuentas contables por regla, historial aprendido o sugerencia de IA",
        "Validación de partida doble por comprobante y a nivel global",
        "Generación del archivo de importación listo para el software contable",
        "Aprendizaje continuo a partir de mapeos confirmados por proveedor",
        "Panel de catálogos (plan de cuentas, códigos de impuestos, tipos de comprobante)",
        "Autenticación de usuarios (registro, login, recuperación de contraseña)",
      ],
      en: [
        "Bulk upload of electronic invoices",
        "Automatic mapping of accounting accounts by rule, learned history, or AI suggestion",
        "Double-entry validation per voucher and at a global level",
        "Generation of the import file ready for the accounting software",
        "Continuous learning from mappings confirmed per vendor",
        "Catalog panel (chart of accounts, tax codes, voucher types)",
        "User authentication (sign up, login, password recovery)",
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "OpenAI API",
    ],
    images: [],
    demoUrl: "https://smart-causation-52ig.vercel.app/",
    projectUrl: undefined,
    status: "En desarrollo",
    myRole: {
      es: "Desarrollo propio (producto propio en construcción).",
      en: "Self-developed (own product currently in development).",
    },
    ai: {
      enabled: true,
      description: {
        es: "Cuando el mapeo de una cuenta contable no puede resolverse por regla ni por historial, un modelo de lenguaje sugiere la cuenta más probable con un nivel de confianza, quedando disponible para confirmación manual. La IA puede activarse o desactivarse de forma independiente por proveedor.",
        en: "When an accounting account mapping cannot be resolved by rule or history, a language model suggests the most likely account with a confidence level, available for manual confirmation. AI can be enabled or disabled independently per vendor.",
      },
      technologies: ["OpenAI API"],
    },
    highlight: {
      es: "Automatización empresarial con procesamiento inteligente y aprendizaje continuo.",
      en: "Business automation with intelligent processing and continuous learning.",
    },
  },
  {
    title: "Ciolix Nómina",
    slug: "ciolix-nomina",
    category: {
      es: "Automatización de nómina",
      en: "Payroll automation",
    },
    shortDescription: {
      es: "Solución orientada a automatizar procesos de causación y liquidación de nómina, reduciendo la carga manual y repetitiva y permitiendo procesar la información y obtener resultados en minutos, dependiendo del volumen y complejidad.",
      en: "Solution focused on automating payroll posting and settlement processes, reducing manual and repetitive workload and allowing information to be processed and results obtained in minutes, depending on volume and complexity.",
    },
    problem: {
      es: "Próximamente",
      en: "Coming soon",
    },
    solution: {
      es: "Automatizar la causación y liquidación de nómina aplicando reglas de negocio, en la misma línea que Ciolix aplica a causación de facturas.",
      en: "Automate payroll posting and settlement by applying business rules, following the same approach Ciolix applies to invoice posting.",
    },
    features: {
      es: [
        "Automatización de causación de nómina",
        "Aplicación de reglas de negocio",
        "Procesamiento de información de liquidación",
        "Reducción de tareas manuales",
      ],
      en: [
        "Payroll posting automation",
        "Application of business rules",
        "Settlement information processing",
        "Reduction of manual tasks",
      ],
    },
    technologies: ["Python", "PostgreSQL"],
    images: [],
    status: "En desarrollo",
    myRole: {
      es: "Desarrollo propio (proyecto en fase inicial).",
      en: "Self-developed (project in early stage).",
    },
    isPlanned: true,
  },
  {
    title: "Plataforma web para restaurante",
    slug: "plataforma-web-restaurante",
    category: {
      es: "Plataforma web para restaurante",
      en: "Web platform for restaurants",
    },
    shortDescription: {
      es: "Menú digital con generación de pedidos, panel administrativo y sincronización con impresoras de comandas.",
      en: "Digital menu with order generation, admin panel, and synchronization with kitchen order printers.",
    },
    problem: {
      es: "Próximamente",
      en: "Coming soon",
    },
    solution: {
      es: "Una plataforma que permite a un restaurante mostrar su menú digital, recibir pedidos y gestionarlos desde un panel administrativo, con impresión automática de comandas distribuidas por estación (cocina, caja, etiquetas, etc.).",
      en: "A platform that lets a restaurant display its digital menu, receive orders, and manage them from an admin panel, with automatic printing of order tickets distributed by station (kitchen, register, labels, etc.).",
    },
    features: {
      es: [
        "Menú digital con categorías, productos y modificadores/personalización",
        "Carrito de compra y generación de pedidos",
        "Redirección a WhatsApp para facilitar el envío del pedido (sin integración directa por API)",
        "Visualización de datos de pago (copia de llave Nequi / número de cuenta) sin pasarela de pago electrónico",
        "Panel administrativo: productos, categorías, pedidos, domicilios, configuración y parametrización del sistema",
        "Integración con el flujo de impresión de comandas del restaurante mediante impresoras Bluetooth (BLE), distribuidas por estación",
        "Notificaciones push para nuevos pedidos",
      ],
      en: [
        "Digital menu with categories, products, and modifiers/customization",
        "Shopping cart and order generation",
        "Redirection to WhatsApp to facilitate sending the order (no direct API integration)",
        "Display of payment details (Nequi key copy / account number) without an electronic payment gateway",
        "Admin panel: products, categories, orders, deliveries, configuration, and system parameterization",
        "Integration with the restaurant's order-ticket printing flow via Bluetooth (BLE) printers, distributed by station",
        "Push notifications for new orders",
      ],
    },
    technologies: ["React", "Node.js", "PostgreSQL", "Vite"],
    images: [],
    projectUrl: "https://como-seria-menu.vercel.app/",
    status: "Disponible",
    myRole: {
      es: "Proyecto desarrollado en colaboración.",
      en: "Project developed in collaboration.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
