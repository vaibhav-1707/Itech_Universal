"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import { ScrollProgress } from "./magicui/scroll-progress";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-gray-800">
              <Image src="/logo1.png" width={200} height={10} alt="Logo" />
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              Contact Us
            </button>
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
      <div
        className={`md:hidden fixed top-16 left-0 right-0 bg-white backdrop-blur-xl border-t transition-all duration-700 ease-in-out ${
          isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
        } overflow-hidden`}
      >
        <div
          className={`px-2 py-3 space-y-1 transition-transform backdrop-blur-xl duration-700 ease-in-out ${
            isOpen ? "transform-none" : "-translate-y-full"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            What We Do
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          >
            Contact Us
          </button>
        </div>
      </div>
      <ScrollProgress className="top-16" />
    </nav>
  );
};

export default Navbar;
