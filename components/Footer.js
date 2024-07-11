import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  text-black dark:text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link
            href="https://github.com/kayzou"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/elghazalizakaria"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} KayZou. Thank you for visiting!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
