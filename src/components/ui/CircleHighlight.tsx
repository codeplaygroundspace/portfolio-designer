"use client";

import React, { useEffect, useRef, useState, PropsWithChildren } from "react";

const CircleHighlight: React.FC<PropsWithChildren> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = ref.current; // Store ref value in a variable

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`oval-highlight-container ${isVisible ? "is-visible" : ""}`}
    >
      {children}
      <svg
        className="oval-highlight-svg"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M5,15 
             A55,12 0 0,1 60,3 
             C62,3 63,4 45,4
             A55,12 0 0,1 115,15
             A55,12 0 0,1 60,27
             C58,27 57,26 55,26
             A55,12 0 0,1 5,15"
          fill="none"
          className="oval-animation"
        />
      </svg>
    </span>
  );
};

export default CircleHighlight;
