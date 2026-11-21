import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { AiSection } from "@/components/sections/AiSection";
import { HowIWork } from "@/components/sections/HowIWork";
import { Technologies } from "@/components/sections/Technologies";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Services />
      <AiSection />
      <HowIWork />
      <Technologies />
      <Contact />
    </>
  );
}
