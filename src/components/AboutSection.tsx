
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      {/* Decorative Organic Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large organic shape - top right */}
        <div className="absolute -top-32 -right-32 w-96 h-96 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-pulse-300 via-pulse-400 to-pulse-500 rounded-[40%_60%_60%_40%] animate-float blur-sm"></div>
        </div>
        
        {/* Medium organic shape - middle left */}
        <div className="absolute top-1/2 -left-24 w-64 h-64 opacity-15">
          <div className="w-full h-full bg-gradient-to-tr from-pulse-200 via-pulse-300 to-pulse-400 rounded-[60%_40%_30%_70%] animate-pulse-slow blur-sm"></div>
        </div>
        
        {/* Small organic shape - bottom center */}
        <div className="absolute -bottom-16 left-1/3 w-48 h-48 opacity-10">
          <div className="w-full h-full bg-gradient-to-bl from-pulse-400 via-pulse-300 to-pulse-200 rounded-[70%_30%_60%_40%] animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Glowing circles like in your image */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-pulse-300 opacity-30 animate-pulse-slow shadow-lg shadow-pulse-200"></div>
        <div className="absolute bottom-1/3 left-1/5 w-16 h-16 rounded-full border-3 border-pulse-400 opacity-40 animate-float shadow-lg shadow-pulse-300"></div>
      </div>

      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
                <span>About Me</span>
              </div>
              <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} font-bold text-gray-900 mb-6`}>
                Driven by Automation
              </h2>
              <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-600 leading-relaxed`}>
                I believe in the power of technology to eliminate friction and create seamless experiences.
              </p>
            </div>

            <div className="space-y-6">
              {/* Always visible content */}
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  I'm driven by a simple principle: if a process is repetitive or taking time from me, it should be automated. For me, technology isn't just about code or circuits; it's about finding a point of friction—in a workflow, an OS, or a data pipeline—and engineering a smoother, more intelligent path forward.
                </p>
              </div>

              {/* Expandable content */}
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4 pt-4">
                  <p>
                    This principle has led me to dive deep into system automation, from PowerShell scripts that manage core security to Python applications that connect cloud APIs. My foundation in IT and my passion for IoT give me a full-stack perspective, allowing me to build solutions from the hardware layer right up to the user experience.
                  </p>
                  <p>
                    I believe knowledge is the most powerful tool we can share. As a Teaching Assistant, I've had the privilege of supervising two major IoT & Embedded Systems exhibitions, guiding students from theory to tangible projects. Empowering others to build is, for me, the ultimate expression of technical leadership.
                  </p>
                  <p>
                    I am always looking for the next challenge to solve and am currently seeking opportunities to apply my passion for automation and problem-solving to build robust, user-focused products. If you believe in making technology work smarter, I'd love to talk.
                  </p>
                </div>
              </div>

              {/* Read More/Less Button */}
              <button
                onClick={toggleExpanded}
                className="group inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-to-r from-pulse-400 to-pulse-500 text-white rounded-full hover:from-pulse-500 hover:to-pulse-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-pulse-200/50"
              >
                <span className="font-medium">
                  {isExpanded ? "Read Less" : "Read My Full Story"}
                </span>
                <span className={cn(
                  "transition-transform duration-300",
                  isExpanded ? "rotate-180" : "rotate-0"
                )}>
                  👇
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
