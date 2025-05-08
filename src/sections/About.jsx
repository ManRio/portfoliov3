import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaTools,
  FaCodeBranch,
  FaServer,
  FaBug,
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiExpress } from 'react-icons/si';

function About() {
  return (
    <section
      id='about'
      className='min-h-screen bg-transparent text-white px-6 py-20 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto flex flex-col gap-20'>
        {/* Sobre mí + foto */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'
        >
          <div>
            <h2 className='text-4xl sm:text-5xl font-montserrat font-bold mb-6'>
              Sobre mí
            </h2>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed font-code'>
              La tecnología y la innovación han sido pilares en mi crecimiento
              profesional. A través de la formación continua y la práctica
              autodidacta, he desarrollado competencias en tecnologías web como{' '}
              <strong>HTML5, CSS3, Java, SQL y JavaScript</strong>,
              enriqueciendo mi enfoque para resolver problemas de forma
              eficiente. Me apasiona <b>aprender</b> y aplicar{' '}
              <b>nuevas herramientas</b> para impulsar soluciones creativas,
              siempre <b>colaborando en equipo</b> y mirando hacia el{' '}
              <b>futuro</b> del sector.
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src='/assets/foto2.png'
              alt='Manuel Ríos'
              className='w-64 h-64 object-cover rounded-full shadow-xl transition-transform transform hover:scale-105'
            />
          </div>
        </motion.div>

        {/* Tecnologías */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.6 }}
          className='text-center'
        >
          <h2 className='text-3xl sm:text-4xl font-montserrat font-bold mb-8'>
            Tecnologías que uso
          </h2>
          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-5xl text-white'>
            <IconWithLabel icon={<FaHtml5 />} label='HTML5' />
            <IconWithLabel icon={<FaCss3Alt />} label='CSS3' />
            <IconWithLabel icon={<FaJs />} label='JavaScript' />
            <IconWithLabel icon={<FaReact />} label='React' />
            <IconWithLabel icon={<FaAngular />} label='Angular' />
            <IconWithLabel icon={<FaJava />} label='Java' />
            <IconWithLabel icon={<FaLaptopCode />} label='C#' />
            <IconWithLabel icon={<FaDatabase />} label='SQL' />
            <IconWithLabel icon={<SiMysql />} label='MySQL' />
            <IconWithLabel icon={<SiMongodb />} label='MongoDB' />
            <IconWithLabel icon={<FaNodeJs />} label='Node.js' />
            <IconWithLabel icon={<SiExpress />} label='Express' />
            <IconWithLabel icon={<FaTools />} label='VS Code' />
            <IconWithLabel icon={<FaServer />} label='XAMPP' />
            <IconWithLabel icon={<FaBug />} label='Postman' />
            <IconWithLabel icon={<FaCodeBranch />} label='Git' />
            <IconWithLabel icon={<FaGithub />} label='GitHub' />
          </div>
        </motion.div>

        {/* Botón Descargar CV */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <a
            href='/manuel-rios-cv.pdf'
            download
            className='inline-block px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg shadow-md transition duration-300'
          >
            📄 Descarga mi CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function IconWithLabel({ icon, label }) {
  return (
    <div className='flex flex-col items-center text-center gap-2 text-white'>
      <div className='text-4xl md:text-5xl'>{icon}</div>
      <span className='text-sm font-code'>{label}</span>
    </div>
  );
}

export default About;
