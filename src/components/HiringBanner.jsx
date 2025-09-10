import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaHandPointRight } from 'react-icons/fa';
import './hiringBanner.css';

function HiringBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='w-full glass-banner text-white py-6 px-6 text-center rounded-xl mt-10 cursor-pointer transition'
    >
      <Link
        to='contact'
        smooth={true}
        duration={600}
        offset={-50}
        className='flex flex-col sm:flex-row justify-center items-center gap-4'
      >
        <FaHandPointRight className='text-3xl animate-pulse text-cyan-300' />
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
