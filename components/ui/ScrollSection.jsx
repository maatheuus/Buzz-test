"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

function ScrollSection({ to, label, className }) {
  const lenisRef = useRef(null);
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

  function handleScroll(to) {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(to);
    }
  }

  return (
    <a
      className={className}
      href={to}
      aria-label={`Scroll to ${label}`}
      onClick={(e) => {
        e.preventDefault();
        handleScroll(to);
      }}
    >
      {label}
    </a>
  );
}

export default ScrollSection;
