import React from 'react'
import { BentoGrid,BentoGridItem } from './ui/Bento-grid'
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
  } from "@tabler/icons-react";

const About = () => {
  return (
    <div>
        <BentoGrid className=" pt-10 max-w-9xl mx-auto">
        {items.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
        ))}
        </BentoGrid>
    </div>
    
  )
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
const items = [
    {
      title: " Data Analytics Professional",
      description: "Passionate about turning data into actionable insights. Strong foundation in analytics tools and methodolgies",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Completed Certifications",
      description: "I have completed certifications on Google Data Analytics Professional, Python Data Analysis, and SQL Bootcamp",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Tools and platforms",
      description: "I have an experience in using SQL, Excel, Google Sheets, Tableau, Python,  and R ",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Analytical Strengths",
      description:
        "I do have core skills on data modelling and reporting, visualization design, Extracting insights for decison-making",
        header: (
          <img
            src="./bloodborne.jpg"
            alt="Dawn of Innovation"
            className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
          />
        ),
      icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Communication Skills",
      description: "I always make sure to have clear, accessible data communication with the stakeholders and the team.",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "values and Mindset",
      description: "I focus a lot on problem-solving, continous learning, and delivering measurable business imapct.",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "What Drives me",
      description: "I want to apply analytics expertise to real-world challenges. I also want to create innovative solutions that would make an meaningful impact.",
      header: (
        <img
          src="./bloodborne.jpg"
          alt="Dawn of Innovation"
          className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        />
      ),
      icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
   
  ];

export default About
