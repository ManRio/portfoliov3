import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';
import foto from '/assets/foto2.png';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen bg-transparent text-white px-6 py-20 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto flex flex-col gap-20'>
        {/* Sobre mí + foto */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'
        >
          <div>
            <h2 className='text-4xl sm:text-5xl font-montserrat font-bold mb-6'>
              Sobre mí
            </h2>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed font-code'>
              La tecnología y la innovación siempre han sido motores clave en mi
              desarrollo profesional. A través de una formación constante y una
              actitud autodidacta, he adquirido experiencia en tecnologías web
              como <strong>HTML5, CSS3, Java, SQL y JavaScript</strong>, lo que
              me permite abordar problemas con un enfoque práctico y eficiente.
              Me motiva <b>aprender cada día</b>, explorar{' '}
              <b>nuevas herramientas</b> y contribuir con{' '}
              <b>soluciones creativas</b> dentro de equipos colaborativos,
              siempre enfocado en <b>crecer profesionalmente</b> y adaptarme a
              los retos del sector tecnológico.
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src={foto}
              alt='Manuel Ríos'
              className='w-64 h-64 object-cover rounded-full shadow-xl transition-transform transform hover:scale-105'
            />
          </div>
        </motion.div>

        {/* Tecnologías (componente externo) */}
        <TechStack />

        {/* Botón Descargar CV */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <a
            href='/CV_ManuelRios_JUlio2025.pdf'
            download
            className='inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md transition duration-300'
          >
            📄 Descarga mi CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
