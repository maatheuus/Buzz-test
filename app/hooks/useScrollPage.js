import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

function useScrollPage() {
  const lenisRef = useRef(null);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);
}

export default useScrollPage;
