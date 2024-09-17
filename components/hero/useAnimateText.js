import gsap from "gsap-trial";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function useAnimateText(firstText, secondText, slider) {
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  };
}

export default useAnimateText;
