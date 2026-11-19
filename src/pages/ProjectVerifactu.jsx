import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Layers3,
  ShieldCheck,
  Database,
  Package,
  ClipboardList,
  Truck,
  FileText,
  FlaskConical,
} from 'lucide-react';

import CaseStudyGallery from '../components/CaseStudyGallery';
import './project-case-study.css';

const ASSETS = '/assets/projects/verifactu-app';

const technologies = [
  'Python',
  'FastAPI',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'SQLAlchemy',
  'Alembic',
  'Pytest',
  'Docker',
];

const features = [
  {
    icon: Package,
    title: 'Catálogo de productos',
    description:
      'Alta, edición y activación de productos con SKU, precio e impuestos.',
  },
  {
    icon: Database,
    title: 'Gestión de clientes',
    description:
      'Registro de clientes y datos comerciales asociados a cada negocio.',
  },
  {
    icon: ClipboardList,
    title: 'Gestión de pedidos',
    description:
      'Pedidos con líneas, cálculos de importes y estados de borrador, confirmado o cancelado.',
  },
  {
    icon: Truck,
    title: 'Control de entregas',
    description:
      'Albaranes asociados a pedidos, entregas parciales y prevención de sobreentregas.',
  },
  {
    icon: FileText,
    title: 'Backend de facturación',
    description:
      'Borradores, emisión de facturas, numeración por serie y conservación de datos históricos.',
  },
  {
    icon: ShieldCheck,
    title: 'Autenticación y aislamiento',
    description:
      'Autenticación JWT y separación de los datos por negocio mediante business_id.',
  },
];

const gallery = [
  {
    src: `${ASSETS}/productos.webp`,
    thumbnail: `${ASSETS}/thumbs/productos.webp`,
    title: 'Catálogo y paginación',
    description:
      'Listado de productos con precio, IVA, estado, acciones y paginación.',
    alt: 'Pantalla de productos de VeriFactu App con 32 registros y paginación.',
  },
  {
    src: `${ASSETS}/clientes.webp`,
    thumbnail: `${ASSETS}/thumbs/clientes.webp`,
    title: 'Gestión de clientes',
    description:
      'Información comercial, datos de contacto y estado de los clientes.',
    alt: 'Pantalla de clientes de VeriFactu App con tabla de datos comerciales.',
  },
  {
    src: `${ASSETS}/pedidos.webp`,
    thumbnail: `${ASSETS}/thumbs/pedidos.webp`,
    title: 'Pedidos y estados',
    description:
      'Pedidos con líneas, importes, impuestos y estados del ciclo comercial.',
    alt: 'Pantalla de pedidos de VeriFactu App mostrando pedidos confirmados y cancelados.',
  },
  {
    src: `${ASSETS}/albaranes.webp`,
    thumbnail: `${ASSETS}/thumbs/albaranes.webp`,
    title: 'Albaranes y entregas',
    description:
      'Seguimiento de las entregas asociadas a pedidos y sus estados.',
    alt: 'Pantalla de albaranes de VeriFactu App con entregas y estados.',
  },
  {
    src: `${ASSETS}/login.webp`,
    thumbnail: `${ASSETS}/thumbs/login.webp`,
    title: 'Acceso a la aplicación',
    description:
      'Formulario de inicio de sesión conectado a la autenticación del backend.',
    alt: 'Pantalla de inicio de sesión de VeriFactu App.',
  },
];

