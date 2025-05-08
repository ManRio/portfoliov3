import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '/logo.png';

function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className='fixed top-0 left-0 w-full h-screen bg-black z-[9999] flex items-center justify-center'
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={logo}
            alt='Logo'
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className='w-[300px] h-[300px] object-contain'
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Preloader;
