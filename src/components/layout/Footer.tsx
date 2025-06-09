"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { motion } from "framer-motion";

type Theme = "light" | "dark";

export default function Footer() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h6 className="text-xs text-[rgb(var(--foreground-secondary))]">
          © 2025 Rosina Pissaco
        </h6>
        <motion.div
          className="flex bg-[rgb(var(--background-secondary))] rounded-full p-1"
          role="radiogroup"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {[
            { name: "light" as const, icon: FiSun },
            { name: "dark" as const, icon: FiMoon },
          ].map(({ name, icon: Icon }) => (
            <motion.button
              key={name}
              aria-checked={theme === name}
              aria-label={`Switch to ${name} theme`}
              className={`p-2 rounded-full transition-colors duration-300 text-[rgb(var(--foreground-rgb))] hover:text-primary-500 cursor-pointer ${
                theme === name
                  ? "bg-[rgb(var(--background))] text-primary-500"
                  : ""
              }`}
              onClick={() => handleThemeChange(name)}
              role="radio"
              type="button"
              whileHover={{
                scale: 1.1,
                backgroundColor:
                  theme === name ? undefined : "rgba(var(--accent), 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: theme === name ? 1.05 : 1,
                backgroundColor:
                  theme === name ? "rgb(var(--background))" : "transparent",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <motion.div
                animate={{
                  rotate: theme === name ? (name === "light" ? 180 : 0) : 0,
                  scale: theme === name ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
              >
                <Icon size={16} />
              </motion.div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
