import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://manrio.dev';

const DEFAULT_TITLE = 'Manuel Ríos | Desarrollador Web Full Stack';

const DEFAULT_DESCRIPTION =
  'Portfolio de Manuel Ríos, desarrollador web Full Stack en Sevilla. Proyectos reales con React, Next.js, TypeScript, Python y tecnologías backend.';

const DEFAULT_IMAGE = '/og-image.jpg';

const pages = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },

  '/projects/pn-impresion-3d': {
    title: 'PN Impresión 3D | Ecommerce Full Stack - Manuel Ríos',
    description:
      'Caso práctico de PN Impresión 3D: desarrollo de un ecommerce real con Next.js, TypeScript, PostgreSQL, Prisma y Stripe.',
    image: '/assets/projects/pn-impresion-3d/portada.webp',
  },

  '/projects/verifactu-app': {
    title: 'VeriFactu App | React y FastAPI - Manuel Ríos',
    description:
      'Desarrollo de una aplicación de gestión comercial con React, TypeScript, FastAPI, Python y PostgreSQL. Proyecto Full Stack en evolución.',
    image: '/assets/projects/verifactu-app/productos.webp',
  },

  '/projects/stockit': {
    title: 'StockIt | Java y Spring Boot - Manuel Ríos',
    description:
      'Caso práctico de StockIt, una aplicación de gestión de inventario desarrollada con Java, Spring Boot, React y MySQL.',
    image: '/assets/projects/stockit/portada.webp',
  },

  '/projects/ProjectOroManager': {
    title: 'ORO Manager | Experiencia profesional - Manuel Ríos',
    description:
      'Mi experiencia participando en el desarrollo de ORO Manager durante las prácticas en Grupo Oro: gestión interna, gamificación y automatizaciones.',
    image: '/assets/projects/oro-manager/portada.webp',
  },

  '/projects/intercala-pdf': {
    title: 'IntercalaPDF | Herramienta web - Manuel Ríos',
    description:
      'Desarrollo de IntercalaPDF, una herramienta gratuita para intercalar páginas de dos PDF, con opción de invertir el orden y procesamiento local.',
    image: '/assets/projects/intercala-pdf/portada.webp',
  },

  '/projects/ProjectTaskGamification': {
    title: 'Task Gamification | Flask y Vue - Manuel Ríos',
    description:
      'Proyecto educativo de gamificación con Python, Flask y Vue: tareas, alumnos, recompensas, monedas virtuales y seguimiento del progreso.',
    image: '/assets/projects/task-gamification/portada.webp',
  },
};

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function CanonicalManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname === '/' ? '/' : pathname.replace(/\/+$/, '');

    const page = pages[normalizedPath] ?? pages['/'];

    const isKnownRoute = Object.prototype.hasOwnProperty.call(
      pages,
      normalizedPath,
    );

    // Evitamos inventar una URL canónica para rutas inexistentes.
    if (!isKnownRoute) return;

    const canonical = `${SITE_URL}${normalizedPath}`;

    const image = new URL(page.image ?? DEFAULT_IMAGE, SITE_URL).href;

    document.title = page.title;

    let canonicalLink = document.querySelector('link[rel="canonical"]');

    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonical;

    setMeta('name', 'description', page.description);

    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:image', image);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', image);
  }, [pathname]);

  return null;
}

export default CanonicalManager;
