import CircleHighlight from "./CircleHighlight";
import {
  FaRegEnvelope,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="my-grid text-center ">
      <hr />
      <p className="text-lg font-bold mb-6">
        Thank you for your interest in my work.{" "}
        <CircleHighlight>Lets connect!</CircleHighlight>
      </p>
      <nav aria-label="Social media links">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="mailto:rosieintech@gmails.com" aria-label="Email">
              <FaRegEnvelope className="size-6" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rosinapissaco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
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
