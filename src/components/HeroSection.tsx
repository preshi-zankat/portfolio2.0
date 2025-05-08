import React from "react";
import { Montserrat } from "next/font/google";
import SocialBar from "./SocialBar";
import SidebarMenu from "./SidebarMenu";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: true, 
});

function HeroSection() {
  return (
    <>
      <SidebarMenu />
      <div className="h-screen w-full bg-[#0C0C0C] text-white relative overflow-hidden flex flex-col md:flex-row items-center md:justify-between px-6 md:px-16">
        {/* Left Content */} 
        <div className="flex flex-col space-y-5 z-10 md:ml-40 mt-21 md:mt-12 items-center md:items-start text-center md:text-left">
          <h1 className={`${montserrat.className} text-[25px] md:text-[30px] font-semibold tracking-[8px] leading-[42px] 

`}>
            PRESHITA ZANKAT
          </h1>
          <hr className="w-8 border-gray-200 opacity-25 mx-auto md:mx-0" />
          <p className={`${montserrat.className}  text-[16px] md:text-lg leading-[19px] tracking-[2px] font-light `}> 
            MERN stack Developer
          </p>
         </div>
 
        {/* Social Bar (hidden on mobile) */}
        <div className="absolute left-4 bottom-6 md:left-10 md:bottom-1 hidden md:block">
          <SocialBar />
        </div>

        {/* Image Right */}
        <div className="relative mt-5 md:mt-0 md:right-10 md:top-10 h-[200px] w-[300px] md:h-[600px] md:w-[600px] overflow-hidden shadow-lg">
          <img     
            src="https://images.unsplash.com/photo-1457732815361-daa98277e9c8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29tYW4lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" // replace with your image path
            alt="Hero Image"
            className="h-full w-full object-cover z-0"
          />
        </div>

        {/* Right Text Vertical */}
        <div className="absolute right-4 bottom-6 md:right-10 md:bottom-16 transform md:rotate-90 origin-right text-sm tracking-widest">
          <a
            href="#about"
            className="hover:underline text-xs md:text-[15px] tracking-[3px] md:tracking-[4px] leading-5"
          >
            LEARN MORE →     
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
