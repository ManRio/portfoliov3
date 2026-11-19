import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Package,
  ShoppingCart,
  Users,
  ChartNoAxesCombined,
  ShieldCheck,
  Database,
} from 'lucide-react';

import CaseStudyGallery from '../components/CaseStudyGallery';
import './project-case-study.css';

const technologies = [
  'Java 17',
  'Spring Boot',
  'Spring Security',
  'Spring Data JPA',
  'MySQL',
  'React',
  'JavaScript',
  'Tailwind CSS',
  'JWT',
  'REST API',
];

const features = [
  {
    icon: Package,
    title: 'Gestión de inventario',
    description:
      'Administración de productos y seguimiento de la información del catálogo.',
  },
  {
    icon: ShoppingCart,
    title: 'Registro de ventas',
    description:
      'Gestión de operaciones comerciales relacionadas con los productos.',
  },
  {
    icon: Users,
    title: 'Gestión de usuarios',
    description: 'Modelo de usuarios con roles de administrador y empleado.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Dashboard y reportes',
    description: 'Presentación visual de información de ventas e inventario.',
  },
  {
    icon: ShieldCheck,
    title: 'Autenticación JWT',
    description:
      'Acceso a la aplicación mediante autenticación y mecanismos de seguridad en Spring.',
  },
  {
    icon: Database,
    title: 'Persistencia relacional',
    description: 'Backend con Spring Data JPA y almacenamiento mediante MySQL.',
  },
];

const ASSETS = '/assets/projects/stockit';

const gallery = [
  {
    src: `${ASSETS}/landing.webp`,
    thumbnail: `${ASSETS}/thumbs/landing.webp`,
    title: 'Presentación de StockIt',
    description: 'Pantalla principal de presentación de la aplicación.',
    alt: 'Página de presentación del sistema StockIt.',
  },
  {
    src: `${ASSETS}/login.webp`,
    thumbnail: `${ASSETS}/thumbs/login.webp`,
    title: 'Acceso de usuarios',
    description: 'Formulario de autenticación de la aplicación.',
    alt: 'Pantalla de inicio de sesión de StockIt.',
  },
  {
    src: `${ASSETS}/gestion.webp`,
    thumbnail: `${ASSETS}/thumbs/gestion.webp`,
    title: 'Gestión de inventario',
    description: 'Interfaz de administración del inventario.',
    alt: 'Pantalla de gestión del inventario de StockIt.',
  },
  {
    src: `${ASSETS}/logo.webp`,
    thumbnail: `${ASSETS}/thumbs/logo.webp`,
    title: 'Identidad del proyecto',
    description: 'Identidad visual desarrollada para StockIt.',
    alt: 'Logotipo de la aplicación StockIt.',
  },
];

