"use client";
import { motion, useReducedMotion } from "framer-motion";
import projects from "@/data/project-navigation";
import { projectsContent } from "@/data/homepage-content";
import ProjectCard from "@/components/ui/ProjectCard";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const ProjectsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const projectsWithDescriptions = projects.map((project, index) => ({
    ...project,
    description: projectsContent.descriptions[index]?.description || "",
    impact: projectsContent.descriptions[index]?.impact || "",
  }));

  // Simplified variants for reduced motion
  const reducedVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  const activeVariants = shouldReduceMotion ? reducedVariants : itemVariants;
  const activeContainerVariants = shouldReduceMotion
    ? reducedVariants
    : containerVariants;

  return (
    <section className="lg:w-2/3" id="projects">
      <motion.h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 tracking-tight text-balance"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: "-100px" }}
        variants={activeVariants}
      >
        {projectsContent.title}
      </motion.h2>
      <motion.div
        className="grid gap-6 sm:gap-8 lg:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05, margin: "-150px" }}
        variants={activeContainerVariants}
      >
        {projectsWithDescriptions.map((project, index) => (
          <motion.div key={project.title} variants={activeVariants}>
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
    </section>
  );
};

export default ProjectsSection;
