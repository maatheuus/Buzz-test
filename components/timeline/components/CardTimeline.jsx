import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import CardAnimation from "./CardAnimation";
import useParallax from "../hooks/useParallax";

function CardTimeline({ data }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className="h-screen flex justify-center items-center relative snap-center test-perspective px-4 md:px-0">
      <motion.h2
        style={{ y }}
        className="absolute right-5 text-2xl font-extrabold text-neutral-50 tracking-widest z-10 md:right-20 md:text-4xl"
        aria-label={`Year ${data.year}`}
      >
        {data.year}
      </motion.h2>

      <div ref={ref} style={{ y }} className="relative">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="bg-transparent rounded-xl shadow-sm shadow-white h-auto overflow-hidden"
          aria-labelledby="card"
        >
          <motion.div
            className="relative left-0 max-w-lg rounded-lg "
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          >
            <CardAnimation className="space-y-6 p-10">
              <h3 className="text-lg font-semibold text-neutral-50 tracking-wider">
                {data.title}
              </h3>
              {data.topics.map((topic, i) => {
                return (
                  <div key={i} className="space-y-2">
                    <h4 className="text-xl font-semibold text-gray-200">
                      {topic.title}
                    </h4>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                );
              })}
            </CardAnimation>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default CardTimeline;
