import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CardAnimation from "./CardAnimation";

function CardTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return <div></div>;
}

export default CardTimeline;
