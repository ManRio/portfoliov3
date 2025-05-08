import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id='hero'
      className='relative h-screen flex flex-col justify-center items-center bg-transparent text-white px-6 md:px-12 overflow-hidden'
    >
      {/* Contenido centrado */}
      <div className='z-10 w-full max-w-3xl text-left'>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-2'
        >
          ¡Hola!, Soy Manuel Ríos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className='font-montserrat text-4xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight tracking-wide'
        >
          DESARROLLADOR WEB
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className='text-lg sm:text-xl md:text-2xl text-gray-400'
        >
          Transformando ideas en experiencias digitales con tecnologías
          modernas.
        </motion.p>
      </div>
    </section>
  );
}

export default Hero;
