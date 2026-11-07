import { motion, useReducedMotion } from 'framer-motion';
import './experience.css';

const experiences = [
  {
    id: 'fullstack-freelance',
    number: '01',
    role: 'Desarrollador Web Full Stack',
    company: 'Freelance · Proyectos propios y para clientes',
    type: 'Desarrollo de aplicaciones web',
    period: '2025 – Actualidad',
    location: 'Sevilla · Remoto',
    featured: true,

    description:
      'Desarrollo aplicaciones web y soluciones digitales, tanto para clientes como mediante proyectos propios. Trabajo en el diseño de interfaces, integración de APIs, lógica de negocio, bases de datos y despliegue de aplicaciones.',

    achievements: [
      'Desarrollo de interfaces y aplicaciones con React, Next.js, TypeScript y Tailwind CSS.',
      'Construcción de APIs REST y lógica de negocio utilizando Python, FastAPI y Node.js.',
      'Diseño y gestión de bases de datos PostgreSQL y MySQL mediante herramientas como Prisma y SQLAlchemy.',
      'Implementación de autenticación, paneles de administración, formularios y flujos de gestión.',
      'Integración de servicios externos y preparación de aplicaciones para su despliegue.',
    ],

    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Node.js',
      'PostgreSQL',
      'Prisma',
    ],

    note: 'Actividad que combina encargos profesionales con desarrollos propios. Los proyectos se presentan individualmente en la siguiente sección.',
  },
  {
    id: 'grupo-oro',
    number: '02',
    role: 'Desarrollador Web',
    company: 'Grupo Oro',
    type: 'Prácticas profesionales · DAW',
    period: 'Junio – Septiembre 2025',
    location: 'Remoto',
    featured: false,

    description:
      'Participación en el desarrollo de una aplicación interna de gestión de empleados, colaborando con el equipo técnico en funcionalidades web y automatización de procesos.',

    achievements: [
      'Desarrollo y adaptación de interfaces y formularios mediante tecnologías frontend.',
      'Participación en funcionalidades de gestión de tareas y gamificación.',
      'Colaboración en la automatización de procesos internos utilizando n8n.',
      'Trabajo con herramientas de gestión de datos y mantenimiento de soluciones web.',
    ],

    technologies: ['React', 'TypeScript', 'JavaScript', 'Firebase', 'n8n'],
  },
  {
    id: 'web-projects',
    number: '03',
    role: 'Desarrollo y mantenimiento web',
    company: 'Proyectos para pequeños negocios',
    type: 'Colaboraciones y trabajos web',
    period: '2023 – 2025',
    location: 'Sevilla',
    featured: false,

    description:
      'Desarrollo y mantenimiento de páginas web para pequeñas empresas y proyectos digitales, trabajando con tecnologías web y gestores de contenido.',

    achievements: [
      'Desarrollo de landing pages y páginas de presentación para negocios.',
      'Creación, adaptación y mantenimiento de contenidos en WordPress.',
      'Realización de modificaciones y mejoras en una tienda online desarrollada con PrestaShop.',
    ],

    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PrestaShop'],
  },
];

function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id='experience'
      className='experience-v4'
      aria-labelledby='experience-v4-title'
    >
      <div className='experience-v4-container'>
        {/* Encabezado */}
        <div className='experience-v4-heading'>
          <p className='experience-v4-eyebrow'>
            <span>03 /</span> EXPERIENCIA
          </p>

          <h2 id='experience-v4-title' className='experience-v4-title'>
            Del código a<span> proyectos reales.</span>
          </h2>

          <p className='experience-v4-intro'>
            Mi trayectoria en desarrollo web combina experiencia en entornos
            profesionales, trabajos para clientes y la creación de aplicaciones
            propias. Cada proyecto me ha permitido afrontar nuevos retos
            técnicos y ampliar mis conocimientos.
          </p>
        </div>

        {/* Línea temporal */}
        <div className='experience-v4-timeline'>
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.id}
              className='experience-v4-item'
              initial={reduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.08,
              }}
            >
              {/* Punto de la línea temporal */}
              <div className='experience-v4-marker' aria-hidden='true'>
                <span />
              </div>

              {/* Tarjeta */}
              <div
                className={`experience-v4-card ${
                  experience.featured ? 'experience-v4-card-featured' : ''
                }`}
              >
                <div className='experience-v4-card-top'>
                  <div className='experience-v4-card-heading'>
                    <span className='experience-v4-number'>
                      {experience.number}
                    </span>

                    <div>
                      <p className='experience-v4-type'>{experience.type}</p>

                      <h3>{experience.role}</h3>

                      <p className='experience-v4-company'>
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <div className='experience-v4-meta'>
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className='experience-v4-description'>
                  {experience.description}
                </p>

                <ul className='experience-v4-achievements'>
                  {experience.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>

                <div className='experience-v4-card-footer'>
                  <ul className='experience-v4-technologies'>
                    {experience.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  {experience.note && (
                    <p className='experience-v4-note'>{experience.note}</p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Experiencia previa */}
        <div className='experience-v4-background'>
          <div className='experience-v4-background-icon'>
            <span aria-hidden='true'>{'</>'}</span>
          </div>

          <div>
            <h3>Una trayectoria más allá del desarrollo</h3>

            <p>
              Mi experiencia anterior en operaciones, coordinación y atención a
              personas me ha permitido desarrollar habilidades de organización,
              comunicación y resolución de problemas que hoy aplico al
              desarrollo web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
