"use client";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

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
        <div
          className="flex bg-[rgb(var(--background-secondary))] rounded-full p-1"
          role="radiogroup"
        >
          {[
            { name: "light" as const, icon: FiSun },
            { name: "dark" as const, icon: FiMoon },
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              aria-checked={theme === name}
              aria-label={`Switch to ${name} theme`}
              className={`p-2 rounded-full transition-colors duration-300 text-[rgb(var(--foreground-rgb))] hover:text-primary-500 ${
                theme === name
                  ? "bg-[rgb(var(--background))] text-primary-500"
                  : ""
              }`}
              onClick={() => handleThemeChange(name)}
              role="radio"
              type="button"
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
