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
      }, 100);
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
        scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo → Hero */}
        <button
          onClick={() => scrollTo('hero')}
          className='flex items-center transition-transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
        >
          <img
            src='/logoblanco3.png'
            alt='Logo'
            className='w-12 h-12 object-contain'
          />
        </button>

        {/* Navegación escritorio */}
        <ul className='hidden md:flex gap-8 text-white text-sm font-medium'>
          {[
            { id: 'about', label: 'Sobre mí' },
            { id: 'experience', label: 'Experiencia' },
            { id: 'projects', label: 'Proyectos' },
            { id: 'contact', label: 'Contacto' },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className='transition hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]'
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa mobile */}
        <div className='md:hidden'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-white text-2xl focus:outline-none hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className='md:hidden px-6 pb-6 flex flex-col gap-6 text-white text-lg font-medium bg-black/80 backdrop-blur-md'>
          {[
            { id: 'about', label: 'Sobre mí' },
            { id: 'experience', label: 'Experiencia' },
            { id: 'projects', label: 'Proyectos' },
            { id: 'contact', label: 'Contacto' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                setMenuOpen(false);
              }}
              className='hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] transition'
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
