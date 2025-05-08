'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillCircleProps {
  percentage: number;
  label: string;
}

const SkillCircle = ({ percentage, label }: SkillCircleProps) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.5 } // Trigger when 50% in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && circleRef.current) {
      const offset = circumference - (percentage / 100) * circumference;
      circleRef.current.style.strokeDashoffset = offset.toString();
    }
  }, [isVisible, percentage, circumference]);

  return (
    <div ref={containerRef} className="text-center flex flex-col items-center">
      <div className="relative w-44 sm:w-36 md:w-40 lg:w-48 aspect-square">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#111"
            strokeWidth="5"
            fill="none"
          />
          <circle
            ref={circleRef}
            cx="80"
            cy="80"
            r={radius}
            stroke="white"
            strokeWidth="5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 text-white text-xl sm:text-base md:text-lg lg:text-xl font-light transform -translate-x-1/2 -translate-y-1/2">
          {percentage}%
        </div>
      </div>
      <p className="mt-2 text-white tracking-widest uppercase text-sm sm:text-base">{label}</p>
    </div>
  );
};

export default SkillCircle;
