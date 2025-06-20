import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const PortfolioHero = () => {
  return (
    <section 
      className="overflow-hidden relative min-h-screen flex items-center bg-transparent" 
      id="hero" 
      style={{
        padding: '120px 20px 60px'
      }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Glass card container with identical styling to other sections */}
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border-2 rounded-3xl shadow-2xl p-6 md:p-12`} style={{ borderColor: '#f3bf4b' }}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image first on narrow screens, second on desktop */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 relative flex justify-center">
              <div 
                className="relative z-10 animate-fade-in" 
                style={{ animationDelay: "0.9s" }}
              >
                {/* Photo with particle background and stroke - Improved mobile centering */}
                <div className="relative overflow-hidden rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto shadow-2xl border-4 border-white/30">
                  {/* Particle background behind photo */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-yellow-400/20 to-orange-500/20 animate-pulse"></div>
                    {/* Animated particles */}
                    {Array.from({ length: 15 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-400/40 rounded-full animate-bounce"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${2 + Math.random() * 2}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Main photo with enhanced border - Better mobile sizing and positioning */}
                  <img 
                    src={portfolioConfig.personal.image}
                    alt="Majd Alsurihi - IoT Engineer" 
                    className="relative z-10 w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110 border-2 border-white/50 rounded-full"
                    style={{
                      objectPosition: 'center center',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Text content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
              <div 
                className={`pulse-chip mb-6 opacity-0 animate-fade-in inline-flex text-${portfolioConfig.styling.titleSizes.cardTitles}`} 
                style={{ animationDelay: "0.1s" }}
              >
                <span>{portfolioConfig.personal.title}</span>
              </div>
              
              <h1 
                className={`section-title text-${portfolioConfig.styling.titleSizes.mainName} leading-tight opacity-0 animate-fade-in mb-6 text-left`}
                style={{ animationDelay: "0.3s" }}
              >
                {portfolioConfig.personal.name}
              </h1>

              <h2 
                className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-700 font-medium opacity-0 animate-fade-in mb-8 text-left`}
                style={{ animationDelay: "0.5s" }}
              >
                {portfolioConfig.personal.subtitle}
              </h2>
              
              <p 
                style={{ animationDelay: "0.7s" }} 
                className={`section-subtitle mt-6 mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-${portfolioConfig.styling.titleSizes.bodyText} sm:text-xl text-left max-w-3xl`}
              >
                {portfolioConfig.personal.description}
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
                    href={portfolioConfig.social.github}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-6 h-6 text-gray-800" />
                  </a>
                  <a 
                    href={portfolioConfig.social.linkedin}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-6 h-6 text-gray-800" />
                  </a>
                  <a 
                    href={portfolioConfig.social.email}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                    aria-label="Contact"
                  >
                    <Mail className="w-6 h-6 text-gray-800" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
