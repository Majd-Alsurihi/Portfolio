
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="about">
      <div className="section-container opacity-0 animate-on-scroll relative z-10">
        <div className={`${portfolioConfig.styling.glassOpacity.sections} ${portfolioConfig.styling.glassBlur.sections} border-2 rounded-3xl shadow-2xl p-8 md:p-12`} style={{ borderColor: '#f3bf4b' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
                <span>{t('about.badge')}</span>
              </div>
              <h2 className={`text-${portfolioConfig.styling.titleSizes.sectionTitles} font-bold text-gray-900 mb-6`}>
                {t('about.title')}
              </h2>
              <p className={`text-${portfolioConfig.styling.titleSizes.subtitles} text-gray-600 leading-relaxed`}>
                {t('about.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {/* Always visible content */}
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  {t('about.intro')}
                </p>
              </div>

              {/* Expandable content */}
              <div className={cn(
                "overflow-hidden transition-all duration-500 ease-in-out",
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}>
                <div className="text-lg text-gray-700 leading-relaxed space-y-4 pt-4">
                  <p>{t('about.expanded1')}</p>
                  <p>{t('about.expanded2')}</p>
                  <p>{t('about.expanded3')}</p>
                </div>
              </div>

              {/* Read More/Less Button */}
              <button
                onClick={toggleExpanded}
                className="group inline-flex items-center space-x-2 mt-6 px-6 py-3 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                style={{ 
                  background: `linear-gradient(to right, #f3bf4b, #e6ac43)`,
                  boxShadow: `0 4px 15px rgba(243, 191, 75, 0.3)`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #e6ac43, #d4a843)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(to right, #f3bf4b, #e6ac43)';
                }}
              >
                <span className="font-medium">
                  {isExpanded ? t('about.readLess') : t('about.readMore')}
                </span>
                <span className={cn(
                  "transition-transform duration-300",
                  isExpanded ? "rotate-180" : "rotate-0"
                )}>
                  👇
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
