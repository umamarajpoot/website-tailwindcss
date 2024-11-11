"use client";
import type { AppProps } from 'next/app';
import "@fortawesome/fontawesome-free/css/all.min.css";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#" className="text-black">
            GREENMIND
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8 text-gray-700">
          <a href="/" className="hover:text-black font-medium">
            Home
          </a>
          <a href="/RelatedProduct" className="hover:text-black font-medium">
            Products
          </a>
          <a href="/Categories" className="hover:text-black font-medium">
            Categories
          </a>
          <a href="/About" className="hover:text-black font-medium">
            About us
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-black">
            <i className="fas fa-shopping-cart text-lg"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            <i className="fas fa-user text-lg"></i>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-black"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={isMenuOpen ? "fas fa-times text-lg" : "fas fa-bars text-lg"}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center bg-white shadow-sm py-4 space-y-4">
          <a href="/" className="text-gray-700 hover:text-black font-medium">
            Home
          </a>
          <a href="/RelatedProduct" className="text-gray-700 hover:text-black font-medium">
            Products
          </a>
          <a href="/Categories" className="text-gray-700 hover:text-black font-medium">
            Categories
          </a>
          <a href="/About" className="text-gray-700 hover:text-black font-medium">
            About us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
