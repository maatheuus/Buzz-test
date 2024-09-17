"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";

import IntroSection from "./IntroSection";
import TextMotionContainer from "./TextMotionContainer";

function AnimatedContentSection() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative h-[200vh]">
      <IntroSection scrollYProgress={scrollYProgress} />
      <TextMotionContainer scrollYProgress={scrollYProgress} />
    </div>
  );
}

export default AnimatedContentSection;
