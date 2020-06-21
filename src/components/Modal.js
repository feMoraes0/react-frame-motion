import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const backdropVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

const modalVariant = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: '200px',
    opacity: 1,
    transition: {
      delay: 0.5,
    }
  }
}

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence>
      { showModal && (
        <motion.div
        className='backdrop'
        variants={backdropVariant}
        initial='initial'
        animate='animate'
        exit='initial'
      >
        <motion.div
          className='modal'
          variants={modalVariant}
          initial='initial'
          animate='animate'
        >
          <p>Want to make another pizza?</p>
          <Link to='/'>
            <button>Start Again!</button>
          </Link>
        </motion.div>

      </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
