import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { TbBrandVercel } from "react-icons/tb";

function Project() {
  return (
    <div data-aos="zoom-in" className="bg-gray-800 py-10">
      <h1 data-aos="zoom-out-up" className=" text-orange-600 text-4xl font-semibold text-center mt-12 pt-10  mr-10">
        My Projects
      </h1>
      <div className="w-full h-auto flex justify-center items-center flex-wrap p-5 mr-10">
        <div className="w-full sm:w-[370px] h-[500px] bg-gray-600 flex justify-center items-center flex-col m-2 shadow-lg rounded-lg transition-all duration-400 ease-in-out hover:bg-orange-600 hover:h-[520px]">
          <Image 
            className="rounded-md"
            src={"/image/contdown.png"} 
            alt="countdown image" 
            width={350} 
            height={300} 
          />
          <h3 className=" text-white text-2xl font-semibold my-2">Countdown Timer</h3>
          <p className="text-white text-[19px] font-sans p-2 text-center hover:text-white">
            A Next.js and Typescript powered website to track time with an interactive countdown feature
          </p>
          <div className="flex justify-center items-center gap-4">
            <a className="text-black text-3xl hover:text-blue-600" href="https://github.com/Laiba3009/Countdown-Timer-Project">
              <FaGithub />
            </a>
            <a className="text-black text-3xl hover:text-blue-600" href="https://countdown-timer-project-psi.vercel.app/">
              <TbBrandVercel />
            </a>
          </div>
        </div>
        <div data-aos="zoom-in" className="w-full sm:w-[370px] h-[500px] bg-gray-600 flex justify-center items-center flex-col m-2 shadow-lg rounded-lg transition-all duration-400 ease-in-out hover:bg-orange-600 hover:h-[520px]">
          <Image 
            className="rounded-md"
            src={"/image/virtual assistant.png"} 
            alt="virtual assistant image" 
            width={350}
            height={300} 
          />
         <h3 className="text-white text-2xl font-semibold my-2">Virtual Assistant</h3>
          <p className="text-white text-[19px] font-sans p-2 text-center ">
            Alexa your virtual assistant built with HTML, CSS, and JavaScript.
            Alexa is a powerful tool designed.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a className="text-black text-3xl hover:text-blue-600" href="https://github.com/Laiba3009/My-Virtual-Assistant">
              <FaGithub />
            </a>
            <a className="text-black text-3xl hover:text-blue-600" href="https://my-virtual-assistant-rust.vercel.app/">
              <TbBrandVercel />
            </a>
          </div>
        </div>

        <div data-aos="zoom-in" className="w-full sm:w-[370px] h-[500px] bg-gray-600 flex justify-center items-center flex-col m-2 shadow-lg rounded-lg transition-all duration-400 ease-in-out hover:bg-orange-600 hover:h-[520px]">
          <Image 
            className="rounded-md"
            src={"/image/portfolio.png"} 
            alt="portfolio image" 
            width={350}
            height={300}
          />
          <h3 className=" text-white text-2xl  font-semibold my-2">Portfolio</h3>
          <p className="text-white text-[19px] font-sans p-2 text-center ">
            My Portfolio, fully responsive animation created with HTML, CSS, and JavaScript.
          </p>
          <div className="flex justify-center items-center gap-4">
            <a className="text-black text-3xl hover:text-blue-600" href="https://github.com/Laiba3009/My-Portfolio">
              <FaGithub />
            </a>
            <a className="text-black text-3xl hover:text-blue-600" href="https://my-portfolio-three-rho-81.vercel.app/">
              <TbBrandVercel />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
