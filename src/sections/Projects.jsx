import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './projects.css';

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
  {
    id: 5,
    title: 'ORO Manager',
    description:
      'Plataforma web desarrollada durante las prácticas FCT para la gestión integral de empleados: recompensas, tareas, formación, chat grupal y más.',
    image: '/assets/OroManager.png',
    demoLink: '/projects/ProjectOroManager',
    codeLink: 'https://github.com/ManRio/OroManager',
    external: false,
  },
  {
    id: 6,
    title: 'FitTrack',
    description:
      'Aplicación de seguimiento de ejercicio con Angular. Llamadas a API de Ejercicios, noticias relacionadas y gestión del perfil de usuario para medir el progreso diario.',
    image: '/assets/FitTrack-Landing.png',
    demoLink: '/projects/ProjectFitTrack',
    codeLink: 'https://github.com/ManRio/fittrack',
    external: false,
  },
  {
    id: 7,
    title: 'Task Gamification',
    description:
      'Plataforma gamificada de gestión de tareas para alumnos y profesores. Back con Flask y front en Vue.js.',
    image: '/assets/landing_task_gamification.png',
    demoLink: '/projects/ProjectTaskGamification',
    codeLink: 'https://github.com/ManRio/task_gamification',
    external: false,
  },
];

function Projects() {
  return (
    <section
      id='projects'
      className='min-h-screen w-full bg-transparent text-white flex flex-col px-6'
    >
      {/* Título */}
      <h2 className='text-4xl sm:text-5xl font-montserrat font-bold text-center mt-10'>
        Proyectos
      </h2>

      {/* Carrusel */}
      <div className='flex-1 flex items-center justify-center relative'>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={40}
          className='projects-swiper'
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className='project-card flex flex-col text-center'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-40 object-contain mb-4 rounded-md'
                />
                <h3 className='text-xl font-montserrat font-bold mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-300 font-code text-sm mb-4'>
                  {project.description}
                </p>
                <div className='flex gap-3 justify-center flex-wrap mt-auto'>
                  <a
                    href={project.demoLink}
                    target={project.external ? '_blank' : '_self'}
                    rel='noopener noreferrer'
                    className='px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-white rounded-md text-xs font-semibold transition'
                  >
                    Ver Demo
                  </a>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xs font-semibold transition'
                    >
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flechas */}
        <div className='swiper-button-prev custom-line-arrow'></div>
        <div className='swiper-button-next custom-line-arrow'></div>
      </div>
    </section>
  );
}

export default Projects;
