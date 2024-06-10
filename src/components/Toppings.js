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


const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container" variants={
        containerVariant
      }
      initial="initial"
      animate="animate"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                color: "#F8E112",
                originX: 0, // So the text deosn't move to the left
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/Base" style={{marginRight: "10%"}}>
        <motion.button
          variants={ buttonVariants }
          whileHover="hover"
        >
          Back
        </motion.button>
      </Link>
      <Link to="/order">
        <motion.button
          variants={ buttonVariants }
          whileHover="hover"
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;