import React from 'react';
import { motion } from "framer-motion";

const svgVariants = {
  initial: {
    rotate: -180,
  },
  animate: {
    rotate: 0,
    transition: {
      duration: 1
    },
  },
}

const pathVariants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
}

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        drag //Allows the user to drag and throw and logo away (very funny)
        dragConstraints={{ // So the user cannot lost the logo out of range, we use this
          left: 0, top: 0, right: 0, bottom: 0,
        }}
        dragElastic= { .7 } // Elesticity of dragging (try)
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          variants={ svgVariants }
          initial="initial"
          animate="animate"
        >
          <motion.path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            variants={ pathVariants }
          />
          <motion.path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
            variants={ pathVariants }
          />
        </motion.svg>
      </motion.div>
      <motion.div className="title" initial={{ y:-150 }} transition={{
        delay: 0.25,
        type: "spring", // Different types of animations are possible, default is 'spring' (it bounces a little bit), 'tween' is sharper
        stiffness: 100, // Can only be applied to the spring type, the more is the value high, the more it is bouncing
      }} animate={{
        y: 0
      }}>
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;