/**
 * Global Variants
 * Used by Framer Motion to control the animations
 */

const rightToLeftVariants = {
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
  }
}

const hideToShowVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    }
  }
}

export {
  rightToLeftVariants,
  hideToShowVariants,
  buttonVariants
};