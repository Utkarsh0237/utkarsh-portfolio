import { Navbar, ScrollProgress } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechnicalHighlights } from "@/components/sections/TechnicalHighlights";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { EngineeringStats } from "@/components/sections/EngineeringStats";
import { Projects } from "@/components/sections/Projects";
import { EngineeringMindset } from "@/components/sections/EngineeringMindset";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <TechnicalHighlights />
        <Skills />
        <Experience />
        <EngineeringStats />
        <Projects />
        <EngineeringMindset />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
