/**
 * Global Variants
 * Used by Framer Motion to control the animations
 */
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
  hideToShowVariants,
  buttonVariants
};