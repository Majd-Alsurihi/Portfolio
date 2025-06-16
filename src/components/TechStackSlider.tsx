
import React from 'react';

const TechStackSlider = () => {
  const techStack = [
    { name: 'Python', color: '#3776ab' },
    { name: 'C++', color: '#00599c' },
    { name: 'JavaScript', color: '#f7df1e' },
    { name: 'Raspberry Pi', color: '#a22846' },
    { name: 'Arduino', color: '#00979d' },
    { name: 'Node-RED', color: '#8f0000' },
    { name: 'React', color: '#61dafb' },
    { name: 'IoT', color: '#ff6b35' },
    { name: 'PowerShell', color: '#012456' },
    { name: 'Git', color: '#f05032' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Linux', color: '#fcc624' }
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="text-center mb-12">
        <div className="pulse-chip mb-6 inline-flex">
          <span>Tech Stack</span>
        </div>
        <h2 className="section-title mb-4">Technologies I Work With</h2>
        <p className="section-subtitle text-center mx-auto">
          Constantly exploring and mastering new tools to build innovative solutions
        </p>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll space-x-8">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
              style={{ minWidth: '140px' }}
            >
              <div className="text-center">
                <div 
                  className="w-3 h-3 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: tech.color }}
                ></div>
                <span className="text-gray-800 font-medium text-sm">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
