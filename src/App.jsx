import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CanonicalManager from './components/CanonicalManager';
import ScrollManager from './components/ScrollManager';

import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import ProjectLanding from './pages/ProjectLanding';
import ProjectNewsReader from './pages/ProjectNewsReader';
import ProjectStockIt from './pages/ProjectStockIt';
import ProjectOroManager from './pages/ProjectOroManager';
import ProjectFitTrack from './pages/ProjectFitTrack';
import ProjectTaskGamification from './pages/ProjectTaskGamification';

import ProjectPn3D from './pages/ProjectPn3D';
import ProjectIntercalaPDF from './pages/ProjectIntercalaPDF';

function App() {
  return (
    <div className='relative text-white'>
      {/* Fondo decorativo */}
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
            {/* Portada */}
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

            {/* Casos prácticos V4 */}
            <Route path='/projects/pn-impresion-3d' element={<ProjectPn3D />} />

            <Route
              path='/projects/intercala-pdf'
              element={<ProjectIntercalaPDF />}
            />

            {/* Casos prácticos anteriores */}
            <Route path='/projects/stockit' element={<ProjectStockIt />} />

            <Route
              path='/projects/ProjectOroManager'
              element={<ProjectOroManager />}
            />

            <Route
              path='/projects/ProjectTaskGamification'
              element={<ProjectTaskGamification />}
            />

            <Route
              path='/projects/ProjectFitTrack'
              element={<ProjectFitTrack />}
            />

            <Route
              path='/projects/ProjectNewsReader'
              element={<ProjectNewsReader />}
            />

            <Route
              path='/projects/landingpageresponsive'
              element={<ProjectLanding />}
            />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
