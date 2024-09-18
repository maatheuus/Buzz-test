"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "../utils/anim";
import { words } from "../utils/utils";
import usePreloader from "../hooks/usePreloader";

function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const curve = usePreloader(dimension);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-50 bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            className="flex text-white text-4xl absolute z-10 items-center"
            variants={opacity}
            initial="initial"
            animate="enter"
          >
            <span className="block w-2 h-2 bg-white rounded-full mr-2"></span>
            {words[index]}
          </motion.p>
          <svg className="absolute top-0 w-full h-[calc(100%_+_300px)]">
            <motion.path
              className="fill-[#141516]"
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}

export default Preloader;
