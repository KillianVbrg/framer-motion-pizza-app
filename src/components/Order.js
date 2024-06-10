import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { useEffect } from 'react';

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
      mass: 0.5, // A smaller mass means that it moves quicker while a bigger mass does the contrary
      damping: 8, // Determines how the spring bounces
      when: "beforeChildren", // when propery says when the animate should occure in relation to any children element which are animating too. It is useful here so we can see the text of the ingredients fade-in. Without it, the fade-in process would start off-page at the smae time as the parent animation
      staggerChildren: 0.5, // It means that there is a 0.5s gap between each transitioned element (the list of ingredients appears 1s after the first p tag)
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    }
  }
}

const containerChildVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  }
}

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 4000);
  }, [setShowModal])

  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 3000);

  return (
    <motion.div className="container order" variants={
        containerVariant
      }
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <AnimatePresence> {/* When we want to hide something, instead of dissappearing, we can animate it */}
        {showTitle && (
          <motion.h2 exit={{ // And we have to pass in the exit property with the why it dissappears (x, y, opacity, ...)
            opacity: 0,
          }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={containerChildVariants}>You ordered a {pizza.base} pizza with:</motion.p> {/* No need to pass inNo need to pass in the initial and animate properties since the child inherit them from the div.container the initial and animate properties since the child inherit them from the div.container */}
      <motion.div variants={containerChildVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;