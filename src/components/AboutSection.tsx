
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 relative" id="about">
      <div className="section-container opacity-0 animate-on-scroll">
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
                className="group inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
