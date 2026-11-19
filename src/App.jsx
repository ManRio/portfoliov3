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

import ProjectPn3D from './pages/ProjectPn3D';
import ProjectVerifactu from './pages/ProjectVerifactu';
import ProjectStockIt from './pages/ProjectStockIt';
import ProjectOroManager from './pages/ProjectOroManager';
import ProjectIntercalaPDF from './pages/ProjectIntercalaPDF';
import ProjectTaskGamification from './pages/ProjectTaskGamification';

function App() {
  return (
    <div className='relative text-white'>
      <div className='fixed top-0 left-0 w-full h-full z-0 overflow-hidden'>
        <img
          src='/assets/bg-tech.png'
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

          <Routes>
            {/* Página principal */}
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* Los seis casos prácticos V4 */}
            <Route path='/projects/pn-impresion-3d' element={<ProjectPn3D />} />

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

            {/* Enlaces históricos */}
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

            {/* Otras direcciones desconocidas */}
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
