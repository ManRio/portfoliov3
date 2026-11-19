import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Users,
  ListTodo,
  GraduationCap,
  Trophy,
  Workflow,
  MessageSquare,
} from 'lucide-react';

import CaseStudyGallery from '../components/CaseStudyGallery';
import './project-case-study.css';

const ASSETS = '/assets/projects/oro-manager';

const technologies = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Firebase',
  'Firestore',
  'n8n',
];

const features = [
  {
    icon: Users,
    title: 'Gestión de empleados',
    description:
      'Organización de usuarios, equipos y roles dentro de la plataforma.',
  },
  {
    icon: ListTodo,
    title: 'Tareas y proyectos',
    description:
      'Asignación y seguimiento de actividades y objetivos del equipo.',
  },
  {
    icon: Trophy,
    title: 'Gamificación',
    description: 'Sistema de puntos, recompensas y seguimiento del progreso.',
  },
  {
    icon: GraduationCap,
    title: 'Formación interna',
    description:
      'Acceso a recursos y actividades de aprendizaje para empleados.',
  },
  {
    icon: Workflow,
    title: 'Automatizaciones',
    description: 'Flujos con n8n para apoyar procesos administrativos.',
  },
  {
    icon: MessageSquare,
    title: 'Colaboración',
    description: 'Herramientas de comunicación y coordinación entre equipos.',
  },
];

const gallery = [
  {
    src: `${ASSETS}/panel.webp`,
    thumbnail: `${ASSETS}/thumbs/panel.webp`,
    title: 'Interfaz principal',
    description: 'Una vista de la plataforma de gestión interna.',
    alt: 'Captura de la interfaz principal de ORO Manager.',
  },
  {
    src: `${ASSETS}/acceso.webp`,
    thumbnail: `${ASSETS}/thumbs/acceso.webp`,
    title: 'Otra vista de la aplicación',
    description: 'Interfaz de ORO Manager durante su desarrollo.',
    alt: 'Segunda captura de ORO Manager.',
  },
  {
    src: `${ASSETS}/movil.webp`,
    thumbnail: `${ASSETS}/thumbs/movil.webp`,
    title: 'Experiencia móvil',
    description: 'Adaptación de la interfaz para dispositivos móviles.',
    alt: 'Captura de ORO Manager en formato móvil.',
  },
];

function ProjectOroManager() {
  useEffect(() => {
    document.title = 'ORO Manager | Experiencia profesional - Manuel Ríos';

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

          <span className='case-study-index'>CASO PRÁCTICO / 05</span>
        </div>

        {/* PRESENTACIÓN */}
        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PRÁCTICAS PROFESIONALES</span>
            <span className='case-study-kicker-dot' />
            <span>APLICACIÓN INTERNA</span>
            <span className='case-study-kicker-dot' />
            <span>FULL STACK</span>
          </div>

          <h1>
            ORO <span>Manager.</span>
          </h1>

          <p className='case-study-lead'>
            Plataforma de gestión interna desarrollada en el entorno de Grupo
            Oro. Durante mis prácticas profesionales participé en tareas de
            desarrollo relacionadas con la gestión de empleados, la gamificación
            y la automatización de procesos.
          </p>
        </header>

        {/* PORTADA */}
        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/portada.webp`}
            alt='Interfaz de la plataforma ORO Manager.'
            fetchPriority='high'
          />

          <figcaption>
            Captura de ORO Manager, plataforma de gestión de equipos.
          </figcaption>
        </figure>

        {/* INFORMACIÓN RÁPIDA */}
        <div className='case-study-facts'>
          <div>
            <span>CONTEXTO</span>
            <strong>Prácticas profesionales</strong>
          </div>

          <div>
            <span>ORGANIZACIÓN</span>
            <strong>Grupo Oro</strong>
          </div>

          <div>
            <span>PARTICIPACIÓN</span>
            <strong>Desarrollo y automatización</strong>
          </div>

          <div>
            <span>STACK</span>
            <strong>React · TypeScript · Firebase</strong>
          </div>
        </div>

        {/* 01 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>01 / EL CONTEXTO</div>

          <div className='case-study-section-content'>
            <h2>Tecnología para organizar el trabajo de los equipos.</h2>

            <p>
              Durante mis prácticas de Desarrollo de Aplicaciones Web en Grupo
              Oro, tuve la oportunidad de trabajar en una aplicación interna
              orientada a la gestión de empleados y equipos.
            </p>

            <p>
              La plataforma reúne diferentes herramientas para organizar tareas,
              actividades formativas, documentación y procesos de trabajo.
            </p>

            <p>
              El proyecto me permitió conocer las necesidades de desarrollo de
              una organización y colaborar en una solución utilizada en un
              contexto profesional.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>02 / MI PARTICIPACIÓN</div>

          <div className='case-study-section-content'>
            <h2>Desarrollo, gamificación y automatización.</h2>

            <p>
              Mi participación se centró en el desarrollo de funcionalidades
              relacionadas con la gestión de tareas y en un sistema de
              gamificación orientado a incentivar la participación.
            </p>

            <p>
              También trabajé con n8n para construir flujos automatizados que
              ayudaran a simplificar procesos y reducir operaciones manuales.
            </p>

            <p>
              Estas tareas me permitieron aplicar conocimientos de frontend y
              automatización dentro de un proyecto con requisitos y necesidades
              reales.
            </p>
          </div>
        </section>

        {/* 03 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / LA PLATAFORMA</div>

          <div className='case-study-section-content'>
            <h2>Un entorno de gestión y colaboración.</h2>

            <p>
              El proyecto global integra diferentes módulos para administrar
              equipos y facilitar el seguimiento de las actividades.
            </p>

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

        {/* 04 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>04 / TECNOLOGÍAS</div>

          <div className='case-study-section-content'>
            <h2>Herramientas de desarrollo y automatización.</h2>

            <p>
              La plataforma utiliza Next.js, React y TypeScript para la interfaz
              y Firebase como parte de su infraestructura de datos y
              autenticación.
            </p>

            <p>
              La automatización mediante n8n facilita la conexión entre
              distintos procesos y servicios.
            </p>

            <p>
              Esta experiencia me ayudó a comprender cómo se integran las
              tecnologías en aplicaciones internas de gestión.
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
          title='Una plataforma de gestión real.'
          description='Capturas de la aplicación y de su adaptación a distintos dispositivos.'
        />

        {/* 06 */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>06 / APRENDIZAJES</div>

          <div className='case-study-section-content'>
            <h2>Mi primera experiencia en un entorno profesional.</h2>

            <p>
              ORO Manager me permitió trabajar sobre una aplicación de gestión,
              comprender requisitos de negocio y participar en tareas de
              desarrollo dentro de un equipo.
            </p>

            <p>
              También reforcé mi interés por la automatización y por desarrollar
              herramientas que ayudan a las organizaciones a trabajar mejor.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />
              <span>
                Experiencia de desarrollo realizada durante mis prácticas
                profesionales.
              </span>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <div className='case-study-bottom'>
          <div>
            <span>EXPERIENCIA PROFESIONAL</span>

            <h2>Desarrollo aplicado a necesidades reales.</h2>
          </div>

          <Link to='/#projects' className='case-study-button-primary'>
            Ver otros proyectos
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <Link to='/#projects' className='case-study-back case-study-end-back'>
          <ArrowLeft size={17} />
          Volver a todos los proyectos
        </Link>
      </div>
    </main>
  );
}

export default ProjectOroManager;
