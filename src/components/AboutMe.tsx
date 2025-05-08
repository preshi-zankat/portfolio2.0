import Image from "next/image";
import { Roboto } from "next/font/google";
import { Cardo } from "next/font/google";
import { Montserrat } from "next/font/google";
import SkillCircle from "./SkillCircle";
import ServiceCard from "@/components/ServiceCard";
import { FaCropAlt, FaDesktop, FaCode } from "react-icons/fa";

const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
});

const cardo = Cardo({
  weight: ["400"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12 pt-14 text-center">
      {/* Profile Image */}
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-white shadow-lg opacity-50 hover:opacity-100 transition duration-300">
        {/* <Image
          src="/aboutme.jpg" // replace with your image path
          alt="Profile"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        /> */}
        <img
          src='/images/aboutme.jpg' // replace with your image path
          alt=""
          className="object-cover   w-40 h-40"
        />
      </div>

      {/* Heading */}
      <h3
        className={`uppercase text-xs tracking-widest text-gray-400 mb-4 ${montserrat.className}`}
      >
        About Me
      </h3>
      <div className="w-6 h-[1px] bg-gray-400 opacity-50 mb-6 " />

      {/* Main Title */}
      <h1
        className={`text-2xl sm:text-2xl md:text-3xl  mb-4 ${cardo.className}`}
      >
        Turning Ideas into Interactive Web Experiences.
      </h1>

      {/* Description */}
      <p
        className={`text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed ${roboto.className}`}
      >
        I'm Preshita, a passionate full stack web developer skilled in the MERN
        stack. I love building responsive, user-friendly websites and turning
        creative ideas into functional web apps.
      </p>
      <div className="mt-24  bg-black flex justify-center items-center">
        <div
          className={`${montserrat.className} flex gap-25 md:flex-row flex-col justify-center items-center`}
        >
          <SkillCircle percentage={95} label="JavaScript" />
          <SkillCircle percentage={85} label="Node.js" />
          <SkillCircle percentage={80} label="MongoDB" />
          <SkillCircle percentage={80} label="React" />
        </div>
      </div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center py-40">
        <h2
          className={`${montserrat.className} text-center text-[13px] uppercase tracking-[3px] text-gray-400 mb-4`}
        >
          Services
        </h2>
        <hr className="w-8 border-gray-200 opacity-25 mx-auto md:mx-0" />
        <h1
          className={`${cardo.className} text-[26px] tracking-[1px] leading-[40px]  mt-5`}
        >
          What I Do.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 pt-10 max-w-6xl w-full">
          <ServiceCard icon={<FaCropAlt />} title="Web Design" description="I specialize in creating visually stunning and user-friendly websites that captivate your audience and leave a lasting impression." />
          <ServiceCard icon={<FaDesktop />} title="Frontend" description="I specialize in creating visually stunning and user-friendly websites that captivate your audience and leave a lasting impression." />
          <ServiceCard icon={<FaCode />} title="Backend" description="I specialize in creating visually stunning and user-friendly websites that captivate your audience and leave a lasting impression." />
        </div>
      </div>
    </section>
  );
}
