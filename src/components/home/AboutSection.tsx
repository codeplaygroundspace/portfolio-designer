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
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Image loading animation variants
const imageVariants = {
  loading: {
    opacity: 0,
    scale: 1.1,
  },
  loaded: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20">
        <motion.div className="lg:w-2/3" variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance">
            {aboutContent.title}
          </h2>
          <div className="space-y-4 sm:space-y-6 text-[rgb(var(--foreground-secondary))]">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base sm:text-lg leading-relaxed"
                variants={itemVariants}
                transition={{ delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="lg:w-80 xl:w-96 flex-shrink-0"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[rgb(var(--primary))]/10 to-[rgb(var(--primary))]/5 p-2">
              {/* Skeleton loader */}
              <motion.div
                className="w-full h-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
                variants={skeletonVariants}
                initial="visible"
                animate={imageLoaded ? "hidden" : "visible"}
              />

              {/* Actual image */}
              <motion.div
                className="absolute inset-2"
                variants={imageVariants}
                initial="loading"
                animate={imageLoaded ? "loaded" : "loading"}
              >
                <Image
                  src="/profile.jpeg"
                  alt="Rosina Pissaco - Product Designer"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover rounded-xl"
                  onLoad={handleImageLoad}
                />
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-[rgb(var(--background))] border border-[rgb(var(--border))] rounded-lg px-3 py-2 shadow-lg"
              variants={itemVariants}
              transition={{ delay: 0.3 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MapPin size={14} className="text-[rgb(var(--primary))]" />
                </motion.div>
                <span className="text-sm font-medium">
                  {heroContent.location}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
