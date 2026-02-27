"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation data structure for better maintainability
const navigationData = {
  aboutLinks: [
    {
      id: "about-charusat",
      href: "https://charusat.ac.in/",
      text: "CHARUSAT",
      target: "_blank",
    },
  ],
  icacsLinks: [
    { id: "icacs-about", href: "/#about", text: "About Conference" },
    { id: "icacs-dates", href: "/#impdates", text: "Important Dates" },
    { id: "icacs-cfp", href: "/#cfp", text: "Call For Papers" },
    { id: "icacs-tracks", href: "/#tracks", text: "Conference Tracks" },
    {
      id: "icacs-guidelines",
      href: "/#submission-guidelines",
      text: "Paper Submission Guidelines",
    },
    { id: "icacs-registration", href: "/#registration", text: "Registration" },
  ],
  committeeLinks: [
    { id: "committee-org", href: "/#orgcmt", text: "Organizing Committee" },
    {
      id: "committee-advisory",
      href: "/#advisory-committee",
      text: "Advisory Committee",
    },
    {
      id: "committee-tpc",
      href: "/#technical-program-committee",
      text: "Technical Program Committee",
    },
    {
      id: "committee-trc",
      href: "/#technical-review-committee",
      text: "Technical Review Committee",
    },
  ],
};

// Dropdown menu component for desktop (moved outside to prevent re-renders)
const DesktopDropdown = ({ title, links, className = "" }) => (
  <div className={`relative group ${className}`}>
    <button className="flex items-center text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md group-hover:bg-gray-50 transition">
      {title} <ChevronDown className="ml-1" size={16} />
    </button>
    <div className="absolute left-0 top-full bg-white shadow-lg rounded-md hidden group-hover:block min-w-[200px] z-50 border border-gray-100 pt-3 mt-[-1px]">
      <div className="py-1">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            target={link.target || "_self"}
            className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

// Mobile menu section component (moved outside to prevent re-renders)
const MobileMenuSection = ({ title, links, onLinkClick }) => (
  <div className="border-b border-gray-100 pb-2">
    <div className="font-medium text-[#1869b4] py-2">{title}</div>
    <div className="pl-4 flex flex-col space-y-1 text-sm">
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          target={link.target || "_self"}
          className="py-2 text-gray-700 hover:text-[#fd7e14]"
          onClick={onLinkClick}
        >
          {link.text}
        </Link>
      ))}
    </div>
  </div>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#menu-toggle")
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  const handleMobileLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1" : "bg-white/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center py-2">
          <Image
            src="/assets/img/icacs.png"
            alt="ICACS 2026 Logo"
            className="h-12 w-100 mr-3"
            width={120}
            height={120}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          <Link
            href="./"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Home
          </Link>
          {/* About Dropdown */}
          <DesktopDropdown title="About" links={navigationData.aboutLinks} />

          {/* ICACS 2026 Dropdown */}
          <DesktopDropdown
            title="ICACS 2026"
            links={navigationData.icacsLinks}
          />
          <Link
            href="/#speakers"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Speakers
          </Link>

          <Link
            href="/publication"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Publication
          </Link>
          <Link
            href="/#previous-proceedings"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Previous Proceedings
          </Link>

          <Link
            href="/#editors"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Editors
          </Link>

          {/* Committee Dropdown */}
          <DesktopDropdown
            title="Committee"
            links={navigationData.committeeLinks}
          />
          {/* Standard links */}
          <Link
            href="/gallery"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Gallery
          </Link>
          <Link
            href="/#contact"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Contact
          </Link>

          {/* Register Button */}
          <Link
            href="/#registration"
            className="ml-2 px-5 py-2 bg-gradient-to-r from-[#fd7e14] to-orange-600 hover:from-orange-600 hover:to-[#fd7e14] text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Register
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          id="menu-toggle"
          className="lg:hidden p-2 rounded-md text-[#1869b4] hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-1">
              {/* About Section */}
              <MobileMenuSection
                title="About"
                links={navigationData.aboutLinks}
                onLinkClick={handleMobileLinkClick}
              />

              {/* ICACS 2026 Section */}
              <MobileMenuSection
                title="ICACS 2026"
                links={navigationData.icacsLinks}
                onLinkClick={handleMobileLinkClick}
              />

              {/* Direct Links */}
              <Link
                href="/gallery"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Gallery
              </Link>
              <Link
                href="/publication"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Publication
              </Link>
              <Link
                href="/#previous-proceedings"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Previous Proceedings
              </Link>
              <Link
                href="/#speakers"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Keynote Speakers
              </Link>
              <Link
                href="/#editors"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Editors
              </Link>

              {/* Committee Section */}
              <MobileMenuSection
                title="Committee"
                links={navigationData.committeeLinks}
                onLinkClick={handleMobileLinkClick}
              />

              <Link
                href="/#contact"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={handleMobileLinkClick}
              >
                Contact
              </Link>

              {/* Register Button */}
              <Link
                href="/#registration"
                className="mt-3 py-3 px-4 text-center font-bold bg-gradient-to-r from-[#fd7e14] to-orange-600 text-white rounded-lg shadow-md"
                onClick={handleMobileLinkClick}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
