"use client";

import { FaRegEnvelope, FaLinkedinIn, FaDribbble } from "react-icons/fa";

export default function Footer() {
  const encodedEmail = "rosinaaa[at]gmail[dot]com";

  const decodeEmail = () => {
    return encodedEmail.replace("[at]", "@").replace("[dot]", ".");
  };

  return (
    <section className="my-grid text-center mt-2">
      <hr />
      <p className="text-lg font-bold mb-6">
        Thank you for your interest in my work. Lets connect!
      </p>
      <nav aria-label="Social media links">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${decodeEmail()}`;
              }}
              aria-label="Email"
              className="group"
            >
              <FaRegEnvelope className="size-6 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rosieprofile/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group"
            >
              <FaLinkedinIn className="size-6 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/rosieportfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="group"
            >
              <FaDribbble className="size-6 group-hover:scale-110 transition-all duration-300 ease-in-out" />
            </a>
          </li>
        </ul>
      </nav>
      <p className="text-sm mt-10">
        Made with tea + spicy chips. © 2024 Rosina Pissaco
      </p>
    </section>
  );
}
