"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Montserrat } from "next/font/google";
import { IoMdClose } from "react-icons/io"; // Close icon
// import Link from "next/link"; // Import Link from next/link

const montserrat = Montserrat({
  weight: ["500"],
  preload: true, 
  subsets: ['latin'], 
});

export default function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFollowLinks, setShowFollowLinks] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <div
        className="fixed top-10 right-10 z-50 space-y-1 cursor-pointer opacity-50 hover:opacity-25 transition md:top-10 md:right-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-1 bg-white rounded-full"></div>
        <div className="w-6 h-1 bg-white rounded-full"></div>
        <div className="w-6 h-1 bg-white rounded-full"></div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          montserrat.className
        } tracking-[8px] leading-[20px] fixed top-0 right-0 h-full w-64 bg-[#151515] text-white px-6 pt-10 pb-6 z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400 transition"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <IoMdClose />
        </button>

        <ul className="space-y-6 mt-12 md:ml-10 text-sm tracking-widest">
          {[
            { name: "HOME", href: "#home" },
            { name: "ABOUT", href: "#about" },
            { name: "PROJECTS", href: "#projects" },
            { name: "CONTACT", href: "#contact" },
          ].map((item, i) => (
            <li key={i} className="hover:text-gray-400 cursor-pointer">
              <a href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </a>
            </li>
          ))}

          {/* Follow section */}
          <li
            className="flex items-center justify-between cursor-pointer hover:text-gray-400"
            onClick={() => setShowFollowLinks(!showFollowLinks)}
          >
            <span>FOLLOW</span>
            <FiChevronDown
              className={`transition-transform ${
                showFollowLinks ? "rotate-180" : ""
              }`}
            />
          </li>

          {/* Follow Links (Dropdown) */}
          {showFollowLinks && (
            <div className="pl-4 space-y-4 mt-2 text-gray-300 flex flex-col">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-white"
              >
                LINKEDIN
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-white"
              >
                INSTAGRAM
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-white"
              >
                TWITTER
              </a>
            </div>
          )}
        </ul>
      </div>
    </>
  );
}
