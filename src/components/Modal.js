import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const backdropVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence>
      <motion.div
        className='backdrop'
        variants={backdropVariant}
        initial='initial'
        animate='animate'
      >

      </motion.div>
    </AnimatePresence>
  );
}

export default Modal;
