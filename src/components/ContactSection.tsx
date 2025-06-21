
import React from "react";
import { portfolioConfig } from "@/config/portfolio";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 relative" id="contact">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className={`${portfolioConfig.styling.glassBlur.sections} p-8 md:p-12`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>{t('contact.badge')}</span>
            </div>
            
            <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} font-bold text-gray-900 mb-6`}>
              {t('contact.title')}
            </h2>
            
            <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-600 text-center mb-12 max-w-3xl mx-auto`}>
              {t('contact.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
              <a
                href="https://github.com/Majd-Alsurihi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>{t('contact.github')}</span>
              </a>
              
              <a
                href="https://linkedin.com/in/majd-alsurihi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-5 h-5" />
                <span>{t('contact.linkedin')}</span>
              </a>
              
              <a
                href="mailto:majd.g.alsurihi@gmail.com"
                className="flex items-center gap-3 px-6 py-3 text-white rounded-full transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#f3bf4b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#d4a843';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3bf4b';
                }}
              >
                <Mail className="w-5 h-5" />
                <span>{t('contact.email')}</span>
              </a>

              <a
                href="tel:+967776723322"
                className="flex items-center gap-3 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>+967 776723322</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
