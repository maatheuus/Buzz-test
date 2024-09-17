import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CardAnimation() {
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
  return <div></div>;
}

export default CardAnimation;
