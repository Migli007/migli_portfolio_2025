import About from "@/components/About";
import { Certs } from "@/components/Certs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Myprojects } from "@/components/Projects";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Chip from '@mui/material/Chip';
import {
  IconUserFilled,
  IconBookFilled,
  IconBooks,
  IconAddressBook,
  IconAlignBoxBottomCenter,
  IconBriefcase2Filled
} from "@tabler/icons-react";

export default function Home() {
  return (
    
    <main className=" pb-10 relative flex justify-center flex-col overflow-hidden mx-auto sm:px-10 bg-slate-900">
      <div className="mx-10"></div>
      <FloatingNav navItems={[
          {name: 'About Me',link:'#About', icon: <IconUserFilled />},
          {name: 'Certifications',link:'#certs', icon: <IconBookFilled />},
          {name: 'Experience',link:'#myexp', icon: <IconBriefcase2Filled />},
          {name: 'Projects',link:'#proj', icon: <IconAlignBoxBottomCenter />},
          {name: 'Contacts',link:'#contact', icon: <IconAddressBook />},
        ]} />
      <Hero />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            About Me
        </div>
      </div>
      <About />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Certifications
        </div>
      </div>
      <Certs />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Work Experience
        </div>
      </div>
      <Experience />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-4xl text-white font-bold">
            My Projects
        </div>
      </div>
      {/* <Chip label="Chip Filled" className="bg-pink-500"/> */}
      <Myprojects /> 
      <Footer />
    </main>
  );
}
