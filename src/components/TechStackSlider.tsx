
import React from "react";
import { portfolioConfig } from "@/config/portfolio";

const TechStackSlider = () => {
  // Triple the technologies for truly seamless infinite scroll
  const triplicatedTechnologies = [
    ...portfolioConfig.technologies, 
    ...portfolioConfig.technologies, 
    ...portfolioConfig.technologies
  ];

  return (
    <section className="py-12 relative overflow-hidden" id="tech-stack">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border-2 rounded-3xl shadow-2xl p-8 md:p-12`} style={{ borderColor: '#f3bf4b' }}>
          <div className="text-center mb-12">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>Tech Stack</span>
            </div>
            <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} font-bold text-gray-900 mb-6`}>
              Technologies I Work With
            </h2>
            <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-600 text-center mx-auto max-w-3xl`}>
              A comprehensive toolkit spanning hardware, software, and cloud technologies for complete IoT solutions.
            </p>
          </div>

          {/* Tech Stack Slider - Improved for continuous scrolling */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent p-8">
            <div className="flex animate-scroll-continuous space-x-12 will-change-transform">
              {triplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div 
                    className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/20 backdrop-blur-sm border-2 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[120px]"
                    style={{ 
                      borderColor: '#f3bf4b',
                      '--hover-border-color': '#d4a843'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#d4a843';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#f3bf4b';
                    }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800 text-center whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
