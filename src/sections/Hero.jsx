import { motion, useReducedMotion } from 'framer-motion';
import './hero.css';

const featuredProjects = [
  {
    number: '01',
    title: 'PN Impresión 3D',
    category: 'Ecommerce para un negocio real',
    stack: 'Next.js · TypeScript · PostgreSQL',
  },
  {
    number: '02',
    title: 'VeriFactu App',
    category: 'Gestión comercial y facturación',
    stack: 'Python · FastAPI · React',
  },
  {
    number: '03',
    title: 'StockIt',
    category: 'Gestión de inventario y ventas',
    stack: 'Java · Spring Boot · MySQL',
  },
];

function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: 'easeOut' },
        };

  return (
    <section id='hero' className='hero-v4'>
      <div className='hero-v4-container'>
        {/* Presentación */}
        <div className='hero-v4-content'>
          <motion.div {...fadeUp(0.1)} className='hero-v4-status'>
            <span className='hero-v4-status-dot' aria-hidden='true' />
            Disponible para oportunidades junior
          </motion.div>

          <motion.p {...fadeUp(0.15)} className='hero-v4-intro'>
            Hola, soy <strong>Manuel Ríos</strong>
          </motion.p>

          <motion.h1 {...fadeUp(0.25)} className='hero-v4-title'>
            Desarrollo aplicaciones web que{' '}
            <span>resuelven problemas reales.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.35)} className='hero-v4-description'>
            Desarrollador Web Full Stack Junior especializado en React, Next.js
            y TypeScript.
            <br />
            <br />
            Construyo interfaces, APIs y soluciones digitales para negocios,
            utilizando tecnologías frontend y backend.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className='hero-v4-actions'>
            <a href='#projects' className='hero-v4-btn-primary'>
              Ver mis proyectos
              <span aria-hidden='true'>↗</span>
            </a>

            <a
              href='/Manuel_Rios_CV_Nov25.pdf'
              download
              className='hero-v4-btn-secondary'
            >
              Descargar CV
              <span aria-hidden='true'>↓</span>
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.55)} className='hero-v4-footer'>
            <span>Sevilla, España · Presencial / Híbrido / Remoto</span>

            <a
              href='https://www.linkedin.com/in/manuelriosdev/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Panel visual de proyectos */}
        <motion.div {...fadeUp(0.4)} className='hero-v4-showcase'>
          <div className='hero-v4-showcase-header'>
            <div className='hero-v4-window-dots' aria-hidden='true'>
              <span />
              <span />
              <span />
            </div>
            <span>work / selected-projects</span>
          </div>

          <div className='hero-v4-showcase-body'>
            <div className='hero-v4-showcase-heading'>
              <span>MI TRABAJO</span>
              <h2>Proyectos destacados</h2>
              <p>
                Aplicaciones que combinan desarrollo, lógica de negocio e
                integración de servicios.
              </p>
            </div>

            <div className='hero-v4-project-list'>
              {featuredProjects.map((project) => (
                <div className='hero-v4-project' key={project.number}>
                  <span className='hero-v4-project-number'>
                    {project.number}
                  </span>

                  <div className='hero-v4-project-info'>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                    <span>{project.stack}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='hero-v4-showcase-bottom'>
              <span className='hero-v4-code-symbol' aria-hidden='true'>
                {'</>'}
              </span>
              <span>Frontend · Backend · Automatización</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
