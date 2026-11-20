import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  GraduationCap,
  ListTodo,
  Coins,
  Gift,
  Trophy,
  ShieldCheck,
} from 'lucide-react';

import CaseStudyGallery from '../components/CaseStudyGallery';
import './project-case-study.css';

const ASSETS = '/assets/projects/task-gamification';

const technologies = [
  'Python',
  'Flask',
  'SQLAlchemy',
  'SQLite',
  'JWT',
  'Vue.js',
  'REST API',
];

const features = [
  {
    icon: GraduationCap,
    title: 'Roles educativos',
    description: 'Funciones diferenciadas para profesores y alumnos.',
  },
  {
    icon: ListTodo,
    title: 'Gestión de tareas',
    description: 'Asignación y seguimiento de actividades educativas.',
  },
  {
    icon: Coins,
    title: 'Moneda virtual',
    description: 'Sistema de puntos que recompensa las tareas completadas.',
  },
  {
    icon: Gift,
    title: 'Recompensas',
    description: 'Catálogo de premios canjeables mediante puntos.',
  },
  {
    icon: Trophy,
    title: 'Rankings y progreso',
    description: 'Seguimiento de la actividad y participación de los alumnos.',
  },
  {
    icon: ShieldCheck,
    title: 'Autenticación',
    description: 'Acceso a los recursos de la API mediante JWT.',
  },
];

const gallery = [
  {
    src: `${ASSETS}/landing.webp`,
    thumbnail: `${ASSETS}/thumbs/landing.webp`,
    title: 'Presentación de la aplicación',
    description: 'Vista principal de Task Gamification.',
    alt: 'Pantalla de presentación de Task Gamification.',
  },
  {
    src: `${ASSETS}/profesor.webp`,
    thumbnail: `${ASSETS}/thumbs/profesor.webp`,
    title: 'Panel del profesor',
    description: 'Interfaz orientada al seguimiento de actividades educativas.',
    alt: 'Panel del profesor de Task Gamification.',
  },
  {
    src: `${ASSETS}/alumno.webp`,
    thumbnail: `${ASSETS}/thumbs/alumno.webp`,
    title: 'Panel del alumno',
    description: 'Vista personal del alumno y su progreso.',
    alt: 'Dashboard del alumno de Task Gamification.',
  },
  {
    src: `${ASSETS}/tareas.webp`,
    thumbnail: `${ASSETS}/thumbs/tareas.webp`,
    title: 'Gestión de tareas',
    description: 'Interfaz para consultar y gestionar actividades.',
    alt: 'Pantalla de tareas de Task Gamification.',
  },
];

function ProjectTaskGamification() {
  return (
    <main className='case-study' id='main-content'>
      <div className='case-study-container'>
        {/* NAVEGACIÓN */}
        <div className='case-study-navigation'>
          <Link to='/#projects' className='case-study-back'>
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <span className='case-study-index'>CASO PRÁCTICO / 06</span>
        </div>

        {/* CABECERA */}
        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PROYECTO PROPIO</span>
            <span className='case-study-kicker-dot' />
            <span>EDUCACIÓN</span>
            <span className='case-study-kicker-dot' />
            <span>GAMIFICACIÓN</span>
          </div>

          <h1>
            Task <span>Gamification.</span>
          </h1>

          <p className='case-study-lead'>
            Aplicación educativa que utiliza mecánicas de gamificación para
            fomentar la participación de los alumnos mediante tareas, puntos,
            recompensas y seguimiento del progreso.
          </p>

          <div className='case-study-actions'>
            <a
              href='https://github.com/ManRio/task_gamification'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-primary'
            >
              Explorar código en GitHub
              <ArrowUpRight size={18} />
            </a>

            <a
              href='https://github.com/ManRio/task_gamification#readme'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-secondary'
            >
              Documentación
              <ExternalLink size={17} />
            </a>
          </div>
        </header>

        {/* PORTADA */}
        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/portada.webp`}
            alt='Pantalla principal de Task Gamification.'
            fetchPriority='high'
          />

          <figcaption>Interfaz del proyecto Task Gamification.</figcaption>
        </figure>

        {/* DATOS */}
        <div className='case-study-facts'>
          <div>
            <span>TIPO DE PROYECTO</span>
            <strong>Aplicación educativa</strong>
          </div>

          <div>
            <span>MI PAPEL</span>
            <strong>Desarrollo Full Stack</strong>
          </div>

          <div>
            <span>BACKEND</span>
            <strong>Python · Flask</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>En evolución</strong>
          </div>
        </div>

        {/* 01 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>01 / EL PROBLEMA</div>

          <div className='case-study-section-content'>
            <h2>Convertir las tareas en objetivos motivadores.</h2>

            <p>
              Mantener la motivación de los alumnos es uno de los retos
              habituales en el aprendizaje.
            </p>

            <p>
              Task Gamification surge como una propuesta para incorporar
              elementos de juego a la gestión de actividades educativas.
            </p>

            <p>
              El propósito es ofrecer una herramienta con la que los profesores
              puedan organizar tareas y los alumnos visualicen su progreso y sus
              recompensas.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>02 / LA SOLUCIÓN</div>

          <div className='case-study-section-content'>
            <h2>Aprender, completar tareas y progresar.</h2>

            <p>
              El proyecto plantea dos experiencias diferenciadas: una para
              profesores y otra para alumnos.
            </p>

            <p>
              Los profesores pueden gestionar actividades y recompensas. Los
              alumnos completan tareas y acumulan monedas virtuales que pueden
              canjear por premios.
            </p>

            <p>
              También se contempla el seguimiento del progreso, la consulta del
              historial y la participación mediante rankings.
            </p>
          </div>
        </section>

        {/* 03 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / FUNCIONALIDADES</div>

          <div className='case-study-section-content'>
            <h2>Gamificación aplicada a la gestión educativa.</h2>

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

        {/* 04 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>
            04 / DESARROLLO TÉCNICO
          </div>

          <div className='case-study-section-content'>
            <h2>Python y Flask como base de la API.</h2>

            <p>
              El backend está desarrollado con Python y Flask, utilizando
              SQLAlchemy para gestionar la persistencia y SQLite como base de
              datos del entorno de desarrollo.
            </p>

            <p>
              La autenticación se basa en JWT, permitiendo trabajar con
              diferentes perfiles de usuario.
            </p>

            <p>
              El proyecto incorpora trabajo de interfaz con Vue, aunque la
              integración completa del frontend continúa en evolución.
            </p>

            <ul className='case-study-technologies'>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 */}
        <CaseStudyGallery
          images={gallery}
          sectionLabel='05 / DEMOSTRACIÓN'
          title='Dos perfiles, una experiencia educativa.'
          description='Capturas de la presentación, los paneles de profesor y alumno y la gestión de tareas.'
        />

        {/* 06 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>06 / APRENDIZAJES</div>

          <div className='case-study-section-content'>
            <h2>Diseñar software pensando en la motivación.</h2>

            <p>
              El desarrollo de Task Gamification me permitió trabajar con lógica
              de negocio, diferentes roles, autenticación y sistemas de
              recompensas.
            </p>

            <p>
              También fue una oportunidad para profundizar en Python, Flask y el
              diseño de APIs conectadas a una interfaz.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />

              <span>
                Backend documentado y desarrollo del frontend en evolución.
              </span>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <div className='case-study-bottom'>
          <div>
            <span>DESCUBRE EL PROYECTO</span>

            <h2>Una forma diferente de gestionar tareas.</h2>
          </div>

          <a
            href='https://github.com/ManRio/task_gamification'
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

export default ProjectTaskGamification;
