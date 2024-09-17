import { motion, useTransform } from "framer-motion";

function IntroSection() {
  return (
    <div
      id="buzzvel"
      aria-labelledby="buzzvel-heading"
      className="sticky top-0 h-screen bg-black text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-serif">Why</h2>
      <h1 className="text-8xl md:text-9xl font-bold font-serif">Buzzvel</h1>
      <span className="text-3xl font-bold font-serif">?</span>
    </div>
  );
}

export default IntroSection;
