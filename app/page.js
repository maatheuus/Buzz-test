import AnimatedContentSection from "@/components/buzzvel/animationSection/components/AnimatedContentSection";
import FeaturedProjectsSection from "@/components/buzzvel/projects/components/FeaturedProjectsSection";
import Experience from "@/components/experience/components/Experience";
import HeroSection from "@/components/hero/HeroSection";

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
    </>
  );
}
