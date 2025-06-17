
import React from "react";

const AboutSection = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="section-container opacity-0 animate-on-scroll">
        {/* More blurry glass card container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="pulse-chip mb-6 inline-flex">
                <span>About Me</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Driven by Automation</h2>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
                I believe in the power of technology to eliminate friction and create seamless experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What Drives Me</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every manual process is an opportunity for automation. I find deep satisfaction in 
                    transforming repetitive tasks into intelligent, self-running systems that free people 
                    to focus on what truly matters.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I don't just write code—I engineer solutions. From understanding the problem space 
                    to designing scalable architectures, my focus is always on creating systems that 
                    are both powerful and maintainable.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beyond Technical Skills</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Technology is most powerful when it serves people. I bring a human-centered approach 
                    to every project, ensuring that automated solutions enhance rather than complicate 
                    the user experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The tech landscape evolves rapidly, and so do I. Whether it's mastering new 
                    programming languages, exploring emerging IoT protocols, or diving into cloud 
                    architectures, I'm always expanding my toolkit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
