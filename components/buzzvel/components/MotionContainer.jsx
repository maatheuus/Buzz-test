"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import ContainerDynamicSection from "../textAnimation/ContainerDynamicSection";
import IntroSection from "./IntroSection";

function MotionContainer() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-screen">
      <IntroSection scrollYProgress={scrollYProgress} />
      <ContainerDynamicSection scrollYProgress={scrollYProgress} />
    </div>
  );
}

export default MotionContainer;
