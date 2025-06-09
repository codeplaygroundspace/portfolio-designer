"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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

  // Animation variants for navigation links
  const linkVariants = {
    initial: {},
    hover: {},
  };

  const underlineVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    hover: {
      scaleX: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  return (
    <header className="w-full">
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
              <motion.div
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
                className="relative"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <ArrowLeft size={16} />
                  </motion.div>
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--accent))] origin-left"
                  variants={underlineVariants}
                />
              </motion.div>
            )}

            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <button
                onClick={() => handleScrollToSection("projects")}
                className="text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 focus:outline-none focus:text-[rgb(var(--accent))] cursor-pointer"
                type="button"
              >
                {isProjectPage ? "All Projects" : "Projects"}
              </button>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--accent))] origin-center"
                variants={underlineVariants}
              />
            </motion.div>

            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="relative"
            >
              <button
                onClick={() => handleScrollToSection("contact")}
                className="text-sm sm:text-base font-medium text-[rgb(var(--foreground-rgb))] hover:text-[rgb(var(--accent))] transition-colors duration-200 focus:outline-none focus:text-[rgb(var(--accent))] cursor-pointer"
                type="button"
              >
                Contact
              </button>
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[rgb(var(--accent))] origin-center"
                variants={underlineVariants}
              />
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  );
}
