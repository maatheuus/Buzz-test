import { motion } from "framer-motion";
import AnimatedContentSection from "@/components/buzzvel/animationSection/components/AnimatedContentSection";
import FeaturedProjectsSection from "@/components/buzzvel/projects/components/FeaturedProjectsSection";
import Experience from "@/components/experience/components/Experience";
import HeroSection from "@/components/hero/HeroSection";
import TimelineContainer from "@/components/timeline/components/TimelineContainer";
import Footer from "@/components/footer/components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Experience />
      </div>
      <div className="relative h-[200dvh]">
        <AnimatedContentSection />
      </div>

      <div className="bg-white relative h-[200dvh]">
        <FeaturedProjectsSection />
      </div>

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

      <Footer />
    </>
  );
}
