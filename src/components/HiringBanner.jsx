import { motion } from 'framer-motion';
import { FaHandPointRight } from 'react-icons/fa';
import { Link } from 'react-scroll'; // ✅ Importamos Link de react-scroll

function HiringBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-full bg-cyan-700 text-white py-6 px-4 text-center shadow-md rounded-lg mt-10 cursor-pointer hover:bg-cyan-600 transition-colors'
    >
      <Link
        to='contact'
        smooth={true}
        duration={600}
        offset={-50} // puedes ajustarlo según tu diseño
        className='flex flex-col sm:flex-row justify-center items-center gap-4'
      >
        <FaHandPointRight className='text-3xl animate-pulse' />
        <p className='text-lg sm:text-xl font-semibold'>
          Actualmente{' '}
          <span className='text-yellow-300'>disponible para incorporación</span>{' '}
          como Desarrollador Web. ¡Hablemos!
        </p>
      </Link>
    </motion.div>
  );
}

export default HiringBanner;