function ProjectStockIt() {
  useEffect(() => {
    document.title = 'StockIt | Caso práctico Java y Spring Boot - Manuel Ríos';

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

          <span className='case-study-index'>CASO PRÁCTICO / 04</span>
        </div>

        {/* CABECERA */}
        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PROYECTO ACADÉMICO</span>
            <span className='case-study-kicker-dot' />
            <span>DESARROLLO FULL STACK</span>
            <span className='case-study-kicker-dot' />
            <span>DAW</span>
          </div>

          <h1>
            Stock<span>It.</span>
          </h1>

          <p className='case-study-lead'>
            Aplicación web de gestión de inventario orientada a pequeñas y
            medianas empresas, desarrollada con Java, Spring Boot, React y MySQL
            como proyecto de Desarrollo de Aplicaciones Web.
          </p>

          <div className='case-study-actions'>
            <a
              href='https://github.com/ManRio/StockIt'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-primary'
            >
              Ver código en GitHub
              <ArrowUpRight size={18} />
            </a>

            <a
              href='https://github.com/ManRio/StockIt/blob/master/README_StockIt.md'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-secondary'
            >
              Documentación del proyecto
              <ExternalLink size={17} />
            </a>
          </div>
        </header>

        {/* PORTADA */}
        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/portada.webp`}
            alt='Portada del proyecto StockIt.'
            fetchPriority='high'
          />

          <figcaption>Panel de gestión de StockIt.</figcaption>
        </figure>

        {/* DATOS PRINCIPALES */}
        <div className='case-study-facts'>
          <div>
            <span>TIPO DE PROYECTO</span>
            <strong>Proyecto académico</strong>
          </div>

          <div>
            <span>MI PAPEL</span>
            <strong>Desarrollo Full Stack</strong>
          </div>

          <div>
            <span>BACKEND</span>
            <strong>Java · Spring Boot</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>Proyecto desarrollado</strong>
          </div>
        </div>

        {/* 01 - CONTEXTO */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>01 / EL CONTEXTO</div>

          <div className='case-study-section-content'>
            <h2>Simplificar el control del inventario.</h2>

            <p>
              La gestión manual de productos, existencias y ventas puede
              provocar errores y dificultar el seguimiento de las operaciones de
              un pequeño negocio.
            </p>

            <p>
              StockIt nació como proyecto académico con el objetivo de explorar
              una solución web que centralizara estas tareas y facilitara el
              acceso a la información.
            </p>
          </div>
        </section>

        {/* 02 - SOLUCIÓN */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>02 / LA SOLUCIÓN</div>

          <div className='case-study-section-content'>
            <h2>Una aplicación para organizar productos y operaciones.</h2>

            <p>
              El proyecto combina una interfaz desarrollada con React con una
              API REST construida utilizando Spring Boot.
            </p>

            <p>
              La aplicación está orientada a gestionar productos, registrar
              ventas, administrar usuarios y consultar información mediante
              paneles y reportes.
            </p>

            <p>
              MySQL se utiliza para almacenar los datos, mientras que Spring
              Data JPA permite trabajar con las entidades de dominio desde el
              backend.
            </p>
          </div>
        </section>

        {/* 03 - FUNCIONALIDADES */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / FUNCIONALIDADES</div>

          <div className='case-study-section-content'>
            <h2>Gestión comercial desde una misma interfaz.</h2>

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

        {/* 04 - DESARROLLO TÉCNICO */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>
            04 / DESARROLLO TÉCNICO
          </div>

          <div className='case-study-section-content'>
            <h2>Java y Spring Boot como base del sistema.</h2>

            <p>
              El backend utiliza Java 17 y Spring Boot, junto a Spring Security
              para la seguridad y Spring Data JPA para la persistencia.
            </p>

            <p>
              La comunicación con el frontend se plantea mediante una API REST y
              la información se almacena en MySQL.
            </p>

            <p>
              El desarrollo permitió trabajar con entidades de dominio,
              operaciones de negocio, autenticación JWT y la integración entre
              cliente y servidor.
            </p>

            <ul className='case-study-technologies'>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 - GALERÍA */}
        <CaseStudyGallery
          images={gallery}
          sectionLabel='05 / DEMOSTRACIÓN'
          title='StockIt por dentro.'
          description='Capturas del proyecto académico: presentación, acceso de usuarios, panel de administración y herramientas de gestión.'
        />

        {/* 06 - APRENDIZAJES */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>06 / APRENDIZAJES</div>

          <div className='case-study-section-content'>
            <h2>Un proyecto clave en mi formación.</h2>

            <p>
              StockIt me permitió desarrollar una aplicación que conecta una
              interfaz web, una API y una base de datos relacional.
            </p>

            <p>
              El trabajo con Java y Spring Boot reforzó mis conocimientos de
              programación orientada a objetos, persistencia, seguridad y
              desarrollo de servicios REST.
            </p>

            <p>
              También sirvió como experiencia de integración Full Stack,
              abordando necesidades de negocio desde distintos componentes de la
              aplicación.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />
              <span>
                Proyecto académico desarrollado con código disponible en GitHub.
              </span>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <div className='case-study-bottom'>
          <div>
            <span>EXPLORA EL PROYECTO</span>

            <h2>Una aplicación Full Stack construida con Java.</h2>
          </div>

          <a
            href='https://github.com/ManRio/StockIt'
            target='_blank'
            rel='noopener noreferrer'
            className='case-study-button-primary'
          >
            Explorar StockIt en GitHub
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

export default ProjectStockIt;
