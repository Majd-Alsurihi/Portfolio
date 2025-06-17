
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* Glass card container */}
        <div className="glass-card p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="pulse-chip mb-6 inline-flex">
              <span>Let's Connect</span>
            </div>
            
            <h2 className="section-title mb-6">Ready to Build Something Amazing?</h2>
            
            <p className="section-subtitle mb-12">
              I'm always excited to discuss new opportunities, collaborate on automation projects, 
              or share knowledge about IoT and system administration. Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="https://github.com/Majd-Alsurihi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
              
              <a
                href="https://linkedin.com/in/majd-alsurihi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              
              <a
                href="mailto:contact@majd-alsurihi.com"
                className="flex items-center gap-3 px-6 py-3 bg-pulse-500 text-white rounded-full hover:bg-pulse-600 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
