import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SiPython, SiFlask, SiVuedotjs } from 'react-icons/si';
import landingTask from '/assets/landing_task_gamification.png';
import dashboardProfesor from '/assets/dashboard_profesor_task_gamiffication.png';
import dashboardAlumno from '/assets/dashboard_alumno.png';
import tareasTask from '/assets/tareas_task_gamification.png';

function ProjectTaskGamification() {
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
          Proyecto: Task Gamification
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <img
            src={landingTask}
            alt='Vista Principal'
            className='rounded-lg shadow-xl'
          />
          <img
            src={dashboardProfesor}
            alt='Vista Dashboard Profesor'
            className='rounded-lg shadow-xl'
          />
          <img
            src={dashboardAlumno}
            alt='Vista Dashboard Alumno'
            className='rounded-lg shadow-xl'
          />
          <img
            src={tareasTask}
            alt='Vista Tareas'
            className='rounded-lg shadow-xl'
          />
        </div>
        <div className='text-center font-code text-lg leading-relaxed'>
          <p>
            <strong>Task Gamification</strong> es una plataforma web pensada
            para motivar a estudiantes mediante la gamificación de tareas.
            Permite a los profesores gestionar retos y recompensas, mientras los
            alumnos acumulan una moneda virtual canjeable por las recompensas
            que los profesores hayan propuesto.
          </p>
          <ul className='list-disc list-inside mt-4 space-y-2'>
            <li>Frontend con Vue.js</li>
            <li>Backend en Python usando Flask</li>
            <li>Autenticación, moneda virtual, recompensas y rankings</li>
          </ul>
        </div>
        <div className='text-center mt-10'>
          <h2 className='text-2xl font-bold mb-4 font-montserrat'>
            Tecnologías Utilizadas
          </h2>
          <div className='flex justify-center gap-10 text-4xl text-white'>
            <SiVuedotjs />
            <SiPython />
            <SiFlask />
          </div>
        </div>
        <div className='flex justify-center gap-6 mt-10'>
          <a
            href='https://github.com/ManRio/task_gamification'
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

export default ProjectTaskGamification;
