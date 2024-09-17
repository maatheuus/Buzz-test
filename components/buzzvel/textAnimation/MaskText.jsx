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

  return <div></div>;
}

export default MaskText;
