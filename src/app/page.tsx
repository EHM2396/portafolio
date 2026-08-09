import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AiSection } from "@/components/sections/AiSection";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";
import { Experience } from "@/components/sections/Experience";
import { HowIWork } from "@/components/sections/HowIWork";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AiSection />
      <Projects />
      <Technologies />
      <Experience />
      <HowIWork />
      <Contact />
    </>
  );
}
