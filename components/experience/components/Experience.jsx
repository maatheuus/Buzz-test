import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import Card from "./Card";
import Dots from "./Dots";
import GradientEdges from "./GradientEdges";

import { projects } from "../utils/data";
import { DRAG_BUFFER, SPRING_OPTIONS, colors } from "../utils/utils";

function Experience() {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  const [bgColor, setBgColor] = useState(colors[0]);

  function onDragEnd() {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < projects.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }

    dragX.set(0);
  }

  function handleInView(index) {
    setBgColor(colors[index]);
  }

  return (
    <motion.section
      id="experience"
      aria-labelledby="experience-heading"
      initial={{ backgroundColor: "#000" }}
      animate={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5 }}
      className="relative block h-auto overflow-hidden pb-12"
    >
      <div className="my-12 p-10">
        <motion.h1
          id="experience-heading"
          initial={{ opacity: 0, x: "-20%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          viewport={{ once: false }}
          className="font-bold font-serif text-lg md:text-6xl mb-2 text-neutral-50"
        >
          Experiences
        </motion.h1>
      </div>

      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex items-center"
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="shrink-0 w-full cursor-grab active:cursor-grabbing"
          >
            <Card {...project} onInView={() => handleInView(idx)} />
          </motion.div>
        ))}
      </motion.div>

      <Dots projects={projects} imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </motion.section>
  );
}

export default Experience;
