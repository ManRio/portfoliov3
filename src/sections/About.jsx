import { motion } from 'framer-motion';
import TechStack from '../components/TechStack';
import foto from '/assets/foto2.png';
import './about.css';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen bg-transparent text-white px-6 py-20 flex items-center'
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
        {/* Columna Izquierda: Foto + Sobre mí */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className='flex flex-col items-center md:items-start gap-10'
        >
          {/* Foto con glow pulsante */}
          <div className='relative'>
            <img
              src={foto}
              alt='Manuel Ríos'
              className='w-48 h-48 object-cover rounded-full shadow-xl'
            />
            <div className='absolute inset-0 rounded-full bg-cyan-500/30 blur-3xl animate-pulse-slow'></div>
          </div>

          {/* Texto */}
          <div>
            <h2 className='text-4xl sm:text-5xl font-montserrat font-bold mb-6'>
              Sobre mí
            </h2>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed font-code mb-8'>
              Soy un desarrollador web apasionado por la <b>tecnología</b> y la{' '}
              <b>innovación</b>. Me motiva aprender cada día, explorar nuevas
              herramientas y contribuir con <b>soluciones creativas</b> dentro
              de equipos colaborativos. Siempre enfocado en{' '}
              <b>crecer profesionalmente</b> y adaptarme a los retos del sector
              tecnológico.
            </p>

            <a
              href='/CV_ManuelRios_JUlio2025.pdf'
              download
              className='block w-full text-center px-6 py-4 
             bg-cyan-600/30 backdrop-blur-lg border border-cyan-500/30
             rounded-lg shadow-md transition duration-300
             hover:bg-cyan-500/40 hover:border-cyan-400
             font-semibold text-cyan-300'
            >
              📄 Descarga mi CV
            </a>
          </div>
        </motion.div>

        {/* Columna Derecha: TechStack organizado */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className='w-full flex justify-center'
        >
          <TechStack compact />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
