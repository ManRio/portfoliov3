import { motion, useReducedMotion } from 'framer-motion';
import TechStack from '../components/TechStack';
import foto from '/assets/foto2.png';
import './about.css';

const strengths = [
  {
    number: '01',
    title: 'Entender el problema',
    description: 'Analizar las necesidades antes de escribir código.',
  },
  {
    number: '02',
    title: 'Construir la solución',
    description: 'Conectar interfaces, APIs y bases de datos.',
  },
  {
    number: '03',
    title: 'Probar y mejorar',
    description: 'Depurar errores, validar y seguir iterando.',
  },
];

function About() {
  const reduceMotion = useReducedMotion();

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 25 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.6, ease: 'easeOut' },
      };

  return (
    <section id='about' className='about-v4' aria-labelledby='about-v4-title'>
      <div className='about-v4-container'>
        {/* Presentación personal */}
        <div className='about-v4-main'>
          <motion.div className='about-v4-content' {...reveal}>
            <p className='about-v4-eyebrow'>
              <span>01 /</span> SOBRE MÍ
            </p>

            <h2 id='about-v4-title' className='about-v4-title'>
              Más allá del código:
              <span> entender y resolver.</span>
            </h2>

            <p className='about-v4-lead'>
              Soy desarrollador Full Stack, titulado en Desarrollo de
              Aplicaciones Web (DAW), con experiencia práctica creando
              aplicaciones y soluciones digitales. Trabajo principalmente con
              React, Next.js, TypeScript y tecnologías backend para transformar
              necesidades reales en herramientas funcionales.
            </p>

            <div className='about-v4-description'>
              <p>
                Durante mis prácticas en Grupo Oro participé en el desarrollo de
                una aplicación interna de gestión de empleados, trabajando con
                interfaces web y automatización de procesos mediante n8n.
              </p>

              <p>
                Desde entonces he seguido desarrollando proyectos propios y
                soluciones para negocios. Entre ellos, un ecommerce para PN
                Impresión 3D, con catálogo, administración y gestión de pedidos,
                y una aplicación de gestión comercial y facturación desarrollada
                con Python, FastAPI y React.
              </p>

              <p>
                Antes de dedicarme al desarrollo trabajé en diferentes áreas
                operativas y de gestión. Esa experiencia me ayuda a comprender
                cómo funcionan las empresas y a pensar en las personas que van a
                utilizar cada aplicación.
              </p>
            </div>

            <div className='about-v4-links'>
              <a href='#projects' className='about-v4-main-link'>
                Conoce mis proyectos
                <span aria-hidden='true'>↗</span>
              </a>

              <a
                href='https://github.com/ManRio'
                target='_blank'
                rel='noopener noreferrer'
                className='about-v4-text-link'
              >
                Mi GitHub ↗
              </a>
            </div>
          </motion.div>

          {/* Tarjeta de presentación */}
          <motion.aside
            className='about-v4-profile'
            aria-label='Mi perfil y forma de trabajar'
            {...reveal}
          >
            <div className='about-v4-profile-top'>
              <img
                src={foto}
                alt='Fotografía de Manuel Ríos'
                className='about-v4-photo'
                loading='lazy'
                decoding='async'
              />

              <div>
                <h3>Manuel Ríos</h3>
                <p>Desarrollador Full Stack</p>
                <span>Sevilla, España</span>
              </div>
            </div>

            <div className='about-v4-profile-divider' />

            <p className='about-v4-profile-label'>MI FORMA DE TRABAJAR</p>

            <div className='about-v4-strengths'>
              {strengths.map((item) => (
                <div className='about-v4-strength' key={item.number}>
                  <span className='about-v4-strength-number'>
                    {item.number}
                  </span>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='about-v4-profile-bottom'>
              <span className='about-v4-profile-dot' />
              Aprendiendo, construyendo y mejorando
            </div>
          </motion.aside>
        </div>

        {/* Tecnologías */}
        <motion.div className='about-v4-technologies' {...reveal}>
          <div className='about-v4-tech-heading'>
            <div>
              <p className='about-v4-eyebrow'>
                <span>02 /</span> TECNOLOGÍAS
              </p>

              <h3>Mi stack tecnológico</h3>
            </div>

            <p>
              Herramientas que utilizo en mis proyectos, organizadas según su
              función.
            </p>
          </div>

          <TechStack />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
