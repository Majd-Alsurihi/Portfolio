
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "IoT Smart Meter: Remote Energy Management System",
      hook: "A comprehensive IoT solution that empowers users to monitor, control, and budget their electricity consumption in real-time through a dedicated mobile application.",
      challenge: "Traditional electricity meters provide no real-time data or control to the end-user, often leading to surprise bills and inefficient energy usage. The goal of my graduation project was to design and build the core hardware and firmware for a smart meter that could be controlled remotely, giving users direct power over their energy consumption.",
      role: "My primary responsibility was architecting and building the complete hardware and embedded firmware for the smart meter. This involved: 1. Hardware Design & Integration: I designed the core circuitry, selecting the ESP32 microcontroller for its processing power and built-in Wi-Fi. I was responsible for interfacing all components, including the high-power relay and the voltage and current sensors. 2. Firmware Development: I wrote the complete firmware from the ground up in C++/Arduino. This included the low-level code to read data accurately from the sensors, process it, and manage the device's state. 3. Control & Logic: A key part of the firmware was the logic to control the high-power relay, allowing it to safely connect or disconnect the main electricity supply based on commands received. 4. Connectivity & API Endpoint: I programmed the ESP32 to connect to a Wi-Fi network and communicate with a server. I developed the device-side API, enabling it to listen for specific commands (like set_limit or toggle_power), making it ready for my partners on the software team to connect with the mobile application.",
      technologies: ["C++/Arduino", "ESP32 Wi-Fi Module", "Voltage & Current Sensors", "Relay Module"],
      githubUrl: "#",
      icon: "⚡",
      iconColor: "#3B82F6"
    },
    {
      title: "Network Admin Toolkit: One-Click Context Switching",
      hook: "A suite of administrative Batch scripts that automates the tedious process of switching between static and dynamic network configurations, reducing a multi-step manual task to a single click.",
      challenge: "Network administrators and users frequently need to switch between different network configurations (static vs dynamic IP) for various environments. This typically involves multiple manual steps through Windows network settings, which is time-consuming and error-prone.",
      role: "I developed a complete automation solution using Batch scripting and Windows Command Line tools. The toolkit includes scripts for detecting current network state, switching configurations seamlessly, and providing user-friendly feedback. I implemented error handling and validation to ensure network changes are applied correctly without disrupting connectivity.",
      technologies: ["Batch Scripting", "Windows Command Line (CMD)", "netsh"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      icon: "🌐",
      iconColor: "#10B981"
    },
    {
      title: "Python API Integration Suite",
      hook: "A collection of Python applications that streamline data workflows by connecting disparate systems through robust API integrations and automated data processing pipelines.",
      challenge: "Organizations often struggle with data silos and manual data transfer processes between different systems. The need for real-time data synchronization and automated workflows across multiple platforms creates bottlenecks in business operations.",
      role: "I architected and developed multiple Python applications focused on API integration and data automation. This included building RESTful API clients, implementing data transformation pipelines, and creating scheduling mechanisms for automated data sync. I also incorporated error handling, logging, and monitoring to ensure reliable operation in production environments.",
      technologies: ["Python", "REST APIs", "JSON/XML Processing", "Task Scheduling"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      icon: "🐍",
      iconColor: "#F59E0B"
    },
    {
      title: "PowerShell Security Automation Framework",
      hook: "An enterprise-grade PowerShell framework that automates core security tasks, user management, and system monitoring, reducing manual administrative overhead while improving security compliance.",
      challenge: "IT administrators spend significant time on repetitive security tasks such as user provisioning, permission auditing, and system health checks. Manual processes are not only time-consuming but also prone to human error, potentially creating security vulnerabilities.",
      role: "I designed and implemented a comprehensive PowerShell automation framework that handles multiple security and administrative functions. The framework includes modules for Active Directory management, security policy enforcement, automated reporting, and system monitoring. I focused on creating reusable, modular scripts that can be easily maintained and extended.",
      technologies: ["PowerShell", "Active Directory", "Windows Security", "System Administration"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      icon: "🔒",
      iconColor: "#8B5CF6"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* Glass card container */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-16">
            <div className="pulse-chip mb-6 inline-flex">
              <span>Featured Projects</span>
            </div>
            <h2 className="section-title mb-6">Building Solutions That Matter</h2>
            <p className="section-subtitle text-center mx-auto">
              Each project represents a journey from identifying friction to engineering elegant automation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                isExpanded={expandedProject === index}
                onToggleExpanded={() => toggleExpanded(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
