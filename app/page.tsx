import { getSkills } from "@/pages/api/getSkills";
import {getProjects} from "../pages/api/getProjects"
import { Project } from "@/typings";
import { Skills } from "@/typings";
import { Social, PageInfo, Experiences } from "@/typings";
import { getSocials } from "@/pages/api/getSocials";
import { getPageInfo } from "@/pages/api/getPageInfo";
import { getExperiences } from "@/pages/api/getExperience";
import Header from "./components/Header";
import About from "./components/About";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skillz from "./components/Skillz";
import Link from "next/link";
export default async function Home() {
 const projects:Project[] = await getProjects()
 const skills:Skills[] = await getSkills()
 const socials:Social[] = await getSocials()
 const pageInfo:PageInfo = await getPageInfo();
 const experience:Experiences[] = await getExperiences()

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#f68]/80 scrollbar-thin overflow-x-hidden">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center relative pt-36">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center pb-10">
        <Experience experiences={experience} />
      </section>
      <section id="skills" className="snap-start">
        <Skillz skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-6 w-6 md:h-10 md:w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://media.licdn.com/dms/image/D4D03AQHbxztwXVOIQg/profile-displayphoto-shrink_800_800/0/1675335118967?e=1688601600&v=beta&t=s9QgRuMHzVptP1_NWkqeIarKP7h4ymkbxpbZNkd11W4"
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
}
