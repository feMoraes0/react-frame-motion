import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariants } from '../utilities/framer-variants';

const homeVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5
    }
  },
  exit: {
    x: '-100vw'
  }
}

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;