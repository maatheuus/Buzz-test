import Image from "next/image";
import bg from "@/public/images/others/background.jpg";
import useAnimateText from "./useAnimateText";
import { useRef } from "react";

function HeroSection() {
  const firstText = useRef();
  const secondText = useRef();
  const slider = useRef();

  useAnimateText(firstText, secondText, slider);
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      aria-label="FullStack Developer promotional section with background image"
    >
      <Image src={bg} className="object-cover" fill alt="Background image" />

      <div className="absolute bottom-0">
        <div ref={slider} className="relative whitespace-nowrap flex">
          <p
            ref={firstText}
            className="text-[8rem] lg:text-[14.375rem] font-medium font-serif text-white"
          >
            FullStack Developer -
          </p>
          <p
            ref={secondText}
            className="text-[8rem] lg:text-[14.375rem] font-medium font-serif text-white"
          >
            FullStack Developer -
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
