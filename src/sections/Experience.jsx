import { motion } from 'framer-motion';

function Experience() {
  return (
    <section
      id='experience'
      className='min-h-screen bg-transparent text-white px-6 py-20 overflow-hidden'
    >
      <div className='max-w-6xl mx-auto flex flex-col gap-12'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl font-montserrat font-bold text-center mb-10'
        >
          Experiencia
        </motion.h2>

        <div className='bg-white/10 p-6 md:p-10 rounded-xl shadow-lg'>
          <h3 className='text-2xl font-bold font-montserrat mb-2'>
            Desarrollador Web (Becario DAW) – Grupo Oro
          </h3>
          <p className='text-sm text-gray-400 mb-4'>
            Jun 2025 – Sep 2025 · Remoto
          </p>
          <ul className='list-disc list-inside text-gray-300 font-code space-y-2'>
            <li>
              Desarrollo de aplicación web interna usando React, Html, Css, JavaScript y TypeScript
              junto al equipo técnico.
            </li>
            <li>
              Participación en la creación de interfaces modulares y formularios
              reactivos.
            </li>
            <li>Automatización de procesos internos mediante n8n.</li>
            <li>Adaptación de sitios web al estándar del Kit Digital.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
