"use client";

import useScrollTo from "@/app/hooks/useScrollTo";
import { useRef } from "react";

function ScrollSection({ to, label, className }) {
  const lenisRef = useRef(null);
  useScrollTo(lenisRef);

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
