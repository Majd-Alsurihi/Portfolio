
export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Majd Alsurihi",
    title: "IoT Engineer",
    subtitle: "Systems Administration & Automation | Mentorship",
    description: "Transforming repetitive processes into intelligent, automated solutions. From hardware to user experience, I engineer smoother paths forward.",
    image: "/lovable-uploads/c22ca5a2-e88c-4676-ac18-9a0c5e969b1c.png",
    logo: "/lovable-uploads/6998ba68-2ae7-43a0-b2ac-26b222df2aa3.png"
  },

  // Social Links
  social: {
    github: "https://github.com/Majd-Alsurihi",
    linkedin: "https://linkedin.com/in/majd-alsurihi",
    email: "#contact"
  },

  // Navigation Items
  navigation: [
    { name: "Home", href: "#", id: "home" },
    { name: "Skills", href: "#tech-stack", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" }
  ],

  // Technologies/Skills
  technologies: [
    { name: "Python", icon: "/Icons/python.svg" },
    { name: "C/C++", icon: "/Icons/c.svg" },
    { name: "Arduino", icon: "/Icons/arduino.svg" },
    { name: "ESP32", icon: "/Icons/Espressif_Standard_Logo_EN_Vertical.svg" },
    { name: "Raspberry Pi", icon: "/Icons/raspberry-pi.svg" },
    { name: "PowerShell", icon: "/Icons/powershell.svg" },
    { name: "Bash", icon: "/Icons/bash.svg" },
    { name: "Docker", icon: "/Icons/docker-mark-blue.svg" },
    { name: "AWS", icon: "/Icons/Amazon_Web_Services_Logo.svg" },
    { name: "Node-RED", icon: "/Icons/node-red-hexagon.svg" },
    { name: "MQTT", icon: "/Icons/mqtt-icon-transparent.svg" },
    { name: "GitHub", icon: "/Icons/github-mark.svg" }
  ],

  // Projects Data
  projects: [
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
  ],

  // Certifications (you can add more here)
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "/path/to/aws-cert-logo.png"
    }
    // Add more certifications here
  ],

  // Styling Configuration
  styling: {
    // Font sizes (in rem units)
    titleSizes: {
      mainName: "7xl", // Your main name
      sectionTitles: "3xl", // About Me, Featured Projects, etc.
      badges: "lg", // IoT Engineer badge, section badges
      subtitles: "xl", // Secondary text
      cardTitles: "lg", // Project card titles
      bodyText: "base" // Regular paragraph text
    },
    
    // Glass effect blur levels - All sections now have consistent blur
    glassBlur: {
      hero: "backdrop-blur-md", // Hero section
      sections: "backdrop-blur-md", // Other sections - matches hero
      cards: "backdrop-blur-md", // Individual cards - matches hero
      projects: "backdrop-blur-md", // Project cards - matches hero
      techstackslider: "backdrop-blur-md", // Tech stack slider - matches hero
    },

    // Colors and opacity - Standardized to visible levels
    glassOpacity: {
      hero: "bg-white/20", // More visible opacity for hero
      sections: "bg-white/20", // Same opacity for sections
      cards: "bg-white/20" // Same opacity for cards
    }
  }
};
