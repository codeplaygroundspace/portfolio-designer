"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import projects from "@/app/projects";
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
    <section className="my-grid">
      <Link href={nextProject.page}>
        <p className="mb-4">Next Project</p>
        <h2>{nextProject.title}</h2>
      </Link>
    </section>
  );
}
