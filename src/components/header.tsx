// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header>
      <div className="bg-darkBlue  text-white shadow-lg p-4 flex items-center   justify-between z-50 fixed w-[100%]  mx-auto m-0">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-orange-500 font-bold text-3xl">LOGO</h1>
          {/* <Image src="/logotip.png" alt="Logo" width={60} height={60} /> */}
        </div>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 transition  hover:duration-150 ">
          <Link href="/">
            <div className="hover:text-blue-300 transition-colors border-4 border-darkBlue hover:border-b-white  duration-300 rounded-[20] p-3 font-bold text-2xl ">
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="hover:text-blue-300 transition-colors	border-4 border-darkBlue hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              About me
            </div>
          </Link>
          <Link href="/services">
            <div className="hover:text-blue-300 transition-colors	border-4 border-darkBlue hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              Services
            </div>
          </Link>
          <Link href="/contact">
            <div className="hover:text-blue-300 transition-colors	border-4 border-darkBlue hover:border-b-white p-3 duration-300 rounded-[20] font-bold text-2xl">
              Contact
            </div>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-white">
            {/* Replace with an actual icon */}
            <Image
              src="/menu.png"
              alt="logo"
              className="dark:invert"
              width={30}
              height={30}
              priority
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
