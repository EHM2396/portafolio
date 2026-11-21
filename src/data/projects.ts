import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Rentablo",
    slug: "rentablo",
    category: {
      es: "App móvil de finanzas para negocios de belleza",
      en: "Mobile finance app for beauty businesses",
    },
    shortDescription: {
      es: "App en Play Store que reparte cada servicio cobrado entre insumos, sueldo y utilidad, para que quien trabaja por su cuenta sepa cuánto gana de verdad.",
      en: "Play Store app that splits every service charged into supplies, salary and profit, so self-employed professionals know what they really earn.",
    },
    problem: {
      es: "Quien atiende por su cuenta (estética, spa, servicios a domicilio) mezcla lo que cobra con lo que gasta en insumos y transporte. Al final del mes no sabe cuánto es sueldo y cuánto es utilidad del negocio.",
      en: "Self-employed professionals (aesthetics, spas, home services) mix what they charge with what they spend on supplies and transport. At month end they can't tell salary from business profit.",
    },
    solution: {
      es: "Cada servicio se registra en segundos y la app lo distribuye con porcentajes configurables. Muestra métricas por rango de fechas, agenda citas con sincronización a Google Calendar y exporta reportes en PDF.",
      en: "Each service is logged in seconds and the app splits it using configurable percentages. It shows metrics by date range, schedules appointments synced with Google Calendar and exports PDF reports.",
    },
    features: {
      es: [
        "Registro de servicios con domicilio y propina",
        "Distribución automática en insumos, sueldo y utilidad (porcentajes configurables)",
        "Dashboard y estadísticas de los últimos 7 días",
        "Agenda de citas con sincronización a Google Calendar",
        "Reportes en PDF de transacciones y estadísticas",
        "Tema claro y oscuro con la identidad de la marca",
      ],
      en: [
        "Service logging with delivery fee and tip",
        "Automatic split into supplies, salary and profit (configurable percentages)",
        "Dashboard and last-7-days statistics",
        "Appointment scheduling synced with Google Calendar",
        "PDF reports for transactions and statistics",
        "Light and dark theme with the brand identity",
      ],
    },
    technologies: ["Flutter", "Dart", "Node.js", "Express", "PostgreSQL", "Prisma"],
    images: [
      "/projects/rentablo/01-inicio.png",
      "/projects/rentablo/03-a-donde-fue-tu-dinero.png",
      "/projects/rentablo/05-distribucion.png",
      "/projects/rentablo/06-agenda.png",
    ],
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.buildev.rentablo",
    projectUrl: "https://rentablo.buildev.co/",
    operator: "BUILDEV",
    status: "En producción",
    myRole: {
      es: "Desarrollé casi por completo la app y su backend desde el inicio. Después la integré a BUILDEV, el emprendimiento que hoy la opera y factura.",
      en: "I built almost all of the app and its backend from the start. I later integrated it into BUILDEV, the venture that now operates and bills it.",
    },
    highlight: {
      es: "Desarrollada casi por completo por mí y publicada en Google Play.",
      en: "Almost entirely built by me and published on Google Play.",
    },
  },
  {
    title: "Agendorio",
    slug: "agendorio",
    category: {
      es: "Plataforma de agendamiento de marca blanca",
      en: "White-label scheduling platform",
    },
    shortDescription: {
      es: "Agenda en línea para negocios que atienden por cita: enlace propio de reservas, panel de administración y un asistente de WhatsApp con IA que agenda por chat.",
      en: "Online scheduling for appointment-based businesses: its own booking link, an admin panel and an AI WhatsApp assistant that books by chat.",
    },
    problem: {
      es: "Barberías, consultorios, salones y hoteles pequeños agendan por llamadas y mensajes sueltos. Se pierden citas, se cruzan horarios y alguien tiene que contestar cada chat.",
      en: "Barbershops, clinics, salons and small hotels book through calls and scattered messages. Appointments get lost, schedules overlap and someone has to answer every chat.",
    },
    solution: {
      es: "Cada negocio recibe un enlace de reservas y un panel con su propia marca (nombre, logo, colores). El cliente reserva en menos de un minuto sin crear cuenta, o escribe por WhatsApp y el asistente agenda, reprograma o cancela con las mismas reglas de la agenda.",
      en: "Each business gets a booking link and an admin panel in its own brand (name, logo, colors). Clients book in under a minute without an account, or message on WhatsApp and the assistant books, reschedules or cancels using the same schedule rules.",
    },
    features: {
      es: [
        "Reserva pública en 4 pasos: servicio, profesional, horario y datos",
        "Panel con agenda en calendario, equipo, jornadas partidas y catálogo de servicios",
        "Marca blanca multi-negocio con vista previa en vivo",
        "Asistente de WhatsApp con IA en lenguaje natural",
        "Sincronización con Google Calendar por profesional",
        "Planes cobrados con la pasarela Bold (tarjeta, PSE y Nequi)",
        "App Android publicada en Google Play",
        "Sitio público en español e inglés, con guías y SEO",
      ],
      en: [
        "4-step public booking: service, professional, time and details",
        "Panel with calendar view, team, split shifts and service catalog",
        "Multi-business white label with live preview",
        "AI WhatsApp assistant that understands natural language",
        "Google Calendar sync per professional",
        "Plans billed through the Bold gateway (card, PSE and Nequi)",
        "Android app published on Google Play",
        "Public site in Spanish and English, with guides and SEO",
      ],
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Bold",
      "Docker",
    ],
    images: [],
    playStoreUrl: "https://play.google.com/store/apps/details?id=co.buildev.agendorio",
    projectUrl: "https://agendorio.buildev.co",
    operator: "BUILDEV",
    status: "En producción",
    myRole: {
      es: "Colaboré en el desarrollo de la plataforma. Es un producto de BUILDEV, el emprendimiento que la opera y cobra los planes con Bold.",
      en: "I collaborated on the platform. It's a BUILDEV product, the venture that operates it and bills plans through Bold.",
    },
    ai: {
      enabled: true,
      description: {
        es: "Los negocios contestan su WhatsApp con un asistente que entiende lenguaje natural. En negocios de citas agenda, reprograma o cancela; en hoteles cotiza, reserva habitaciones y recibe comprobantes. Todo cae en el mismo panel.",
        en: "Businesses answer their WhatsApp with an assistant that understands natural language. For appointment businesses it books, reschedules or cancels; for hotels it quotes, books rooms and receives payment proofs. Everything lands in the same panel.",
      },
      technologies: ["WhatsApp", "LLM"],
    },
    highlight: {
      es: "Producto en producción con cobro real y app en Google Play.",
      en: "Product in production with real billing and an app on Google Play.",
    },
  },
  {
    title: "Ciolix",
    slug: "ciolix",
    category: {
      es: "Automatización contable / SaaS",
      en: "Accounting automation / SaaS",
    },
    shortDescription: {
      es: "Lee facturas electrónicas de la DIAN, sugiere las cuentas contables con IA y genera el archivo de importación para SIIGO, sin digitación manual.",
      en: "Reads DIAN electronic invoices, suggests accounting accounts with AI and generates the SIIGO import file, with no manual data entry.",
    },
    problem: {
      es: "Causar facturas electrónicas a mano toma horas: mapear cuentas contables, aplicar impuestos y retenciones, y verificar que cada comprobante cuadre antes de importarlo al software contable.",
      en: "Posting electronic invoices by hand takes hours: mapping accounts, applying taxes and withholdings, and checking each voucher balances before importing it into the accounting software.",
    },
    solution: {
      es: "Ciolix trae las facturas recibidas de la DIAN o las carga desde XML, ZIP, PDF o Excel. Mapea cada ítem con reglas, historial aprendido y sugerencias de IA, valida la partida doble y entrega el .xlsx listo para SIIGO. Cada cliente trabaja en su propia empresa aislada.",
      en: "Ciolix pulls received invoices from DIAN or loads them from XML, ZIP, PDF or Excel. It maps each item using rules, learned history and AI suggestions, validates double entry and delivers the .xlsx ready for SIIGO. Each client works in its own isolated company.",
    },
    features: {
      es: [
        "Causación de compras en lote desde la DIAN o archivos",
        "Submódulo de notas crédito con partida invertida",
        "Mapeo por regla, historial aprendido o sugerencia de IA",
        "IVA, Retefuente, ReteICA y ReteIVA con partida doble validada",
        "Catálogos de impuestos, PUC y tipos de comprobante desde Excel",
        "Exportación al formato de importación de SIIGO",
        "Autenticación con verificación de correo y recuperación de contraseña",
      ],
      en: [
        "Bulk purchase posting from DIAN or files",
        "Credit-note submodule with reversed entries",
        "Mapping by rule, learned history or AI suggestion",
        "VAT and withholding taxes with validated double entry",
        "Tax, chart-of-accounts and voucher-type catalogs loaded from Excel",
        "Export to the SIIGO import format",
        "Authentication with email verification and password recovery",
      ],
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "Docker",
      "OpenAI API",
    ],
    images: [],
    demoUrl: "https://smart-causation-52ig.vercel.app/",
    demoNote: {
      es: "Producto propio en producción. Todavía no tiene precios ni planes de adquisición definidos.",
      en: "Own product in production. Pricing and acquisition plans are not defined yet.",
    },
    status: "En producción",
    myRole: {
      es: "Producto propio, desarrollado de principio a fin.",
      en: "Own product, built end to end.",
    },
    ai: {
      enabled: true,
      description: {
        es: "Cuando una cuenta no se resuelve por regla ni por historial, un modelo de lenguaje propone la más probable con un nivel de confianza y queda para confirmación manual. La IA se activa o desactiva por proveedor.",
        en: "When an account can't be resolved by rule or history, a language model proposes the most likely one with a confidence level, pending manual confirmation. AI can be switched on or off per vendor.",
      },
      technologies: ["OpenAI API"],
    },
    highlight: {
      es: "Automatización contable con aprendizaje continuo.",
      en: "Accounting automation with continuous learning.",
    },
  },
  {
    title: "Cómo Sería",
    slug: "plataforma-web-restaurante",
    category: {
      es: "Menú digital y pedidos para restaurante",
      en: "Digital menu and orders for restaurants",
    },
    shortDescription: {
      es: "Menú digital con pedidos, panel administrativo y comandas impresas por estación en el restaurante.",
      en: "Digital menu with orders, an admin panel and order tickets printed by station in the restaurant.",
    },
    problem: {
      es: "Un restaurante que toma pedidos por chat y papel pierde detalles: modificadores mal anotados, comandas que no llegan a la cocina y nadie con el panorama de los domicilios.",
      en: "A restaurant taking orders by chat and paper loses details: badly noted modifiers, tickets that don't reach the kitchen and nobody with the full delivery picture.",
    },
    solution: {
      es: "El cliente arma su pedido en el menú digital y lo envía por WhatsApp. El restaurante gestiona productos, pedidos y domicilios desde un panel, y las comandas salen en impresoras Bluetooth repartidas por estación (cocina, caja, etiquetas).",
      en: "The customer builds the order in the digital menu and sends it via WhatsApp. The restaurant manages products, orders and deliveries from a panel, and tickets print on Bluetooth printers split by station (kitchen, register, labels).",
    },
    features: {
      es: [
        "Menú con categorías, productos y modificadores",
        "Carrito y envío del pedido por WhatsApp",
        "Datos de pago (llave Nequi o cuenta), sin pasarela electrónica",
        "Panel de productos, categorías, pedidos y domicilios",
        "Impresión de comandas por Bluetooth (BLE), por estación",
        "Notificaciones push de nuevos pedidos",
      ],
      en: [
        "Menu with categories, products and modifiers",
        "Cart and order sent via WhatsApp",
        "Payment details (Nequi key or account), no online gateway",
        "Panel for products, categories, orders and deliveries",
        "Bluetooth (BLE) ticket printing per station",
        "Push notifications for new orders",
      ],
    },
    technologies: ["React", "Vite", "Node.js", "PostgreSQL"],
    images: [],
    projectUrl: "https://como-seria-menu.vercel.app/",
    status: "En producción",
    myRole: {
      es: "Proyecto desarrollado en colaboración.",
      en: "Project developed in collaboration.",
    },
    highlight: {
      es: "En uso por un restaurante real.",
      en: "In use by a real restaurant.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
