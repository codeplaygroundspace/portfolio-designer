"use client";

import { TableOfContentsSection } from "@/types/projects";

interface TableOfContentsProps {
  sections: TableOfContentsSection[];
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Account for header and spacing
      const elementPosition = element.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden lg:block w-64">
      <div className="bg-background-secondary rounded-xl p-4 shadow-sm">
        <h4 className="text-sm font-semibold mb-3 text-foreground-secondary uppercase tracking-wide">
          Table of Contents
        </h4>
        <nav>
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-sm text-left w-full hover:text-primary-500 transition-colors duration-200 py-2 px-3 rounded hover:bg-background cursor-pointer"
                  type="button"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;
