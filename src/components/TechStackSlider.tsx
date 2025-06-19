
import React from "react";

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
  scrollSpeed = 15,
  title = "Technologies I Work With",
  subtitle = "A comprehensive toolkit spanning hardware, software, and cloud technologies for complete IoT solutions.",
  badgeLabel = "Tech Stack",
  highlightColor = "#f3bf4b",
  className = ""
}) => {
  // Triple the technologies for truly seamless infinite scroll
  const triplicatedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies
  ];

  // Generate a darker shade for hover effect
  const getDarkerShade = (color: string) => {
    // Simple hex color darkening - you can make this more sophisticated if needed
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const darker = (component: number) => Math.max(0, Math.floor(component * 0.8));
    
    return `#${darker(r).toString(16).padStart(2, '0')}${darker(g).toString(16).padStart(2, '0')}${darker(b).toString(16).padStart(2, '0')}`;
  };

  const darkerHighlightColor = getDarkerShade(highlightColor);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = '/placeholder.svg'; // fallback image
  };

  return (
    <section className={`py-12 relative overflow-hidden ${className}`} id="tech-stack">
      <div className="section-container opacity-0 animate-on-scroll">
        <div 
          className="glass-card border-2 rounded-3xl shadow-2xl p-8 md:p-12 bg-white/70 backdrop-blur-sm dark:bg-white/10" 
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

          {/* Tech Stack Slider - Improved for continuous scrolling */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent p-8">
            <div 
              className="flex animate-scroll-continuous space-x-12 will-change-transform"
              style={{ animationDuration: `${scrollSpeed}s` }}
            >
              {triplicatedTechnologies.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div 
                    className="flex flex-col items-center space-y-4 p-6 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-sm border-2 hover:bg-white/30 dark:hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[120px]"
                    style={{ 
                      borderColor: highlightColor
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = darkerHighlightColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = highlightColor;
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
                    <span className="text-sm font-medium text-gray-800 dark:text-white text-center whitespace-nowrap">
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
