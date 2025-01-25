import { HoverEffect } from "./ui/card-hover-effect";
 
export function Myprojects() {
  return (
    <div id='proj' className="max-w-9xl pt-5 pb-20">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Letter of Authorization (LOA) System",
    description:
      "Engineered and deployed an automated system that generates and manages Letter of Authorizations.",
    
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "Medical Catalog System",
    description: "Developed the system to upload, catalog, and automate searches for symptoms and diseases.",
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "EKonsulta Registration System",
    description: "Developed the system to streamline the registration of Philhealth members to the Electronic Medical Record (EMR) system.",
    chips: ["Django", "Python", "PostgreSQL","Spreadsheets","Pandas"],
  },
  {
    title: "Intercontinental Energy Resources Website",
    description:"Developed and designed the home website for Intercontinental Energy Resources inc. ",
    chips: ["Next.JS", "React","TypeScript","Tailwind CSS", "Vercel"],
  },
  {
    title: "Capstone Project - Production Tracking System",
    description: "Spearheaded the development of a robust production tracking system for Al Di Foods",
    chips: ["Django", "Python","PostgreSQL"],
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];