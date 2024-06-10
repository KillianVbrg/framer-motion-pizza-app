import React from 'react';
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      }
    },
  },
  animateTwo: {
    x: [0, 0],
    y: [0, -30],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut"
      },
    },
  },
}

const Loader = () => {
  const [animate, cycleAnimate] = useCycle("animateOne", "animateTwo") // Allows us to switch from a value to another 

  return (
    <>
    <motion.div
      className='loader'
      variants={ loaderVariants }
      animate={ animate }
    >
    </motion.div>
    <div onClick={ () => cycleAnimate() }>Cycle loader</div>
   </>
   );
}
 
export default Loader;