"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useScaleX from "./hooks/useScaleX";
import useScrollPage from "./hooks/useScrollPage";

import AnimatedContentSection from "@/components/buzzvel/animationSection/components/AnimatedContentSection";
import FeaturedProjectsSection from "@/components/buzzvel/projects/components/FeaturedProjectsSection";
import Experience from "@/components/experience/components/Experience";
import HeroSection from "@/components/hero/components/HeroSection";
import TimelineContainer from "@/components/timeline/components/TimelineContainer";
import Footer from "@/components/footer/components/Footer";
import Divider from "@/components/ui/Divider";

export default function Home() {
  const ref = useRef();
  const scaleX = useScaleX(ref);
  useScrollPage();

  return (
    <>
      <main>
        <div className="relative">
          <HeroSection />
          <Experience />
        </div>

        <div className="relative h-[200dvh]">
          <AnimatedContentSection />
        </div>

        <Divider className="h-[130dvh] md:h-[300dvh]" />

        <div className="bg-white relative h-[200dvh]">
          <FeaturedProjectsSection />
        </div>

        <Divider className="h-[140dvh] bg-white" />

        <div className="relative">
          <TimelineContainer>
            <motion.div
              className="sticky left-0 right-0 h-1 rounded-full overflow-hidden bottom-24 bg-red-700 z-50"
              style={{
                scaleX,
              }}
            />
          </TimelineContainer>
        </div>
      </main>

      <Footer />
    </>
  );
}
