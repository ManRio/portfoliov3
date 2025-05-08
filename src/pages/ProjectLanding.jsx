import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import LandingMobile from '/assets/LandingMobile.png';
import LandingPC from '/assets/LandingPC.png';

function ProjectLanding() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-transparent text-white px-6 py-20">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col gap-12"
      >
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center">
          Proyecto: Landing Page Responsive
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={LandingPC} alt="Vista PC" className="rounded-lg shadow-xl" />
          <img src={LandingMobile} alt="Vista Móvil" className="rounded-lg shadow-xl" />
        </div>

        <div className="text-center font-code text-lg leading-relaxed">
          <p>
            Proyecto de desarrollo de una landing page completamente responsive. Creado para fortalecer habilidades de diseño moderno usando <strong>HTML5</strong>, <strong>CSS3</strong> y <strong>JavaScript</strong>, aplicando maquetación avanzada con <strong>Flexbox</strong> y <strong>CSS Grid</strong>.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Secciones principales: Hero, Servicios, Contacto</li>
            <li>Diseño Mobile First</li>
            <li>Optimización de carga</li>
            <li>Maquetación profesional usando Flexbox y Grid</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold mb-4 font-montserrat">Tecnologías Utilizadas</h2>
          <div className="flex justify-center gap-10 text-4xl text-white">
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/ManRio/landingPageResponsive"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded transition font-semibold"
          >
            Ver Código
          </a>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded transition font-semibold"
          >
            ⬅️ Volver al Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectLanding;
