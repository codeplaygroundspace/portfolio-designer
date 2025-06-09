"use client";

import { useState } from "react";
import { TableOfContentsSection } from "@/types/projects";

interface TableOfContentsProps {
  sections: TableOfContentsSection[];
}

const TableOfContents = ({ sections }: TableOfContentsProps) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
    <div className="hidden lg:block w-64 flex-shrink-0">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
        <div className="bg-[rgb(var(--background-secondary))] rounded-xl p-4 sm:p-4 shadow-sm border border-[rgb(var(--border))]">
          <h5 className="text-[11px] font-semibold mb-4 pb-2 border-b border-[rgb(var(--border))] text-[rgb(var(--foreground-secondary))] uppercase tracking-wide">
            Table of Contents
          </h5>
          <nav>
            <ul className="space-y-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`text-sm text-left w-full transition-colors duration-200 py-4 px-2 rounded cursor-pointer ${
                      activeSection === section.id
                        ? "text-[rgb(var(--accent))] bg-[rgb(var(--background))] font-semibold rounded-lg"
                        : "text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] hover:bg-[rgb(var(--background))]"
                    }`}
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
    </div>
  );
};

export default TableOfContents;
