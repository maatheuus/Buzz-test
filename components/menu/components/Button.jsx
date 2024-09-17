"use client";

import { motion } from "framer-motion";
import PerspectiveText from "./PerspectiveText";

function Button({ isActive, toggleMenu }) {
  return (
    <div
      className="absolute top-0 right-0 w-24 h-10 cursor-pointer rounded-3xl overflow-hidden"
      aria-expanded={isActive}
      aria-controls="menu"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div
          className="elementMenu"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" />
        </div>
        <div
          className="elementMenu"
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

export default Button;
