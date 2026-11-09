import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  ShoppingCart,
  Database,
  ShieldCheck,
  CreditCard,
  Settings2,
} from 'lucide-react';

import './project-case-study.css';
import CaseStudyGallery from '../components/CaseStudyGallery';

const ASSETS = '/assets/projects/pn-impresion-3d';

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Prisma',
  'PostgreSQL',
  'Stripe',
  'Cloudinary',
  'Railway',
];

const features = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce completo',
    description:
      'Catálogo dinámico, fichas de producto, variantes, carrito y flujo de compra.',
  },
  {
    icon: Settings2,
    title: 'Administración personalizada',
    description:
      'Gestión de productos, categorías, borradores, presupuestos y pedidos.',
  },
  {
    icon: Database,
    title: 'Persistencia de datos',
    description:
      'Modelado y gestión de información mediante Prisma y PostgreSQL.',
  },
  {
    icon: CreditCard,
    title: 'Pagos integrados',
    description:
      'Integración de Stripe para procesar pagos y gestionar confirmaciones.',
  },
  {
    icon: ShieldCheck,
    title: 'Autenticación',
    description:
      'Acceso a cuentas de usuario y protección de funcionalidades administrativas.',
  },
  {
    icon: Layers3,
    title: 'Productos personalizados',
    description:
      'Formularios de presupuesto y opciones para productos bajo demanda.',
  },
];

const gallery = [
  {
    src: `${ASSETS}/catalogo.png`,
    title: 'Catálogo de productos',
    description:
      'Exploración del catálogo mediante categorías y tarjetas de producto.',
    alt: 'Catálogo de PN Impresión 3D con categorías y productos impresos en 3D.',
  },
  {
    src: `${ASSETS}/ficha-producto.png`,
    title: 'Ficha individual de producto',
    description:
      'Galería de imágenes, información del producto y presentación de sus características.',
    alt: 'Ficha de un portallaves con bandeja organizadora en PN Impresión 3D.',
  },
  {
    src: `${ASSETS}/carrito.png`,
    title: 'Carrito y proceso de compra',
    description:
      'Resumen del pedido, opciones de entrega, notas y condiciones de compra.',
    alt: 'Carrito de PN Impresión 3D con producto, modalidad de entrega y resumen de importes.',
  },
  {
    src: `${ASSETS}/panel-admin.png`,
    title: 'Panel de administración',
    description:
      'Herramientas internas para gestionar el catálogo y las operaciones de la tienda.',
    alt: 'Panel administrativo con productos, categorías, presupuestos y pedidos.',
  },
];

