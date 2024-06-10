import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Loader from './Loader';

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

const containerVariants = {
  inital: {
    opacity: 0,
  }, 
  animate: {
    opcaity: 1,
    transition: { // Transition are properties we can pass between the initial and the animate (here, we wait 1.5s before firing the animate and the animate will take 1.25s)
      delay: 0.5,
      duration: 1.25, // The duration property can only be used be an animation of type tween (so the default type here is tween)
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container" variants={ containerVariants }
      initial="initial"
      animate="animate"
      exit="exit"> {/* We have to specif ythe way it is exitings */}
      <motion.h2 animate={{
        fontSize: 50,
        // color: "#FF2994", 
        // x: 100, 
        // y: -100
      }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={ buttonVariants }
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      {/* <Loader /> */}
    </motion.div>
  )
}

export default Home;