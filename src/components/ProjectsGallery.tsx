"use client";

import { useState } from "react";
import { projects, categories } from "@/data/projects";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Roboto } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-black pb-10 md:pb-12px-4 text-white">
      <h2
        className={`${montserrat.className} text-[13px] text-center mb-10 tracking-[2.66px] leading-[16px]`}
      >
        PROJECTS
      </h2>

      {/* Filter Tabs */}
      <div
        className={`${roboto.className} flex justify-center gap-6 mb-12 text-[15px] uppercase font-medium tracking-widest`}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`transition-colors ${
              activeCategory === cat
                ? "text-white underline underline-offset-4"
                : "text-gray-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-8">
        {filteredProjects.map((project) => (
          <Link
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
              <Image
                src={project.image}
                alt={project.category} 
                fill
                className="object-cover  group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg uppercase font-semibold tracking-wide">
                {project.category}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
