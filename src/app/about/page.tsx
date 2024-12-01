"use client";
import Image from "next/image";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function About() {
  return (
    <div className=" bg-gray-800 flex flex-col md:flex-row items-center justify-center w-full my-16 p-9 py-20 ">
      <div className="w-full md:w-[400px] flex justify-center mb-3 md:mb-0">
        <Image data-aos="fade-up-right"
          className="rounded-full object-cover w-[300px] h-[300px] mr-8 md:w-[400px] md:h-[400px]"
          src="/image/about.png"
          alt="about image"
          width={400}
          height={400}
        />
      </div>
      <div className="w-full md:w-[600px] text-center md:ml-6 md:text-left">
        <h2 data-aos="zoom-out-up" className="text-4xl font-semibold text-orange-600 mb-4">About Me</h2>
        <p data-aos="zoom-in" className="text-lg text-yellow-100 mt-6">
          I am a Frontend Developer with a passion for creating high-quality
          responsive and scalable websites. With a strong foundation in HTML
          CSS and TypeScript Next.js. I am a student at GIAIC pursuing a
          course in Artificial Intelligence. Passionate about technology and
          constantly learning new skills to stay up-to-date with the latest
          innovations. Take a look around and lets get in touch.
        </p>
        <div data-aos="zoom-in" className="flex justify-center space-x-6">
          <a href="https://github.com/Laiba3009" className="text-white hover:text-gray-600 text-4xl">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/laibajaweed8?igsh=MWZuYmVrcHA2eHR6Ng==" className="text-pink-500 hover:text-gray-600 text-4xl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61550887534337&mibextid=ZbWKwL" className="text-blue-500 hover:text-gray-600 text-4xl">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
