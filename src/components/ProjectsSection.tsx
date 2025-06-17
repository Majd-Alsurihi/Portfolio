
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
      iconPath: "/Icons/mqtt-icon-transparent.svg",
      iconColor: "#660066"
    },
    {
      title: "Network Admin Toolkit: One-Click Context Switching",
      hook: "A suite of administrative Batch scripts that automates the tedious process of switching between static and dynamic network configurations, reducing a multi-step manual task to a single click.",
      challenge: "Network administrators and users frequently need to switch between different network configurations (static vs dynamic IP) for various environments. This typically involves multiple manual steps through Windows network settings, which is time-consuming and error-prone.",
      role: "I developed a complete automation solution using Batch scripting and Windows Command Line tools. The toolkit includes scripts for detecting current network state, switching configurations seamlessly, and providing user-friendly feedback. I implemented error handling and validation to ensure network changes are applied correctly without disrupting connectivity.",
      technologies: ["Batch Scripting", "Windows Command Line (CMD)", "netsh"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/bash.svg",
      iconColor: "#4EAA25"
    },
    {
      title: "Python API Integration Suite",
      hook: "A collection of Python applications that streamline data workflows by connecting disparate systems through robust API integrations and automated data processing pipelines.",
      challenge: "Organizations often struggle with data silos and manual data transfer processes between different systems. The need for real-time data synchronization and automated workflows across multiple platforms creates bottlenecks in business operations.",
      role: "I architected and developed multiple Python applications focused on API integration and data automation. This included building RESTful API clients, implementing data transformation pipelines, and creating scheduling mechanisms for automated data sync. I also incorporated error handling, logging, and monitoring to ensure reliable operation in production environments.",
      technologies: ["Python", "REST APIs", "JSON/XML Processing", "Task Scheduling"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/python.svg",
      iconColor: "#3776AB"
    },
    {
      title: "PowerShell Security Automation Framework",
      hook: "An enterprise-grade PowerShell framework that automates core security tasks, user management, and system monitoring, reducing manual administrative overhead while improving security compliance.",
      challenge: "IT administrators spend significant time on repetitive security tasks such as user provisioning, permission auditing, and system health checks. Manual processes are not only time-consuming but also prone to human error, potentially creating security vulnerabilities.",
      role: "I designed and implemented a comprehensive PowerShell automation framework that handles multiple security and administrative functions. The framework includes modules for Active Directory management, security policy enforcement, automated reporting, and system monitoring. I focused on creating reusable, modular scripts that can be easily maintained and extended.",
      technologies: ["PowerShell", "Active Directory", "Windows Security", "System Administration"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/powershell.svg",
      iconColor: "#5391FE"
    },
    {
      title: "C Programming: System-Level Solutions",
      hook: "Low-level C programming projects focused on system optimization, embedded systems programming, and performance-critical applications that require direct hardware interaction.",
      challenge: "Modern software often abstracts away from hardware details, but certain applications require direct system-level programming for optimal performance, memory management, and real-time processing capabilities.",
      role: "I developed various C programming projects including embedded system firmware, system utilities, and performance optimization tools. My work involved direct memory management, hardware interfacing, and creating efficient algorithms for resource-constrained environments. I focused on writing clean, maintainable C code while maximizing performance and minimizing resource usage.",
      technologies: ["C Programming", "System Programming", "Embedded Systems", "Memory Management"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/c.svg",
      iconColor: "#5C8DBC"
    },
    {
      title: "Docker Containerization & Orchestration",
      hook: "Comprehensive Docker-based solutions for application containerization, deployment automation, and scalable microservices architecture implementation.",
      challenge: "Traditional deployment methods often lead to environment inconsistencies, scaling difficulties, and complex dependency management. Organizations need reliable, portable, and scalable deployment solutions.",
      role: "I designed and implemented containerization strategies using Docker, creating efficient Dockerfiles, managing multi-container applications with Docker Compose, and implementing CI/CD pipelines. My work included optimizing container images for size and security, setting up container orchestration, and ensuring seamless deployment across different environments.",
      technologies: ["Docker", "Docker Compose", "Container Orchestration", "DevOps"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/docker-mark-blue.svg",
      iconColor: "#1D63ED"
    },
    {
      title: "GitHub Portfolio & Version Control Mastery",
      hook: "A comprehensive showcase of software development projects demonstrating advanced Git workflows, collaborative development practices, and professional code organization.",
      challenge: "Effective version control and project organization are crucial for professional software development, team collaboration, and maintaining clean, traceable code history across multiple projects and contributors.",
      role: "I established and maintained professional GitHub repositories with clear documentation, comprehensive README files, and organized project structures. My work includes implementing advanced Git workflows, managing branch strategies, conducting code reviews, and creating detailed commit histories that facilitate collaboration and project maintenance.",
      technologies: ["Git", "GitHub", "Version Control", "Documentation", "Collaboration"],
      githubUrl: "https://github.com/Majd-Alsurihi",
      iconPath: "/Icons/github-mark.svg",
      iconColor: "#24292F"
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <div className="pulse-chip mb-6 inline-flex">
              <span>Featured Projects</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Building Solutions That Matter</h2>
            <p className="text-xl sm:text-2xl text-gray-600 text-center mx-auto max-w-3xl">
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
