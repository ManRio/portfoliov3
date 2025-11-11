import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiReact } from 'react-icons/si';
import Landing from '/assets/newsreaderlandingpage.png';
import Feed from '/assets/NewsReaderFeed.png';
import Interests from '/assets/NewsReaderInterests.png';
import Profile from '/assets/NewsReaderProfile.png';
import { useCanonical } from '../hooks/useCanonical';

function ProjectNewsReader() {
  useCanonical('https://portfoliov3-omega-nine.vercel.app/projects');
  const navigate = useNavigate();

  return (
    <>
      <section className='min-h-screen bg-transparent text-white px-6 py-20'>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className='max-w-6xl mx-auto flex flex-col gap-12'
        >
          <h1 className='text-4xl md:text-5xl font-montserrat font-bold text-center'>
            Proyecto: NewsReader 📰
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[Landing, Feed, Interests, Profile].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`NewsReader view ${index + 1}`}
                className='rounded-lg shadow-lg'
              />
            ))}
          </div>

          <div className='text-center font-code text-lg leading-relaxed'>
            <p>
              NewsReader es una aplicación web para lectura de noticias
              personalizadas mediante inteligencia artificial. Permite al
              usuario elegir intereses, guardar artículos, visualizar su
              historial y modificar su perfil de forma segura.
            </p>
            <ul className='list-disc list-inside mt-4 space-y-2'>
              <li>Inicio de sesión seguro y edición de perfil</li>
              <li>Selección de intereses con persistencia de datos</li>
              <li>Feed personalizado según tus gustos</li>
              <li>Modo oscuro y diseño 100% responsive</li>
            </ul>
          </div>

          <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold mb-4 font-montserrat'>
              Tecnologías Utilizadas
            </h2>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center text-5xl text-white'>
              <SiMongodb />
              <SiNextdotjs />
              <SiReact />
              <SiTailwindcss />
            </div>
          </div>

          <div className='flex justify-center gap-6 mt-10'>
            <a
              href='https://github.com/ManRio/newsreader'
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
    </>
  );
}

export default ProjectNewsReader;
