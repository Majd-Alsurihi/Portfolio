
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const PortfolioHero = () => {
  return (
    <section 
      className="overflow-hidden relative bg-cover min-h-screen flex items-center" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="pulse-chip mb-6 opacity-0 animate-fade-in inline-flex" 
            style={{ animationDelay: "0.1s" }}
          >
            <span>IoT Engineer</span>
          </div>
          
          <h1 
            className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-in mb-6" 
            style={{ animationDelay: "0.3s" }}
          >
            Majd Alsurihi
          </h1>

          <h2 
            className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium opacity-0 animate-fade-in mb-8" 
            style={{ animationDelay: "0.5s" }}
          >
            Systems Administration & Automation | Mentorship
          </h2>
          
          <p 
            style={{ animationDelay: "0.7s" }} 
            className="section-subtitle mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-lg sm:text-xl text-center max-w-3xl mx-auto"
          >
            Transforming repetitive processes into intelligent, automated solutions. 
            From hardware to user experience, I engineer smoother paths forward.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.9s" }}
          >
            <a 
              href="#projects" 
              className="button-primary inline-flex items-center"
            >
              View My Work
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/Majd-Alsurihi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
              <a 
                href="https://linkedin.com/in/majd-alsurihi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-gray-800" />
              </a>
              <a 
                href="#contact" 
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                aria-label="Contact"
              >
                <Mail className="w-6 h-6 text-gray-800" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default PortfolioHero;
