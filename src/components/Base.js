import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const containerVariant = { // Create a variant so we can reuse it 
  initial: {
    opacity: 0,
    x: "100vw",// Using a string since we use a unit here, we could just put the number wihtout a string and it would take piwels as default unit
  }, 
  animate: {
    opacity: 1,
    x: 0,
    transition: { // To modify a transition, we pass it IN the object we want to modify the transition of
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    }
  }
}

const nextVariant = {
  initial: {
    x: "-100vw",
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
    }
  }
}

const buttonVariants = {
  hover: {
    scale: 1.1, // We define a keyframe to animate it. Instead of writting [1, 1.1, 1, 1.1, 1, 1.1, 1], we use the transition yoyo below
    transition: {
      duration: 0.5,
      yoyo: Infinity,
    },
    textShadow: "0px 0px 10px rgb(255,255,255)",
    boxShadow: "0px 0px 10px rgb(255,255,255)",
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container" variants={ // We use the variant
        containerVariant
      }
      initial="initial" // We specify to React which element of the object to use as initial, in the variant
      animate="animate" // Same here, but we don't need to pass the transition property anymore since it is in the animate variant
      exit="exit"
      >

      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.3,
                color: "#F8E112",
                originX: 0, // So the text deosn't move to the left
              }}
              transition={{
              }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next" variants={
            nextVariant
          }
          // initial="initial" // We don't need those line since they inherit of the parent animations
          // animate="animate"
        >
          <Link to="/toppings">
            <motion.button
              variants={ buttonVariants }
              whileHover="hover">Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;