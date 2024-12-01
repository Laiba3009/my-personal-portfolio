"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="w-full h-[80px] bg-orange-600 fixed top-0 left-0 z-50 px-1 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          className="w-[190px] h-[200px] object-contain"
          src="/image/logo-img.png"  
          width={190}
          height={200}
          alt="logo image"
        />
      </div>
      <div
        className="md:hidden block text-3xl text-white cursor-pointer absolute right-5 top-1/2 transform -translate-y-1/2"
        onClick={toggleMenu}
      >
        <IoMenu />
      </div>

      <div
        className={`fixed top-0 left-0 w-[50%] h-full bg-orange-600 pt-[80px] transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen ? "left-0" : "left-[-100%]"
        }`}
      >
        <ul className="list-none p-0 flex flex-col items-center justify-start w-full">
          <li className="py-[30px] px-[35px] mt-[35px]">
            <Link className="text-white text-xl font-semibold pl-[40px] hover:text-gray-800" href="/">
              Home
            </Link>
          </li>
          <li className="py-[30px] px-[35px] mt-[35px]">
            <Link className="text-white text-xl font-semibold pl-[40px] hover:text-gray-800" href="/about">
              About
            </Link>
          </li>
          <li className="py-[30px] px-[35px] mt-[35px]">
            <Link className="text-white text-xl font-semibold pl-[40px] hover:text-gray-800" href="/project">
              Project
            </Link>
          </li>
          <li className="py-[30px] px-[35px] mt-[35px]">
            <Link className="text-white text-xl  font-semibold pl-[40px] hover:text-gray-800" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Navbar Links (Desktop view) */}
      <div className="hidden md:flex w-full justify-center">
        <ul className="list-none p-0 flex justify-center w-full">
          <li className="px-5 py-4 text-center">
            <Link className="text-white text-lg font-semibold hover:text-gray-800" href="/">
              Home
            </Link>
          </li>
          <li className="px-5 py-4 text-center">
            <Link className="text-white text-lg font-semibold hover:text-gray-800" href="/about">
              About
            </Link>
          </li>
          <li className="px-5 py-4 text-center">
            <Link className="text-white text-lg font-semibold hover:text-gray-800" href="/project">
              Project
            </Link>
          </li>
          <li className="px-5 py-4 text-center">
            <Link className="text-white text-lg font-semibold hover:text-gray-800" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
