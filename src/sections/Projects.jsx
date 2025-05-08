import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'StockIt',
    description: 'Gestión de inventarios moderna para almacenes y tiendas.',
    image: '/assets/LogoStockIt.png',
    demoLink: '/projects/stockit',
    codeLink: 'https://github.com/ManRio/StockIt',
    external: false,
  },
  {
    id: 2,
    title: 'Landing Page Responsive',
    description:
      'Landing page responsive construida para prácticas de maquetación moderna.',
    image: '/assets/landing.jpg',
    demoLink: '/projects/landingpageresponsive',
    codeLink: 'https://github.com/ManRio/landingPageResponsive',
    external: false,
  },
  {
    id: 3,
    title: 'Jamar',
    description: 'Aplicación de gestión empresarial con Deploy online.',
    image: '/assets/jamar.jpg',
    demoLink: 'http://jamarmedia.es/inicio',
    codeLink: 'https://github.com/ManRio/jamar',
    external: true,
  },
  {
    id: 4,
    title: 'NewsReader',
    description:
      'Lector de noticias personalizadas por IA con perfil y favoritos.',
    image: '/assets/NewsReaderFeed.png',
    demoLink: '/projects/ProjectNewsReader',
    codeLink: 'https://github.com/ManRio/newsreader',
    external: false,
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-h-screen bg-transparent text-white px-6 py-20 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto flex flex-col gap-16'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl font-montserrat font-bold text-center mb-10'
        >
          Proyectos
        </motion.h2>

        <div className='flex flex-col gap-14'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className='flex flex-col md:flex-row gap-8 items-center bg-white/10 p-6 md:p-10 rounded-xl shadow-lg'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full md:w-1/2 rounded-lg object-cover shadow-md max-h-[300px]'
              />
              <div className='flex flex-col gap-4 md:w-1/2 text-center md:text-left'>
                <h3 className='text-3xl font-montserrat font-bold'>
                  {project.title}
                </h3>
                <p className='text-gray-300 font-code text-base'>
                  {project.description}
                </p>
                <div className='flex gap-4 justify-center md:justify-start flex-wrap mt-2'>
                  <a
                    href={project.demoLink}
                    target={project.external ? '_blank' : '_self'}
                    rel='noopener noreferrer'
                    className='px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-white rounded-md text-sm font-semibold transition'
                  >
                    Ver Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-5 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm font-semibold transition'
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
