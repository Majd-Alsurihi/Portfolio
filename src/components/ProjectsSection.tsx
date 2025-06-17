
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { portfolioConfig } from "@/config/portfolio";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProjectExpansion = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12`}>
          <div className="text-center mb-16">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>Featured Projects</span>
            </div>
            <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6`}>
              Engineering Solutions
            </h2>
            <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} sm:text-2xl text-gray-600 text-center mx-auto max-w-3xl`}>
              Real-world applications where automation meets innovation, transforming complex challenges into elegant, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioConfig.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isExpanded={expandedProject === index}
                onToggleExpanded={() => toggleProjectExpansion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
