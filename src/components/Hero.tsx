
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import VishalBG from "@/assets/img/bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with overlay */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(${VishalBG})'
        }}
      /> */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-red-500"
            style={{ backgroundImage: `url(${VishalBG})` }}
        />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="animate-fade-in max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Vishal Chahar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            I'm a passionate product manager who transforms ideas into impactful products that users love
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <a href="#projects">
                <Button 
                variant="outline" 
                size="lg"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 text-lg"
                >
                View My Work
                </Button>
            </a>
          </div>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/Whyvishal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/vishalchahar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:vishalchahar17@gmail.com"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
