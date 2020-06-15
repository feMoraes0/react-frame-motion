import React from 'react';
import { motion } from 'framer-motion';
import { hideToShowVariants } from '../utilities/framer-variants';

const orderContainerVariants = {
  initial: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={orderContainerVariants}
      initial="initial"
      animate="animate"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p
        variants={hideToShowVariants}
      >
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div
        variants={hideToShowVariants}
      >
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;