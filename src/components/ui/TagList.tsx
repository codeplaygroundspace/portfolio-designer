"use client";
import { motion } from "framer-motion";

interface TagListProps {
  tags: string[];
}

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Animation variants for individual tags
const tagVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function TagList({ tags }: TagListProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {tags.map((tag, i) => (
        <motion.div key={i} className="my-tag" variants={tagVariants}>
          {tag}
        </motion.div>
      ))}
    </motion.div>
  );
}
