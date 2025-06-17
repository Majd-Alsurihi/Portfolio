
import React from "react";
import { portfolioConfig } from "@/config/portfolio";

const TechStackSlider = () => {
  // Duplicate technologies for seamless infinite scroll
  const duplicatedTechnologies = [...portfolioConfig.technologies, ...portfolioConfig.technologies];

  return (
    <section className="py-12 relative overflow-hidden" id="tech-stack">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12`}>
          <div className="text-center mb-12">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>Tech Stack</span>
            </div>
            <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6`}>
              Technologies I Work With
            </h2>
            <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} sm:text-2xl text-gray-600 text-center mx-auto max-w-3xl`}>
              A comprehensive toolkit spanning hardware, software, and cloud technologies for complete IoT solutions.
            </p>
          </div>

          {/* Tech Stack Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent p-8">
            <div className="flex animate-scroll space-x-12">
              {duplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[120px]">
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
