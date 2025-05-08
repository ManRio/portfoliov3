import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import ProjectLanding from './pages/ProjectLanding';
import ProjectNewsReader from './pages/ProjectNewsReader';
import ProjectStockIt from './pages/ProjectStockIt';

function App() {
  return (
    <div className='relative text-white'>
      {/* Fondo fijo */}
      <div className='fixed top-0 left-0 w-full h-full z-0'>
        <img
          src='/assets/bg-tech.png'
          alt='fondo tech'
          className='w-full h-full object-cover opacity-10'
        />
      </div>

      {/* Capa semitransparente encima del fondo */}
      <div className='relative z-10 bg-black/80 min-h-screen'>
        <Router>
          <Preloader />
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route
              path='/projects/landingpageresponsive'
              element={<ProjectLanding />}
            />
            <Route
              path='/projects/ProjectNewsReader'
              element={<ProjectNewsReader />}
            />
            <Route path='/projects/stockit' element={<ProjectStockIt />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
