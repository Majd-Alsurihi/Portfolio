
import React from 'react';

const TechStackSlider = () => {
  const techStack = [
    { name: 'Python', color: '#e09712' },
    { name: 'C++', color: '#f0ad1b' },
    { name: 'JavaScript', color: '#f5c84f' },
    { name: 'Raspberry Pi', color: '#e09712' },
    { name: 'Arduino', color: '#f0ad1b' },
    { name: 'Node-RED', color: '#f5c84f' },
    { name: 'React', color: '#e09712' },
    { name: 'IoT', color: '#f0ad1b' },
    { name: 'PowerShell', color: '#f5c84f' },
    { name: 'Git', color: '#e09712' },
    { name: 'Docker', color: '#f0ad1b' },
    { name: 'Linux', color: '#f5c84f' }
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
