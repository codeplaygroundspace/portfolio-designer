"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const isHomePage = pathname === "/";

  const handleScrollToSection = (sectionId: string) => {
    if (isHomePage) {
      // If on homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on other pages, navigate to homepage with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <header className="w-full border-b border-[rgb(var(--border))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="block hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/logo.svg"
                alt="Rosina Pissaco Logo"
                width={48}
                height={48}
                priority
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6 sm:space-x-8">
            {isProjectPage && (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 cursor-pointer"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>
            )}

            <button
              onClick={() => handleScrollToSection("projects")}
              className="text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 focus:outline-none focus:text-[rgb(var(--accent))] cursor-pointer"
              type="button"
            >
              {isProjectPage ? "All Projects" : "Projects"}
            </button>

            <button
              onClick={() => handleScrollToSection("contact")}
              className="text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 focus:outline-none focus:text-[rgb(var(--accent))] cursor-pointer"
              type="button"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
