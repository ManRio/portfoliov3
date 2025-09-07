import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SiAngular, SiTypescript } from 'react-icons/si';
import fitTrackLanding from '/assets/FitTrack-Landing.png';
import habitsFitTrack from '/assets/habits-FitTrack.png';
import ProfileFitTrack from '/assets/Profile-FitTrack.png';

function ProjectFitTrack() {
  const navigate = useNavigate();

  return (
    <section className='min-h-screen bg-transparent text-white px-6 py-20'>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='max-w-6xl mx-auto flex flex-col gap-12'
      >
        <h1 className='text-4xl md:text-5xl font-montserrat font-bold text-center'>
          Proyecto: FitTrack
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <img
            src={fitTrackLanding}
            alt='Vista Principal'
            className='rounded-lg shadow-xl'
          />
          <img
            src={habitsFitTrack}
            alt='Vista Habitos'
            className='rounded-lg shadow-xl'
          />
          <img
            src={ProfileFitTrack}
            alt='Vista Perfil'
            className='rounded-lg shadow-xl'
          />
        </div>

        <div className='text-center font-code text-lg leading-relaxed'>
          <p>
            <strong>FitTrack</strong> es una aplicación desarrollada con{' '}
            <strong>Angular</strong>, que permite a los usuarios llevar un
            seguimiento diario de su actividad física. Usa consumo de APIs
            externas, routing dinámico, y servicios para gestión de estado.
          </p>
          <ul className='list-disc list-inside mt-4 space-y-2'>
            <li>Frontend construido con Angular y TypeScript</li>
            <li>Consumo de API externa de ejercicios</li>
            <li>Componentes reutilizables y diseño modular</li>
          </ul>
        </div>

        <div className='text-center mt-10'>
          <h2 className='text-2xl font-bold mb-4 font-montserrat'>
            Tecnologías Utilizadas
          </h2>
          <div className='flex justify-center gap-10 text-4xl text-white'>
            <SiAngular />
            <SiTypescript />
          </div>
        </div>

        <div className='flex justify-center gap-6 mt-10'>
          <a
            href='https://github.com/ManRio/fittrack'
            target='_blank'
            rel='noopener noreferrer'
            className='px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded transition font-semibold'
          >
            Ver Código
          </a>
          <button
            onClick={() => navigate('/')}
            className='px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition font-semibold'
          >
            ⬅️ Volver al Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectFitTrack;
