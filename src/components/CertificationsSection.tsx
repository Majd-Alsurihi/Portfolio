
import React from "react";
import { Calendar } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Introduction to IoT",
      issuer: "Cisco Networking Academy",
      date: "June 10, 2025",
      logo: "/lovable-uploads/255dcfbe-5ada-4a1c-a371-f960feaed69d.png"
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan on Coursera",
      date: "June 2, 2025",
      logo: "/lovable-uploads/b237f08a-b8cd-4179-acae-4551153239d6.png"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan on Coursera",
      date: "June 4, 2025",
      logo: "/lovable-uploads/b237f08a-b8cd-4179-acae-4551153239d6.png"
    }
  ];

  return (
    <section className="py-20 relative" id="certifications">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/3 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-16">
            <div className={`pulse-chip mb-6 inline-flex text-${portfolioConfig.styling.titleSizes.badges}`}>
              <span>Certifications</span>
            </div>
            <h2 className={`font-bold text-gray-900 mb-6 text-${portfolioConfig.styling.titleSizes.sectionTitles}`}>
              Continuous Learning
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 text-center mx-auto max-w-3xl">
              Formal recognition of my commitment to staying current with emerging technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} Logo`}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{cert.title}</h3>
                
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
