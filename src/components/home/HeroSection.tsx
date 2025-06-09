"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const heroItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
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
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[rgb(var(--accent))] via-pink-500 to-[rgb(var(--accent))]/80 min-h-[70vh] flex items-center justify-center"
        variants={backgroundVariants}
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
          className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center py-16"
          variants={heroContainerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 tracking-tight !text-white"
            variants={heroItemVariants}
          >
            Hello, I&apos;m Rosina
          </motion.h1>

          <motion.h2
            className="text-lg sm:text-xl lg:text-2xl font-semibold leading-tight mb-6 tracking-tight !text-white/90 max-w-3xl mx-auto"
            variants={heroItemVariants}
          >
            User-centred strategist with a proven track record of driving
            measurable results
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg lg:text-xl font-medium mb-12 !text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={heroItemVariants}
          >
            I&apos;m a Product Designer who turns early-stage ideas into
            user-loved products that businesses rely on.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={heroItemVariants}
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm"
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

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-white/30 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              <span className="inline-flex items-center justify-center gap-2 bg-black/80 text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/70 transition-all duration-200 w-full text-base">
                Get In Touch
                <Mail size={18} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
