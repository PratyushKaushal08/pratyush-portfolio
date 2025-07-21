import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero scrollbar-spotify">
      <Navigation />
      
      <main className="relative">
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="certifications">
          <Certifications />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
