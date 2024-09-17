import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Card from "./Card";
function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return <div></div>;
}

export default HorizontalScrollCarousel;