function ProjectPn3D() {
  useEffect(() => {
    document.title = 'PN Impresión 3D | Caso práctico Full Stack - Manuel Ríos';

    return () => {
      document.title = 'Manuel Ríos | Desarrollador Web Full Stack';
    };
  }, []);

  return (
    <main className='case-study' id='main-content'>
      <div className='case-study-container'>
        <div className='case-study-navigation'>
          <Link to='/#projects' className='case-study-back'>
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <span className='case-study-index'>CASO PRÁCTICO / 01</span>
        </div>

        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PROYECTO PARA CLIENTE</span>
            <span className='case-study-kicker-dot' />
            <span>ECOMMERCE FULL STACK</span>
            <span className='case-study-kicker-dot' />
            <span>2026</span>
          </div>

          <h1>
            PN Impresión <span>3D.</span>
          </h1>

          <p className='case-study-lead'>
            Desarrollo de una plataforma ecommerce para un negocio de impresión
            3D, diseñada para gestionar productos, personalizaciones, pedidos y
            ventas desde una solución propia.
          </p>

          <div className='case-study-actions'>
            <a
              href='https://pn3d.es'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-primary'
            >
              Visitar tienda real
              <ArrowUpRight size={18} />
            </a>

            <a
              href='https://pn3d.es/tienda'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-secondary'
            >
              Explorar catálogo
              <ExternalLink size={17} />
            </a>
          </div>
        </header>

        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/home-completa.webp`}
            alt='Portada real del ecommerce PN Impresión 3D.'
            fetchPriority='high'
          />
          <figcaption>
            Interfaz principal de la tienda online PN Impresión 3D.
          </figcaption>
        </figure>

        <div className='case-study-facts'>
          <div>
            <span>TIPO DE PROYECTO</span>
            <strong>Ecommerce para cliente</strong>
          </div>
          <div>
            <span>MI PAPEL</span>
            <strong>Desarrollo Full Stack</strong>
          </div>
          <div>
            <span>PERIODO</span>
            <strong>2026</strong>
          </div>
          <div>
            <span>ESTADO</span>
            <strong>En producción y evolución</strong>
          </div>
        </div>

        <section className='case-study-section case-study-story'>
          <div className='case-study-section-label'>01 / EL CONTEXTO</div>

          <div className='case-study-section-content'>
            <h2>Una tienda adaptada a un negocio real.</h2>

            <p>
              PN Impresión 3D necesitaba un canal de venta que permitiera
              presentar productos impresos en 3D, recibir pedidos y atender
              solicitudes de fabricación personalizada.
            </p>

            <p>
              El reto no consistía únicamente en diseñar una web atractiva.
              También había que desarrollar las herramientas necesarias para
              gestionar el catálogo, las variantes, los presupuestos y las
              operaciones del negocio.
            </p>
          </div>
        </section>

        <section className='case-study-section case-study-story'>
          <div className='case-study-section-label'>02 / LA SOLUCIÓN</div>

          <div className='case-study-section-content'>
            <h2>Del escaparate a la gestión integral.</h2>

            <p>
              Desarrollé una aplicación web con Next.js y TypeScript, conectada
              a una base de datos PostgreSQL mediante Prisma.
            </p>

            <p>
              La solución reúne una tienda pública, funcionalidades de compra y
              un panel administrativo desde el que se pueden gestionar
              productos, categorías, pedidos y solicitudes de presupuesto.
            </p>

            <p>
              También integré servicios externos para el procesamiento de pagos,
              almacenamiento de imágenes y despliegue de la aplicación.
            </p>
          </div>
        </section>

        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / FUNCIONALIDADES</div>

          <div className='case-study-section-content'>
            <h2>Más que un catálogo de productos.</h2>

            <div className='case-study-features'>
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className='case-study-feature' key={feature.title}>
                    <div className='case-study-feature-icon'>
                      <Icon size={22} aria-hidden='true' />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className='case-study-section'>
          <div className='case-study-section-label'>04 / STACK TECNOLÓGICO</div>

          <div className='case-study-section-content'>
            <h2>Las herramientas detrás del proyecto.</h2>

            <p>
              Una arquitectura Full Stack que combina interfaz, lógica de
              negocio, persistencia de datos e integraciones externas.
            </p>

            <ul className='case-study-technologies'>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        <CaseStudyGallery images={gallery} />

        <section className='case-study-section case-study-story'>
          <div className='case-study-section-label'>06 / RESULTADO</div>

          <div className='case-study-section-content'>
            <h2>Una aplicación real, en producción.</h2>

            <p>
              El proyecto cuenta con una tienda pública accesible, un sistema de
              gestión interno y un proceso de compra integrado.
            </p>

            <p>
              Su desarrollo me ha permitido trabajar sobre necesidades reales de
              un negocio: modelado de datos, integración de servicios,
              validación de pedidos, experiencia de usuario y mantenimiento de
              una aplicación desplegada.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />
              <span>Proyecto publicado y disponible en pn3d.es.</span>
            </div>
          </div>
        </section>

        <div className='case-study-bottom'>
          <div>
            <span>¿QUIERES VER EL RESULTADO?</span>
            <h2>Explora la tienda en funcionamiento.</h2>
          </div>

          <a
            href='https://pn3d.es'
            target='_blank'
            rel='noopener noreferrer'
            className='case-study-button-primary'
          >
            Visitar PN Impresión 3D
            <ArrowUpRight size={18} />
          </a>
        </div>

        <Link to='/#projects' className='case-study-back case-study-end-back'>
          <ArrowLeft size={17} />
          Volver a todos los proyectos
        </Link>
      </div>
    </main>
  );
}

export default ProjectPn3D;
