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

  return <div></div>;
}

export default Preloader;
