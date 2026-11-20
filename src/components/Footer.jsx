import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ArrowUpRight, ArrowUp } from 'lucide-react';
import './footer.css';

const navigation = [
  { label: 'Inicio', href: '/#hero' },
  { label: 'Sobre mí', href: '/#about' },
  { label: 'Experiencia', href: '/#experience' },
  { label: 'Proyectos', href: '/#projects' },
  { label: 'Contacto', href: '/#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ManRio',
    icon: FaGithub,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manuelriosdev/',
    icon: FaLinkedin,
    external: true,
  },
  {
    label: 'Correo electrónico',
    href: 'mailto:manureina87@gmail.com',
    icon: Mail,
    external: false,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='footer-v4'>
      <div className='footer-v4-container'>
        <div className='footer-v4-main'>
          {/* Marca personal */}
          <div className='footer-v4-brand'>
            <a
              href='/#hero'
              className='footer-v4-logo'
              aria-label='Manuel Ríos - Ir al inicio'
            >
              MR<span>.dev</span>
            </a>

            <p className='footer-v4-role'>Desarrollador Full Stack</p>

            <p className='footer-v4-description'>
              Desarrollo aplicaciones web y soluciones digitales, combinando
              tecnología, funcionalidad y necesidades reales.
            </p>

            <span className='footer-v4-location'>
              Sevilla, España · Presencial / Híbrido / Remoto
            </span>
          </div>

          {/* Navegación */}
          <nav
            className='footer-v4-column'
            aria-label='Navegación del pie de página'
          >
            <h2>Navegación</h2>

            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes y contacto */}
          <div className='footer-v4-column'>
            <h2>Conectemos</h2>

            <ul>
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className='footer-v4-social'
                    >
                      <Icon size={17} aria-hidden='true' />
                      {item.label}
                      {item.external && (
                        <ArrowUpRight size={13} aria-hidden='true' />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Volver arriba */}
          <div className='footer-v4-top-wrapper'>
            <a
              href='/#hero'
              className='footer-v4-back-top'
              aria-label='Volver al inicio'
              title='Volver al inicio'
            >
              <ArrowUp size={21} />
            </a>
          </div>
        </div>

        <div className='footer-v4-bottom'>
          <p>© {year} Manuel Ríos. Todos los derechos reservados.</p>

          <p>
            Diseñado y desarrollado con <span>React · Tailwind CSS · Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
