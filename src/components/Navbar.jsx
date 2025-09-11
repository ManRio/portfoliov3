import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero'); // 👈 sección activa
  const navigate = useNavigate();
  const location = useLocation();

  // Lista de secciones controladas por el spy
  const sections = useMemo(
    () => ['hero', 'about', 'experience', 'projects', 'contact'],
    []
  );

  // Detecta desplazamiento para aplicar fondo translúcido
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll con offset (navbar fijo)
  const scrollTo = (sectionId) => {
    const go = () => {
      const el = document.getElementById(sectionId);
      if (!el) return;
      const navbarOffset = 80; // coincide con scroll-padding-top
      const y = el.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(go, 120);
    } else {
      go();
    }
  };

  // IntersectionObserver → actualiza activeId según la sección visible
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // Elegimos la entry con mayor intersección
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        // “sandwich” para que cuente cuando el centro de la sección está en viewport
        root: null,
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, [sections]);

  // Estilo para item activo (glow, sin underline)
  const glowActive =
    'text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.85)] font-semibold';
  const baseLink =
    'transition hover:text-cyan-400 hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]';

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
          aria-label='Ir al inicio'
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
                className={`${baseLink} ${
                  activeId === item.id ? glowActive : 'text-white/90'
                }`}
                aria-current={activeId === item.id ? 'page' : undefined}
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
            aria-label='Abrir menú'
            aria-expanded={menuOpen}
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
              className={`${baseLink} ${
                activeId === item.id ? glowActive : 'text-white/90'
              }`}
              aria-current={activeId === item.id ? 'page' : undefined}
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
