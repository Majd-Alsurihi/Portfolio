
import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 relative" id="contact">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/10 backdrop-blur-2xl border-2 border-orange-200/30 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>Let's Connect</span>
            </div>
            
            <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} font-bold text-gray-900 mb-6`}>
              Ready to Build Something Amazing?
            </h2>
            
            <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-600 text-center mb-12 max-w-3xl mx-auto`}>
              I'm always excited to discuss new opportunities, collaborate on automation projects, 
              or share knowledge about IoT and system administration. Let's connect!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
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
                className="flex items-center gap-3 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>Email Me</span>
              </a>

              <a
                href="tel:+9677623322"
                className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>+967 7623322</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
