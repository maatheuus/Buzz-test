"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function MaskText({ phrases }) {
  const body = useRef(null);
  const isInView = useInView(body, { once: true, margin: "-75%" });

  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.8 * i,
      },
    }),
  };

  return (
    <div
      ref={body}
      className="text-[3.0vw] md:text-[3.5vw] text-white"
      aria-live="polite"
    >
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden relative">
            <motion.p
              className="absolute text-white opacity-20 hyphens-auto"
              aria-hidden="true"
            >
              {phrase}
            </motion.p>
            <motion.p
              className="hyphens-auto"
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
}

export default MaskText;
