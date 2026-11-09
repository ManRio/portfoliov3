/**
 * Portfolio V4
 * Catálogo centralizado de proyectos.
 *
 * Los enlaces y capturas se incorporan solamente
 * cuando están disponibles y verificados.
 */

export const projects = [
  {
    id: 'pn-impresion-3d',
    slug: 'pn-impresion-3d',
    title: 'PN Impresión 3D',
    subtitle: 'Ecommerce Full Stack',
    category: 'Proyecto para cliente',
    featured: true,
    order: 1,
    status: 'En desarrollo',

    description:
      'Plataforma ecommerce para un negocio de impresión 3D, ' +
      'con catálogo, gestión de productos, pedidos, clientes ' +
      'y herramientas de administración.',

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'Cloudinary',
    ],

    highlights: [
      'Catálogo de productos y variantes',
      'Panel de administración',
      'Autenticación y gestión de clientes',
      'Pedidos e integración de servicios externos',
    ],

    image: '/assets/projects/pn-impresion-3d/portada.webp',
    demoUrl: 'https://pn3d.es',
    repositoryUrl: 'https://github.com/ManRio/pn-impresion-3d',
    caseStudyUrl: '/projects/pn-impresion-3d',
  },

  {
    id: 'verifactu-app',
    slug: 'verifactu-app',
    title: 'VeriFactu App',
    subtitle: 'Gestión comercial y facturación',
    category: 'Proyecto propio',
    featured: true,
    order: 2,
    status: 'En desarrollo',

    description:
      'Aplicación de gestión comercial con productos, clientes, ' +
      'pedidos, albaranes y facturas. Arquitectura backend ' +
      'por capas, autenticación y pruebas automatizadas.',

    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'SQLAlchemy',
      'Pytest',
      'Docker',
    ],

    highlights: [
      'API REST y arquitectura por capas',
      'Autenticación y aislamiento multiempresa',
      'Gestión de pedidos, albaranes y facturas',
      'Pruebas automatizadas',
    ],

    image: null,
    demoUrl: null,
    repositoryUrl: 'https://github.com/ManRio/verifactu-app',
    caseStudyUrl: '/projects/verifactu-app',
  },

  {
    id: 'stockit',
    slug: 'stockit',
    title: 'StockIt',
    subtitle: 'Gestión de inventario y ventas',
    category: 'Proyecto académico',
    featured: true,
    order: 3,
    status: 'Proyecto desarrollado',

    description:
      'Aplicación para la gestión de productos, usuarios ' +
      'e inventario, con backend desarrollado en Java ' +
      'y Spring Boot y frontend con React.',

    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API'],

    highlights: [
      'Gestión de productos e inventario',
      'Backend con Spring Boot',
      'Persistencia mediante MySQL',
      'Integración frontend y API REST',
    ],

    image: '/assets/LogoStockIt.png',
    demoUrl: null,
    repositoryUrl: 'https://github.com/ManRio/StockIt',
    caseStudyUrl: '/projects/stockit',
  },

  {
    id: 'oro-manager',
    slug: 'oro-manager',
    title: 'ORO Manager',
    subtitle: 'Gestión de empleados y gamificación',
    category: 'Prácticas profesionales',
    featured: false,
    order: 4,
    status: 'Proyecto desarrollado',

    description:
      'Aplicación interna de gestión de empleados ' +
      'en cuyo desarrollo participé durante mis prácticas ' +
      'profesionales en Grupo Oro.',

    technologies: ['React', 'TypeScript', 'Firebase', 'n8n'],

    highlights: [
      'Interfaces de gestión interna',
      'Funcionalidades de tareas y gamificación',
      'Automatización de procesos',
    ],

    image: '/assets/OroManager.png',
    demoUrl: null,
    repositoryUrl: 'https://github.com/ManRio/OroManager',
    caseStudyUrl: '/projects/ProjectOroManager',
  },

  {
    id: 'task-gamification',
    slug: 'task-gamification',
    title: 'Task Gamification',
    subtitle: 'Gamificación educativa',
    category: 'Proyecto propio',
    featured: false,
    order: 5,
    status: 'Proyecto en evolución',

    description:
      'Aplicación de gamificación para la gestión ' +
      'de tareas, recompensas y seguimiento de alumnos ' +
      'y profesores.',

    technologies: ['Vue.js', 'Python', 'Flask', 'SQLite', 'JWT'],

    highlights: [
      'Gestión de tareas y recompensas',
      'Roles de alumnos y profesores',
      'Autenticación con JWT',
    ],

    image: '/assets/landing_task_gamification.png',
    demoUrl: null,
    repositoryUrl: 'https://github.com/ManRio/task_gamification',
    caseStudyUrl: '/projects/ProjectTaskGamification',
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.order - b.order);

export const otherProjects = projects
  .filter((project) => !project.featured)
  .sort((a, b) => a.order - b.order);
