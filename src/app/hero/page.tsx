"use client";
import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="max-w-7xl w-full px-6 py-10 md:flex md:items-center">
        <div className="w-full md:w-1/2  flex justify-center items-center  mb-10  md:mb-0">
          <Image data-aos="fade-right"
            className=" py-10"
            src="/image/hero1 (2).png" 
            alt="girl image"
            width={300}  
            height={200} 
          />
        </div>
        <div className="text-center md:text-left md:w-1/2 md:pl-10">
          <h1 data-aos="fade-right"className=" text-4xl font-semibold text-white">
            I am Laiba <br />
            <span className="text-orange-600">Front-End Developer</span>
          </h1>
          <p data-aos="zoom-in" className="text-lg text-yellow-100 py-5">
            I build beautiful, responsive, scalable, and functional websites. 
            Explore my portfolio to see my work in action and let's connect to build something amazing together!
          </p>
          <div data-aos="zoom-in" className="flex justify-center md:justify-start gap-4 mb-6">
            <a href="https://github.com/Laiba3009" className="text-white hover:text-gray-600">
              <FaGithub className="text-4xl"/>
            </a>
            <a href="https://www.instagram.com/laibajaweed8?igsh=MWZuYmVrcHA2eHR6Ng==" className="text-pink-500 hover:text-gray-600">
              <FaInstagram className="text-4xl"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550887534337&mibextid=ZbWKwL" className="text-blue-500 hover:text-gray-600">
              <FaFacebook className="text-4xl "/>
            </a>
          </div>
          <button  data-aos="zoom-in" className="bg-orange-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-500 transition duration-300">
            Connect Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
