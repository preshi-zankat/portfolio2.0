// components/ServiceCard.tsx
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group cursor-pointer border border-gray-700 hover:border-white p-10 rounded-md text-white bg-black transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-lg tracking-widest font-semibold uppercase">{title}</h3>
      {description && (
        <p className="mt-3 text-gray-400 group-hover:text-white transition-colors duration-300">
          {description}
        </p>
      )}
    </div>
  );
}
