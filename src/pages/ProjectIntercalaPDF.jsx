import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Files,
  ArrowDownUp,
  Eye,
  Download,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

import CaseStudyGallery from '../components/CaseStudyGallery';
import './project-case-study.css';

const ASSETS = '/assets/projects/intercala-pdf';

const technologies = ['JavaScript', 'HTML5', 'CSS3', 'pdf-lib', 'Vercel'];

const features = [
  {
    icon: Files,
    title: 'Carga de dos PDF',
    description:
      'Selección de documentos mediante el explorador o arrastrando archivos a la aplicación.',
  },
  {
    icon: ArrowDownUp,
    title: 'Orden configurable',
    description:
      'Alterna las páginas y permite mantener o invertir el orden del segundo documento.',
  },
  {
    icon: Eye,
    title: 'Vista previa del orden',
    description:
      'Representación de la secuencia final y del número total de páginas.',
  },
  {
    icon: Download,
    title: 'Descarga inmediata',
    description: 'Generación y descarga del PDF resultante desde el navegador.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacidad por diseño',
    description:
      'Los documentos se procesan localmente, sin enviarse a un servidor.',
  },
];

const gallery = [
  {
    src: `${ASSETS}/orden-normal.webp`,
    title: 'Intercalado en orden normal',
    description:
      'Dos documentos de dos páginas combinados en un PDF final de cuatro páginas.',
    alt: 'IntercalaPDF mostrando el intercalado normal y un PDF generado de cuatro páginas.',
  },
  {
    src: `${ASSETS}/orden-inverso.webp`,
    title: 'Intercalado en orden inverso',
    description:
      'Documentos de cuatro y tres páginas combinados invirtiendo el orden del segundo.',
    alt: 'IntercalaPDF mostrando el intercalado inverso y un PDF generado de siete páginas.',
  },
];

