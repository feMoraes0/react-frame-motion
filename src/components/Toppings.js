import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { buttonVariants } from '../utilities/framer-variants';
import { scaleYellowText } from '../utilities/framer-animation';

const toppingsVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  },
  exit: {
    x: '-100vw'
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      className="toppings container"
      variants={toppingsVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={scaleYellowText.whileHover}
              transition={scaleYellowText.transition}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>
      <Link to="/order">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;