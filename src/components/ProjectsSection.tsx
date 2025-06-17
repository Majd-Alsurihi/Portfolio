
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
      technologies: ["C++/Arduino", "ESP32", "Wi-Fi Module", "Voltage & Current Sensors", "Relay Module"],
      githubUrl: "https://github.com/Majd-Alsurihi"
    },
    {
      title: "YouTube to Notion: Automated Learning Pipeline",
      hook: "An automated data pipeline that transforms scattered YouTube watch history into a structured, searchable knowledge base within Notion.",
      challenge: "My daily YouTube usage serves as a form of 'passive research,' but this data was ephemeral—trapped within Google's ecosystem. The goal was to build a system to automatically capture and organize this learning.",
      role: "As the sole architect, I designed an end-to-end data solution involving extracting data from Google Takeout, enriching it with the YouTube Data API, transforming it to match a Notion schema, and loading it via the Notion API.",
      technologies: ["Python", "YouTube Data API", "Notion API", "JSON"],
      githubUrl: "https://github.com/Majd-Alsurihi/YouTube-History-Notion-Uploader"
    },
    {
      title: "Network Admin Toolkit: One-Click Context Switching",
      hook: "A suite of administrative Batch scripts that automates the tedious process of switching between static and dynamic network configurations, reducing a multi-step manual task to a single click.",
      challenge: "My daily routine involved moving between my home lab (static IP) and university (DHCP). Manually reconfiguring the network adapter multiple times a day was inefficient.",
      role: "I developed a toolkit of specialized Batch scripts using the Windows netsh utility to instantly set a static IP configuration or revert the adapter back to DHCP, and added diagnostic utilities for quick info display.",
      technologies: ["Batch Scripting", "Windows CMD", "netsh"],
      githubUrl: "https://github.com/Majd-Alsurihi/Network-Admin-Toolkit"
    },
    {
      title: "LinkLighter: A UX Tool for Navigational Clarity",
      hook: "A lightweight Chrome extension that instantly highlights every interactive element on a webpage, helping users navigate confusing layouts and deceptive ad-heavy sites with confidence.",
      challenge: "Websites cluttered with advertisements make it difficult to find the true download or action link. The goal was to create a simple tool to cut through this noise.",
      role: "I developed the extension using JavaScript to traverse the DOM, CSS to apply a high-contrast outline to clickable elements, and packaged it with a manifest.json file for Chrome.",
      technologies: ["JavaScript", "CSS", "HTML", "Chrome Extension APIs"],
      githubUrl: "https://github.com/Majd-Alsurihi/LinkLighter"
    },
    {
      title: "PowerShell Admin Suite: Secure & Efficient System Management",
      hook: "A collection of interactive PowerShell scripts that empower administrators to manage critical Windows security settings—like the Firewall and Execution Policies—safely and instantly.",
      challenge: "Managing core Windows security settings often involves navigating complex GUIs or remembering verbose commands. The goal was to build user-friendly tools to streamline these tasks.",
      role: "I developed interactive scripts with clear menus, input validation, and automatic privilege requests for changing the Windows Firewall and PowerShell Execution Policies safely.",
      technologies: ["PowerShell", "Windows Security Policies"],
      githubUrl: "https://github.com/Majd-Alsurihi/PowerShell-Execution-Policy-Changer"
    },
    {
      title: "Interactive URL Collector: A Data Validation Tool",
      hook: "A user-friendly Python script designed for the rapid and accurate collection of YouTube URLs, featuring robust real-time validation and intelligent sorting for clean data acquisition.",
      challenge: "Manually compiling lists of URLs is prone to errors, duplicates, and invalid links. The goal was to build an interactive tool that cleans the data at the point of entry.",
      role: "I built a tool that accepts batch-pasted text and uses a regular expression to validate and sort URLs into separate files for standard videos and Shorts, providing a clear feedback loop to the user.",
      technologies: ["Python", "Regular Expressions", "File I/O"],
      githubUrl: "https://github.com/Majd-Alsurihi/YouTube-URL-Collector"
    },
    {
      title: "Windows 11 Context Menu Toggle: A Usability Enhancement",
      hook: "A simple yet powerful pair of registry scripts that restores the classic, full-featured Windows 10 context menu in Windows 11, designed to improve workflow efficiency.",
      challenge: "The new Windows 11 context menu disrupted workflow for myself and many colleagues. The goal was to create a safe, reliable, and easily shareable solution.",
      role: "I identified the specific registry key controlling the menu's behavior and authored two .reg files: one to enable the classic menu and a second, crucial one to safely revert the change.",
      technologies: ["Windows Registry", ".reg scripting"],
      githubUrl: "https://github.com/Majd-Alsurihi/Windows11-ContextMenu-Switcher"
    },
    {
      title: "Process Terminator: System Management Utility",
      hook: "A powerful system administration tool for safely terminating processes and managing system resources.",
      challenge: "System administrators often need quick and reliable ways to manage running processes without navigating through complex system interfaces.",
      role: "I developed a streamlined utility that provides administrators with safe and efficient process management capabilities.",
      technologies: ["PowerShell", "Windows System APIs"],
      githubUrl: "https://github.com/Majd-Alsurihi/ProcessTerminator"
    },
    {
      title: "Folder Structure Generator: Development Workflow Tool",
      hook: "An automated tool that generates consistent project folder structures, streamlining development workflow and maintaining organization standards.",
      challenge: "Creating consistent project structures manually is time-consuming and prone to inconsistencies across different projects.",
      role: "I built an automation tool that generates standardized folder structures based on project type and requirements.",
      technologies: ["Python", "File System APIs"],
      githubUrl: "https://github.com/Majd-Alsurihi/Folder-Structure-Generator"
    },
    {
      title: "Bing Wallpaper Saver: Automated Media Collection",
      hook: "An automated tool that downloads and organizes Bing's daily wallpapers, creating a curated collection of high-quality images.",
      challenge: "Manually saving daily wallpapers from Bing is repetitive and easy to forget, leading to missed opportunities to collect beautiful images.",
      role: "I developed an automated solution that fetches, downloads, and organizes Bing's daily wallpapers with proper metadata and organization.",
      technologies: ["Python", "Web APIs", "Image Processing"],
      githubUrl: "https://github.com/Majd-Alsurihi/Bing-Wallpaper-Saver"
    }
  ];

  const toggleProjectExpansion = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section className="py-20 relative" id="projects">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/2 backdrop-blur-3xl border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <div className="pulse-chip mb-6 inline-flex text-3xl">
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
