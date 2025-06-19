
import React from "react";
import { portfolioConfig } from "@/config/portfolio";

interface Technology {
  name: string;
  icon: string;
}

interface TechStackSliderProps {
  technologies: Technology[];
  scrollSpeed?: number;
  title?: string;
  subtitle?: string;
  badgeLabel?: string;
  highlightColor?: string;
  className?: string;
}

const TechStackSlider: React.FC<TechStackSliderProps> = ({
  technologies,
  scrollSpeed = 40,
  title = "Technologies I Work With",
  subtitle = "A comprehensive toolkit spanning hardware, software, and cloud technologies for complete IoT solutions.",
  badgeLabel = "Tech Stack",
  highlightColor = "#f3bf4b",
  className = ""
}) => {
  // Create multiple copies for truly seamless infinite scroll
  const infiniteTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
    ...technologies
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg';
  };

  return (
    <section className={`py-12 relative overflow-hidden ${className}`} id="tech-stack">
      <div className="section-container opacity-0 animate-on-scroll">
        <div 
          className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.techstackslider} border-2 rounded-3xl shadow-2xl p-8 md:p-12`}
          style={{ borderColor: highlightColor }}
        >
          <div className="text-center mb-12">
            <div className="pulse-chip mb-6 inline-flex text-lg">
              <span>{badgeLabel}</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mx-auto max-w-3xl">
              {subtitle}
            </p>
          </div>

          {/* Continuous Horizontal Scroller */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent p-6">
            <div 
              className="flex animate-continuous-scroll gap-8 will-change-transform"
              style={{ 
                animationDuration: `${scrollSpeed}s`,
                width: 'max-content'
              }}
            >
              {infiniteTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div 
                    className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[120px]"
                    style={{ 
                      borderColor: highlightColor,
                    }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        loading="lazy"
                        onError={handleImageError}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span 
                      className="text-sm font-medium text-center whitespace-nowrap"
                      style={{ color: highlightColor }}
                    >
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
