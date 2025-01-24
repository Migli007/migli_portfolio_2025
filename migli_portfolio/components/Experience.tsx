import React from "react";
import { Meteors } from "./ui/meteors"; // Ensure the Meteors component is imported correctly

const Experience = () => {
  return (
    <div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 p-[1px] overflow-hidden"
          >
            {/* Card Content with Meteor Effect Inside */}
            <div className="relative z-20 bg-gray-900 border border-gray-800 p-6 rounded-2xl flex flex-col justify-end space-y-4">
              {/* Meteor Effect Inside the Card */}
              <div className="absolute inset-0 z-10">
                <Meteors number={15} />
              </div>

              {/* Card Text Content */}
              <h3 className="font-bold text-lg text-white relative z-20">{card.title}</h3>
              <p className="text-sm text-gray-400 relative z-20">
                {card.company} • {card.year}
              </p>
              <p className="mt-2 text-gray-300 relative z-20">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const workExperience = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    year: "2023",
    description:
      "Developed and maintained scalable web applications, collaborating with cross-functional teams to deliver high-quality products.",
  },
  {
    title: "Frontend Developer",
    company: "Design Studio",
    year: "2022",
    description:
      "Designed and implemented user interfaces for web applications, ensuring a seamless user experience with modern frameworks.",
  },
];

export default Experience;
