"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState,RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function Certs() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as RefObject<HTMLDivElement>, () => setActive(null));


  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 px-4 py-2">
                  {active.chips?.map((chip, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="pt-5 max-w-9xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center text-base"
                >
                  {card.description}
                </motion.p>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 mt-2">
                {card.chips?.map((chip, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

const cards = [
  {
    description: "Google Data Analytics Professional Certificate 1",
    title: "Foundations: Data, Data, Everywhere",
    src: "/da_1.png",
    alt: "Foundations Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/4rPkN1FMzQyFNP9cLUGIIB?si=b6b8e068a508427e",
    chips: ["Spreadsheet", "Data Integrity", "Sample Size Determination", "SQL", "Data Cleansing"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned how to transform data into insights.</li>
          <li>I gained a better understanding of the data ecosystem.</li>
          <li>I explored creating effective outcomes using analytical thinking.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 2",
    title: "Ask Questions to Make Data-Driven Decisions",
    src: "/da_2.png",
    alt: "Ask Questions Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/1dNIEtp7AY3oDAKCGg2XkH?si=2c21114249084ee5",
    chips: ["Data Analysis", "Data Visualization", "Data Cleansing"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned about the problem-solving roadmap.</li>
          <li>I explored the use of data in decision-making processes.</li>
          <li>I studied key concepts related to structured thinking.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 3 ",
    title: "Prepare Data for Exploration",
    src: "/da_3.png",
    alt: "Prepare Data Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/3P3pw6C19j31Rnzgo3JG7o?si=a4552201b7374945",
    chips: ["Decision-Making", "Spreadsheet", "Data Analysis"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned about factors to consider when making decisions.</li>
          <li>I explored best practices for organizing data.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 4",
    title: "Process Data from Dirty to Clean",
    src: "/da_4.png",
    alt: "Process Data Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/1imaIe1NEAaWnLF0BY0V6F?si=fcd7e196fb284302",
    chips: ["Data Analysis", "R Markdown", "Data Visualization", "R Programming", "RStudio"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I defined different types of data integrity.</li>
          <li>I explored SQL basic functionalities.</li>
          <li>I verified results of data cleaning processes.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 5",
    title: "Analyze Data to Answer Questions",
    src: "/da_5.png",
    alt: "Analyze Data Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/3Vr3zh0r7ALn8VLqCiRR10?si=2707f0b5363944e0",
    chips: ["Data Aggregation", "Spreadsheet", "Data Analysis", "Data Calculations", "SQL"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned the importance of organizing data before analysis.</li>
          <li>I applied SQL functions and syntax to create queries.</li>
          <li>I practiced calculations in spreadsheets using functions.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 6",
    title: "Share Data Through the Art of Visualization",
    src: "/da_6.png",
    alt: "Share Data Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/5aIZ2jtxZ4o4GHQXTybkIa?si=3219938308784553",
    chips: ["Data Collection", "Spreadsheet", "Metadata", "Data Ethics", "SQL"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned about creating effective data visualizations.</li>
          <li>I practiced using Tableau for presentations.</li>
          <li>I explored principles for impactful presentations.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 7",
    title: "Data Analysis with R Programming",
    src: "/bloodborne.png",
    alt: "R Programming Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/5aIZ2jtxZ4o4GHQXTybkIa?si=3219938308784553",
    chips: ["Data Analysis", "RStudio", "R Programming Language", "Data Visualization", "Presentation"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned about R programming and its environment.</li>
          <li>I explored methods to generate visualizations in R.</li>
          <li>I practiced using R Markdown for formatting and structure.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "Google Data Analytics Professional Certificate 8",
    title: "Google Data Analytics Capstone",
    src: "/bloodborne.png",
    alt: "Capstone Course Thumbnail",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/5aIZ2jtxZ4o4GHQXTybkIa?si=3219938308784553",
    chips: ["Data Analysis", "Spreadsheet", "SQL", "Data Visualization", "Data Cleansing"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I applied practices and procedures for data analysis to real-world datasets.</li>
        </ul>
      </div>
    ),
  },
  {
    description: "SQL Certificate",
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    src: "/sql_cert.png",
    alt: "SQL",
    ctaText: "Play",
    ctaLink: "https://open.spotify.com/track/5aIZ2jtxZ4o4GHQXTybkIa?si=3219938308784553",
    chips: ["Data Analysis", "Spreadsheet", "SQL", "Data Visualization", "Data Cleansing"],
    content: () => (
      <div className="font-light text-md sm:text-md">
        <ul>
          <li>I learned and practiced the different functionalities of SQL. </li>
        </ul>
      </div>
    ),
  },
];

