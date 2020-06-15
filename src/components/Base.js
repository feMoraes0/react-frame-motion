import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rightToLeftVariants, buttonVariants } from '../utilities/framer-variants';
import { scaleYellowText } from '../utilities/framer-animation';

const baseNextVariants = {
  initial: {
    x: '-100vw'
  },
  animate: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div
      className="base container"
      variants={rightToLeftVariants}
      initial="initial"
      animate="animate"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={scaleYellowText.whileHover}
              transition={scaleYellowText.transition}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={baseNextVariants}
          initial="initial"
          animate="animate"
        >
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
            >Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;