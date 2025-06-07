"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import projects from "@/data/project-navigation";
import type { NavigationProject } from "@/types";

export default function NextProject() {
  const pathname = usePathname(); // Get the current path
  console.log("Current Pathname:", pathname);

  // Find the current project's index
  const currentIndex = projects.findIndex(
    (project: NavigationProject) => project.page === pathname
  );
  console.log(currentIndex);
  // Determine the next project, handle wrap-around with modulus operator
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="w-full bg-[rgb(var(--background-secondary))] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href={nextProject.page}
            className="group block hover:text-[rgb(var(--accent))] transition-colors duration-200"
          >
            <p className="mb-4 text-[rgb(var(--foreground-secondary))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200">
              Next Project
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[rgb(var(--header-color-rgb))] group-hover:text-[rgb(var(--accent))] transition-colors duration-200">
              {nextProject.title}
            </h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
