import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-black/60 backdrop-blur-md text-white py-8 px-6'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'
      >
        {/* Texto */}
        <div className='text-center md:text-left font-code text-sm space-y-1'>
          <p>
            &copy; {new Date().getFullYear()} Manuel Ríos. Todos los derechos
            reservados.
          </p>
          <p className='text-gray-400'>
            Desarrollado con React, TailwindCSS & Framer Motion
          </p>
        </div>

        {/* Enlaces sociales */}
        <div className='flex gap-6 text-lg'>
          <a
            href='https://github.com/ManRio'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-gray-400 transition hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
          >
            <FaGithub /> GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/riosreinamanuel/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 text-gray-400 transition hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href='mailto:manureina87@gmail.com'
            className='flex items-center gap-2 text-gray-400 transition hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
