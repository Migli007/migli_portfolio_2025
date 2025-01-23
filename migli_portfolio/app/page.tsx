import About from "@/components/About";
import { Certs } from "@/components/Certs";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import { Myprojects } from "@/components/Projects";
import Chip from '@mui/material/Chip';

export default function Home() {
  return (
    <main className=" pb-10 relative flex justify-center flex-col overflow-hidden mx-auto sm:px-10 bg-slate-900">
      <Hero />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-2xl text-white font-bold">
            About me
        </div>
      </div>
      <About />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-2xl text-white font-bold">
            My certifications
        </div>
      </div>
      <Certs />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-2xl text-white font-bold">
            My work experience
        </div>
      </div>
      <Experience />
      <div className="pt-10">
          <div className="max-w-9xl w-full text-2xl text-white font-bold">
            My projects
        </div>
      </div>
      {/* <Chip label="Chip Filled" className="bg-pink-500"/> */}
      <Myprojects />
    </main>
  );
}
