"use client";
import { motion } from "framer-motion";
import projects from "@/data/project-navigation";
import { projectsContent } from "@/data/homepage-content";
import ProjectCard from "@/components/ui/ProjectCard";

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

const ProjectsSection = () => {
  const projectsWithDescriptions = projects.map((project, index) => ({
    ...project,
    description: projectsContent.descriptions[index]?.description || "",
    impact: projectsContent.descriptions[index]?.impact || "",
  }));

  return (
    <motion.section className="lg:w-2/3" id="projects" variants={itemVariants}>
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance"
        variants={itemVariants}
      >
        {projectsContent.title}
      </motion.h2>
      <motion.div
        className="grid gap-6 sm:gap-8 lg:gap-12"
        variants={containerVariants}
      >
        {projectsWithDescriptions.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard
              title={project.title}
              page={project.page}
              img={project.img}
              tags={project.tags}
              description={project.description}
              impact={project.impact}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ProjectsSection;
