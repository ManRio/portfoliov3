import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className='bg-black text-white py-8 px-6'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6'
      >
        <div className='text-center md:text-left font-code text-sm'>
          <p>
            &copy; {new Date().getFullYear()} Manuel Ríos. Todos los derechos
            reservados.
          </p>
          <p className='text-gray-500'>
            Desarrollado con ❤️ usando React & TailwindCSS
          </p>
        </div>
        <div className='flex gap-6'>
          <a
            href='https://github.com/ManRio'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/riosreinamanuel/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-white transition'
          >
            LinkedIn
          </a>
          <a
            href='mailto:manureina87@gmail.com'
            className='text-gray-400 hover:text-white transition'
          >
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
