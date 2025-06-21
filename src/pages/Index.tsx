
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Achievements />
      <Skills />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Index;
