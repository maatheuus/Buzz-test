import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CARDS_DATA } from "../../utils/dataProjects";
import Card from "./Card";

function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <div ref={targetRef} className="h-[300vh]">
      <div className="sticky top-0 flex items-start pt-12 h-screen overflow-hidden md:pt-0 md:items-center">
        <motion.div
          style={{ x }}
          className="flex gap-x-6 sm:gap-x-12 py-0 px-6 sm:px-16"
        >
          {CARDS_DATA.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default HorizontalScrollCarousel;
