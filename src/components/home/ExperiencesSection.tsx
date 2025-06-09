"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Calendar } from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import experiences from "@/data/experiences";
import { resumeContent } from "@/data/homepage-content";
import TagList from "@/components/ui/TagList";

// Define an interface for the Experience props
interface ExperienceProps {
  role: string;
  time: string;
  tags: string[];
  company?: string;
}

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

const ExperienceCard = ({
  role,
  time,
  tags,
  company,
  isLatest,
}: ExperienceProps & { company: string; isLatest: boolean }) => {
  return (
    <div className="relative p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200">
      {isLatest && (
        <div className="absolute -top-2 -right-2 bg-[rgb(var(--accent))] text-white text-xs px-2 py-1 rounded-full font-medium">
          Current
        </div>
      )}
      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="min-h-[80px] sm:min-h-[90px] flex flex-col justify-start">
          <h3 className="font-semibold text-base sm:text-lg leading-tight mb-1">
            {role}
          </h3>
          <p className="text-sm text-[rgb(var(--foreground-secondary))] mb-2">
            {company}
          </p>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[rgb(var(--foreground-secondary))] mt-auto">
            <Calendar size={14} />
            <span>{time}</span>
          </div>
        </div>
        <div className="mt-auto">
          <TagList tags={tags} />
        </div>
      </div>
    </div>
  );
};

const ResumeDownloadLink = () => {
  return (
    <motion.a
      href={resumeContent.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center gap-2 p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200 group"
      aria-label="Download Resume"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Download size={16} className="text-[rgb(var(--accent))] shrink-0" />
      <span className="font-medium flex-1">{resumeContent.text}</span>
      <ArrowUpRight
        size={14}
        className="text-[rgb(var(--foreground-secondary))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shrink-0"
      />
    </motion.a>
  );
};

const DribbbleLink = () => {
  return (
    <motion.a
      href="https://dribbble.com/rosinapissaco"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full inline-flex items-center gap-2 p-4 sm:p-5 rounded-lg border border-[rgb(var(--border))] hover:bg-[rgb(var(--background-secondary))] transition-colors duration-200 group"
      aria-label="View Dribbble Profile"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <FaDribbble size={16} className="text-[rgb(var(--accent))] shrink-0" />
      <span className="font-medium flex-1">View on Dribbble</span>
      <ArrowUpRight
        size={14}
        className="text-[rgb(var(--foreground-secondary))] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 shrink-0"
      />
    </motion.a>
  );
};

const ExperiencesSection = () => {
  return (
    <motion.aside className="lg:flex-1" variants={itemVariants}>
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight"
        variants={itemVariants}
      >
        Experience
      </motion.h2>
      <motion.div
        className="space-y-4 sm:space-y-6"
        variants={containerVariants}
      >
        {experiences.map((ex, index) => (
          <motion.div
            key={`${ex.company}-${ex.role}-${index}`}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <ExperienceCard
              role={ex.role}
              time={ex.time}
              tags={ex.tags}
              company={ex.company}
              isLatest={index === 0}
            />
          </motion.div>
        ))}
        <motion.div variants={itemVariants}>
          <ResumeDownloadLink />
        </motion.div>
        <motion.div variants={itemVariants}>
          <DribbbleLink />
        </motion.div>
      </motion.div>
    </motion.aside>
  );
};

export default ExperiencesSection;
