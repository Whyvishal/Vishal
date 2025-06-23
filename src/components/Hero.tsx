
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import VishalBG from "@/assets/img/bg.jpg";

import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate blur and animation values based on scroll
  const blurAmount = Math.min(scrollY / 300, 8);
  const translateX = Math.max(0, 50 - (scrollY / 10));
  const opacity = Math.max(0.3, 1 - (scrollY / 400));

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gray-950">
      {/* Background with scroll-based blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-300 ease-out"
            style={{ backgroundImage: `url(${VishalBG})`,
          filter: `blur(${blurAmount}px)`,
          transform: `scale(${1 + scrollY / 2000})`
               }}
        />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl transition-all duration-700 ease-out" style={{
          transform: `translateX(-${translateX}px)`,
          opacity: opacity
        }}>
          <h1 
            className="text-5xl md:text-7xl font-orbitron font-black text-white mb-6 leading-tight transition-all duration-1000 ease-out"
            style={{
              transform: `translateX(-${translateX * 1.2}px)`,
              opacity: Math.max(0, opacity * 1.2)
            }}
          >
            Vishal Chahar
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 mb-8 font-inter font-light leading-relaxed transition-all duration-1200 ease-out"
            style={{
              transform: `translateX(-${translateX * 0.8}px)`,
              opacity: Math.max(0, opacity * 1.1)
            }}
          >
            I'm a passionate product manager who transforms ideas into impactful products that users love
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1400 ease-out"
            style={{
              transform: `translateX(-${translateX * 0.6}px)`,
              opacity: opacity
            }}
          >
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

          <div 
            className="flex space-x-6 transition-all duration-1600 ease-out"
            style={{
              transform: `translateX(-${translateX * 0.4}px)`,
              opacity: opacity
            }}
          >
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
