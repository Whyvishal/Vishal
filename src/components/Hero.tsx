
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/2ef795fd-c2e1-4e06-bced-9812e978d791.png')`
        }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Vishal Chahar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm a passionate product manager who transforms ideas into impactful products that users love
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 text-lg"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/6adass" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/vishal-chahar" 
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
