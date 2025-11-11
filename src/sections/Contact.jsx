import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ikm8xwv',
        'template_b28eecc',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'tuemail@gmail.com',
        },
        '1XvwGihJB405QGopt'
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error al enviar:', error.text);
        }
      );
  };

  return (
    <section
      id='contact'
      className='min-h-screen bg-transparent text-white px-6 py-20 flex items-center'
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto w-full flex flex-col gap-16'
      >
        <h2 className='text-4xl sm:text-5xl font-montserrat font-bold text-center mb-6'>
          Contacto
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center text-center gap-6 hover:border-cyan-400/40 hover:shadow-cyan-500/30 transition'
          >
            <h3 className='text-2xl font-semibold mb-4 font-code text-white'>
              Conecta conmigo
            </h3>
            <a
              href='https://github.com/ManRio'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 px-6 py-3 w-full justify-center rounded-lg bg-gray-800/40 hover:bg-gray-700/60 border border-gray-600/40 text-lg font-code transition shadow-md hover:shadow-cyan-500/30'
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/manuelriosdev/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 px-6 py-3 w-full justify-center rounded-lg bg-blue-600/40 hover:bg-blue-700/60 border border-blue-500/40 text-lg font-code transition shadow-md hover:shadow-cyan-500/30'
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
            <a
              href='mailto:manureina87@gmail.com'
              className='flex items-center gap-3 px-6 py-3 w-full justify-center rounded-lg bg-red-600/40 hover:bg-red-700/60 border border-red-500/40 text-lg font-code transition shadow-md hover:shadow-cyan-500/30'
            >
              <FaEnvelope size={24} /> Email
            </a>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-8 flex flex-col items-center hover:border-cyan-400/40 hover:shadow-cyan-500/30 transition'
          >
            <h3 className='text-2xl font-semibold mb-6 font-code text-white'>
              Envíame un mensaje
            </h3>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col space-y-4 w-full'
            >
              <input
                type='text'
                name='name'
                placeholder='Tu Nombre'
                value={formData.name}
                onChange={handleChange}
                required
                className='p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 w-full font-code border border-white/20 focus:outline-none focus:border-cyan-400 transition'
              />
              <input
                type='email'
                name='email'
                placeholder='Tu Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 w-full font-code border border-white/20 focus:outline-none focus:border-cyan-400 transition'
              />
              <textarea
                name='message'
                placeholder='Tu Mensaje'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
                className='p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 w-full font-code border border-white/20 focus:outline-none focus:border-cyan-400 transition'
              ></textarea>
              <button
                type='submit'
                className='block w-full text-center py-4 px-6 rounded-xl font-semibold text-white glass-button hover:cursor-pointer transition'
              >
                Enviar
              </button>
              {success && (
                <p className='text-green-400 text-center mt-4 font-code'>
                  ¡Mensaje enviado con éxito!
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
