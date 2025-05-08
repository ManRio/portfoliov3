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
        (result) => {
          console.log('Mensaje enviado:', result.text);
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
      className='min-h-screen bg-transparent text-white px-6 py-20'
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='max-w-6xl mx-auto flex flex-col gap-14'
      >
        <h2 className='text-4xl sm:text-5xl font-montserrat font-bold text-center'>
          Contacto
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Redes Sociales */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex flex-col items-center text-center gap-6'
          >
            <h3 className='text-2xl font-semibold mb-4 font-code'>
              Puedes contactarme en mis redes:
            </h3>
            <a
              href='https://github.com/ManRio'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition text-lg font-code w-full justify-center'
            >
              <FaGithub size={24} /> GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/riosreinamanuel/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition text-lg font-code w-full justify-center'
            >
              <FaLinkedin size={24} /> LinkedIn
            </a>
            <a
              href='mailto:manureina87@gmail.com'
              className='flex items-center gap-3 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full transition text-lg font-code w-full justify-center'
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
            className='flex flex-col items-center'
          >
            <h3 className='text-2xl font-semibold mb-4 font-code'>
              ...O si prefieres, déjame tus datos:
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
                className='p-3 rounded bg-white/10 text-white placeholder-gray-400 w-full font-code'
              />
              <input
                type='email'
                name='email'
                placeholder='Tu Email'
                value={formData.email}
                onChange={handleChange}
                required
                className='p-3 rounded bg-white/10 text-white placeholder-gray-400 w-full font-code'
              />
              <textarea
                name='message'
                placeholder='Tu Mensaje'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
                className='p-3 rounded bg-white/10 text-white placeholder-gray-400 w-full font-code'
              ></textarea>
              <button
                type='submit'
                className='bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 rounded transition w-full font-code'
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
