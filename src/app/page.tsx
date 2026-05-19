import { Navbar, ScrollProgress } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { SystemPhilosophy } from "@/components/sections/SystemPhilosophy";
import { Experience } from "@/components/sections/Experience";
import { EngineeringStats } from "@/components/sections/EngineeringStats";
import { Projects } from "@/components/sections/Projects";
import { Challenges } from "@/components/sections/Challenges";
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
        <SystemPhilosophy />
        <Skills />
        <Experience />
        <EngineeringStats />
        <Projects />
        <Challenges />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
