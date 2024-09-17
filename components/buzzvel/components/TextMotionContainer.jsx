import { motion, useTransform } from "framer-motion";

import ContainerDynamicSection from "../textAnimation/ContainerDynamicSection";

function TextMotionContainer() {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
      <ContainerDynamicSection />
    </motion.div>
  );
}

export default TextMotionContainer;
