"use client";

import { useState, useEffect } from "react";

const ProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[rgb(var(--accent))]/20 via-pink-500/20 to-[rgb(var(--accent))]/20 z-50">
      <div
        className="h-full bg-gradient-to-r from-[rgb(var(--accent))] via-pink-500 to-[rgb(var(--accent))]/80 transition-all duration-150 ease-out shadow-sm"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};

export default ProgressIndicator;
