import React from "react";
import { Meteors } from "./ui/meteors"; // Ensure the Meteors component is imported correctly

const Experience = () => {
  return (
    <div id='myexp'>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl bg-gradient-to-r from-purple-900 to-blue-900 p-[1px] overflow-hidden"
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
    title: "IT Project Management Trainee",
    company: "Medicare Plus",
    year: "May 2023- September 2024",
    description:
      "Collaborated with the team in terms of data mapping, cleaning data, and design of the backend of internal systems. Visualized data and present findings and insights to multiple stakeholders",
  },
  {
    title: "Junior Consultant",
    company: "CGI Group",
    year: "August 2022 - May 2023",
    description:
      "Led identification, measurement, and improvement initiatives for data management. Implemented modifications to designs and features of internal projects. ",
  },
  {
    title: "Junior Automation Developer",
    company: "CGI Group",
    year: "April 2022 - July 2022",
    description:
      "Illustrated system designs for internal projects and created UI mock-ups for a company system. Contributed to the collaborative development of a CSR website. ",
  },
];

export default Experience;
