<div align="center">

# 🚀 Portafolio — Erick Herrera Muñoz

### Convierto ideas y procesos en software.

Desarrollo páginas web, aplicaciones, plataformas empresariales y soluciones de automatización a medida — desde una landing sencilla hasta un SaaS con inteligencia artificial integrada.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/license-MIT-informational)](#licencia)

[LinkedIn](https://www.linkedin.com/in/erick-herrera-mu%C3%B1oz-5a3502229/) · [GitHub](https://github.com/EHM2396) · [Contacto](mailto:erickpro23@gmail.com)

</div>

---

## 📖 Sobre este proyecto

Este repositorio es el código fuente de mi **portafolio profesional y vitrina de servicios freelance**: no es un CV tradicional, sino un sitio pensado para que cualquier visitante —técnico o no— entienda en segundos qué puedo construir y cómo contactarme.

Incluye casos de estudio reales de proyectos que he desarrollado, entre ellos **Ciolix**, una plataforma propia de automatización de causación contable con sugerencias asistidas por IA.

## ✨ Funcionalidades

- 🎨 **Diseño oscuro/claro** con transición completa (`next-themes`), sin flash de tema incorrecto al cargar.
- 🌐 **Español / Inglés** con selector persistente, sin recargar la página.
- 🧩 **Casos de estudio dinámicos** por proyecto (`/proyectos/[slug]`) generados a partir de un único archivo de datos tipado.
- 📬 **Formulario de contacto funcional** conectado a [Resend](https://resend.com) vía una Route Handler propia — sin backend externo.
- ⚡ Animaciones sutiles con `framer-motion`, optimizadas para no afectar el rendimiento de scroll.
- 🔍 SEO listo: metadata, Open Graph, Twitter cards, `sitemap.xml` y `robots.txt` dinámicos.
- 📱 100% responsive, con especial cuidado en navegación, formularios y galerías en mobile.
- 🐳 Dockerfile multi-stage listo para self-hosting, además de despliegue nativo en Vercel.

## 🛠️ Stack técnico

| Categoría | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Iconos | lucide-react |
| Tema | next-themes |
| Email | Resend |
| Contenedores | Docker / docker-compose |
| Hosting | Vercel (free tier) |

## 🚀 Empezar en local

```bash
git clone https://github.com/EHM2396/portafolio.git
cd portafolio
npm install
cp .env.local.example .env.local   # agrega tu RESEND_API_KEY
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Variables de entorno

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de [resend.com](https://resend.com) usada por `src/app/api/contact/route.ts` para enviar los mensajes del formulario de contacto. |

## 🐳 Correr con Docker

```bash
docker compose up -d --build
```

Sirve la build de producción en [http://localhost:3000](http://localhost:3000), leyendo las variables de `.env.local`.

## ☁️ Despliegue

Optimizado para el plan gratuito de [Vercel](https://vercel.com/new): se importa el repositorio, se agrega `RESEND_API_KEY` como variable de entorno y cada push a `master` se despliega automáticamente.

## 📂 Estructura del proyecto

```
src/
├── app/                  # Rutas (App Router): home, /proyectos/[slug], sitemap, robots, api/contact
├── components/
│   ├── sections/         # Hero, Services, AiSection, Projects, Technologies, Experience, HowIWork, Contact, Footer, Navbar
│   └── ui/               # Primitivos reutilizables (Button, Card, Badge, Container, Reveal...)
├── data/                 # Contenido del sitio: proyectos, servicios, tecnologías, experiencia
├── i18n/                 # Contexto de idioma y diccionario de traducciones
├── types/                # Tipos compartidos (Project, Locale...)
└── lib/                  # Utilidades
```

Agregar un proyecto nuevo al portafolio es tan simple como añadir un objeto a `src/data/projects.ts` — la interfaz `Project` fuerza a completar problema, solución, features, tecnologías, estado y participación real en el proyecto.

## 📄 Licencia

MIT — puedes usar este proyecto como referencia para el tuyo propio.

---

<div align="center">

Hecho por **Erick Herrera Muñoz** · Full Stack Developer · Colombia

</div>
