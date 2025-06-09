"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { contactContent } from "@/data/homepage-content";

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

const ContactSection = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={itemVariants}
      >
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight"
          variants={itemVariants}
        >
          {contactContent.title}
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg text-[rgb(var(--foreground-secondary))] mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          {contactContent.description}
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={containerVariants}
        >
          <motion.a
            href={contactContent.cta.primary.href}
            className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-[rgb(var(--foreground))]/30 hover:border-[rgb(var(--foreground))] transition-all duration-300 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-white/90 dark:hover:bg-white/90 transition-all duration-200 w-full text-base">
              <Mail size={18} />
              {contactContent.cta.primary.text}
            </span>
          </motion.a>
          <motion.a
            href={contactContent.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 p-1 rounded-xl border-[0.5px] border-[rgb(var(--foreground))]/30 hover:border-[rgb(var(--foreground))] transition-all duration-300 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="inline-flex items-center justify-center gap-2 bg-black/80 dark:bg-black/80 text-white dark:text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/70 dark:hover:bg-black/70 transition-all duration-200 w-full text-base">
              <Linkedin size={18} />
              {contactContent.cta.secondary.text}
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactSection;
