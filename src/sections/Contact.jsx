
import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';

import './contact.css';

const EMAIL = 'manureina87@gmail.com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const initialForm = {
  name: '',
  email: '',
  message: '',
  website: '',
};

function Contact() {
  const reduceMotion = useReducedMotion();

  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (status === 'sending') return;

    // Campo antispam oculto.
    if (formData.website.trim()) {
      setStatus('success');
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          reply_to: formData.email.trim(),
          message: formData.message.trim(),
          to_email: EMAIL,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus('success');
      setFormData(initialForm);
    } catch (error) {
      console.error('Error de envío de EmailJS:', error);
      setStatus('error');
    }
  };

  const animation = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55 },
      };

  return (
    <section
      id="contact"
      className="contact-v4"
      aria-labelledby="contact-v4-title"
    >
      <div className="contact-v4-container">

        <motion.header
          className="contact-v4-header"
          {...animation}
        >
          <p className="contact-v4-eyebrow">
            <span>05 /</span> CONTACTO
          </p>

          <h2
            id="contact-v4-title"
            className="contact-v4-title"
          >
            ¿Hablamos de tu
            <span> próximo proyecto?</span>
          </h2>

          <p className="contact-v4-intro">
            Estoy abierto a oportunidades profesionales,
            nuevos retos y colaboraciones relacionadas
            con el desarrollo web.
            Si crees que mi perfil puede encajar en tu
            equipo o tienes una propuesta, hablemos.
          </p>
        </motion.header>

        <div className="contact-v4-grid">

          {/* Información de contacto */}
          <motion.div
            className="contact-v4-card contact-v4-info"
            {...animation}
          >
            <div>
              <p className="contact-v4-card-label">
                CONECTEMOS
              </p>

              <h3>¿Dónde encontrarme?</h3>

              <p className="contact-v4-card-intro">
                Puedes escribirme directamente o
                conectar conmigo a través de mis
                perfiles profesionales.
              </p>
            </div>

            <div className="contact-v4-methods">

              <a
                href={`mailto:${EMAIL}`}
                className="contact-v4-method"
              >
                <span className="contact-v4-method-icon">
                  <Mail size={21} />
                </span>

                <span className="contact-v4-method-info">
                  <span>Correo electrónico</span>
                  <strong>{EMAIL}</strong>
                </span>

                <ArrowUpRight
                  size={17}
                  className="contact-v4-method-arrow"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/manuelriosdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-v4-method"
              >
                <span className="contact-v4-method-icon">
                  <FaLinkedin size={21} />
                </span>

                <span className="contact-v4-method-info">
                  <span>LinkedIn</span>
                  <strong>Conecta conmigo</strong>
                </span>

                <ArrowUpRight
                  size={17}
                  className="contact-v4-method-arrow"
                />
              </a>

              <a
                href="https://github.com/ManRio"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-v4-method"
              >
                <span className="contact-v4-method-icon">
                  <FaGithub size={21} />
                </span>

                <span className="contact-v4-method-info">
                  <span>GitHub</span>
                  <strong>Explora mi código</strong>
                </span>

                <ArrowUpRight
                  size={17}
                  className="contact-v4-method-arrow"
                />
              </a>

            </div>

            <div className="contact-v4-location">
              <MapPin size={18} />
              <div>
                <strong>Sevilla, España</strong>
                <span>
                  Disponibilidad presencial,
                  híbrida y remota
                </span>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            className="contact-v4-card contact-v4-form-card"
            {...animation}
          >
            <p className="contact-v4-card-label">
              ENVÍAME UN MENSAJE
            </p>

            <h3>Cuéntame tu propuesta</h3>

            <p className="contact-v4-card-intro">
              Completa el formulario y podré responderte
              directamente por correo electrónico.
            </p>

            <form
              className="contact-v4-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-v4-field">
                <label htmlFor="contact-name">
                  Nombre
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  maxLength={100}
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              <div className="contact-v4-field">
                <label htmlFor="contact-email">
                  Correo electrónico
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  maxLength={254}
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              <div className="contact-v4-field">
                <label htmlFor="contact-message">
                  Mensaje
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Cuéntame en qué puedo ayudarte..."
                  rows={6}
                  minLength={10}
                  maxLength={3000}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              {/* Honeypot antispam */}
              <div
                className="contact-v4-honeypot"
                aria-hidden="true"
              >
                <label htmlFor="contact-website">
                  Página web
                </label>

                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <button
                className="contact-v4-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? 'Enviando mensaje...'
                  : 'Enviar mensaje'}

                <Send size={17} />
              </button>

              <div
                className="contact-v4-feedback"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {status === 'success' && (
                  <p className="contact-v4-success">
                    <CheckCircle2 size={18} />
                    Mensaje enviado correctamente.
                    ¡Gracias por contactar!
                  </p>
                )}

                {status === 'error' && (
                  <p className="contact-v4-error">
                    <AlertCircle size={18} />
                    No se ha podido enviar el mensaje.
                    Puedes escribirme directamente
                    por correo electrónico.
                  </p>
                )}
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
