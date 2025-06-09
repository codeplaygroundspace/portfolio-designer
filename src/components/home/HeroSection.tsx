"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Typewriter animation variants
  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Smooth spring animations
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const backgroundVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 25,
        duration: 1.5,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: 0.3,
      },
    },
  };

  // Function to split text into individual characters for typewriter effect
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={letterVariants}
        className="inline-block"
        style={{ willChange: "transform, opacity" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <motion.section
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 py-4"
      initial="hidden"
      animate={controls}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(var(--accent))] via-pink-500 to-[rgb(var(--accent))]/80 min-h-[70vh] flex items-center justify-center"
        variants={backgroundVariants}
        style={{ willChange: "transform, opacity" }}
      >
        {/* Background Image */}
        <motion.div className="absolute inset-0" variants={backgroundVariants}>
          <Image
            src="/GradientHeroPrerender2.svg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay for better text readability */}
        <motion.div
          className="absolute inset-0 bg-black/20"
          variants={overlayVariants}
        />

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 text-center py-12"
          variants={heroContainerVariants}
        >
          {/* Typewriter animated main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight !text-white"
            variants={typewriterVariants}
            style={{ willChange: "transform" }}
          >
            {splitText("Hello, I'm Rosina")}
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight mb-6 tracking-tight !text-white/90 max-w-3xl mx-auto"
            variants={heroItemVariants}
            style={{ willChange: "transform, opacity" }}
          >
            User-centred strategist with a proven track record of driving
            measurable results
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl font-medium mb-12 !text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={heroItemVariants}
            style={{ willChange: "transform, opacity" }}
          >
            I&apos;m a Product Designer who turns early-stage ideas into
            user-loved products that businesses rely on.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-4 sm:mx-0"
            variants={heroItemVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <div>
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 w-full text-base">
                  View My Work
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowDown size={18} />
                  </motion.div>
                </span>
              </Link>
            </div>

            <div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-2 bg-black/80 text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/70 transition-all duration-200 w-full text-base">
                  Get In Touch
                  <Mail size={18} />
                </span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
