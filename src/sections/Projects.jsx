import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import { ArrowUpRight, Layers3, Code2, ExternalLink } from 'lucide-react';

import { FaGithub } from 'react-icons/fa';

import { featuredProjects, otherProjects } from '../data/projects';

import './projects-v4.css';

// Rutas de casos prácticos que ya existen.
// Las nuevas se añadirán cuando estén construidas.
const availableCaseStudies = new Set([
  '/projects/stockit',
  '/projects/ProjectOroManager',
  '/projects/ProjectTaskGamification',
]);

const projectVisuals = {
  'pn-impresion-3d': 'PN.',
  'verifactu-app': '{ API }',
  stockit: 'ST.',
  'oro-manager': 'ORO.',
  'task-gamification': 'TG.',
};

function ProjectCard({ project, large = false, reduceMotion }) {
  const hasCaseStudy =
    project.caseStudyUrl && availableCaseStudies.has(project.caseStudyUrl);

  return (
    <motion.article
      className={`projects-v4-card ${large ? 'projects-v4-card-large' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.45,
      }}
    >
      <div className={`projects-v4-visual projects-v4-visual-${project.id}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`Imagen del proyecto ${project.title}`}
            loading='lazy'
            decoding='async'
          />
        ) : (
          <div className='projects-v4-placeholder'>
            <span className='projects-v4-placeholder-code'>
              {projectVisuals[project.id] || '</>'}
            </span>
            <span>{project.subtitle}</span>
          </div>
        )}

        <span className='projects-v4-category'>{project.category}</span>
      </div>

      <div className='projects-v4-card-body'>
        <div className='projects-v4-card-heading'>
          <div>
            <p className='projects-v4-subtitle'>{project.subtitle}</p>
            <h3>{project.title}</h3>
          </div>

          {hasCaseStudy && (
            <Link
              to={project.caseStudyUrl}
              className='projects-v4-arrow'
              aria-label={`Ver caso práctico de ${project.title}`}
            >
              <ArrowUpRight size={20} />
            </Link>
          )}
        </div>

        <p className='projects-v4-description'>{project.description}</p>

        {large && (
          <ul className='projects-v4-highlights'>
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}

        <ul
          className='projects-v4-stack'
          aria-label={`Tecnologías de ${project.title}`}
        >
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className='projects-v4-card-footer'>
          {hasCaseStudy && (
            <Link to={project.caseStudyUrl} className='projects-v4-detail-link'>
              Ver caso práctico
              <ArrowUpRight size={15} />
            </Link>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='projects-v4-detail-link'
            >
              Ver aplicación
              <ExternalLink size={15} />
            </a>
          )}

          {project.repositoryUrl && (
            <a
              href={project.repositoryUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='projects-v4-github-link'
              aria-label={`Código fuente de ${project.title}`}
              title='Ver código en GitHub'
            >
              <FaGithub size={20} />
            </a>
          )}

          {!hasCaseStudy && !project.demoUrl && !project.repositoryUrl && (
            <span className='projects-v4-pending'>
              Caso práctico en preparación
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id='projects'
      className='projects-v4'
      aria-labelledby='projects-v4-title'
    >
      <div className='projects-v4-container'>
        <header className='projects-v4-header'>
          <div>
            <p className='projects-v4-eyebrow'>
              <span>04 /</span> PROYECTOS
            </p>

            <h2 id='projects-v4-title' className='projects-v4-title'>
              Proyectos que van
              <span> más allá del código.</span>
            </h2>

            <p className='projects-v4-intro'>
              Una selección de aplicaciones que he desarrollado, desde proyectos
              propios hasta soluciones para clientes reales. Cada una representa
              diferentes retos, tecnologías y aprendizajes.
            </p>
          </div>

          <a
            href='https://github.com/ManRio'
            target='_blank'
            rel='noopener noreferrer'
            className='projects-v4-github-button'
          >
            <FaGithub size={18} />
            Mi GitHub
            <ArrowUpRight size={16} />
          </a>
        </header>

        <div className='projects-v4-section-heading'>
          <div className='projects-v4-section-icon'>
            <Layers3 size={19} />
          </div>
          <div>
            <h3>Proyectos destacados</h3>
            <p>Desarrollo Full Stack y soluciones reales</p>
          </div>
        </div>

        <div className='projects-v4-featured-grid'>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              large
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {otherProjects.length > 0 && (
          <>
            <div className='projects-v4-section-heading projects-v4-secondary-heading'>
              <div className='projects-v4-section-icon'>
                <Code2 size={19} />
              </div>
              <div>
                <h3>Otros proyectos</h3>
                <p>Experiencia, aprendizaje y nuevas tecnologías</p>
              </div>
            </div>

            <div className='projects-v4-other-grid'>
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Projects;
