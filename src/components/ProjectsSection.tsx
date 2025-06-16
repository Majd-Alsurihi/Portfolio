
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProjectExpanded = (index: number) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const projects = [
    {
      title: "IoT Smart Meter: Remote Energy Management System",
      hook: "A comprehensive IoT solution that empowers users to monitor, control, and budget their electricity consumption in real-time through a dedicated mobile application.",
      challenge: "Traditional electricity meters provide no real-time data or control to the end-user, often leading to surprise bills and inefficient energy usage. The goal of my graduation project was to design and build the core hardware and firmware for a smart meter that could be controlled remotely, giving users direct power over their energy consumption.",
      role: "My primary responsibility was architecting and building the complete hardware and embedded firmware for the smart meter. This involved: Hardware Design & Integration using ESP32 microcontroller, interfacing high-power relay and voltage/current sensors. Firmware Development writing complete firmware from ground up in C++/Arduino including low-level sensor reading code. Control & Logic implementing relay control for safely connecting/disconnecting electricity supply. Connectivity & API Endpoint programming ESP32 for Wi-Fi connectivity and server communication, developing device-side API for mobile app integration.",
      technologies: ["C++/Arduino", "ESP32 Wi-Fi Module", "Voltage & Current Sensors", "Relay Module", "IoT"],
      githubUrl: "#",
      icon: "⚡",
      iconColor: "#f59e0b"
    },
    {
      title: "YouTube to Notion: Automated Learning Pipeline",
      hook: "An automated data pipeline that transforms scattered YouTube watch history into a structured, searchable knowledge base within Notion.",
      challenge: "My daily YouTube usage serves as a form of 'passive research,' but this data was ephemeral—trapped within Google's ecosystem. The goal was to build a system to automatically capture and organize this learning.",
      role: "As the sole architect, I designed an end-to-end data solution involving extracting data from Google Takeout, enriching it with the YouTube Data API, transforming it to match a Notion schema, and loading it via the Notion API.",
      technologies: ["Python", "YouTube Data API", "Notion API", "JSON"],
      githubUrl: "https://github.com/Majd-Alsurihi/YouTube-History-Notion-Uploader",
      icon: "📺",
      iconColor: "#dc2626"
    },
    {
      title: "Network Admin Toolkit: One-Click Context Switching",
      hook: "A suite of administrative Batch scripts that automates the tedious process of switching between static and dynamic network configurations, reducing a multi-step manual task to a single click.",
      challenge: "My daily routine involved moving between my home lab (static IP) and university (DHCP). Manually reconfiguring the network adapter multiple times a day was inefficient.",
      role: "I developed a toolkit of specialized Batch scripts using the Windows netsh utility to instantly set a static IP configuration or revert the adapter back to DHCP, and added diagnostic utilities for quick info display.",
      technologies: ["Batch Scripting", "Windows Command Line (CMD)", "netsh"],
      githubUrl: "https://github.com/Majd-Alsurihi/Network-Admin-Toolkit",
      icon: "🌐",
      iconColor: "#059669"
    },
    {
      title: "LinkLighter: A UX Tool for Navigational Clarity",
      hook: "A lightweight Chrome extension that instantly highlights every interactive element on a webpage, helping users navigate confusing layouts and deceptive ad-heavy sites with confidence.",
      challenge: "Websites cluttered with advertisements make it difficult to find the true download or action link. The goal was to create a simple tool to cut through this noise.",
      role: "I developed the extension using JavaScript to traverse the DOM, CSS to apply a high-contrast outline to clickable elements, and packaged it with a manifest.json file for Chrome.",
      technologies: ["JavaScript", "CSS", "HTML", "Chrome Extension APIs"],
      githubUrl: "https://github.com/Majd-Alsurihi/LinkLighter",
      icon: "💡",
      iconColor: "#7c3aed"
    },
    {
      title: "PowerShell Admin Suite: Secure & Efficient System Management",
      hook: "A collection of interactive PowerShell scripts that empower administrators to manage critical Windows security settings—like the Firewall and Execution Policies—safely and instantly.",
      challenge: "Managing core Windows security settings often involves navigating complex GUIs or remembering verbose commands. The goal was to build user-friendly tools to streamline these tasks.",
      role: "I developed interactive scripts with clear menus, input validation, and automatic privilege requests for changing the Windows Firewall and PowerShell Execution Policies safely.",
      technologies: ["PowerShell", "Windows Security Policies"],
      githubUrl: "https://github.com/Majd-Alsurihi/PowerShell-Execution-Policy-Changer",
      icon: "🔧",
      iconColor: "#0ea5e9"
    },
    {
      title: "Interactive URL Collector: A Data Validation Tool",
      hook: "A user-friendly Python script designed for the rapid and accurate collection of YouTube URLs, featuring robust real-time validation and intelligent sorting for clean data acquisition.",
      challenge: "Manually compiling lists of URLs is prone to errors, duplicates, and invalid links. The goal was to build an interactive tool that cleans the data at the point of entry.",
      role: "I built a tool that accepts batch-pasted text and uses a regular expression to validate and sort URLs into separate files for standard videos and Shorts, providing a clear feedback loop to the user.",
      technologies: ["Python", "Regular Expressions (RegEx)", "File I/O"],
      githubUrl: "https://github.com/Majd-Alsurihi/YouTube-URL-Collector",
      icon: "🔗",
      iconColor: "#ea580c"
    },
    {
      title: "Windows 11 Context Menu Toggle: A Usability Enhancement",
      hook: "A simple yet powerful pair of registry scripts that restores the classic, full-featured Windows 10 context menu in Windows 11, designed to improve workflow efficiency.",
      challenge: "The new Windows 11 context menu disrupted workflow for myself and many colleagues. The goal was to create a safe, reliable, and easily shareable solution.",
      role: "I identified the specific registry key controlling the menu's behavior and authored two .reg files: one to enable the classic menu and a second, crucial one to safely revert the change.",
      technologies: ["Windows Registry Editor (Regedit)", ".reg file scripting"],
      githubUrl: "https://github.com/Majd-Alsurihi/Windows11-ContextMenu-Switcher",
      icon: "⚙️",
      iconColor: "#be123c"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-16">
          <div className="pulse-chip mb-6 inline-flex">
            <span>Featured Projects</span>
          </div>
          <h2 className="section-title mb-6">Automation & System Solutions</h2>
          <p className="section-subtitle">
            Seven case studies showcasing my approach to solving real-world problems through automation and intelligent system design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              isExpanded={expandedProjects.has(index)}
              onToggleExpanded={() => toggleProjectExpanded(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