function ProjectIntercalaPDF() {
  useEffect(() => {
    document.title = 'IntercalaPDF | Caso práctico - Manuel Ríos';

    return () => {
      document.title = 'Manuel Ríos | Desarrollador Web Full Stack';
    };
  }, []);

  return (
    <main className='case-study' id='main-content'>
      <div className='case-study-container'>
        {/* Navegación */}
        <div className='case-study-navigation'>
          <Link to='/#projects' className='case-study-back'>
            <ArrowLeft size={17} />
            Volver a proyectos
          </Link>

          <span className='case-study-index'>CASO PRÁCTICO / 02</span>
        </div>

        {/* Cabecera */}
        <header className='case-study-header'>
          <div className='case-study-kicker'>
            <span>PROYECTO PROPIO</span>
            <span className='case-study-kicker-dot' />
            <span>HERRAMIENTA WEB</span>
            <span className='case-study-kicker-dot' />
            <span>2026</span>
          </div>

          <h1>
            Intercala<span>PDF.</span>
          </h1>

          <p className='case-study-lead'>
            Una herramienta gratuita para reconstruir documentos escaneados a
            doble cara, intercalando automáticamente las páginas de dos PDF sin
            tener que ordenarlas manualmente.
          </p>

          <div className='case-study-actions'>
            <a
              href='https://intercarlar-pdf.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-primary'
            >
              Probar la aplicación
              <ArrowUpRight size={18} />
            </a>

            <a
              href='https://github.com/ManRio/intercarlar-pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='case-study-button-secondary'
            >
              Ver código en GitHub
              <ExternalLink size={17} />
            </a>
          </div>
        </header>

        {/* Portada */}
        <figure className='case-study-cover'>
          <img
            src={`${ASSETS}/portada.webp`}
            alt='Interfaz principal de IntercalaPDF con carga de archivos y vista previa.'
            fetchPriority='high'
          />

          <figcaption>Interfaz principal de IntercalaPDF.</figcaption>
        </figure>

        {/* Datos rápidos */}
        <div className='case-study-facts'>
          <div>
            <span>TIPO DE PROYECTO</span>
            <strong>Herramienta web</strong>
          </div>

          <div>
            <span>MI PAPEL</span>
            <strong>Diseño y desarrollo</strong>
          </div>

          <div>
            <span>TECNOLOGÍA PRINCIPAL</span>
            <strong>JavaScript · pdf-lib</strong>
          </div>

          <div>
            <span>ESTADO</span>
            <strong>Publicado</strong>
          </div>
        </div>

        {/* 01 - Problema */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>01 / EL PROBLEMA</div>

          <div className='case-study-section-content'>
            <h2>Un escáner, dos archivos y demasiadas páginas.</h2>

            <p>
              La idea surgió mientras necesitaba digitalizar un documento
              utilizando una impresora con alimentador automático que solo
              escaneaba una cara de cada hoja.
            </p>

            <p>
              El proceso obligaba a escanear primero todas las caras delanteras
              y después las traseras, generando dos documentos PDF
              independientes.
            </p>

            <p>
              En lugar de reorganizar manualmente todas las páginas, decidí
              desarrollar una herramienta que automatizara esa tarea.
            </p>
          </div>
        </section>

        {/* 02 - Solución */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>02 / LA SOLUCIÓN</div>

          <div className='case-study-section-content'>
            <h2>Dos archivos. Un PDF en el orden correcto.</h2>

            <p>
              Desarrollé una aplicación web que permite cargar dos documentos y
              alternar sus páginas automáticamente.
            </p>

            <p>
              El usuario puede conservar el orden del segundo PDF o invertirlo,
              especialmente útil cuando las caras traseras se escanean empezando
              por la última hoja.
            </p>

            <p>
              Antes de generar el documento, la aplicación muestra una vista
              previa de la secuencia final de páginas.
            </p>
          </div>
        </section>

        {/* 03 - Funcionalidades */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>03 / FUNCIONALIDADES</div>

          <div className='case-study-section-content'>
            <h2>Lo necesario, sin complicaciones.</h2>

            <div className='case-study-features'>
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article key={feature.title} className='case-study-feature'>
                    <div className='case-study-feature-icon'>
                      <Icon size={22} aria-hidden='true' />
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 04 - Desarrollo técnico */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>
            04 / DESARROLLO TÉCNICO
          </div>

          <div className='case-study-section-content'>
            <h2>Procesamiento local, sin backend.</h2>

            <p>
              Desarrollé la interfaz con HTML5, CSS3 y JavaScript, utilizando
              pdf-lib para leer los documentos, copiar sus páginas y generar el
              archivo final.
            </p>

            <p>
              Todo el procesamiento se realiza en el navegador. Los PDF no
              necesitan enviarse a un servidor ni almacenarse en una plataforma
              externa.
            </p>

            <p>
              La solución también contempla archivos con distinto número de
              páginas y permite descargar el resultado directamente.
            </p>

            <ul className='case-study-technologies'>
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 - Galería reutilizable */}
        <CaseStudyGallery
          images={gallery}
          sectionLabel='05 / DEMOSTRACIÓN'
          title='Dos formas de ordenar tus documentos.'
          description='Ejemplos de intercalado normal e inverso, con el documento generado y listo para descargar.'
        />

        {/* 06 - Resultado */}
        <section className='case-study-section'>
          <div className='case-study-section-label'>06 / RESULTADO</div>

          <div className='case-study-section-content'>
            <h2>Una solución pequeña, pero útil.</h2>

            <p>
              IntercalaPDF es una aplicación gratuita, publicada en Vercel, que
              puede utilizarse sin crear una cuenta.
            </p>

            <p>
              El proyecto demuestra cómo una necesidad concreta puede
              transformarse en una herramienta práctica, con una interfaz
              sencilla y una arquitectura ajustada al problema que resuelve.
            </p>

            <div className='case-study-result'>
              <CheckCircle2 size={22} />

              <span>Aplicación publicada y código disponible en GitHub.</span>
            </div>
          </div>
        </section>

        {/* Cierre */}
        <div className='case-study-bottom'>
          <div>
            <span>¿QUIERES PROBARLO?</span>

            <h2>Intercala tus documentos en segundos.</h2>
          </div>

          <a
            href='https://intercarlar-pdf.vercel.app/'
            target='_blank'
            rel='noopener noreferrer'
            className='case-study-button-primary'
          >
            Abrir IntercalaPDF
            <ArrowUpRight size={18} />
          </a>
        </div>

        <Link to='/#projects' className='case-study-back case-study-end-back'>
          <ArrowLeft size={17} />
          Volver a todos los proyectos
        </Link>
      </div>
    </main>
  );
}

export default ProjectIntercalaPDF;
