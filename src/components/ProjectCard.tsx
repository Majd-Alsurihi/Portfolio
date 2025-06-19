import React from "react";
import { Github, ChevronDown, ChevronUp, Server, Smartphone, Cloud, Shield } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

interface Project {
  title: string;
  hook: string;
  challenge: string;
  role: string;
  technologies: string[];
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggleExpanded: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isExpanded, onToggleExpanded }) => {
  // Function to get descriptive icon based on project title/content
  const getProjectIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('server') || lowerTitle.includes('automation') || lowerTitle.includes('system')) {
      return <Server className="w-8 h-8" style={{ color: '#f3bf4b' }} />;
    } else if (lowerTitle.includes('mobile') || lowerTitle.includes('app') || lowerTitle.includes('iot')) {
      return <Smartphone className="w-8 h-8" style={{ color: '#f3bf4b' }} />;
    } else if (lowerTitle.includes('cloud') || lowerTitle.includes('api')) {
      return <Cloud className="w-8 h-8" style={{ color: '#f3bf4b' }} />;
    } else if (lowerTitle.includes('security') || lowerTitle.includes('powershell')) {
      return <Shield className="w-8 h-8" style={{ color: '#f3bf4b' }} />;
    } else {
      return <Server className="w-8 h-8" style={{ color: '#f3bf4b' }} />;
    }
  };

  return (
    <div 
      className={`bg-white/20 ${portfolioConfig.styling.glassBlur.projects} 
      border-2 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all 
      duration-300 hover:scale-105 opacity-0 animate-fade-in`}
      style={{ 
        borderColor: '#f3bf4b'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#f3bf4b';
      }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          {getProjectIcon(project.title)}
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{project.hook}</p>
      </div>

      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 border rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: '#f3bf4b20',
                color: '#f3bf4b',
                borderColor: '#f3bf4b'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={onToggleExpanded}
        className="flex items-center gap-2 font-medium mb-4 transition-colors duration-300"
        style={{ color: '#f3bf4b' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#d4a843';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#f3bf4b';
        }}
      >
        {isExpanded ? 'Show Less' : 'Learn More'}
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-none opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-4 text-sm text-gray-600">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">The Challenge:</h4>
            <p>{project.challenge}</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">My Role & Process:</h4>
            <p>{project.role}</p>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {project.githubUrl !== "#" && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
