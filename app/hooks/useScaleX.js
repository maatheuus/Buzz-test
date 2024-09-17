import { useScroll, useSpring } from "framer-motion";

function useScaleX(ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return scaleX;
}

export default useScaleX;
