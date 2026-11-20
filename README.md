# Portfolio V4 · Manuel Ríos

Portfolio profesional de **Manuel Ríos**, desarrollador web Full Stack. Presenta experiencia, tecnologías y seis casos prácticos de proyectos para clientes, trabajos propios, prácticas profesionales y formación.

**Web:** [manrio.dev](https://manrio.dev) · **Código:** [GitHub / ManRio](https://github.com/ManRio)

## Tecnologías del portfolio

- **React 19** y **Vite 6**.
- **JavaScript**, **Tailwind CSS 3** y CSS personalizado.
- **React Router 7** para navegación y rutas de los proyectos.
- **Framer Motion**, **Lucide React** y **React Icons**.
- **EmailJS** para el formulario de contacto.
- **Sharp** para optimizar imágenes y **sitemap** para generar el mapa del sitio.

> Las tecnologías de los proyectos que aparecen en el portfolio son independientes del stack usado para construir esta web.

## Proyectos

| Caso práctico | Descripción | Ruta |
| --- | --- | --- |
| **PN Impresión 3D** | Ecommerce Full Stack desarrollado para un cliente; Next.js, TypeScript, Prisma, PostgreSQL y Stripe. | `/projects/pn-impresion-3d` |
| **VeriFactu App** | Aplicación de gestión comercial en desarrollo; React, TypeScript, FastAPI y PostgreSQL. No representa una solución que acredite cumplimiento VERI*FACTU. | `/projects/verifactu-app` |
| **StockIt** | Gestión de inventario y ventas; Java, Spring Boot, React y MySQL. | `/projects/stockit` |
| **ORO Manager** | Participación en desarrollo de gestión interna, gamificación y automatizaciones durante las prácticas profesionales en Grupo Oro. | `/projects/ProjectOroManager` |
| **IntercalaPDF** | Herramienta para intercalar páginas de dos PDF, con inversión opcional y procesamiento local. | `/projects/intercala-pdf` |
| **Task Gamification** | Proyecto educativo con gestión de tareas, puntos y recompensas; backend Flask y trabajo de interfaz con Vue. | `/projects/ProjectTaskGamification` |

Los casos prácticos incorporan descripciones técnicas, contexto, aprendizajes, enlaces cuando están disponibles y galerías de capturas.

## Características de V4

- Diseño responsive con secciones de presentación, sobre mí, experiencia, proyectos y contacto.
- Catálogo centralizado en `src/data/projects.js`, con **3 proyectos destacados y 3 adicionales**.
- Páginas de caso práctico con estilos y galería reutilizables.
- **Carga diferida de las rutas** con `React.lazy()` y `Suspense`.
- Imágenes optimizadas en **WebP** y miniaturas para las galerías.
- Metadatos por ruta (título, descripción, canonical, Open Graph y Twitter), con catálogo común en `src/data/seo-pages.js`.
- Generación automática de `sitemap.xml`, `robots.txt` y documentos HTML con metadatos específicos para los seis casos prácticos.
- Navegación desde enlaces antiguos de proyectos hacia el índice principal.

**Nota SEO:** los documentos específicos de los proyectos contienen metadatos estáticos, pero el contenido React sigue renderizándose en el navegador. No se trata de prerenderizado completo de cada página.

## Ejecutar en local

Se requiere Node.js y npm.

```bash
git clone https://github.com/ManRio/portfoliov3.git
cd portfoliov3
npm ci
npm run dev
```

Vite mostrará la URL de desarrollo, normalmente `http://localhost:5173/`.

Para trabajar con V4 antes de integrarla en la rama principal:

```bash
git switch feature/portfolio-v4
npm ci
```

### Comprobación y compilación

```bash
npm run lint
npm run build
npm run preview
```

El build genera `dist/`; el script `postbuild` añade el sitemap, el archivo robots y los HTML SEO de los proyectos. **No es necesario subir `dist/` al repositorio.**

### Optimización de imágenes

```bash
node scripts/optimize-portfolio-images.mjs
node scripts/optimize-case-study-images.mjs
```

Estos scripts trabajan sobre imágenes de `public/assets/`. Se recomienda revisar los archivos resultantes antes de incluirlos en un commit.

## Estructura básica

```text
public/
  assets/
    projects/                   # Capturas, portadas y miniaturas
src/
  components/                   # Navbar, Footer, SEO, galería...
  data/
    projects.js                 # Catálogo de proyectos
    seo-pages.js                # Metadatos por ruta
  pages/                        # Seis casos prácticos
  sections/                     # Secciones de la portada
  App.jsx                       # Enrutado y carga diferida
scripts/
  generate-sitemap.mjs
  generate-robots.mjs
  generate-seo-pages.mjs
  optimize-portfolio-images.mjs
  optimize-case-study-images.mjs
vercel.json                     # Rewrites para HTML SEO y SPA
```

## Despliegue

La web se aloja en **Vercel**. El proyecto de Vercel debe utilizar:

- Repositorio: `ManRio/portfoliov3`.
- Rama de producción: `main`.
- Framework: **Vite**.
- Comando de compilación: `npm run build`.
- Directorio de salida: `dist`.

Los rewrites de `vercel.json` sirven los HTML SEO específicos en las solicitudes directas a cada proyecto, manteniendo el enrutado React para la navegación interna.

Antes de publicar cambios conviene verificar `npm run lint`, `npm run build` y las rutas principales. Las previews de Vercel pueden estar protegidas por autenticación y, en ese caso, una petición externa recibe la página de acceso en lugar del HTML del portfolio.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/manuelriosdev)
- [GitHub](https://github.com/ManRio)
- [Portfolio](https://manrio.dev)

---

Desarrollado por Manuel Ríos.
