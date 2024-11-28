"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Dark mode holatini saqlash uchun
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <header>
      <div className="bg-white dark:bg-darkBlue text-black dark:text-white shadow-lg p-4 flex items-center justify-between z-50 fixed w-[100%] mx-auto m-0">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-orange-500 font-bold text-3xl">LOGO</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 transition hover:duration-150">
          <Link href="/">
            <div className="hover:text-blue-300 transition-colors border-4 border-white dark:border-darkBlue hover:border-b-darkBlue dark:hover:border-b-white duration-300 rounded-[20] p-3 font-bold text-2xl">
              Home
            </div>
          </Link>
          <Link href="about">
            <div className="hover:text-blue-300 transition-colors border-4 border-white dark:border-darkBlue hover:border-b-darkBlue dark:hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              About me
            </div>
          </Link>
          <Link href="/services">
            <div className="hover:text-blue-300 transition-colors border-4 border-white dark:border-darkBlue hover:border-b-darkBlue dark:hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-blue-300 transition-colors border-4 border-white dark:border-darkBlue hover:border-b-darkBlue dark:hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              Contact
            </div>
          </Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-500 dark:bg-gray-800 dark:text-white transition"
        >
          {darkMode ? (
            <Image
              src="/sun.png"
              alt="Light Mode"
              width={24}
              height={24}
              priority
            />
          ) : (
            <Image
              src="/moon.png"
              alt="Dark Mode"
              width={24}
              height={24}
              priority
            />
          )}
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white"
          >
            <Image
              src="/menu.png"
              alt="Menu"
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
          </button>
        </div>
      </div>

      {/* Modal for Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-darkBlue text-black dark:text-white p-8 rounded-lg shadow-lg w-3/4 max-w-sm">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 text-center">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className="text-xl font-bold hover:text-blue-500">Home</div>
              </Link>
              <Link href="/main" onClick={() => setIsMenuOpen(false)}>
                <div className="text-xl font-bold hover:text-blue-500">About Me</div>
              </Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                <div className="text-xl font-bold hover:text-blue-500">Services</div>
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <div className="text-xl font-bold hover:text-blue-500">Contact</div>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
