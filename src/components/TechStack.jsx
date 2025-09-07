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

function TechStack() {
  return (
    <motion.section
      id='stack'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true, amount: 0.6 }}
      className='text-center px-6 py-20'
    >
      <h2 className='text-3xl sm:text-4xl font-montserrat font-bold mb-8'>
        Tecnologías que uso
      </h2>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center text-5xl text-white'>
        <IconWithLabel icon={<FaHtml5 />} label='HTML5' />
        <IconWithLabel icon={<FaCss3Alt />} label='CSS3' />
        <IconWithLabel icon={<FaJs />} label='JavaScript' />
        <IconWithLabel icon={<SiTypescript />} label='TypeScript' />
        <IconWithLabel icon={<FaReact />} label='React' />
        <IconWithLabel icon={<FaAngular />} label='Angular' />
        <IconWithLabel icon={<FaJava />} label='Java' />
        <IconWithLabel icon={<FaLaptopCode />} label='C#' />
        <IconWithLabel icon={<SiPython />} label='Python' />
        <IconWithLabel icon={<SiFlask />} label='Flask' />
        <IconWithLabel icon={<FaDatabase />} label='SQL' />
        <IconWithLabel icon={<SiMysql />} label='MySQL' />
        <IconWithLabel icon={<SiMongodb />} label='MongoDB' />
        <IconWithLabel icon={<FaNodeJs />} label='Node.js' />
        <IconWithLabel icon={<SiExpress />} label='Express' />
        <IconWithLabel icon={<SiTailwindcss />} label='TailwindCSS' />
        <IconWithLabel icon={<SiVuedotjs />} label='Vue.js' />
        <IconWithLabel icon={<FaTools />} label='VS Code' />
        <IconWithLabel icon={<FaServer />} label='XAMPP' />
        <IconWithLabel icon={<FaBug />} label='Postman' />
        <IconWithLabel icon={<FaCodeBranch />} label='Git' />
        <IconWithLabel icon={<FaGithub />} label='GitHub' />
        <IconWithLabel icon={<FaWordpress />} label='WordPress' />
        <IconWithLabel icon={<SiWoo />} label='WooCommerce' />
        <IconWithLabel icon={<SiPrestashop />} label='PrestaShop' />
        <IconWithLabel icon={<FaCogs />} label='n8n' />
      </div>
    </motion.section>
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

export default TechStack;
