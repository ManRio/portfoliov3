import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // da tiempo a montar la página
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.2, duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <img
          src='/logoblanco3.png'
          alt='Logo'
          className='w-12 h-12 object-contain'
        />

        {/* Navegación escritorio */}
        <ul className='hidden md:flex gap-8 text-white text-sm font-medium'>
          <li>
            <button
              onClick={() => scrollTo('about')}
              className='hover:text-cyan-400'
            >
              Sobre mí
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo('projects')}
              className='hover:text-cyan-400'
            >
              Proyectos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollTo('contact')}
              className='hover:text-cyan-400'
            >
              Contacto
            </button>
          </li>
        </ul>

        {/* Botón hamburguesa mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-2xl focus:outline-none'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className='md:hidden px-6 pb-6 flex flex-col gap-6 text-white text-lg font-medium bg-black/90 backdrop-blur-sm'>
          <button
            onClick={() => {
              scrollTo('about');
              setMenuOpen(false);
            }}
            className='hover:text-cyan-400'
          >
            Sobre mí
          </button>
          <button
            onClick={() => {
              scrollTo('projects');
              setMenuOpen(false);
            }}
            className='hover:text-cyan-400'
          >
            Proyectos
          </button>
          <button
            onClick={() => {
              scrollTo('contact');
              setMenuOpen(false);
            }}
            className='hover:text-cyan-400'
          >
            Contacto
          </button>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
