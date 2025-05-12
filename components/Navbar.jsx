"use client";
import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ScrollProgress } from "./magicui/scroll-progress";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const currentPath = window.location.pathname;

    // If not already on the homepage, navigate to it with a hash
    if (currentPath !== "/") {
      router.push(`/#${sectionId}`);
      setIsOpen(false);
    } else {
      // If already on the homepage, scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Image src="/logo1.png" width={200} height={40} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                {section === "services" ? "What We Do" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white border-t transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <div
          className={`px-2 py-3 space-y-1 transition-transform duration-700 ease-in-out ${
            isOpen ? "transform-none" : "-translate-y-full"
          }`}
        >
          {["home", "about", "services", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              {section === "services" ? "What We Do" : section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <ScrollProgress className="top-16" />
    </nav>
  );
};

export default Navbar;