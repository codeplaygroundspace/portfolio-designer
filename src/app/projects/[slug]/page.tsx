import { notFound } from "next/navigation";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
  getProjectContributions,
  getProjectTeam,
} from "@/data/case-studies";
import ProjectLayout from "@/components/projects/ProjectLayout";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const contributions = getProjectContributions(slug);
  const team = getProjectTeam(slug);

  return (
    <ProjectLayout
      caseStudy={caseStudy}
      contributions={contributions}
      team={team}
    />
  );
}

// Generate static params for all case studies
export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Rosina Pissaco`,
    description: caseStudy.overview.substring(0, 160),
  };
}
