
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-left">
            <div 
              className="pulse-chip mb-6 opacity-0 animate-fade-in inline-flex" 
              style={{ animationDelay: "0.1s" }}
            >
              <span>IoT Engineer</span>
            </div>
            
            <h1 
              className="section-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight opacity-0 animate-fade-in mb-6 text-left" 
              style={{ animationDelay: "0.3s" }}
            >
              Majd Alsurihi
            </h1>

            <h2 
              className="text-xl sm:text-2xl lg:text-3xl text-gray-700 font-medium opacity-0 animate-fade-in mb-8 text-left" 
              style={{ animationDelay: "0.5s" }}
            >
              Systems Administration & Automation | Mentorship
            </h2>
            
            <p 
              style={{ animationDelay: "0.7s" }} 
              className="section-subtitle mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-lg sm:text-xl text-left max-w-3xl"
            >
              Transforming repetitive processes into intelligent, automated solutions. 
              From hardware to user experience, I engineer smoother paths forward.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-start items-start opacity-0 animate-fade-in" 
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
          
          {/* Right side - Personal photo */}
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div 
              className="relative z-10 animate-fade-in" 
              style={{ animationDelay: "0.9s" }}
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                <img 
                  src="/lovable-uploads/c22ca5a2-e88c-4676-ac18-9a0c5e969b1c.png" 
                  alt="Majd Alsurihi - IoT Engineer" 
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default PortfolioHero;
