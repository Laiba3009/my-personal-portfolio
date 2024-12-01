"use client"
import { useEffect } from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Project from "./project/page";
import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing:"ease-out-back",
      duration:1200,
      delay:100,
      mirror:true,
      anchorPlacement: "bottom-bottom",
      offset:160,
    });
    AOS.refresh();
  }, []);
  return (
 <div>
  <Hero />
  <About />
  <Project />
  <Contact />
 </div>
         
  );
}
