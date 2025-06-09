"use client";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { aboutContent, heroContent } from "@/data/homepage-content";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Image loading animation variants with bottom-to-top reveal
const imageVariants = {
  loading: {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)",
  },
  loaded: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      clipPath: {
        duration: 1.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  },
};

const skeletonVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const AboutSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
        <div className="lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance">
            {aboutContent.title}
          </h2>
          <div className="space-y-4 sm:space-y-6 text-[rgb(var(--foreground-secondary))]">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <motion.div
          className="lg:w-80 xl:w-96 flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onViewportEnter={() => setIsInView(true)}
        >
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-transparent p-1">
              {/* Skeleton loader */}
              <motion.div
                className="w-full h-full rounded-md bg-transparent animate-pulse"
                variants={skeletonVariants}
                initial="visible"
                animate={imageLoaded ? "hidden" : "visible"}
              />

              {/* Actual image */}
              <motion.div
                className="absolute inset-1"
                variants={imageVariants}
                initial="loading"
                animate={imageLoaded && isInView ? "loaded" : "loading"}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Rosina Pissaco - Product Designer"
                  width={400}
                  height={533}
                  priority
                  className="w-full h-full object-cover rounded-md grayscale"
                  onLoad={handleImageLoad}
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg px-3 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[rgb(var(--primary))]" />
                <span className="text-sm font-medium">
                  {heroContent.location}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
