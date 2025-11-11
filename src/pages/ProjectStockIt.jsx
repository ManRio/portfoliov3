import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import landingStockit from '/assets/landingStockit.png';
import loginStockit from '/assets/LoginStockit.png';
import dashboardStockit from '/assets/DashboardStockit.png';
import otherStockit from '/assets/otherStockit.png';

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiJsonwebtokens,
} from 'react-icons/si';
import { useCanonical } from '../hooks/useCanonical';

function ProjectStockIt() {
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
            Proyecto: StockIt
          </h1>

          <p className='text-lg text-center font-code leading-relaxed'>
            <b>StockIt</b> es una solución SaaS desarrollada para la gestión
            eficiente de inventarios, productos, ventas y usuarios. Diseñado
            para pymes que buscan un control visual y sencillo de su stock en
            tiempo real.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
            {[landingStockit, loginStockit, dashboardStockit, otherStockit].map(
              (img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Vista ${idx + 1}`}
                  className='rounded-lg shadow-lg hover:scale-105 transition duration-300'
                />
              )
            )}
          </div>

          <div className='text-center'>
            <h2 className='text-2xl font-bold mb-4 font-montserrat'>
              Características Principales
            </h2>
            <ul className='list-disc list-inside space-y-2 font-code'>
              <li>Autenticación segura de usuarios (Login personalizado).</li>
              <li>Dashboard administrativo dinámico con KPIs y reportes.</li>
              <li>Gestión de productos, usuarios y reportes mensuales.</li>
              <li>Filtros avanzados y tablas interactivas.</li>
              <li>Diseño 100% Responsive para dispositivos móviles.</li>
            </ul>
          </div>

          <div className='text-center mt-10'>
            <h2 className='text-2xl font-bold font-montserrat mb-4'>
              Tecnologías Utilizadas
            </h2>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-items-center text-5xl text-white'>
              <SiSpringboot />
              <FaJava />
              <FaHtml5 />
              <FaCss3Alt />
              <FaReact />
              <SiTailwindcss />
              <FaJsSquare />
              <SiMysql />
              <SiJsonwebtokens />
            </div>
          </div>

          <div className='flex justify-center gap-6 mt-10'>
            <a
              href='https://github.com/ManRio/StockIt'
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

export default ProjectStockIt;
