import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function useScrollTo(lenisRef) {
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1,
      immediate: true,
      easing: (t) => {
        return t;
      },
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, [lenisRef]);
}

export default useScrollTo;
