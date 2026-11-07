const technologyGroups = [
  {
    id: 'frontend',
    number: '01',
    title: 'Frontend',
    description:
      'Interfaces web, componentes reutilizables y diseño responsive.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
  },
  {
    id: 'backend',
    number: '02',
    title: 'Backend y datos',
    description: 'APIs REST, lógica de negocio, persistencia y autenticación.',
    technologies: [
      'Python',
      'FastAPI',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MySQL',
      'Prisma',
      'SQLAlchemy',
    ],
  },
  {
    id: 'tools',
    number: '03',
    title: 'Herramientas y prácticas',
    description: 'Control de versiones, pruebas, despliegues y automatización.',
    technologies: [
      'Git / GitHub',
      'Docker',
      'Pytest',
      'n8n',
      'REST APIs',
      'Vercel',
      'Railway',
    ],
  },
];

function TechStack() {
  return (
    <div className='about-v4-tech-stack'>
      {technologyGroups.map((group) => (
        <article className='about-v4-tech-card' key={group.id}>
          <div className='about-v4-tech-card-header'>
            <span>{group.number}</span>
            <h4>{group.title}</h4>
          </div>

          <p className='about-v4-tech-description'>{group.description}</p>

          <ul className='about-v4-tech-tags'>
            {group.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </article>
      ))}

      <p className='about-v4-other-tech'>
        Otras tecnologías con las que he trabajado:
        <strong> Java, Spring Boot, Vue.js y Flask.</strong>
      </p>
    </div>
  );
}

export default TechStack;
