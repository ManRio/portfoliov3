import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, []);

  useEffect(() => {
    let frame;

    frame = requestAnimationFrame(() => {
      const hash = location.hash;

      if (!hash) {
        // Las páginas individuales siempre empiezan arriba.
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });

        return;
      }

      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);

      if (!target) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
        return;
      }

      // Desplazar al comienzo de la sección,
      // dejando espacio para el Navbar fijo.
      const navbarHeight = 90;

      const top =
        target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: Math.max(0, top),
        left: 0,
        behavior: 'instant',
      });
    });

    return () => cancelAnimationFrame(frame);
  }, [location.pathname, location.hash, location.key]);

  return null;
}

export default ScrollManager;