function ProjectVerifactu() {
  useEffect(() => {
    document.title = 'VeriFactu App | Caso práctico Full Stack - Manuel Ríos';

    return () => {
      document.title = 'Manuel Ríos | Desarrollador Web Full Stack';
    };
  }, []);

  return (
    <main className='case-study' id='main-content'>
      <div className='case-study-container'>
        {/* NAVEGACIÓN */}
        <div className='case-study-navigation'>
          <Link to='/#projects' className='case-study-back'>
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <span className='case-study-index'>CASO PRÁCTICO / 03</span>
        </div>

        {/* CABECERA */}
        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PROYECTO PROPIO</span>
            <span className='case-study-kicker-dot' />
            <span>FULL STACK</span>
            <span className='case-study-kicker-dot' />
            <span>EN DESARROLLO</span>
          </div>

          <h1>
            VeriFactu <span>App.</span>
          </h1>

          <p className='case-study-lead'>
            Aplicación web de gestión comercial y facturación orientada a
            pequeños negocios, desarrollada con React, TypeScript, FastAPI y
            PostgreSQL. Un proyecto centrado en la arquitectura de software, las
            reglas de negocio y la calidad del código.
          </p>

          <div className='case-study-actions'>
            <a
              href='https://github.com/ManRio/verifactu-app'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-primary'
            >
              Ver repositorio en GitHub
              <ArrowUpRight size={18} />
            </a>

            <a
              href='https://github.com/ManRio/verifactu-app#readme'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-secondary'
            >
              Documentación técnica
              <ExternalLink size={17} />
            </a>
          </div>
        </header>

        {/* PORTADA */}
        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/productos.webp`}
            alt='Panel de productos de VeriFactu App con navegación lateral y catálogo paginado.'
            fetchPriority='high'
          />

          <figcaption>
            Interfaz de gestión comercial de VeriFactu App.
          </figcaption>
        </figure>

        {/* FICHA RÁPIDA */}
        <div className='case-study-facts'>
          <div>
            <span>TIPO DE PROYECTO</span>
            <strong>Aplicación Full Stack</strong>
          </div>

          <div>
            <span>MI PAPEL</span>
            <strong>Diseño y desarrollo</strong>
          </div>

          <div>
            <span>STACK PRINCIPAL</span>
            <strong>React · FastAPI · PostgreSQL</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>En desarrollo</strong>
          </div>
        </div>

        {/* 01 - CONTEXTO */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>01 / EL CONTEXTO</div>

          <div className='case-study-section-content'>
            <h2>Una misma aplicación para gestionar el ciclo comercial.</h2>

            <p>
              Los pequeños negocios necesitan organizar productos, clientes,
              pedidos, entregas y facturas, manteniendo la relación entre los
              distintos documentos comerciales.
            </p>

            <p>
              El objetivo de este proyecto es desarrollar una aplicación
              mantenible que permita gestionar ese proceso de forma coherente,
              desde el pedido inicial hasta la facturación.
            </p>

            <p>
              VeriFactu App también funciona como un proyecto técnico para
              trabajar con arquitectura backend por capas, reglas de negocio,
              persistencia de datos, autenticación y pruebas automatizadas.
            </p>
          </div>
        </section>

        {/* 02 - SOLUCIÓN */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>02 / LA SOLUCIÓN</div>

          <div className='case-study-section-content'>
            <h2>Del producto al documento comercial.</h2>

            <p>
              La aplicación organiza la información alrededor de un flujo que
              conecta clientes, productos, pedidos, albaranes y facturas.
            </p>

            <p>
              Los pedidos permiten seleccionar productos, calcular importes y
              confirmar operaciones. Los albaranes registran las entregas
              realizadas y controlan las cantidades pendientes.
            </p>

            <p>
              El backend de facturación permite preparar y emitir facturas a
              partir de albaranes confirmados, manteniendo información histórica
              del documento.
            </p>

            <div className='case-study-result'>
              <Layers3 size={22} />
              <span>
                Flujo de negocio: Cliente → Pedido → Albarán → Factura → Pago.
                Los módulos de Pagos y el frontend de Facturas siguen en
                desarrollo.
              </span>
            </div>
          </div>
        </section>

        {/* 03 - FUNCIONALIDADES */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / FUNCIONALIDADES</div>

          <div className='case-study-section-content'>
            <h2>Más allá de un CRUD.</h2>

            <p>
              El proyecto combina operaciones habituales de gestión con reglas
              de negocio que condicionan cómo pueden crearse, confirmarse o
              cancelarse los documentos.
            </p>

            <div className='case-study-features'>
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article key={feature.title} className='case-study-feature'>
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

        {/* 04 - ARQUITECTURA */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>04 / ARQUITECTURA</div>

          <div className='case-study-section-content'>
            <h2>Una base preparada para evolucionar.</h2>

            <p>
              El backend está desarrollado con FastAPI y organizado en capas que
              separan los endpoints HTTP, las reglas de negocio y el acceso a
              los datos.
            </p>

            <p>
              La capa Service concentra las operaciones de negocio y los límites
              transaccionales. Repository encapsula las consultas y la
              persistencia mediante SQLAlchemy. PostgreSQL almacena la
              información y Alembic gestiona las migraciones.
            </p>

            <div className='case-study-result'>
              <Database size={22} />
              <span>
                Router → Service → Repository → SQLAlchemy → PostgreSQL
              </span>
            </div>

            <p>
              El frontend utiliza React y TypeScript para gestionar los módulos
              de productos, clientes, pedidos y albaranes, con navegación
              compartida entre pantallas.
            </p>

            <ul className='case-study-technologies'>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 - DEMOSTRACIÓN */}
        <CaseStudyGallery
          images={gallery}
          sectionLabel='05 / DEMOSTRACIÓN'
          title='La gestión comercial por dentro.'
          description='Capturas reales de los módulos desarrollados, mostrando el catálogo, los clientes, los pedidos, las entregas y el acceso a la aplicación.'
        />

        {/* 06 - RETOS TÉCNICOS */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>06 / RETOS TÉCNICOS</div>

          <div className='case-study-section-content'>
            <h2>Las reglas importan tanto como la interfaz.</h2>

            <p>
              Uno de los retos ha sido implementar el control de entregas
              parciales. La aplicación comprueba las cantidades previamente
              entregadas para impedir que se confirme un albarán que exceda las
              unidades pedidas.
            </p>

            <p>
              Otro aspecto importante es el aislamiento multiempresa. La
              autenticación utiliza JWT y los recursos se asocian al negocio
              correspondiente mediante business_id.
            </p>

            <p>
              También he trabajado en las reglas de facturación del backend,
              incluyendo la numeración correlativa por serie, los datos
              históricos de las facturas y la inmutabilidad tras su emisión.
            </p>

            <div className='case-study-result'>
              <FlaskConical size={22} />
              <span>
                El repositorio documenta pruebas automatizadas de Repository,
                Service y API con Pytest.
              </span>
            </div>
          </div>
        </section>

        {/* 07 - ESTADO ACTUAL */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>07 / ESTADO ACTUAL</div>

          <div className='case-study-section-content'>
            <h2>Un proyecto funcional que sigue creciendo.</h2>

            <p>
              Los módulos de Productos, Clientes, Pedidos y Albaranes cuentan
              con backend y frontend desarrollados. El backend de Facturas
              también está implementado, mientras que su interfaz continúa
              pendiente.
            </p>

            <p>
              Entre las siguientes mejoras están la paginación reutilizable en
              los listados, el módulo de Pagos y la integración de
              funcionalidades fiscales específicas.
            </p>

            <p>
              Aunque el nombre del proyecto hace referencia a VERI*FACTU, la
              aplicación todavía no implementa ni acredita el cumplimiento de
              sus requisitos técnicos y normativos.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />
              <span>
                Código fuente disponible en GitHub. Proyecto en desarrollo y sin
                demo pública habilitada actualmente.
              </span>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <div className='case-study-bottom'>
          <div>
            <span>EXPLORA EL DESARROLLO</span>

            <h2>Arquitectura, reglas de negocio y código.</h2>
          </div>

          <a
            href='https://github.com/ManRio/verifactu-app'
            target='_blank'
            rel='noopener noreferrer'
            className='case-study-button-primary'
          >
            Explorar repositorio
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

export default ProjectVerifactu;
