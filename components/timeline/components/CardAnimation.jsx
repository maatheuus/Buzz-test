import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CardAnimation({ children }) {
  const ref = useRef();

  const inView = useInView(ref, {
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  };

  return (
    <motion.div
      animate={inView ? "visible" : "hidden"}
      aria-hidden={inView}
      variants={variants}
      transition={{ duration: 2, ease: "easeOut" }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default CardAnimation;
