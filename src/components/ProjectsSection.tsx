
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Smart Water Quality Monitoring System",
      hook: "An intelligent IoT system that continuously monitors water quality parameters and provides real-time alerts for contamination detection.",
      challenge: "Traditional water quality testing relies on manual sampling and laboratory analysis, which is time-consuming and provides delayed results. There was a need for a real-time monitoring solution that could detect contamination immediately.",
      role: "I designed and implemented the complete IoT solution from sensor integration to cloud analytics. This included selecting appropriate sensors (pH, turbidity, temperature, dissolved oxygen), developing firmware for ESP32 microcontrollers, creating a secure MQTT communication protocol, and building a web dashboard for real-time monitoring and historical data analysis.",
      technologies: ["ESP32", "MQTT", "Python", "AWS IoT", "Node-RED"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "Automated Home Energy Management",
      hook: "A comprehensive home automation system that optimizes energy consumption by intelligently controlling devices based on usage patterns and real-time pricing.",
      challenge: "Rising energy costs and environmental concerns require smarter energy management in residential settings. Most homeowners lack visibility into their energy consumption patterns and miss opportunities for optimization.",
      role: "I developed an end-to-end solution including smart plugs with current sensing, a central hub using Raspberry Pi, machine learning algorithms for usage pattern recognition, and integration with utility APIs for real-time pricing. The system automatically schedules high-consumption devices during off-peak hours and provides detailed analytics to homeowners.",
      technologies: ["Raspberry Pi", "Python", "Docker", "InfluxDB", "Grafana"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "Industrial Equipment Predictive Maintenance",
      hook: "An IoT-based predictive maintenance system that uses vibration analysis and machine learning to predict equipment failures before they occur.",
      challenge: "Unplanned equipment downtime in industrial settings can cost thousands of dollars per hour. Traditional maintenance schedules are either too conservative (wasting resources) or too aggressive (risking failures).",
      role: "I implemented a complete predictive maintenance solution using accelerometer sensors, edge computing with industrial gateways, and cloud-based machine learning models. The system analyzes vibration patterns, temperature fluctuations, and operational parameters to predict failures 2-4 weeks in advance with 94% accuracy.",
      technologies: ["Arduino", "C/C++", "AWS", "Machine Learning", "LoRaWAN"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "Smart Agriculture Monitoring Platform",
      hook: "A precision agriculture system that monitors soil conditions, weather patterns, and crop health to optimize irrigation and maximize yield.",
      challenge: "Traditional farming methods often lead to water waste and suboptimal crop yields. Farmers need real-time data about soil conditions, weather patterns, and plant health to make informed decisions about irrigation, fertilization, and pest control.",
      role: "I designed a comprehensive IoT platform with soil moisture sensors, weather stations, and drone integration for crop monitoring. The system includes automated irrigation control, predictive analytics for pest detection, and a mobile app for farmers to receive alerts and recommendations.",
      technologies: ["ESP32", "LoRaWAN", "Python", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "Network Infrastructure Automation Suite",
      hook: "A PowerShell-based automation framework that streamlines network configuration, monitoring, and maintenance tasks across enterprise environments.",
      challenge: "Managing large-scale network infrastructures manually is time-consuming and error-prone. Network administrators needed a way to automate repetitive tasks, ensure configuration consistency, and respond quickly to network issues.",
      role: "I developed a comprehensive PowerShell automation suite that handles device discovery, configuration backup and restore, performance monitoring, and automated troubleshooting. The system includes custom modules for different network vendors and integrates with existing monitoring tools.",
      technologies: ["PowerShell", "SNMP", "SSH", "Git", "Windows Server"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "Container Orchestration Platform",
      hook: "A Docker-based microservices platform that simplifies application deployment, scaling, and management in production environments.",
      challenge: "Traditional monolithic applications are difficult to scale and maintain. Development teams needed a way to break down applications into microservices while ensuring reliable deployment and orchestration.",
      role: "I architected and implemented a complete containerization strategy using Docker and Kubernetes. This included creating CI/CD pipelines, implementing service mesh for inter-service communication, setting up monitoring and logging, and establishing automated scaling policies.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    }
  ];

  const toggleProjectExpansion = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/3 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <div className="pulse-chip mb-6 inline-flex text-2xl">
              <span>Featured Projects</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Engineering Solutions</h2>
            <p className="text-xl sm:text-2xl text-gray-600 text-center mx-auto max-w-3xl">
              Real-world applications where automation meets innovation, transforming complex challenges into elegant, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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
