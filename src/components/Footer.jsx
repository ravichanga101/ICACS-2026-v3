import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">
          © Copyright 2025-26 CHARUSAT – All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/thecharusat/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/thecharusat/?hl=en"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://in.linkedin.com/school/charotar-university-of-science-&-technology-charusat-/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-blue-700"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
