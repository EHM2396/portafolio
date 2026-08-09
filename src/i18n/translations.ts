import type { Locale, ProjectStatus } from "@/types/project";

export type { Locale };

export const translations = {
  es: {
    nav: {
      links: {
        servicios: "Servicios",
        proyectos: "Proyectos",
        ia: "IA",
        proceso: "Cómo trabajo",
        contacto: "Contacto",
      },
      cta: "Cuéntame tu proyecto",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      toLightTheme: "Cambiar a tema claro",
      toDarkTheme: "Cambiar a tema oscuro",
      languageLabel: "Idioma",
    },
    hero: {
      badge: "Desde una página web hasta una plataforma empresarial.",
      titleBefore: "Convierto ",
      titleHighlight: "ideas y procesos",
      titleAfter: " en software.",
      paragraph:
        "Desarrollo páginas web, aplicaciones, plataformas empresariales y soluciones de automatización a medida.",
      ctaProjects: "Ver proyectos",
      ctaContact: "Cuéntame tu proyecto",
      code: {
        comment: "// del problema a la solución",
        varName: "proceso",
        manualLabel: "manual",
        repetitiveLabel: "repetitivo",
        fnName: "automatizar",
        paramName: "proceso",
        sysName: "sistema",
        methodName: "construir",
      },
      chips: {
        automation: "Automatización",
        apis: "APIs",
        ai: "IA aplicada",
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "¿Qué puedo desarrollar?",
      description:
        "Desde un sitio sencillo hasta una plataforma empresarial completa. Cuéntame el problema y encontramos juntos la solución adecuada.",
      items: {
        web: {
          title: "Páginas web",
          description:
            "Para profesionales, emprendimientos y empresas que necesitan una presencia digital clara y profesional.",
          examples: [
            "Landing pages",
            "Páginas corporativas",
            "Portafolios profesionales",
            "Páginas para arquitectos",
            "Restaurantes",
            "Catálogos",
            "Blogs",
          ],
        },
        ecommerce: {
          title: "Comercio electrónico",
          description:
            "Tiendas online que facilitan vender, cobrar y gestionar pedidos sin complicaciones.",
          examples: [
            "Tiendas online",
            "Catálogos",
            "Carritos",
            "Pedidos",
            "Gestión de productos",
            "Administración",
          ],
        },
        systems: {
          title: "Sistemas personalizados",
          description:
            "Herramientas a medida para organizar la operación diaria de tu empresa.",
          examples: [
            "Sistemas administrativos",
            "Dashboards",
            "Gestión empresarial",
            "Portales privados",
            "Sistemas internos",
          ],
        },
        automation: {
          title: "Automatización",
          description:
            "Elimina tareas repetitivas y libera tiempo del equipo automatizando procesos manuales.",
          examples: [
            "Automatización de procesos manuales",
            "Procesamiento de información",
            "Eliminación de tareas repetitivas",
            "Validaciones",
            "Flujos automáticos",
          ],
        },
        saas: {
          title: "SaaS",
          description:
            "Convierto una idea en una plataforma real, lista para recibir usuarios y crecer.",
          examples: [
            "MVP",
            "Plataformas SaaS",
            "Sistemas multiusuario",
            "Paneles administrativos",
            "Suscripciones",
          ],
        },
        integrations: {
          title: "Integraciones",
          description:
            "Conecto tus sistemas entre sí y con servicios externos para que la información fluya sin trabajo manual.",
          examples: [
            "APIs",
            "Servicios externos",
            "Bases de datos",
            "Integraciones entre sistemas",
            "Automatización mediante servicios externos",
            "Integración con hardware cuando sea necesario",
          ],
        },
        ai: {
          title: "Soluciones con IA",
          description:
            "Integro inteligencia artificial cuando puede aportar valor real al producto: asistentes, automatización, procesamiento de información, recomendaciones, clasificación, generación de contenido y otras aplicaciones personalizadas.",
          examples: [
            "Asistentes",
            "Automatización",
            "Procesamiento de información",
            "Recomendaciones",
            "Clasificación",
            "Generación de contenido",
          ],
        },
      },
    },
    ai: {
      label: "Desarrollo web, software y automatización con tecnología moderna e",
      labelHighlight: "inteligencia artificial",
      title: "🤖 Inteligencia artificial aplicada a soluciones reales",
      paragraph:
        "La inteligencia artificial no tiene que estar reservada para grandes plataformas. Cuando puede mejorar una experiencia, automatizar una tarea, procesar información o aportar una nueva capacidad al producto, podemos integrarla directamente en la solución.",
      groups: {
        web: {
          title: "En páginas web",
          items: [
            "Asistentes virtuales",
            "Chatbots personalizados",
            "Generación de contenido",
            "Asistentes para visitantes",
            "Recomendaciones",
            "Búsqueda inteligente",
            "Respuestas sobre servicios y productos",
          ],
          example:
            "Un arquitecto podría tener un asistente que responda preguntas sobre sus proyectos, servicios y experiencia.",
        },
        ecommerce: {
          title: "En comercio electrónico",
          items: [
            "Recomendación de productos",
            "Búsqueda inteligente",
            "Asistentes de compra",
            "Clasificación de productos",
            "Generación de descripciones",
            "Análisis de comportamiento",
          ],
        },
        systems: {
          title: "En sistemas empresariales",
          items: [
            "Clasificación automática de información",
            "Extracción de datos",
            "Procesamiento de documentos",
            "Detección de inconsistencias",
            "Generación de reportes",
            "Asistentes internos",
            "Automatización de tareas",
            "Procesamiento inteligente de información",
          ],
        },
        saas: {
          title: "En SaaS",
          items: [
            "Copilotos",
            "Asistentes especializados",
            "Automatización inteligente",
            "Análisis de información",
            "Generación de contenido",
            "Sistemas de recomendación",
            "Flujos inteligentes",
          ],
        },
      },
      ctaEyebrow: "IA cuando aporta valor",
      ctaParagraph:
        "No todos los proyectos necesitan inteligencia artificial. Pero cuando puede reducir trabajo, mejorar una experiencia o resolver un problema de forma más eficiente, la integramos como parte de la solución.",
      ctaBold:
        "Tecnología + criterio humano + IA para construir mejores soluciones.",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Una muestra de lo que puedo construir: desde automatización empresarial hasta sitios sencillos. Cada caso incluye el problema, la solución y mi participación real.",
      viewCaseStudy: "Ver caso de estudio",
      aiIntegrated: "IA integrada",
      plannedCapabilities: "Capacidades previstas",
      moreTechPrefix: "+",
    },
    projectStatus: {
      Disponible: "Disponible",
      "En desarrollo": "En desarrollo",
      "Proyecto privado": "Proyecto privado",
    } satisfies Record<ProjectStatus, string>,
    technologies: {
      eyebrow: "Tecnologías que respaldan estas soluciones",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      placeholderBadge: "Próximamente",
      placeholderDescription:
        "Esta sección se actualizará con experiencia profesional verificable. Para proyectos empresariales privados, la información se presenta de forma general: proyecto desarrollado profesionalmente, con detalles, datos y funcionalidades que no se muestran públicamente por razones de confidencialidad.",
    },
    howIWork: {
      eyebrow: "Metodología",
      title: "Cómo trabajo",
      steps: [
        { title: "Hablamos", description: "Entiendo qué necesitas y cuál es el problema." },
        { title: "Definimos", description: "Convertimos la idea en funcionalidades y alcance." },
        { title: "Desarrollamos", description: "Construyo la solución y realizamos iteraciones." },
        {
          title: "Entregamos",
          description: "Publicamos, configuramos y dejamos el sistema funcionando.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "¿Tienes una idea o un proceso que quieres mejorar?",
      paragraph:
        "Cuéntame qué necesitas. No importa si ya tienes una especificación técnica o simplemente tienes una idea; podemos convertirla en una solución.",
      sentTitle: "¡Solicitud enviada!",
      sentParagraph:
        "Gracias por escribir. Te contactaré pronto a través del correo que dejaste en el formulario.",
      sendAnother: "Enviar otra solicitud",
      fields: {
        name: "Nombre",
        namePlaceholder: "Tu nombre",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        company: "Empresa (opcional)",
        companyPlaceholder: "Nombre de tu empresa",
        projectType: "Tipo de proyecto",
        projectTypePlaceholder: "Selecciona una opción",
        budget: "Presupuesto aproximado (opcional)",
        budgetPlaceholder: "Ej. USD 500 - 1.000",
        description: "Descripción del proyecto",
        descriptionPlaceholder:
          "Cuéntame qué necesitas, cuál es el problema o la idea que tienes en mente.",
      },
      projectTypes: [
        "Página web",
        "Landing page",
        "Tienda online",
        "Sistema web",
        "Automatización",
        "SaaS",
        "API/Integración",
        "Aplicación personalizada",
        "No estoy seguro",
      ],
      submitting: "Enviando...",
      submit: "Enviar solicitud",
      genericError: "No se pudo enviar la solicitud.",
      writeDirectly: "También puedes escribir directamente a",
    },
    footer: {
      tagline: "Desarrollo web, software y automatización",
      rights: "Todos los derechos reservados.",
    },
    projectPage: {
      back: "Volver a proyectos",
      viewDemo: "Ver demo",
      viewProject: "Ver proyecto",
      talkAboutProject: "Hablemos de tu proyecto",
      problem: "El problema",
      solution: "La solución",
      features: "Funcionalidades",
      plannedCapabilities: "Capacidades previstas",
      aiInThisProject: "Inteligencia artificial en este proyecto",
      technologies: "Tecnologías",
      plannedTechNote: "Base tecnológica prevista para este módulo.",
      myRole: "Mi participación",
      notFound: "Proyecto no encontrado",
    },
  },
  en: {
    nav: {
      links: {
        servicios: "Services",
        proyectos: "Projects",
        ia: "AI",
        proceso: "How I work",
        contacto: "Contact",
      },
      cta: "Tell me about your project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      toLightTheme: "Switch to light theme",
      toDarkTheme: "Switch to dark theme",
      languageLabel: "Language",
    },
    hero: {
      badge: "From a simple website to an enterprise platform.",
      titleBefore: "I turn ",
      titleHighlight: "ideas and processes",
      titleAfter: " into software.",
      paragraph:
        "I build websites, applications, enterprise platforms, and custom automation solutions.",
      ctaProjects: "View projects",
      ctaContact: "Tell me about your project",
      code: {
        comment: "// from problem to solution",
        varName: "process",
        manualLabel: "manual",
        repetitiveLabel: "repetitive",
        fnName: "automate",
        paramName: "process",
        sysName: "system",
        methodName: "build",
      },
      chips: {
        automation: "Automation",
        apis: "APIs",
        ai: "Applied AI",
      },
    },
    services: {
      eyebrow: "Services",
      title: "What can I build?",
      description:
        "From a simple site to a complete enterprise platform. Tell me the problem and we'll find the right solution together.",
      items: {
        web: {
          title: "Websites",
          description:
            "For professionals, startups, and companies that need a clear, professional digital presence.",
          examples: [
            "Landing pages",
            "Corporate websites",
            "Professional portfolios",
            "Websites for architects",
            "Restaurants",
            "Catalogs",
            "Blogs",
          ],
        },
        ecommerce: {
          title: "E-commerce",
          description:
            "Online stores that make it easy to sell, get paid, and manage orders without hassle.",
          examples: [
            "Online stores",
            "Catalogs",
            "Shopping carts",
            "Orders",
            "Product management",
            "Administration",
          ],
        },
        systems: {
          title: "Custom systems",
          description:
            "Tailor-made tools to organize your company's day-to-day operations.",
          examples: [
            "Administrative systems",
            "Dashboards",
            "Business management",
            "Private portals",
            "Internal systems",
          ],
        },
        automation: {
          title: "Automation",
          description:
            "Eliminate repetitive tasks and free up your team's time by automating manual processes.",
          examples: [
            "Manual process automation",
            "Information processing",
            "Elimination of repetitive tasks",
            "Validations",
            "Automated workflows",
          ],
        },
        saas: {
          title: "SaaS",
          description:
            "I turn an idea into a real platform, ready to onboard users and grow.",
          examples: [
            "MVP",
            "SaaS platforms",
            "Multi-user systems",
            "Admin dashboards",
            "Subscriptions",
          ],
        },
        integrations: {
          title: "Integrations",
          description:
            "I connect your systems with each other and with external services so information flows without manual work.",
          examples: [
            "APIs",
            "External services",
            "Databases",
            "System-to-system integrations",
            "Automation via external services",
            "Hardware integration when needed",
          ],
        },
        ai: {
          title: "AI-powered solutions",
          description:
            "I integrate artificial intelligence when it can add real value to the product: assistants, automation, information processing, recommendations, classification, content generation, and other custom applications.",
          examples: [
            "Assistants",
            "Automation",
            "Information processing",
            "Recommendations",
            "Classification",
            "Content generation",
          ],
        },
      },
    },
    ai: {
      label: "Web development, software, and automation with modern technology and",
      labelHighlight: "artificial intelligence",
      title: "🤖 Artificial intelligence applied to real solutions",
      paragraph:
        "Artificial intelligence doesn't have to be reserved for large platforms. When it can improve an experience, automate a task, process information, or add a new capability to the product, we can integrate it directly into the solution.",
      groups: {
        web: {
          title: "On websites",
          items: [
            "Virtual assistants",
            "Custom chatbots",
            "Content generation",
            "Assistants for visitors",
            "Recommendations",
            "Smart search",
            "Answers about services and products",
          ],
          example:
            "An architect could have an assistant that answers questions about their projects, services, and experience.",
        },
        ecommerce: {
          title: "In e-commerce",
          items: [
            "Product recommendations",
            "Smart search",
            "Shopping assistants",
            "Product classification",
            "Description generation",
            "Behavior analysis",
          ],
        },
        systems: {
          title: "In enterprise systems",
          items: [
            "Automatic information classification",
            "Data extraction",
            "Document processing",
            "Inconsistency detection",
            "Report generation",
            "Internal assistants",
            "Task automation",
            "Intelligent information processing",
          ],
        },
        saas: {
          title: "In SaaS",
          items: [
            "Copilots",
            "Specialized assistants",
            "Intelligent automation",
            "Information analysis",
            "Content generation",
            "Recommendation systems",
            "Intelligent workflows",
          ],
        },
      },
      ctaEyebrow: "AI when it adds value",
      ctaParagraph:
        "Not every project needs artificial intelligence. But when it can reduce work, improve an experience, or solve a problem more efficiently, we integrate it as part of the solution.",
      ctaBold: "Technology + human judgment + AI to build better solutions.",
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured projects",
      description:
        "A sample of what I can build: from business automation to simple sites. Each case includes the problem, the solution, and my real involvement.",
      viewCaseStudy: "View case study",
      aiIntegrated: "AI integrated",
      plannedCapabilities: "Planned capabilities",
      moreTechPrefix: "+",
    },
    projectStatus: {
      Disponible: "Available",
      "En desarrollo": "In development",
      "Proyecto privado": "Private project",
    } satisfies Record<ProjectStatus, string>,
    technologies: {
      eyebrow: "Technologies behind these solutions",
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional background",
      placeholderBadge: "Coming soon",
      placeholderDescription:
        "This section will be updated with verifiable professional experience. For private business projects, information is presented in general terms: a professionally developed project, with details, data, and functionality not shown publicly for confidentiality reasons.",
    },
    howIWork: {
      eyebrow: "Methodology",
      title: "How I work",
      steps: [
        { title: "We talk", description: "I understand what you need and what the problem is." },
        { title: "We define", description: "We turn the idea into features and scope." },
        { title: "We develop", description: "I build the solution and we iterate." },
        {
          title: "We deliver",
          description: "We publish, configure, and leave the system running.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Do you have an idea or a process you want to improve?",
      paragraph:
        "Tell me what you need. It doesn't matter if you already have a technical spec or just an idea; we can turn it into a solution.",
      sentTitle: "Request sent!",
      sentParagraph:
        "Thanks for reaching out. I'll contact you soon at the email you provided in the form.",
      sendAnother: "Send another request",
      fields: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        company: "Company (optional)",
        companyPlaceholder: "Your company name",
        projectType: "Project type",
        projectTypePlaceholder: "Select an option",
        budget: "Approximate budget (optional)",
        budgetPlaceholder: "E.g. USD 500 - 1,000",
        description: "Project description",
        descriptionPlaceholder:
          "Tell me what you need, what the problem is, or the idea you have in mind.",
      },
      projectTypes: [
        "Website",
        "Landing page",
        "Online store",
        "Web system",
        "Automation",
        "SaaS",
        "API/Integration",
        "Custom application",
        "Not sure",
      ],
      submitting: "Sending...",
      submit: "Send request",
      genericError: "The request could not be sent.",
      writeDirectly: "You can also write directly to",
    },
    footer: {
      tagline: "Web development, software, and automation",
      rights: "All rights reserved.",
    },
    projectPage: {
      back: "Back to projects",
      viewDemo: "View demo",
      viewProject: "View project",
      talkAboutProject: "Let's talk about your project",
      problem: "The problem",
      solution: "The solution",
      features: "Features",
      plannedCapabilities: "Planned capabilities",
      aiInThisProject: "Artificial intelligence in this project",
      technologies: "Technologies",
      plannedTechNote: "Planned technology stack for this module.",
      myRole: "My involvement",
      notFound: "Project not found",
    },
  },
} as const;

export type TranslationDict = (typeof translations)[Locale];
