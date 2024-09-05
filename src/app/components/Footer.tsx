import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="my-grid pt-8 lg:pt-10 text-center border-t-gray-300 border-solid border-t-2">
      <p className="text-lg font-bold mb-6">
        Thank you for your interest in my work. Let’s connect!
      </p>
      <nav aria-label="Social media links">
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="mailto:rosieintech@gmails.com"
              aria-label="Email"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaRegEnvelope className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rosinapissaco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedinIn className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://dribbble.com/rosieportfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dribbble"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaDribbble className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/rosinapissaco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
            >
              <FaBehance className="size-6" />
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
