import { motion } from 'framer-motion';
import { useCanonical } from '../hooks/useCanonical';

function Experience() {
  useCanonical('https://portfoliov3-omega-nine.vercel.app/projects');
  const jobs = [
    {
      title: 'Desarrollador Web (Becario DAW) – Grupo Oro',
      period: 'Jun 2025 – Sep 2025 · Remoto',
      tasks: [
        'Desarrollo de aplicación web interna usando React, Html, Css, JavaScript y TypeScript junto al equipo técnico.',
        'Participación en la creación de interfaces modulares y formularios reactivos.',
        'Automatización de procesos internos mediante n8n.',
        'Adaptación de sitios web al estándar del Kit Digital.',
      ],
    },
    {
      title: 'Community Manager – Freelance',
      period: 'Nov 2023 – Actualidad · Remoto',
      tasks: [
        'Gestión de redes sociales para varios clientes.',
        'Creación de contenido visual y campañas digitales.',
        'Diseño gráfico de material promocional.',
      ],
    },
    {
      title: 'Desarrollador Web Freelance',
      period: 'Nov 2023 – Jun 2025 · Sevilla, España',
      tasks: [
        'Desarrollo de proyectos freelance mientras completaba la formación en DAW.',
        'Landing page para una empresa de gestión de contenidos.',
        'Blog para un periodista en WordPress.',
        'Cambios y mejoras en un ecommerce PrestaShop de repuestos de coches.',
      ],
    },
  ];

  return (
    <>
      <section
        id='experience'
        className='min-h-screen bg-transparent text-white px-6 py-20 flex flex-col items-center'
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='text-4xl sm:text-5xl font-montserrat font-bold text-center mb-16'
        >
          Experiencia
        </motion.h2>

        <div className='max-w-5xl w-full flex flex-col gap-10'>
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6 md:p-10 hover:border-cyan-400/40 hover:shadow-cyan-500/30 transition'
            >
              <h3 className='text-2xl font-bold font-montserrat mb-2 text-white'>
                {job.title}
              </h3>
              <p className='text-sm text-gray-100 mb-4'>{job.period}</p>
              <ul className='list-disc list-inside text-gray-300 font-code space-y-2'>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;
