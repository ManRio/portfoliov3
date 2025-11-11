import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import macbookChat from '/assets/OroManager.png';
import macbookLogin from '/assets/OroManager1.png';
import iphoneMenu from '/assets/OroManager2.png';

import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaTools,
  FaCodeBranch,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiNodedotjs,
  SiNginx,
} from 'react-icons/si';
import { useCanonical } from '../hooks/useCanonical';

function ProjectOroManager() {
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
            Proyecto: ORO Manager
          </h1>

          <p className='text-lg text-center font-code leading-relaxed'>
            <b>ORO Manager</b> es una plataforma web integral desarrollada
            durante las prácticas FCT para gestionar empleados dentro de una
            organización. Incorpora módulos como tareas generales, recompensas,
            formación, documentos, chat en tiempo real y recursos de IA, con
            enfoque en usabilidad, rendimiento y diseño responsive.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            {[macbookLogin, macbookChat, iphoneMenu].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Vista ${idx + 1}`}
                className='rounded-lg shadow-lg hover:scale-105 transition duration-300'
              />
            ))}
          </div>

          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4 font-montserrat'>
              Características Principales
            </h2>
            <ul className='list-disc list-inside space-y-2 font-code'>
              <li>Gestión de usuarios, tareas, formaciones y documentos.</li>
              <li>Chat grupal en tiempo real para equipos.</li>
              <li>Diseño completamente responsive para escritorio y móvil.</li>
              <li>Sistema de recompensas y gamificación interna.</li>
              <li>Flujos automatizados con n8n para tareas administrativas.</li>
            </ul>
          </div>

          <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold font-montserrat mb-4'>
              Tecnologías Utilizadas
            </h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center text-5xl text-white'>
              <FaReact />
              <SiTypescript />
              <FaJsSquare />
              <FaHtml5 />
              <FaCss3Alt />
              <SiTailwindcss />
              <FaNodeJs />
              <SiMysql />
              <FaDatabase />
              <FaTools />
              <FaCodeBranch />
              <FaGithub />
            </div>
          </div>

          <div className='flex justify-center gap-6 mt-10'>
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

export default ProjectOroManager;
