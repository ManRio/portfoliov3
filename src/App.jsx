import { lazy, Suspense } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanonicalManager from './components/CanonicalManager';
import ScrollManager from './components/ScrollManager';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// Los casos prácticos se cargarán únicamente
// cuando el usuario visite su ruta.
const ProjectPn3D = lazy(() => import('./pages/ProjectPn3D'));

const ProjectVerifactu = lazy(() => import('./pages/ProjectVerifactu'));

const ProjectStockIt = lazy(() => import('./pages/ProjectStockIt'));

const ProjectOroManager = lazy(() => import('./pages/ProjectOroManager'));

const ProjectIntercalaPDF = lazy(() => import('./pages/ProjectIntercalaPDF'));

const ProjectTaskGamification = lazy(
  () => import('./pages/ProjectTaskGamification'),
);

// Indicador accesible mientras se descarga
// el código de un caso práctico.
function ProjectLoading() {
  return (
    <main
      role='status'
      aria-live='polite'
      className='min-h-[60vh] flex items-center justify-center px-6 py-24'
    >
      <div className='flex flex-col items-center gap-4 text-center'>
        <div
          className='h-10 w-10 rounded-full border-2 border-cyan-400/20 border-t-cyan-400 animate-spin'
          aria-hidden='true'
        />

        <p className='text-sm text-slate-300'>Cargando proyecto...</p>
      </div>
    </main>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className='relative text-white'>
      {/* Fondo general optimizado */}
      <div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
        <img
          src='/assets/bg-tech.webp'
          alt=''
          aria-hidden='true'
          className='w-full h-full object-cover opacity-10'
        />
      </div>

      <div className='relative z-10 min-h-screen'>
        <Router>
          <CanonicalManager />
          <ScrollManager />
          <Navbar />

          <Suspense fallback={<ProjectLoading />}>
            <Routes>
              {/* Página principal */}
              <Route path='/' element={<HomePage />} />

              {/* Casos prácticos V4 */}
              <Route
                path='/projects/pn-impresion-3d'
                element={<ProjectPn3D />}
              />

              <Route
                path='/projects/verifactu-app'
                element={<ProjectVerifactu />}
              />

              <Route path='/projects/stockit' element={<ProjectStockIt />} />

              <Route
                path='/projects/ProjectOroManager'
                element={<ProjectOroManager />}
              />

              <Route
                path='/projects/intercala-pdf'
                element={<ProjectIntercalaPDF />}
              />

              <Route
                path='/projects/ProjectTaskGamification'
                element={<ProjectTaskGamification />}
              />

              {/* Redirecciones de proyectos antiguos */}
              <Route
                path='/projects/ProjectFitTrack'
                element={<Navigate to='/#projects' replace />}
              />

              <Route
                path='/projects/ProjectNewsReader'
                element={<Navigate to='/#projects' replace />}
              />

              <Route
                path='/projects/landingpageresponsive'
                element={<Navigate to='/#projects' replace />}
              />

              {/* Otras rutas */}
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </Suspense>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
