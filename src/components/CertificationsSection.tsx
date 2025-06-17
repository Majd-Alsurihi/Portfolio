
import React from "react";
import { Calendar } from "lucide-react";

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
        {/* Glass card container */}
        <div className="glass-card p-8 md:p-12">
          <div className="text-center mb-16">
            <div className="pulse-chip mb-6 inline-flex">
              <span>Certifications</span>
            </div>
            <h2 className="section-title mb-6">Continuous Learning</h2>
            <p className="section-subtitle text-center mx-auto">
              Formal recognition of my commitment to staying current with emerging technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift opacity-0 animate-fade-in"
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
