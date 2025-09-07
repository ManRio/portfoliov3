// src/components/BlurText.jsx
import { motion } from 'framer-motion';

function BlurText({ text, className = '' }) {
  return (
    <motion.span
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={`inline-block ${className}`}
    >
      {text}
    </motion.span>
  );
}

export default BlurText;