import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLaptopCode,
  FaTools,
  FaCodeBranch,
  FaServer,
  FaBug,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiMysql,
  SiMongodb,
  SiExpress,
  SiWoo,
  SiPrestashop,
  SiTypescript,
  SiTailwindcss,
  SiVuedotjs,
  SiPython,
  SiFlask,
} from 'react-icons/si';
import { FaCogs } from 'react-icons/fa';

function TechStack({ compact = false }) {
  return (
    <section
      id='stack'
      className={`w-full ${
        compact
          ? 'grid grid-cols-1 gap-6'
          : 'grid grid-cols-1 md:grid-cols-3 gap-8'
      }`}
    >
      {/* Lenguajes */}
      <div className='glass-card p-6 text-center'>
        <h3 className='font-bold mb-4 text-cyan-400'>Lenguajes</h3>
        <div className='grid grid-cols-3 gap-4 text-3xl'>
          <IconWithLabel
            icon={<FaHtml5 className='text-orange-500' />}
            label='HTML5'
          />
          <IconWithLabel
            icon={<FaCss3Alt className='text-blue-500' />}
            label='CSS3'
          />
          <IconWithLabel
            icon={<FaJs className='text-yellow-400' />}
            label='JS'
          />
          <IconWithLabel
            icon={<SiTypescript className='text-blue-400' />}
            label='TS'
          />
          <IconWithLabel
            icon={<FaJava className='text-red-500' />}
            label='Java'
          />
          <IconWithLabel
            icon={<FaLaptopCode className='text-purple-400' />}
            label='C#'
          />
          <IconWithLabel
            icon={<SiPython className='text-yellow-300' />}
            label='Python'
          />
          <IconWithLabel
            icon={<SiFlask className='text-gray-300' />}
            label='Flask'
          />
          <IconWithLabel
            icon={<SiMysql className='text-cyan-500' />}
            label='MySQL'
          />
        </div>
      </div>

      {/* Frameworks */}
      <div className='glass-card p-6 text-center'>
        <h3 className='font-bold mb-4 text-cyan-400'>Frameworks & Librerías</h3>
        <div className='grid grid-cols-3 gap-4 text-3xl'>
          <IconWithLabel
            icon={<FaReact className='text-cyan-400' />}
            label='React'
          />
          <IconWithLabel
            icon={<FaAngular className='text-red-600' />}
            label='Angular'
          />
          <IconWithLabel
            icon={<SiVuedotjs className='text-green-400' />}
            label='Vue'
          />
          <IconWithLabel
            icon={<FaNodeJs className='text-green-500' />}
            label='Node.js'
          />
          <IconWithLabel
            icon={<SiExpress className='text-gray-400' />}
            label='Express'
          />
          <IconWithLabel
            icon={<SiTailwindcss className='text-cyan-500' />}
            label='Tailwind'
          />
          <IconWithLabel
            icon={<FaWordpress className='text-blue-400' />}
            label='WordPress'
          />
          <IconWithLabel
            icon={<SiWoo className='text-purple-500' />}
            label='WooCommerce'
          />
          <IconWithLabel
            icon={<SiPrestashop className='text-pink-400' />}
            label='Prestashop'
          />
        </div>
      </div>

      {/* Herramientas */}
      <div className='glass-card p-6 text-center'>
        <h3 className='font-bold mb-4 text-cyan-400'>Herramientas</h3>
        <div className='grid grid-cols-3 gap-4 text-3xl'>
          <IconWithLabel
            icon={<FaGitAlt className='text-orange-500' />}
            label='Git'
          />
          <IconWithLabel
            icon={<FaGithub className='text-white' />}
            label='GitHub'
          />
          <IconWithLabel
            icon={<FaTools className='text-gray-400' />}
            label='VS Code'
          />
          <IconWithLabel
            icon={<FaServer className='text-yellow-400' />}
            label='XAMPP'
          />
          <IconWithLabel
            icon={<FaBug className='text-orange-400' />}
            label='Postman'
          />
          <IconWithLabel
            icon={<FaCogs className='text-gray-300' />}
            label='n8n'
          />
        </div>
      </div>
    </section>
  );
}

function IconWithLabel({ icon, label }) {
  return (
    <div className='flex flex-col items-center text-center gap-2'>
      <div>{icon}</div>
      <span className='text-sm font-code text-gray-300'>{label}</span>
    </div>
  );
}

export default TechStack;
