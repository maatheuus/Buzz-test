import { motion } from "framer-motion";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import { textIntroduction } from "../../utils/dataProjects";

function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      className="relative h-screen"
      aria-labelledby="projects-heading"
    >
      <div className="py-8 flex-1 px-4 sm:py-16 sm:px-8">
        <motion.h1
          initial={{ opacity: 0, x: "-20%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{
            duration: 1,
            delay: 2.5,
          }}
          viewport={{ once: false }}
          className="font-bold font-sans text-lg sm:text-3xl mb-2"
        >
          Featured Projects
        </motion.h1>
        {textIntroduction.map((el, i) => (
          <motion.span
            key={i}
            className="text-base sm:text-xl font-medium text-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.35,
              delay: i / 6,
            }}
          >
            {el}{" "}
          </motion.span>
        ))}
      </div>
      <HorizontalScrollCarousel />
    </section>
  );
}

export default FeaturedProjectsSection;
