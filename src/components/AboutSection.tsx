
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 relative" id="about">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          {/* Glass card container */}
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="pulse-chip mb-6 inline-flex">
                <span>About Me</span>
              </div>
              <h2 className="section-title mb-8">Driven by Automation</h2>
            </div>

            <div className="prose prose-lg mx-auto">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                I'm driven by a simple principle: if a process is repetitive, it should be automated. 
                For me, technology isn't just about code or circuits; it's about finding a point of friction—in 
                a workflow, an OS, or a data pipeline—and engineering a smoother, more intelligent path forward.
              </p>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-center gap-2 mx-auto mb-8 text-pulse-600 hover:text-pulse-700 font-medium transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                <span className="transition-all duration-300">
                  {isExpanded ? 'Read Less' : 'Read My Full Story'}
                </span>
                <div className="transition-transform duration-300 ease-in-out">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 animate-bounce" />
                  ) : (
                    <ChevronDown className="w-5 h-5 animate-bounce" />
                  )}
                </div>
              </button>

              <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-none opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'}`}>
                <div className="space-y-6 text-gray-700 animate-fade-in">
                  <p className="text-lg leading-relaxed">
                    This principle has led me to dive deep into system automation, from PowerShell scripts 
                    that manage core security to Python applications that connect cloud APIs. My foundation 
                    in IT and my passion for IoT give me a full-stack perspective, allowing me to build 
                    solutions from the hardware layer right up to the user experience.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I believe knowledge is the most powerful tool we can share. As a Teaching Assistant, 
                    I've had the privilege of supervising two major IoT & Embedded Systems exhibitions, 
                    guiding students from theory to tangible projects. Empowering others to build is, 
                    for me, the ultimate expression of technical leadership.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I am always looking for the next challenge to solve and am currently seeking opportunities 
                    to apply my passion for automation and problem-solving to build robust, user-focused products. 
                    If you believe in making technology work smarter, I'd love to talk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
