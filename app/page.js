import AnimatedContentSection from "@/components/buzzvel/components/AnimatedContentSection";
import Experience from "@/components/experience/components/Experience";
import HeroSection from "@/components/hero/HeroSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <Experience />
      </div>
      <div>
        <AnimatedContentSection />
      </div>
    </>
  );
}
